import json
import os
import re
from openai import OpenAI
import faiss
import numpy as np
from sentence_transformers import SentenceTransformer

class SnakeRAGGenerator:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key, base_url="https://api.deepseek.com")
        self.knowledge_base = self._load_knowledge_base()
        self.prompt_template = """
        说明：请严格基于提供的上下文信息回答问题。不要编造不存在的信息。
        
        你是蛇信息助理专家。给定一个蛇的物种名称，返回一个结构良好、简洁的标记格式的解释，包括以下部分：
        1. 🐍**已确定的物种及其共同名称**
        2. ☠️**是否有毒**（是/否+危险级别）
        3. 📍**分布区域与生境**
        4. 🧠**简要行为总结**（1-2行）
        5. ⚠️**安全提示**（项目列表，最多4点）
        6. 🚑**咬伤急救**（4-5小步）
        
        上下文信息：
        {context}
        
        请根据以上上下文回答关于蛇种 {species_name} 的问题：
        """
        # 初始化句子嵌入模型
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
        # 初始化向量数据库
        self.index, self.id_to_data = self._build_vector_index()

    def _load_knowledge_base(self):
        """加载本地蛇类知识库"""
        try:
            base_dir = os.path.dirname(os.path.abspath(__file__))
            json_path = os.path.join(base_dir, 'package.json')

            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                # 创建学名和中文名的映射
                knowledge = {}
                for item in data:
                    # 标准化学名：移除多余空格，统一大小写
                    sci_name = re.sub(r'\s+', ' ', item['scientific_name']).strip().lower()
                    knowledge[sci_name] = item

                    # 添加中文名映射
                    cn_name = item['chinese_name'].strip()
                    knowledge[cn_name] = item
                return knowledge
        except Exception as e:
            print(f"加载知识库失败: {e}")
            return {}

    def _build_vector_index(self):
        """构建向量数据库"""
        index = faiss.IndexFlatL2(self.embedder.get_sentence_embedding_dimension())
        id_to_data = {}
        embeddings = []
        for name, data in self.knowledge_base.items():
            # 将蛇的学名和中文名组合作为向量化的文本
            text = f"{name} {data.get('chinese_name', '')}"
            embedding = self.embedder.encode(text)
            embeddings.append(embedding)
            id_to_data[len(id_to_data)] = data
        embeddings = np.array(embeddings).astype('float32')
        index.add(embeddings)
        return index, id_to_data

    def _retrieve_context(self, species_name):
        """从向量数据库中检索相关信息"""
        # 将查询的蛇种名称向量化
        query_text = species_name
        query_embedding = self.embedder.encode(query_text)
        query_embedding = np.array([query_embedding]).astype('float32')
        # 在向量数据库中检索最相关的内容片段
        _, indices = self.index.search(query_embedding, 1)
        index = indices[0][0]
        snake_data = self.id_to_data.get(index)
        if snake_data:
            return self._format_context(snake_data)
        return "没有找到该蛇种的相关信息"

    def _format_context(self, snake_data):
        """格式化检索到的上下文信息"""
        context = f"""
        **学名**: {snake_data.get('scientific_name', '未知')}
        **中文名**: {snake_data.get('chinese_name', '未知')}
        **毒性**: {snake_data.get('toxicity', '未知')}
        **危险级别**: {snake_data.get('danger_level', '未知')}
        **分布**: {snake_data.get('distribution', '未知')}
        **栖息地**: {snake_data.get('habitat', '未知')}
        **行为**: {snake_data.get('behavior', '未知')}
        """

        if 'other_info' in snake_data and snake_data['other_info']:
            context += "\n**其他信息**:\n- " + "\n- ".join(snake_data['other_info'])

        return context

    def get_snake_info(self, species_name):
        """使用RAG获取蛇类信息"""
        # 1. 检索上下文
        context = self._retrieve_context(species_name)
        # 2. 增强：将检索到的内容与原始问题拼接
        prompt = self.prompt_template.format(
            context=context,
            species_name=species_name
        )
        # 3. 生成：LLM基于增强后的prompt生成最终回答
        try:
            response = self.client.chat.completions.create(
                model="deepseek-chat",
                messages=[
                    {
                        "role": "system",
                        "content": "你是一个蛇类信息专家，严格基于提供的上下文回答问题。"
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],
                temperature=0.3,  # 降低随机性
                max_tokens=500,
                stream=False
            )
            return response.choices[0].message.content
        except Exception as e:
            print(f"API调用错误: {e}")
            return f"# 错误\n无法获取{species_name}的信息，请稍后再试。"
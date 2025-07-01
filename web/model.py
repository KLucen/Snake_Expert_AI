import torch
import torch.nn as nn
from torchvision import transforms
from PIL import Image
import pandas as pd
import os
from rag_helper import SnakeRAGGenerator

# 设置设备
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# 加载类别映射
csv_combine = pd.read_csv("../data/Csv/train_china.csv")
class_id = {}
for i, cl in enumerate(csv_combine.class_id.unique()):
    class_id[cl] = i

# 创建反向映射
reverse_class_id = {v: k for k, v in class_id.items()}
class_id_to_species = csv_combine.set_index('class_id')['binomial'].to_dict()

# 添加全局变量表示类别数量
num_classes = len(class_id)

# 图像尺寸
image_dim = 418

# 初始化RAG助手
snake_info_generator = SnakeRAGGenerator(api_key="sk-8dbe0378ce434a538d94bc8ce0e9fedb")

# 加载模型
def load_model():
    model = torch.hub.load('NVIDIA/DeepLearningExamples:torchhub',
                           'nvidia_efficientnet_widese_b4',
                           pretrained=True)
    model.classifier.fc = nn.Linear(model.classifier.fc.in_features, num_classes)

    state_dict = torch.load('../data/model/model_snakes.pt',
                            map_location=device,
                            weights_only=True)

    new_state_dict = {}
    for k, v in state_dict.items():
        name = k[7:] if k.startswith('module.') else k
        new_state_dict[name] = v

    model.load_state_dict(new_state_dict)
    model = model.to(device)
    model.eval()
    return model

model = load_model()

# 图片预处理函数
def preprocess_image(image_path):
    image = Image.open(image_path)
    transform = transforms.Compose([
        transforms.ToTensor(),
        transforms.Resize(size=(image_dim, image_dim)),
        transforms.Normalize((0.4718, 0.4429, 0.3738), (0.2519, 0.2388, 0.2393))
    ])
    image_tensor = transform(image).unsqueeze(0).to(device)
    return image_tensor

# 预测函数（返回多个结果）
def predict_species(image_path):
    input_tensor = preprocess_image(image_path)

    with torch.no_grad():
        outputs = model(input_tensor)
        probabilities = torch.nn.functional.softmax(outputs, dim=1)

        # 获取前两个最高置信度的预测结果
        top2_conf, top2_idx = torch.topk(probabilities, 2, dim=1)
        top2_conf = top2_conf.squeeze().tolist()
        top2_idx = top2_idx.squeeze().tolist()

    # 处理预测结果
    results = []
    for i in range(len(top2_idx)):
        pred_idx = top2_idx[i]
        confidence = top2_conf[i]
        original_class_id = reverse_class_id[pred_idx]
        species_name = class_id_to_species[original_class_id]

        # 获取蛇的详细信息
        snake_info = snake_info_generator.get_snake_info(species_name)

        results.append({
            "species": species_name,
            "confidence": confidence,
            "class_id": original_class_id,
            "snake_info": snake_info
        })

    # 如果最高置信度 >= 90%，只返回第一个结果
    if top2_conf[0] >= 0.9:
        return [results[0]]

    # 否则返回前两个结果
    return results
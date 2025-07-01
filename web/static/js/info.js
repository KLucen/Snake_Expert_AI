// 语言包
const translations = {
    zh: {
        "logo": "蛇类识别系统",
        "home": "首页",
        "about": "关于",
        "handbook": "蛇类百科",
        "page-title": "蛇类识别系统技术详情",
        "page-subtitle": "深入了解蛇类识别系统背后的技术原理和实现细节。",
        "architecture-title": "技术架构",
        "architecture-p1": "蛇类识别系统基于深度学习和人工智能技术构建，主要由前端展示、后端服务和模型推理三部分组成。",
        "frontend": "前端展示",
        "frontend-desc": "使用 HTML、CSS 和 JavaScript 构建用户界面，提供友好的交互体验，支持图片上传、拖放和预览功能。",
        "backend": "后端服务",
        "backend-desc": "采用 Flask 框架搭建，负责处理用户请求、文件上传和调用模型进行预测，并将结果返回给前端展示。",
        "model": "模型推理",
        "model-desc": "使用 PyTorch 深度学习框架加载预训练的 EfficientNet-WideSE-B4 模型，对上传的蛇类图片进行分类识别，并计算识别置信度。",
        "data-title": "数据处理",
        "data-p1": "系统使用了大量的蛇类图片数据进行训练和验证，数据来源广泛，包括公开数据集和爬虫收集的图片。",
        "annotation": "数据标注",
        "annotation-desc": "对图片进行标注，确定每条蛇的物种名称和类别 ID，以便模型学习和识别。",
        "preprocessing": "数据预处理",
        "preprocessing-desc": "在训练前，对图片进行预处理，包括调整尺寸、归一化等操作，以提高模型的训练效果。",
        "augmentation": "数据增强",
        "augmentation-desc": "采用数据增强技术，如随机裁剪、翻转、旋转等，扩充数据集，提高模型的泛化能力。",
        "training-title": "模型训练",
        "training-p1": "系统使用预训练的 EfficientNet-WideSE-B4 模型作为基础模型，并在蛇类数据集上进行微调。",
        "structure": "模型结构",
        "structure-desc": "EfficientNet-WideSE-B4 是一种高效的卷积神经网络，具有强大的特征提取能力和较高的准确率。",
        "process": "训练过程",
        "process-desc": "使用交叉熵损失函数和随机梯度下降优化器进行训练，通过不断调整模型参数，提高模型的识别准确率。",
        "evaluation": "模型评估",
        "evaluation-desc": "使用验证集对模型进行评估，计算准确率、召回率、F1 值等指标，评估模型的性能。",
        "info-title": "信息生成",
        "info-p1": "系统使用 DeepSeek AI 生成蛇类的详细信息，包括物种名称、是否有毒、区域与生境、行为总结、安全提示和咬伤急救等内容。",
        "api": "API 调用",
        "api-desc": "通过 OpenAI 接口调用 DeepSeek AI 模型，输入蛇的物种名称，获取详细信息。",
        "processing": "信息处理",
        "processing-desc": "将返回的 Markdown 格式信息转换为 HTML 格式，以便在网页上展示。",
        "footer-desc": "基于深度学习和人工智能的专业蛇类识别工具，帮助您快速识别蛇类并提供安全信息。",
        "quick-links": "快速链接",
        "first-aid": "急救指南",
        "about-us": "关于我们",
        "contact": "联系我",
        "university": "中国传媒大学",
        "copyright": "&copy; 2025 蛇类识别系统 | 基于PyTorch和Flask构建 | 问答内容由DeepSeek AI提供"
    },
    en: {
        "logo": "Snake Identification System",
        "home": "Home",
        "about": "About",
        "handbook": "Snake Encyclopedia",
        "page-title": "Technical Details of Snake Identification System",
        "page-subtitle": "Learn about the technical principles and implementation details behind the Snake Identification System.",
        "architecture-title": "Technical Architecture",
        "architecture-p1": "The Snake Identification System is built on deep learning and AI technologies, consisting of three main components: frontend display, backend services, and model inference.",
        "frontend": "Frontend Display",
        "frontend-desc": "Built with HTML, CSS, and JavaScript to provide a user-friendly interface that supports image uploading, drag-and-drop, and preview features.",
        "backend": "Backend Services",
        "backend-desc": "Implemented using the Flask framework to handle user requests, file uploads, and model predictions, then returning results to the frontend.",
        "model": "Model Inference",
        "model-desc": "Utilizes PyTorch deep learning framework to load a pre-trained EfficientNet-WideSE-B4 model for classifying snake images and calculating confidence scores.",
        "data-title": "Data Processing",
        "data-p1": "The system uses a large dataset of snake images for training and validation, collected from public datasets and web crawling.",
        "annotation": "Data Annotation",
        "annotation-desc": "Images are labeled with species names and class IDs to enable model learning and identification.",
        "preprocessing": "Data Preprocessing",
        "preprocessing-desc": "Images are preprocessed before training, including resizing and normalization, to improve model training effectiveness.",
        "augmentation": "Data Augmentation",
        "augmentation-desc": "Techniques like random cropping, flipping, and rotation are applied to expand the dataset and improve model generalization.",
        "training-title": "Model Training",
        "training-p1": "The system uses a pre-trained EfficientNet-WideSE-B4 model as the base and fine-tunes it on the snake dataset.",
        "structure": "Model Structure",
        "structure-desc": "EfficientNet-WideSE-B4 is an efficient convolutional neural network with strong feature extraction capabilities and high accuracy.",
        "process": "Training Process",
        "process-desc": "Trained using cross-entropy loss and stochastic gradient descent optimizer to improve recognition accuracy by adjusting model parameters.",
        "evaluation": "Model Evaluation",
        "evaluation-desc": "Models are evaluated using validation sets, calculating metrics like accuracy, recall, and F1-score to assess performance.",
        "info-title": "Information Generation",
        "info-p1": "The system uses DeepSeek AI to generate detailed snake information including species name, toxicity, habitat, behavior summary, safety tips, and first aid for bites.",
        "api": "API Integration",
        "api-desc": "Calls the DeepSeek AI model through the OpenAI API, inputting snake species names to obtain detailed information.",
        "processing": "Information Processing",
        "processing-desc": "Converts returned Markdown-formatted information into HTML format for display on the web page.",
        "footer-desc": "A professional snake identification tool based on deep learning and AI, helping you quickly identify snakes and provide safety information.",
        "quick-links": "Quick Links",
        "first-aid": "First Aid Guide",
        "about-us": "About Us",
        "contact": "Contact Me",
        "university": "Communication University of China",
        "copyright": " 2025 Snake Identification System | Built with PyTorch & Flask | Output provided by DeepSeek AI"
    }
};

// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 设置默认语言
    let currentLang = localStorage.getItem('language') || 'zh';

    // 更新页面语言
    function updateLanguage(lang) {
        // 更新所有带有lang类的元素
        document.querySelectorAll('.lang').forEach(element => {
            const key = element.getAttribute('key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // 更新按钮状态
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 更新html lang属性
        document.documentElement.lang = lang;

        // 存储语言选择
        localStorage.setItem('language', lang);
    }

    // 初始化语言
    updateLanguage(currentLang);

    // 绑定语言切换按钮事件
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });
});
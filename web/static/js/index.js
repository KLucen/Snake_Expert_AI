const translations = {
    zh: {
    "logo": "蛇类识别系统",
    "home": "首页",
    "about": "关于",
    "handbook": "蛇类图鉴",
    "chinese": "中文",
    "english": "English",
    "title": "专业蛇类识别系统",
    "subtitle": "上传蛇的图片，立即获取种类信息和安全提示",
    "species": "蛇类物种",
    "accuracy": "识别准确率",
    "availability": "随时可用",
    "upload-title": "上传蛇类图片",
    "upload-desc": "支持JPG、PNG格式，最大5MB",
    "drop-text": "拖放图片到此处",
    "browse-text": "或",
    "browse-btn": "浏览文件",
    "identify-btn": "识别蛇类",
    "analyzing": "正在分析图片，请稍候...",
    "result-title": "识别结果",
    "uploaded-image": "上传的图片",
    "primary-result": "主要结果",
    "secondary-result": "备选结果",
    "secondary-desc": "主要结果置信度低于90%，提供备选识别结果",
    "secondary-species": "备选物种",
    "species-name": "物种名称",
    "class-id": "类别ID",
    "confidence": "识别置信度",
    "details": "详细信息",
    "toxicity": "毒性",
    "high-toxicity": "剧毒！具有强烈的神经毒素，被咬后需立即就医。",
    "distribution": "分布区域",
    "distribution-desc": "主要分布于中国南部、台湾、越南和老挝等地区。",
    "characteristics": "特征",
    "characteristic1": "身体有黑白相间的环状条纹",
    "characteristic2": "头部呈椭圆形，略大于颈部",
    "characteristic3": "成年体长约1-1.5米",
    "characteristic4": "夜行性动物，白天常隐藏在洞穴中",
    "first-aid": "急救措施",
    "first-aid-desc": "保持冷静，立即拨打急救电话，限制活动，去除紧身衣物和首饰，保持伤口低于心脏位置。",
    "wiki-title": "蛇类百科",
    "wiki-subtitle": "滑动浏览更多蛇类信息",
    "toxic": "剧毒",
    "non-toxic": "无毒",
    "view-wiki": "查看百科",
    "footer-desc": "基于深度学习和人工智能的专业蛇类识别工具，帮助您快速识别蛇类并提供安全信息。",
    "quick-links": "快速链接",
    "first-aid": "急救指南",
    "about-us": "关于我们",
    "contact": "联系我",
    "university": "中国传媒大学",
    "copyright": " 2025 蛇类识别系统 | 基于PyTorch和Flask构建 | 问答内容由DeepSeek AI生成"
},
    en: {
    "logo": "Snake Identification System",
    "home": "Home",
    "about": "About",
    "handbook": "Snake Handbook",
    "chinese": "中文",
    "english": "English",
    "title": "Professional Snake Identification System",
    "subtitle": "Upload a snake image to get species information and safety tips",
    "species": "Snake Species",
    "accuracy": "Recognition Accuracy",
    "availability": "Available on",
    "upload-title": "Upload Snake Image",
    "upload-desc": "Supports JPG, PNG formats, max 5MB",
    "drop-text": "Drag & Drop Image Here",
    "browse-text": "or",
    "browse-btn": "Browse Files",
    "identify-btn": "Identify Snake",
    "analyzing": "Analyzing image, please wait...",
    "result-title": "Recognition Result",
    "uploaded-image": "Uploaded Image",
    "primary-result": "Primary Result",
    "secondary-result": "Alternative Result",
    "secondary-desc": "Primary result confidence is below 90%, providing alternative identification",
    "secondary-species": "Alternative Species",
    "species-name": "Species Name",
    "class-id": "Class ID",
    "confidence": "Confidence Level",
    "details": "Detailed Information",
    "toxicity": "Toxicity",
    "high-toxicity": "Highly venomous! Contains potent neurotoxins. Seek medical attention immediately if bitten.",
    "distribution": "Distribution",
    "distribution-desc": "Found primarily in southern China, Taiwan, Vietnam, and Laos.",
    "characteristics": "Characteristics",
    "characteristic1": "Body has alternating black and white bands",
    "characteristic2": "Oval-shaped head slightly larger than neck",
    "characteristic3": "Adult length 1-1.5 meters",
    "characteristic4": "Nocturnal, often hides in burrows during the day",
    "first-aid": "First Aid",
    "first-aid-desc": "Stay calm, call emergency services immediately, limit movement, remove tight clothing and jewelry, keep wound below heart level.",
    "wiki-title": "Snake Encyclopedia",
    "wiki-subtitle": "Swipe to view more snake information",
    "toxic": "Venomous",
    "non-toxic": "Non-venomous",
    "view-wiki": "View on Wiki",
    "footer-desc": "A professional snake identification tool based on deep learning and AI, helping you quickly identify snakes and provide safety information.",
    "quick-links": "Quick Links",
    "first-aid": "First Aid Guide",
    "about-us": "About Us",
    "contact": "Contact Me",
    "university": "Communication University of China",
    "copyright": "2025 Snake Identification System | Built with PyTorch & Flask | Output provided by DeepSeek AI"
}
};

    // 语言切换功能
    document.addEventListener('DOMContentLoaded', function() {
    // 设置默认语言
    let currentLang = localStorage.getItem('language') || 'zh';

    // 更新页面语言
    function updateLanguage(lang) {
    // 更新所有带有data-lang-key属性的元素
    document.querySelectorAll('[data-lang-key]').forEach(element => {
    const key = element.getAttribute('data-lang-key');
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

    // 轮播图功能
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.wiki-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    if (carouselTrack && carouselItems.length > 0) {
    let currentPosition = 0;
    const itemWidth = carouselItems[0].offsetWidth + 25; // 包含间距
    const visibleItems = Math.floor(carouselTrack.offsetWidth / itemWidth);

    // 更新轮播图位置
    function updateCarousel() {
    carouselTrack.style.transform = `translateX(${currentPosition}px)`;
}

    // 下一张
    nextBtn.addEventListener('click', function() {
    const maxPosition = -((carouselItems.length - visibleItems) * itemWidth);

    if (currentPosition > maxPosition) {
    currentPosition -= itemWidth;
    updateCarousel();
}
});

    // 上一张
    prevBtn.addEventListener('click', function() {
    if (currentPosition < 0) {
    currentPosition += itemWidth;
    updateCarousel();
}
});
}

    // 文件上传预览功能
    const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('file-input');
    const preview = document.getElementById('preview');

    // 防止默认拖放行为
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});

    function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

    // 高亮拖放区域
    ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

    ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

    function highlight() {
    dropArea.classList.add('highlight');
}

    function unhighlight() {
    dropArea.classList.remove('highlight');
}

    // 处理文件拖放
    dropArea.addEventListener('drop', handleDrop, false);

    function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    fileInput.files = files;
    handleFiles(files);
}

    // 处理文件选择
    fileInput.addEventListener('change', function() {
    handleFiles(this.files);
});

    function handleFiles(files) {
    const file = files[0];

    if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = function(e) {
    preview.src = e.target.result;
    preview.style.display = 'block';
}

    reader.readAsDataURL(file);
}
}

    // 表单提交时显示加载动画
    document.getElementById('upload-form').addEventListener('submit', function() {
    document.getElementById('loading').style.display = 'block';
});
});

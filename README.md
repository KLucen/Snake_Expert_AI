# Snake_Expert_AI
DeepSeek-powered snake expert

## 文件描述
### archive文件夹
从kaggle下载下来的原始数据集。<br>
Csv -包含Csv文件，其中包含有关训练和测试集的详细信息，有关二项名称的信息，发现它们的国家等。<br>
train -包含按class_id（检查csv）区分的文件夹，大约24k图像。<br>
test -包含按class_id（检查csv）区分的文件夹，大约3k个图像。<br>
### data文件夹
经过数据清洗后得到的数据集<br>
其中包含经过数据清洗后的Csv，train，test文件，以及训练后保存到model文件夹的相关模型参数文件。<br>
特别说明：最后采用的是train.csv和test.csv用于训练。（由于class_id为73，99，135等蛇类不仅分布在中国也分布在其他地方，故将这些蛇类出现在其他国家的有关图片也一并纳入训练过程中）
### temp文件夹
用于存放模型训练过程中每个epoch的最佳参数文件。
### web文件夹
里面主要存放了应用可视化的所有文件：
static - 包含了css，html。image，js等静态文件，以及用于临时保存上传到网页的照片的文件夹upload。
templates - 网页可视化的主要文件
app.py -构建了Flask 应用，是用于启动可视化界面的文件。
model.py - 该文件主要实现了蛇类物种识别模型的加载、图片预处理和预测功能，同时借助 RAG 助手获取蛇类的详细信息。
rag_helper.py - 为调用的DeepSeek大模型实现RAG
package.json - 是根据有关蛇在wiki上的内容构建的用于RAG检索的本地知识库（所有内容由个人完成，如有出错请留言）
### 《中国蛇类图鉴》上册.pdf
### 《中国蛇类图鉴》下册.pdf
### A dataset of the morphological, life-history, and ecological traits of snakes in China.pdf
关于数据集王江-中国蛇类特征数据集.xls的相关论文
### ChinaSnake.ipynb
实现从archive源数据集到仅含中国境内拍摄的所有蛇类的数据集的数据清洗。
### Hainan.ipynb
实现从王江-中国蛇类特征数据集.xls到海南蛇类特征数据集.xlsx，海南无毒蛇类.xlsx，海南有毒蛇类.xlsx数据集的数据清洗。
### snake_model(resnet).py
使用resnet进行模型训练
### snake_model.ipynb
使用nvidia_efficientnet_widese_b4进行模型训练(test_china.csv,train_china.csv)
### SnakeDataCleaning.py
实现从archive源数据集到中国境内所有蛇类的数据集的数据清洗。（test.csv,train.csv)
### 海南蛇类特征数据集.xlsx
### 海南无毒蛇类.xlsx
### 海南有毒蛇类.xlsx
### 蛇.txt
记录了本系统中有关蛇类的相关信息
### 王江-中国蛇类特征数据集.xls

##
模型链接https://github.com/NVIDIA/DeepLearningExamples/tree/master/PyTorch/Classification/ConvNets/efficientnet

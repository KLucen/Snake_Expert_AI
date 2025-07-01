import numpy as np
import pandas as pd
import matplotlib
matplotlib.use('Agg')  # 使用非交互式后端
import matplotlib.pyplot as plt
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader, ConcatDataset
from torchvision import transforms, models
from torch.optim import lr_scheduler
import random
import os
import torch.optim as optim
from tqdm import tqdm
import time
import copy
from PIL import Image
from sklearn.metrics import classification_report

# 将数据集类移到主函数外部
class SnakeDataset(Dataset):
    def __init__(self, csv, traindir, transform, class_id, aug=None):
        self.csv = csv
        self.traindir = traindir
        self.transform = transform
        self.class_id = class_id
        self.aug = aug
        self.image_dim = 224  # 调整为ResNet标准输入尺寸

    def __len__(self):
        return len(self.csv)

    def __getitem__(self, idx):
        row = self.csv.iloc[idx]
        cl = row["class_id"]
        uuid = row["UUID"]
        location = os.path.join(self.traindir, str(cl), f"{uuid}.jpg")

        try:
            image = Image.open(location).convert('RGB')
        except Exception as e:
            # 创建空白图像作为占位符
            image = Image.new('RGB', (self.image_dim, self.image_dim), color='black')

        if self.aug is not None:
            image = self.aug(image)

        image = np.array(image)

        # 尝试应用边界框
        try:
            x, y, width, height = row['X'], row['Y'], row['width'], row['height']
            shape = image.shape[0]
            x, y, width, height = x * shape, y * shape, width * shape, height * shape

            x0 = max(0, int(x - width/2))
            y0 = max(0, int(y - height/2))
            x1 = min(shape, int(x + width/2))
            y1 = min(shape, int(y + height/2))

            if x1 > x0 and y1 > y0:
                image = image[y0:y1, x0:x1]
        except Exception as e:
            # 边界框处理失败时使用整张图像
            pass

        processed_image = self.transform["transformation_image"](image)
        return processed_image, torch.tensor(self.class_id[cl])

def main():
    # 设置随机种子
    seed = 42
    random.seed(seed)
    os.environ['PYTHONHASHSEED'] = str(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)
    if torch.cuda.is_available():
        torch.cuda.manual_seed(seed)
        torch.cuda.manual_seed_all(seed)
    torch.backends.cudnn.deterministic = True

    # 设备配置
    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"Using device: {device}")

    # 超参数
    lr = 0.001
    epochs = 51
    batch_size = 32
    gamma = 0.5
    image_dim = 224  # ResNet标准输入尺寸

    # 路径配置
    base_dir = "./data"
    csv_train_path = os.path.join(base_dir, "Csv/train.csv")
    csv_test_path = os.path.join(base_dir, "Csv/test.csv")

    # 加载CSV文件
    csv_train = pd.read_csv(csv_train_path)
    csv_test = pd.read_csv(csv_test_path)

    # 类别映射
    class_id = {}
    for i, cl in enumerate(csv_train.class_id.unique()):
        class_id[cl] = i
    nclass = len(class_id)

    # 数据统计
    print("\nSpecies Distribution:")
    print("Species".ljust(97) + "No Of Images")
    for species in csv_train.binomial.unique():
        count = sum(csv_train.binomial == species)
        print(f"{species.ljust(100)} {count}")


    # 数据预处理 - 使用ImageNet的标准化参数
    transformation = {
        "transformation_image": transforms.Compose([
            transforms.ToTensor(),
            transforms.Resize(size=(image_dim, image_dim)),
            transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                 std=[0.229, 0.224, 0.225])
        ])
    }

    transform_aug = transforms.Compose([
        transforms.RandomRotation(360),
        transforms.RandomHorizontalFlip(),
        transforms.ColorJitter(brightness=0.2, contrast=0.2, saturation=0.2),
        transforms.RandomResizedCrop(image_dim, scale=(0.8, 1.0))
    ])

    # 创建数据集
    train_dir = os.path.join(base_dir, "train")
    test_dir = os.path.join(base_dir, "test")

    print("\nCreating datasets...")
    train_dataset_aug = SnakeDataset(csv_train, train_dir, transformation, class_id, transform_aug)
    train_dataset_normal = SnakeDataset(csv_train, train_dir, transformation, class_id)
    test_dataset = SnakeDataset(csv_test, test_dir, transformation, class_id)

    # 组合数据集
    train_dataset = ConcatDataset([train_dataset_aug, train_dataset_normal])

    # 创建数据加载器
    train_dataloader = DataLoader(
        train_dataset,
        batch_size=batch_size,
        shuffle=True,
        num_workers=0,  # Windows下设为0避免多进程问题
        pin_memory=True
    )

    test_dataloader = DataLoader(
        test_dataset,
        batch_size=batch_size,
        num_workers=0,  # Windows下设为0避免多进程问题
        pin_memory=True
    )

    # 训练函数
    def train_model(model, criterion, optimizer, scheduler, num_epochs=25):
        since = time.time()
        best_model_wts = copy.deepcopy(model.state_dict())
        best_acc = 0.0

        for epoch in range(num_epochs):
            print(f'\nEpoch {epoch}/{num_epochs - 1}')
            print('-' * 10)

            # 训练阶段
            model.train()
            running_loss = 0.0
            running_corrects = 0
            dataset_size = len(train_dataset)

            loop = tqdm(train_dataloader, desc=f'Epoch {epoch}/{num_epochs-1}')
            for inputs, labels in loop:
                inputs = inputs.to(device)
                labels = labels.to(device)

                optimizer.zero_grad()

                outputs = model(inputs)
                _, preds = torch.max(outputs, 1)
                loss = criterion(outputs, labels)

                loss.backward()
                optimizer.step()

                running_loss += loss.item() * inputs.size(0)
                running_corrects += torch.sum(preds == labels.data)

                loop.set_postfix(loss=loss.item())

            scheduler.step()

            epoch_loss = running_loss / dataset_size
            epoch_acc = running_corrects.double() / dataset_size

            print(f'Train Loss: {epoch_loss:.4f} Acc: {epoch_acc:.4f}')

            # 保存最佳模型
            if epoch_acc > best_acc:
                best_acc = epoch_acc
                best_model_wts = copy.deepcopy(model.state_dict())
                torch.save(model.state_dict(), f'./temp/best_model_epoch_{epoch}.pth')

        time_elapsed = time.time() - since
        print(f'\nTraining complete in {time_elapsed//60:.0f}m {time_elapsed%60:.0f}s')
        print(f'Best Train Acc: {best_acc:4f}')

        # 加载最佳模型权重
        model.load_state_dict(best_model_wts)
        return model

    # 评估函数
    def evaluate_model(dataloader, model):
        model.eval()
        all_preds = []
        all_labels = []

        with torch.no_grad():
            for inputs, labels in tqdm(dataloader, desc='Evaluating'):
                inputs = inputs.to(device)
                outputs = model(inputs)
                _, preds = torch.max(outputs, 1)

                all_preds.extend(preds.cpu().numpy())
                all_labels.extend(labels.numpy())

        return np.array(all_preds), np.array(all_labels)

    # 模型初始化 - 使用ResNet50
    print("\nInitializing ResNet50 model...")

    # 加载预训练的ResNet50模型
    model = models.resnet50(pretrained=True)

    # 冻结所有卷积层参数（可选）
    # for param in model.parameters():
    #     param.requires_grad = False

    # 修改最后一层全连接层
    num_ftrs = model.fc.in_features
    model.fc = nn.Linear(num_ftrs, nclass)

    model = model.to(device)

    # 损失函数和优化器
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.parameters(), lr=lr, weight_decay=1e-4)
    scheduler = lr_scheduler.StepLR(optimizer, step_size=3, gamma=gamma)

    # 训练模型
    print("\nStarting training...")
    model = train_model(model, criterion, optimizer, scheduler, num_epochs=epochs)

    # 保存最终模型
    model_dir = os.path.join(base_dir, "model")
    os.makedirs(model_dir, exist_ok=True)
    final_model_path = os.path.join(model_dir, "resnet50_snakes.pt")
    torch.save(model.state_dict(), final_model_path)
    print(f"ResNet50 model saved to {final_model_path}")

    # ... 前面的代码保持不变 ...

# 在测试集上评估
    print("\nEvaluating on test set...")
    test_preds, test_labels = evaluate_model(test_dataloader, model)

    # 创建反向类别映射
    id_to_class = {v: k for k, v in class_id.items()}
    unique_classes = csv_train.drop_duplicates('class_id')
    idx_to_binomial = {}
    for orig_id, idx in class_id.items():
        # 获取类别的物种名称
        binomial_name = unique_classes[unique_classes.class_id == orig_id].binomial.iloc[0]
        idx_to_binomial[idx] = binomial_name

    # 获取测试集中实际存在的类别
    present_classes = np.unique(test_labels)
    class_names = [idx_to_binomial[i] for i in present_classes]

    print(f"测试集中出现的类别: {len(present_classes)}/{nclass}")
    print(f"出现的类别索引: {present_classes}")

    # 计算并打印指标 - 只包含实际存在的类别
    print("\nClassification Report:")
    report=classification_report(
        test_labels,
        test_preds,
        labels=present_classes,
        target_names=class_names
    )
    print(report)
    report_dir = os.path.join(base_dir, "report")
    report_save_path = os.path.join(report_dir, "report", "classification_report_on_resnet.txt")
    os.makedirs(os.path.dirname(report_save_path), exist_ok=True)
    with open(report_save_path, 'w') as f:
        f.write("Classification Report:\n")
        f.write(report)
    print(f"分类报告已保存至: {report_save_path}")

    print("\nTraining and evaluation completed!")



if __name__ == '__main__':
    main()
import pandas as pd

# 加载数据集
df1 = pd.read_csv('./archive/Csv/train.csv')
df2 = pd.read_csv('./archive/Csv/test.csv')

print('数据基本信息：')
df1.info()
print('数据基本信息：')
df2.info()

# 查看数据集行数和列数
rows1, columns1 = df1.shape
rows2, columns2 = df2.shape

if rows1 < 100 and columns1 < 20:
    # 短表数据（行数少于100且列数少于20）查看全量数据信息
    print('数据全部内容信息：')
    print(df1.to_csv(sep='\t', na_rep='nan'))
else:
    # 长表数据查看数据前几行信息
    print('数据前几行内容信息：')
    print(df1.head().to_csv(sep='\t', na_rep='nan'))

if rows2 < 100 and columns2 < 20:
    # 短表数据（行数少于100且列数少于20）查看全量数据信息
    print('数据全部内容信息：')
    print(df2.to_csv(sep='\t', na_rep='nan'))
else:
    # 长表数据查看数据前几行信息
    print('数据前几行内容信息：')
    print(df2.head().to_csv(sep='\t', na_rep='nan'))

# 定义要筛选的poisonous值列表
selected_values = [73, 99, 135, 215, 255, 457, 497, 560, 562, 616, 617, 725]

# 筛选出class_id列值在selected_values中的行数据
data_train = df1[df1['class_id'].isin(selected_values)]
# 将结果保存为csv文件
csv_path = './data/Csv/train.csv'
data_train.to_csv(csv_path)

# 筛选出class_id列值在selected_values中的行数据
data_test = df2[df2['class_id'].isin(selected_values)]
# 将结果保存为csv文件
csv_path = './data/Csv/test.csv'
data_test.to_csv(csv_path)
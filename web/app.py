from flask import Flask, render_template, request, redirect, url_for, send_from_directory
import os
from model import predict_species, num_classes  # 导入 num_classes
import markdown

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'
app.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024

os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/info.html')
def serve_info():
    return render_template('info.html')

@app.route('/handbook.html')
def pictorial_book():
    return render_template('handbook.html')

@app.route('/rescue.html')
def rescue_book():
    return render_template('rescue.html')

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        if 'file' not in request.files:
            return redirect(request.url)

        file = request.files['file']

        if file.filename == '':
            return redirect(request.url)

        if file:
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(filepath)

            # 获取预测结果（可能包含多个结果）
            results = predict_species(filepath)

            # 处理结果
            result_data = []
            for result in results:
                snake_info_html = markdown.markdown(result["snake_info"])
                result_data.append({
                    "species": result["species"],
                    "confidence": f"{result['confidence']*100:.2f}%",
                    "class_id": result["class_id"],
                    "snake_info_html": snake_info_html
                })

            # 设置主要结果和次要结果
            primary_result = result_data[0]
            secondary_result = result_data[1] if len(result_data) > 1 else None

            return render_template('index.html',
                                   image_file=file.filename,
                                   primary_result=primary_result,
                                   secondary_result=secondary_result,
                                   nclass=num_classes)  # 使用 num_classes

    return render_template('index.html', nclass=num_classes)  # 使用 num_classes

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/quiz')
def quiz():
    return send_from_directory('.', 'quiz.html')

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

@app.route('/templates/<path:filename>')
def templates_files(filename):
    return send_from_directory('templates', filename)

if __name__ == '__main__':
    app.run(debug=True)

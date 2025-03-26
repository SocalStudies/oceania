from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/countries')
def get_countries():
    return jsonify({
        "Australia": { "x": 300, "y": 250, "flag": "flags/australia.png" },
        "New Zealand": { "x": 400, "y": 280, "flag": "flags/new_zealand.png" },
        "Antarctica": { "x": 250, "y": 350, "flag": "flags/antarctica.png" }
    })

if __name__ == '__main__':
    app.run(debug=True)

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
        "Antarctica": { "x": 250, "y": 350, "flag": "flags/antarctica.png" },
        "Fiji": { "x": 450, "y": 220, "flag": "flags/fiji.png" },
        "Kiribati": { "x": 500, "y": 180, "flag": "flags/kiribati.png" },
        "Marshall Islands": { "x": 550, "y": 160, "flag": "flags/marshall_islands.png" },
        "Micronesia": { "x": 520, "y": 140, "flag": "flags/micronesia.png" },
        "Nauru": { "x": 480, "y": 200, "flag": "flags/nauru.png" },
        "Palau": { "x": 530, "y": 190, "flag": "flags/palau.png" },
        "Papua New Guinea": { "x": 370, "y": 230, "flag": "flags/papua_new_guinea.png" },
        "Samoa": { "x": 420, "y": 210, "flag": "flags/samoa.png" },
        "Solomon Islands": { "x": 390, "y": 200, "flag": "flags/solomon_islands.png" },
        "Tonga": { "x": 430, "y": 190, "flag": "flags/tonga.png" },
        "Tuvalu": { "x": 460, "y": 170, "flag": "flags/tuvalu.png" },
        "Vanuatu": { "x": 410, "y": 240, "flag": "flags/vanuatu.png" }
    })

if __name__ == '__main__':
    app.run(debug=True)

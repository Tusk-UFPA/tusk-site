from flask import Flask, request, send_from_directory
import os
import subprocess
import json


js_dr = os.path.join(os.path.dirname(__file__), "assets")
img_dr = os.path.join(os.path.dirname(__file__), "assets/img")
css_dr = os.path.join(os.path.dirname(__file__), "assets/css")

app = Flask(__name__,static_folder=js_dr)

@app.route('/')
def index():
    return send_from_directory(os.path.dirname(__file__), "index.html")

@app.route('/', methods=['POST'])
def post():
    data=request.json
    print(data)
    return send_from_directory(os.path.dirname(__file__), "index.html")

# @app.route('/assets/js/<path:filename>"')
# def js(filename):
#     print(filename)
#     return send_from_directory(js_dr, filename)
# @app.route('/assets/img/<path:filename>"')
# def img(filename):
#     return send_from_directory(img_dr, filename)
# @app.route('/assets/css/<path:filename>"')
# def css(filename):
#     return send_from_directory(css_dr, filename)
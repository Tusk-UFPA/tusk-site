from flask import Flask, request, send_from_directory
import os
import subprocess
import json
from typing import List
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

from dotenv import load_dotenv
from database.mongoModels import user, accesse


js_dr = os.path.join(os.path.dirname(__file__), "assets")
img_dr = os.path.join(os.path.dirname(__file__), "assets/img")
css_dr = os.path.join(os.path.dirname(__file__), "assets/css")



app = Flask(__name__, static_folder=js_dr)
load_dotenv(".env")

uri = os.getenv("MONGODB")


# # Send a ping to confirm a successful connection
try:
    client = MongoClient("mongodb+srv://server:yTtYDqy0PsZXTn6g@cluster0.5hv88yt.mongodb.net/?retryWrites=true&w=majority")
    client.admin.command("ping")
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

DB = client.tuskdb


@app.route("/")
def index():
    count = 1
    try:
        # if  DB.numerioDeAcesso.find():
        #     print(allAccess)
        # print(DB.acc.count_documents("count:"))
        for _ in DB.numerioDeAcesso.find():
            count += 1
        data = accesse = {"count": count}
        DB.numerioDeAcesso.insert_one(data)
    except Exception as e:
        print(e)
    return send_from_directory(os.path.dirname(__file__), "index.html")


@app.route("/", methods=["POST"])
def post():
    try:
        data = user = request.json

        newUser = DB.users.insert_one(data)
    except Exception as e:
        print(e)
    return send_from_directory(os.path.dirname(__file__), "tanx.html")


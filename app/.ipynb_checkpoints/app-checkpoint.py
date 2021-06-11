from flask import Flask, jsonify, render_template, redirect, url_for
from flask_pymongo import PyMongo
import pandas as pd
import datetime as dt
import numpy as np
import data

app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/twitter_app")

@app.route("/")
def home():
    dest_data = mongo.db.tweet.find_one()
    return render_template("index.html", tweet = dest_data)

if __name__ == "__main__":
    app.run()
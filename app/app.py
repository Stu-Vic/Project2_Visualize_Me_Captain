from typing import Dict
from flask import Flask, jsonify, render_template, redirect, url_for
from flask_pymongo import PyMongo
import pandas as pd
import datetime as dt
import numpy as np
import data
import pymongo

app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/Twitterer")

   

@app.route("/")
def home():

    # Find one record of data from the mongo database
    #TODO: make this database call parametrized
    product_data = mongo.db.AkshayKumar.find_one()
    print(product_data)


    # Return template and data
    return render_template("index.html", product_data=product_data)

    Info = {1: 'Aaron', 2: '10 months', 3: 'baby'}
    return render_template("index.html", Info=Info)
if __name__ == "__main__":
    app.run()
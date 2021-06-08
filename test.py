# app.py
from flask import Flask, request, jsonify
from pprint import pprint
import pymongo
from bson.json_util import dumps, loads

app = Flask(__name__)

@app.route("/api/test/")
def test():
    # return """<h3>route works</h3>"""
    # set up database connection
    client = pymongo.MongoClient("mongodb+srv://AtlasTwitter:1FineTwitterApp!@twittercluster.ycq9k.mongodb.net/")
    mongo_db = client["Tweets_DB"]
    mongo_collection = mongo_db["Combined_Tweets"]
    # query db
    testoutput =  mongo_collection.find({},{ "_id": 1, "Hashtags(#)": 1, "Identity": "Akshay Kumar"}).limit(10)
    # turn into JSON
    testoutput_listcursor = list(testoutput)
    json_data = dumps(testoutput_listcursor, indent=2)
    return json_data

@app.route("/api/dynamictest/", methods=['GET'])
def dynamictest():
    # return """<h3>route works</h3>"""
    # get twitter identity from API URL query / call 
    QueryIdentity = request.args.get("identity", None)
    print(f"got name {QueryIdentity}")
    if QueryIdentity.startswith('"') and QueryIdentity.endswith('"'):
        QueryIdentity = QueryIdentity[1:-1]
        print(f"revised name {QueryIdentity}")
    # set up database connection
    client = pymongo.MongoClient("mongodb+srv://AtlasTwitter:1FineTwitterApp!@twittercluster.ycq9k.mongodb.net/")
    mongo_db = client["Tweets_DB"]
    mongo_collection = mongo_db["Combined_Tweets"]
    # query db
    testoutput =  mongo_collection.find( { "Identity": QueryIdentity },{ "_id": 0, "Hashtags(#)": 1} ).limit(20)
    # turn into JSON
    testoutput_listcursor = list(testoutput)
    json_data = dumps(testoutput_listcursor, indent=2)
    return json_data
    # stringreturn = "<h3>Name Is " + QueryIdentity + "</h3>"
    # return stringreturn

@app.route('/getmsg/', methods=['GET'])
def respond():
    # Retrieve the name from url parameter
    name = request.args.get("name", None)

    # For debugging
    print(f"got name {name}")

    response = {}

    # Check if user sent a name at all
    if not name:
        response["ERROR"] = "no name found, please send a name."
    # Check if the user entered a number not a name
    elif str(name).isdigit():
        response["ERROR"] = "name can't be numeric."
    # Now the user entered a valid name
    else:
        response["MESSAGE"] = f"Welcome {name} to our awesome platform!!"

    # Return the response in json format
    return jsonify(response)

@app.route('/post/', methods=['POST'])
def post_something():
    param = request.form.get('name')
    print(param)
    # You can add the test cases you made in the previous function, but in our case here you are just testing the POST functionality
    if param:
        return jsonify({
            "Message": f"Welcome {name} to our awesome platform!!",
            # Add this option to distinct the POST request
            "METHOD" : "POST"
        })
    else:
        return jsonify({
            "ERROR": "no name found, please send a name."
        })

# A welcome message to test our server
@app.route('/')
def index():
    testlist = []
    testresults = mycol.find()
    for entry in testresults:
        print(entry)
    return htmlstring



myclient = pymongo.MongoClient("mongodb+srv://AtlasTwitter:1FineTwitterApp!@twittercluster.ycq9k.mongodb.net/")
mydb = myclient["testDB"]
mycol = mydb["test"]
testresults = mycol.find()
testlist = []
for x in testresults:
    testlist.append(x)
    print(x)

htmlstring = """
    <h1>Welcome to our server !!</h1>
    <h4>Created by Twitterazi: Dave</h4><br>
    <img src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png" alt="TwitterIcon"><br>
    """
returnstring = htmlstring + str(testlist)

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)
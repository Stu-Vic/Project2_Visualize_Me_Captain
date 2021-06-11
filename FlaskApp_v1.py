# app.py
# v2 - 10:34pm
from flask import Flask, request, jsonify, Response, render_template
from pprint import pprint
import pymongo
from bson.json_util import dumps, loads
import numpy as np
import pandas as pd

app = Flask(__name__)

def word_count(input):
    counts = dict()
    
    for word in input:
        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1
    return counts

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
    print(testoutput_listcursor)
    json_data = dumps(testoutput_listcursor, indent=2)
    return json_data
    # stringreturn = "<h3>Name Is " + QueryIdentity + "</h3>"
    # return stringreturn


@app.route("/api/wordcloud/", methods=['GET'])
def wordcloud():
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
    output =  mongo_collection.find( { "Identity": QueryIdentity, "Hashtags(#)": {"$ne" : '[]'} },{ "_id": 0, "Hashtags(#)": 1} )
    # convert to dataframe
    output_df = pd.DataFrame(list(output))
    HashTagArray = [eval(x) for x in output_df["Hashtags(#)"]]
    flattened_Hashtag_list = []
    for l1 in HashTagArray:
        for l2 in l1:
            # l2 = l2.replace('"','')
            flattened_Hashtag_list.append(l2)
    hashtag_dict = word_count(flattened_Hashtag_list)
    dict_df = pd.DataFrame()
    dict_df = pd.DataFrame(list(hashtag_dict.items()),columns = ['text','size']) 
    dict_df.sort_values(['size'], ascending=False, inplace=True)
    # x = hashtag_dict
    # sorted_hashtag_dict = {k: v for k, v in sorted(x.items(), key=lambda item: item[1], reverse=True)}
    # sorted_df = pd.DataFrame(sorted_hashtag_dict,columns=[['Hashtag','Count']])
    return Response(dict_df.to_json(orient="records"), mimetype='application/json')

@app.route("/api/identitylist/")
def list_identities():
    Identity_List = ['Akshay Kumar', 'Amitabh Bachchan', 'Ariana Grande', 'Barack Obama', 'BBC', 'Bill Gates', 'Britney Spears', 'Bruno Mars', 'CNN Breaking', 'CNN', 'Cristiano Ronaldo', 'Donald Trump', 'Drake', 'ESPN', 'FC Barcelona', 'Harry Styles', 'Instagram', 'Jimmy Fallon', 'J Lo', 'Justin Bieber', 'Justin Timberlake', 'Katy Perry', 'Kevin Hart', 'Kim Kardashian', 'Lady Gaga', 'Le Bron James', 'Liam Payne', 'Lil Wayne', 'Louis Tomlinson', 'Miley Cyrus', 'Narendra Modi', 'NASA', 'Neymar Jr', 'Niall Horan', 'NY Times', 'Oprah', 'Pink', 'Real Madrid', 'Rihanna', 'Salman Khan', 'Selena Gomez', 'Shah Rukh Khan', 'Shakira', 'Sports Center', 'Taylor Swift', 'The Ellen Show', 'Twitter', 'Virat Kohli', 'Wiz Khalifa', 'Youtube']
    Identities_df = pd.DataFrame(Identity_List,columns=['Identities'])
    return Response(Identities_df.to_json(orient="records"), mimetype='application/json')


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



@app.route("/api/average/", methods=['GET'])
def average():
    # set
    QueryName = request.args.get("name",None)
    print(f"got name {QueryName}")
    if QueryName.startswith('""') and QueryName.endswith('""'):
        QueryName = QueryName[2:-2]
        print(f"revised name {QueryName}")
    # set updatabase connection
    client = pymongo.MongoClient("mongodb+srv://AtlasTwitter:1FineTwitterApp!@twittercluster.ycq9k.mongodb.net/")
    mongo_db = client["Tweets_DB"]
    mongo_collection = mongo_db["Combined_Tweets"]
    #testoutput =  mongo_collection.find( { "Identity": QueryName }).sort([("Likes",-1)]).limit(1) 
    testoutput = mongo_collection.aggregate([{ '$match': { 'Identity': QueryName } },{ '$group': { '_id': 1, 'average': { '$avg': "$Likes" } } }])
    # turn into JSONJSON
    print(f"output {testoutput}")
    testoutput_listcursor = list(testoutput)
    print(testoutput_listcursor)
    json_data = dumps(testoutput_listcursor, indent=2)
    return json_data
    # query db


@app.route("/api/average/daily/", methods=['GET'])
def averageDaily():
    # set
    QueryName = request.args.get("name",None)
    print(f"got name {QueryName}")
    if QueryName.startswith('""') and QueryName.endswith('""'):
        QueryName = QueryName[2:-2]
        print(f"revised name {QueryName}")
    # set
    client = pymongo.MongoClient("mongodb+srv://AtlasTwitter:1FineTwitterApp!@twittercluster.ycq9k.mongodb.net/")
    mongo_db = client["Tweets_DB"]
    mongo_collection = mongo_db["Combined_Tweets"]
    #testoutput =  mongo_collection.find( { "Identity": QueryName }).sort([("Likes",-1)]).limit(1) 
    testoutput = mongo_collection.aggregate([{ '$match': { 'Identity': QueryName } },{ '$group': { '_id': 1, 'average': { '$avg': "$Likes" } } }])
    # turn into JSONJSON
    print(f"output {testoutput}")
    testoutput_listcursor = list(testoutput)
    print(testoutput_listcursor)
    json_data = dumps(testoutput_listcursor, indent=2)
    return json_data
    # query db

@app.route("/api/dashboard/", methods=['GET'])
def dashboard():
    # set up pymongo connection
    client = pymongo.MongoClient("mongodb+srv://AtlasTwitter:1FineTwitterApp!@twittercluster.ycq9k.mongodb.net/")
    mongo_db = client["Tweets_DB"]
    mongo_collection = mongo_db["Combined_Tweets"]
    
    # set QueryIdentity from API GET, clean out commas
    QueryIdentity = request.args.get("name",None)
    print(f"got name {QueryIdentity}")
    if QueryIdentity.startswith('"') and QueryIdentity.endswith('"'):
        QueryIdentity = QueryIdentity[1:-1]
        print(f"revised name {QueryIdentity}")
    
    # Query Mongo, turn into Dataframe 
    identity_df = pd.DataFrame(list(mongo_collection.find({"Identity": QueryIdentity})))

    # Read In Date / Time 
    identity_df['Time'] = pd.to_datetime(identity_df["Time"],format='%H:%M:%S')
    identity_df["Date"] = pd.to_datetime(identity_df["Date"],format="%Y-%m-%d")

    # Group DF by Month, get stats 
    identity_groupby_month_df = identity_df.groupby(pd.Grouper(key='Date', freq='M'))
    AvgTweetsPerMonth = round(identity_groupby_month_df['Likes'].count().mean())
    AvgLikesPerMonth = round(identity_groupby_month_df['Likes'].sum().mean())
    AvgReTweetsPerMonth = round(identity_groupby_month_df['Retweets'].sum().mean())
    AvgAtMentionsPerMonth = round(identity_groupby_month_df['Total @'].sum().mean())
    AvgHashtagsPerMonth = round(identity_groupby_month_df['Total #'].sum().mean())

    # Group DF by Day, get stats 
    identity_groupby_day_df = identity_df.groupby(pd.Grouper(key='Date', freq='D'))
    AvgTweetsPerDay = round(identity_groupby_day_df['Likes'].count().mean())
    AvgLikesPerDay = round(identity_groupby_day_df['Likes'].sum().mean())
    AvgReTweetsPerDay = round(identity_groupby_day_df['Retweets'].sum().mean())
    AvgAtMentionsPerDay = round(identity_groupby_day_df['Total @'].sum().mean())
    AvgHashtagsPerDay = round(identity_groupby_day_df['Total #'].sum().mean())

    # Get Totals Stats 
    TotalTweets = identity_df['Tweet Id'].count()
    TotalLikes = identity_df['Likes'].sum()
    TotalReTweets = identity_df['Retweets'].sum()
    TotalAtMentions = identity_df['Total @'].sum()
    TotalHashtags = identity_df['Total #'].sum()

    # Combine into Dictionaries 
    Tweet_Data_All = {
        "TotalTweets": TotalTweets,
        "TotalLikes": TotalLikes,
        "TotalReTweets": TotalReTweets,
        "TotalAtMentions": TotalAtMentions,
        "TotalHashtags": TotalHashtags,
        "AvgTweetsPerDay": AvgTweetsPerDay,
        "AvgLikesPerDay": AvgLikesPerDay,
        "AvgReTweetsPerDay": AvgReTweetsPerDay,
        "AvgAtMentionsPerDay": AvgAtMentionsPerDay,
        "AvgHashtagsPerDay": AvgHashtagsPerDay,
        "AvgTweetsPerMonth": AvgTweetsPerMonth,
        "AvgLikesPerMonth": AvgLikesPerMonth,
        "AvgReTweetsPerMonth": AvgReTweetsPerMonth,
        "AvgAtMentionsPerMonth": AvgAtMentionsPerMonth,
        "AvgHashtagsPerMonth": AvgHashtagsPerMonth
    }
    
    # Return 
    return jsonify(Tweet_Data_All)


# @app.route("/api/dashboard-old/", methods=['GET'])
# def dashboardOld():
#     # set
#     QueryName = request.args.get("name",None)
#     print(f"got name {QueryName}")
#     if QueryName.startswith('"') and QueryName.endswith('"'):
#         QueryName = QueryName[1:-1]
#         print(f"revised name {QueryName}")
#     # set
#     client = pymongo.MongoClient("mongodb+srv://AtlasTwitter:1FineTwitterApp!@twittercluster.ycq9k.mongodb.net/")
#     mongo_db = client["Tweets_DB"]
#     mongo_collection = mongo_db["Combined_Tweets"]
#     #testoutput =  mongo_collection.find( { "Identity": QueryName }).sort([("Likes",-1)]).limit(1)
#     average = mongo_collection.aggregate([{ '$match': { 'Identity': QueryName } },{ '$group': { '_id': 1, 'average': { '$avg': "$Likes" } } }])
#     totalLikes = mongo_collection.aggregate([{ '$match': { 'Identity': QueryName } },{ '$group': { '_id': 1, 'total': { '$sum': "$Likes" } } }])
#     totalRetweets = mongo_collection.aggregate([{ '$match': { 'Identity': QueryName } },{ '$group': { '_id': 1, 'total': { '$sum': "$Retweets" } } }])
#     # turn into JSONJSON
#     responseAverage = list(average)
#     responseTotalLikes = list(totalLikes)
#     responsetotalRetweets=list(totalRetweets)
#     print(f"average {responseAverage} ")
#     print(f"totalLikes {responseTotalLikes}")
#     print(f"totalRetweets{responsetotalRetweets}")
#     json_average = dumps(responseAverage, indent=2)
#     json_totalLikes = dumps(responseTotalLikes, indent=2)
#     json_totalRetweets = dumps(responsetotalRetweets, indent=2)
#     response = jsonify(json_average,json_totalLikes,json_totalRetweets)
#     return response

# A welcome message to test our server
@app.route('/')
def index():
    testlist = []
    testresults = mycol.find()
    for entry in testresults:
        print(entry)
    return render_template("index.html")


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
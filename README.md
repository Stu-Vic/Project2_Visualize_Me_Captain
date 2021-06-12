# Project2_Visualize_Me_Captain
# Twitterazzi

https://docs.google.com/document/d/1OyaQzLnUlCP1M5yW1of3k6namy92HghdryX1IblntQ8/edit

# Proposal & Design 

We found a Kaggle dataset, of the top 50 twitter users, and the metadata of their tweets, such as date/time, likes, retweets, etc. We are going to analyse this data and display three key visualisations: an arc diagram illustrating which of the top 50 users have relationships with each other, and an interactive dashboard allowing a user to select a twitter user and display interactive tweet statistics for that user, and a wordcloud outlining the top hashtags for each twitter users. . 
https://www.trackmyhashtag.com/blog/free-twitter-datasets/

The data is broken up into separate users and separate files. We needed to combine all the files (all named "tweets.csv") into a single database. The images and videos CSV files were joined and merged as part of statistical information. The PDFs were removed from the dataset. . 

We need to rename the “tweets” csv file, allocate the twitter user against against that data, and manually categorise each twitter user as we go, into the following:
Gender of User (Male / Female / Organisation) 
Category or Vocation of User (Music, Sport, Entertainment, Politics, Technology, News / Media, Other)

# Data 
The data was uploaded into a Mongo Atlas DB, in AWS Sydney. There are two containers: Tweets_Combined, and ARC_Diagram.

# Flask and API
Flask is hosted on Heroku, with the following API routes 
/ 
/wordcloudpage/
/ARC_Diagram/
/api/dashboard/  		 (dynamic)
/api/dashboard/scatter  	 (dynamic)
/api/identitylist/  		 (static)
/api/wordcloud/ 		 (dynamic) 

# ETL
Separate Date and Time into two columns
Apply Gender and Vocation categories to Users 
Apply each individual “tweets” CSV to a User_Twitter_User_ID
Pre-compute each twitter user’s top 100 words for wordcloud using a language engine
Simple “count” of images and videos per twitter user? Apply to Users table?
What do we do for the # and @ mentions, for arc diagram? Need to pre-analyse this data, too much compute otherwise:
Do we create a third DB table purely for the arc diagram? 
Do we add # and @ columns into the tweets table?
Both?



Visualisations ideas
Arc Diagram of tweets between these users / relationships and connections / which of the top 50 are messaging or messaging each other 
Interactive Dashboard
Dropdown menu, allowing you to select a top 50 twitter user, and a series of statistics and graphs display with animated transitions 
As example graphs, most active time of day, number of hashtags / percentage of hashtagged tweets, number / percentage of @mention tweets, average number of tweets per day/week/month, average / percentage of likes and retweets, combining some analysis of likes/retweets with # or @ mentions
WordCloud? Would look cool. Might need to be pre-analysed into a separate table or something, ready for display. 
Maybe (?) being able to select by gender or user category (vocation) 
Third visualisation to come later if we need to 


Ideas 
Viral tweets over time
How quickly does something go viral 
What topic is the quickest to go viral
Which users are more likely to go viral 

Scrapes most viral tweets for the week and display the metrics 
Spotify danceability and metrics
Youtube trending data 
Loneliness analysis 
Top 50 twitter users hashtag data
To explore:
Numbers of hashtags, mentions (could do a word cloud similar to this https://github.com/jasondavies/d3-cloud/)
Numbers of likes, retweets (give indication of what info followers are spreading; indicative of agreement with sentiment also)
Which of the top 50 users (+ others?) are communicating with each other (arc diagram?)



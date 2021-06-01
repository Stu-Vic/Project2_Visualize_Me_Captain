# Project2_Visualize_Me_Captain
Twitterazzi


https://docs.google.com/document/d/1OyaQzLnUlCP1M5yW1of3k6namy92HghdryX1IblntQ8/edit

Proposal & Design 1/6/2021 10:10pm

We found a Kaggle dataset, of the top 50 twitter users, and the metadata of their tweets, such as date/time, likes, retweets, etc. 
https://www.trackmyhashtag.com/blog/free-twitter-datasets/

The data is broken up into separate users and separate files. We will need to combine this data into a single database. The images and videos CSV files are a bit useless to us. 

We need to rename the “tweets” csv file, allocate the twitter user against against that data, and manually categorise each twitter user as we go, into the following:
Gender of User (Male / Female / Organisation) 
Category or Vocation of User (Music, Sport, Entertainment, Politics, Technology, News / Media, Other)

The data will be uploaded into PostGreSQL in Heroku or Google Cloud. 

DB Structure
Two tables 
Twitter Users:
Twitter_User_ID (PK)
Username
Gender
Vocation
Pre_Computed_WordCloud_Words (100 words)
Tweets 
Twitter_User_ID (FK)
Tweet_ID
Tweet_Time
Tweet_Date
Tweet_Content
Tweet_Type
Tweet_Client
Tweet_ReTweet
Tweet_Likes
Tweet_UserName


Repo Structure 
Resources (for datasets and csvs)
Scripts & notebooks folder (for our analysis 
Assets folder (for website), including images, and other material used for website 

![image](https://user-images.githubusercontent.com/78116599/120321679-f0240c80-c326-11eb-836e-2e26f01b0818.png)


Visualisations
Arc Diagram of tweets between these users / relationships and connections / which of the top 50 are messaging or messaging each other
https://observablehq.com/@d3/arc-diagram

Interactive Dashboard
Dropdown menu, allowing you to select a top 50 twitter user, and a series of statistics and graphs display with animated transitions 
As example graphs, most active time of day, number of hashtags / percentage of hashtagged tweets, number / percentage of @mention tweets, average number of tweets per day/week/month, average / percentage of likes and retweets, combining some analysis of likes/retweets with # or @ mentions
WordCloud? Would look cool. Might need to be pre-analysed into a separate table or something, ready for display. 
Maybe (?) being able to select by gender or user category (vocation) 
Third visulisation to come later if we need to 

Tasks


Set up GitHub Repo and distribute 
Investigate Heroku and Google Cloud hosting options (Or paid option? Lightsail? $5 a month) 
ETL 
Separate Date and Time
Apply Gender and Vocation categories to Users 
Somehow apply each individual “tweets” CSV to a Twi


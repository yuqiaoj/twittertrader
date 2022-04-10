import flask
from flask import Flask
import tweepy
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from yahoo_fin.stock_info import get_day_most_active  
import config

app = Flask(__name__)


def sent_anal(text):
    sentiment = SentimentIntensityAnalyzer().polarity_scores(text)
    rounded = {"pos": round(sentiment["pos"], 2), "neu": round(sentiment["neu"], 2), "neg": round(sentiment["neg"], 2)}
    return rounded


def most_actives():
    raw_data = get_day_most_active()
    parsed_data = raw_data.iloc[:,:2].iloc[:10]
    data_list = parsed_data.values.tolist()
    return data_list

def search_tweets(api, keywords, limit):
    tweets = tweepy.Cursor(api.search_tweets, q=keywords, count=100, tweet_mode='extended').items(20)
    return tweets

@app.route('/members')
def main():
    auth = tweepy.OAuthHandler(config.api_key, config.api_key_secret)
    auth.set_access_token(config.access_token, config.access_token_secret)
    api = tweepy.API(auth)
    limit = 100
    output_list = []

    top_stocks = most_actives()
    for stock in top_stocks:
        total_pos = 0
        total_neg = 0
        total_count = 0
        tweets = search_tweets(api, stock, limit)
        top_tweet = 0
        top_tweet_foll_count = 0
        for tweet in tweets:
            follower_count = tweet.user.followers_count
            if follower_count > top_tweet_foll_count:
                top_tweet_foll_count = follower_count
                top_tweet = tweet.id 
            sentiment = sent_anal(tweet.full_text)
            total_count += follower_count
            total_pos += follower_count * sentiment['pos']
            total_neg += follower_count * sentiment['neg']

        output_list.append({"name": stock[1], 
                            "ticker": stock[0], 
                            "tweetid": str(top_tweet), 
                            "tot_pos": total_pos,
                            "per_pos": 100 * total_pos/total_count, 
                            "tot_neg": total_neg,
                            "per_neg": 100 * total_neg/total_count})

    return(flask.jsonify(output_list))


if __name__ == "__main__":
    app.run(debug=True)

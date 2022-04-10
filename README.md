## Inspiration
"_Agua._" These four letters dropped Coca-Cola's market value by $4 billion dollars in just a few minutes. In a 2021 press conference, Cristiano Ronaldo shows just how much impact public opinion has on corporate finance. We all know about hedge fund managers who have to analyze and trade stocks every waking minute. These people look at graphs to get paid hundreds of thousands of dollars, yet every single one of them overlooks the arguably most important metric for financial success. Public opinion. That's where our team was inspired to create twittertrader. 

## What it does
twittertrader is a react application that displays crucial financial information regarding the day's top traded stocks. For each of the top ten most active stocks, our project analyzes the most recent relevant tweets and displays the general public opinion. 

## How we built it
**Backend**: Python, yahoo_fin, Tweepy, NLTK<br />
**Frontend**: React, Material UI<br />
**Integration**: Flask

## Challenges we ran into
Integrating backend and frontend. 

## Accomplishments that we're proud of
Every single one of us was pushed to learn and do more than we have ever done in such a short amount of time! Furthermore, we are proud that all of us were able to commit so much time and effort even in the midst of final exams. 

## What we learned
Don't take part in a hackathon during exam season. I'm being serious.

## What's next for twittertrader
1. **Interactions**
As a team we had big ambitious and small amounts of time. We wanted to include a feature where users would be able to add stocks to also be analyzed however we were unable to implement it in time.

2. **Better Analytics!**
Our current project relies on NLTK's natural language processing which has limitations analyzing text in niche fields. We plan on integrating a trained ML model that more accurately describes sentiments in the context of stocks. ("Hit the moon" will make our positivity "hit the moon")

3. **Analytics+**
This information is cool and all but what am I supposed to do with it? We plan on implementing further functionality that analyses significant changes in public opinion and recommends buying or selling these stocks. 

4. **Scale**
We worked so hard on this cool project and we want to share this functionality with the world! We plan on hosting this project on a real domain. 
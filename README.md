# LIRI-NODE-APP

LIRI is command line node application.  Similar to how SIRI is a Speech Interpretation and Recognition Interface for iPhone, LIRI is a language interpretation and recognition software interface that takes in parameters and returns data.  LIRI will search Spotify for songs, Twitter for Tweets, and OMDB for movies.

Node packages for Twitter, Spotify, and Omdb APIs are used for this app.

Installation of NPM Packages

Twitter: npm install twitter

Spotify: npm install spotify

Request: npm install request

FS npm install fs

You will also need to make a .env file to hide your keys on the on the backend. 

To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and OMDB APIs.

This applicatioin uses Request to grab data from the OMDB API.

To get Started these are the commands you should use:

Get Tweets Will display my latest 20 tweets:

node liri.js my-tweets

Get Song Info Will display information for a song:

node liri.js spotify-this-song "Halo"

Get Movie Info Will display information for a movie:

node liri.js movie-this "Office Space"

Get Random Info Will take the text inside of the random.txt file and then use it to call one of LIRI's commands:

node liri.js do-what-it-says



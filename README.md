# liri-node-app

Liri is command line node app.  Similar to how SIRI is a Speech Interpretation and Recognition Interface, Liri is a language interpretation and recognition software that takes in parameters and gives back data.

Node packages for Twitter, Spotify, and Omdb APIs are used for this app.

Installs

Twitter npm install twitter

Spotify npm install spotify

Request npm install request

FS npm install fs

You will also need to make a .env file to hide your keys on the on the backend. 

To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and OMDB APIs.

You'll use Request to grab data from the OMDB API.

Get Started These are the commands you should use:

Get Tweets Will display my latest 20 tweets:

node liri.js my-tweets

Get Song Info Will display information for a song:

node liri.js spotify-this-song "Yoshimi"

Get Movie Info Will display information for a movie:

node liri.js movie-this "Clerks"

Get Random Info Gets random text inside a file and does what it says:

node liri.js do-what-it-says


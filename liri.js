require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Request = require('request');

// var client = new Twitter(keys.twitter);
// var spotify = new Spotify(keys.spotify);
//var keys = require('./keys.js');


//Finish setting everything up from instructions. Done 2/8
//obtain all keys. Done 2/8
//console log keys to make sure it's working. Done 2/8 
//then run liri.js to test it. Done 2/8
//create if statements for * `my-tweets' 'spotify-this-song` `movie-this` `do-what-it-says`
//for spotify-this-song I have to create an array of artists.track.song and store in a variable and loop through it

if (process.argv[2] === "my-tweets") {


var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

var params = {screen_name: 'Grand_Success', count: 20};

client.get('statuses/user_timeline', params, function(err, tweets, response) {

    for(var i = 0; i < tweets.length; i++){
    console.log(tweets[i].created_at);
    console.log(tweets[i].text);
    // console.log(tweets, null, 2);

    }

});

}

  console.log(client);

  
  
 var spotify = new Spotify({
   id: process.env.SPOTIFY_ID,
   secret: process.env.SPOTIFY_SECRET,
 });

 console.log(spotify);
  
 spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
   if (err) {
     return console.log('Error occurred: ' + err);
   }
  
 console.log(data); 
 });  

 
  


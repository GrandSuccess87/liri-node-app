require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Request = require('request');
var keys = require('./keys.js');
// console.log(keys);


if (process.argv[2] === "my-tweets") {

    var client = new Twitter(keys.twitter);

    var params = {
        screen_name: 'Grand_Success',
        count: 20
    };

    client.get('statuses/user_timeline', params, function (err, tweets, response) {
        if (!err) {
            for (var i = 0; i < tweets.length; i++) {

                console.log(tweets[i].created_at);
                console.log(tweets[i].text);
                // console.log(tweets, null, 2);

            }
        }
    });

}



if (process.argv[2] === "spotify-this-song") {

    var spotify = new Spotify(keys.spotify);
 
    var songTitle = process.argv[3];
    


spotify.search({ type:'track', query: songTitle}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    // console.log(data.tracks.items[0]);
  
    var artist = data.tracks.items[0].album.artists[0].name
    console.log(artist);
   
    var album = data.tracks.items[0].album.name
    console.log(album);

    var songTitle = data.tracks.items[0].name
    console.log(songTitle);

    var songUrl = data.tracks.items[0].album.external_urls.spotify
    console.log(songUrl);
    
});

}



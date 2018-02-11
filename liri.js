require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');
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



    spotify.search({
        type: 'track',
        query: songTitle
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        // console.log(data.tracks.items[0]);

        var artist = data.tracks.items[0].album.artists[0].name
        console.log(artist);

        var songUrl = data.tracks.items[0].album.external_urls.spotify
        console.log(songUrl);

        var album = data.tracks.items[0].album.name
        console.log(album);

        var songTitle = data.tracks.items[0].name
        console.log(songTitle);

    });

}

if (process.argv[2] === "movie-this") {

    var movieName = process.argv[3];

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    console.log(queryUrl);

    request(queryUrl, function (error, response, body) {
    
                if (!error && response.statusCode === 200) {

                    // console.log(body);
                    console.log("Movie Title:\n" + JSON.parse(body).Title);
                    console.log("This Movie Was Realsed in:\n" + JSON.parse(body).Year);
                    console.log("Actors:\n" + JSON.parse(body).Actors);
                    console.log("Language:\n" + JSON.parse(body).Language);
                    console.log("Country Movie Was Produced In:\n" + JSON.parse(body).Country);
                    console.log("Synopsis:\n" + JSON.parse(body).Plot);
                    console.log("This Movie's IMDB Rating Is:\n" + JSON.parse(body).imdbRating);
                    console.log("This Movie's Rotten Tomato Rating Is:\n" + JSON.parse(body).Ratings[1].Value);

                } else {
                    var movieName = "";

                    for (var i = 2; i < process.argv.length; i++) {

                        if (i > 2 && i < process.argv.length) {
                            movieName = movieName + "+" + process.argv[i];
                        }
                    }

 if (process.argv[2] === "") {

    var movieTitle = "Mr. Nobody";

    var queryUrl2 = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=trilogy"
    console.log(queryUrl2);

    request(queryUrl2, function (error, response, body) {
    if (!error && response.statusCode === 200) {
  // console.log(body);
    console.log("Movie Title:\n" + JSON.parse(body).Title);
    console.log("This Movie Was Realsed in:\n" + JSON.parse(body).Year);
    console.log("Actors:\n" + JSON.parse(body).Actors);
    console.log("Language:\n" + JSON.parse(body).Language);
    console.log("Country Movie Was Produced In:\n" + JSON.parse(body).Country);
    console.log("Synopsis:\n" + JSON.parse(body).Plot);
    console.log("This Movie's IMDB Rating Is:\n" + JSON.parse(body).imdbRating);
    console.log("This Movie's Rotten Tomato Rating Is:\n" + JSON.parse(body).Ratings[1].Value);
   }
})
 }
  }
                        
   var textFile = process.argv[2]

    fs.readFile(textFile, "utf8", function (err, data) {

    if (err) {
        return console.log(err);
    }

    console.log('OK:' + textFile);
    console.log(data);

 })
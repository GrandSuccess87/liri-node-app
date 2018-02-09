require("dotenv").config();

var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Request = require('request');

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);
var keys = require('./keys.js');


//Finish setting everything up from instructions
//obtain all keys
//console log keys to make sure it's working 
//then run liri.js to test it
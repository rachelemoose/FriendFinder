// Dependencies 
var path = require("path");
var express = require("express");

var friends = require("../data/friends");

module.exports = function(app) {
  // Get call to get all friends found in friends.js and return as JSON
  app.get("/api/friends", function(req, res) {
	res.json(friends);
	//console log to make sure it looks correct
	console.log(friends);
  });

  // Post friend data and scores 
  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    // Receive new user details
    var user = req.body;

    // Turn scores into integers
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

	// Best friend match is the friend with least difference in scores
	// Minimum difference starts at 50 because that is as far apart as the scores can get
    var bestFriend = 0;
    var minimumDifference = 50;

    // start off with a zero difference and compare the user and friend scores individually
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestFriend = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(user);

    // send back to browser the best friend match
    res.json(friends[bestFriend]);
  });
};

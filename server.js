// Dependencies and NPM packages needed
// Express Package
var express = require("express");
// Path package
var path = require("path");

// Create express app instance
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Start our server so that it can begin listening to requests
app.listen(PORT, function() {
    // log to make sure it's listening on correct server
    console.log("App listening on: http://localhost:" + PORT);
});
  
// Requires and sets the HTML routes in this file
require('./app/routing/htmlRoutes.js')(app);

// Requires and sets the API routes in this file
require('./app/routing/apiRoutes.js')(app);


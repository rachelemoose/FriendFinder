// Dependencies and NPM packages needed
// Express Package
var express = require("express");
// Path package
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Starts the server to begin listening
app.listen(PORT, function() {
    // log to make sure it's listening on correct server
    console.log("App listening on PORT " + PORT);
});
  
// Requires and sets the HTML routes in this file
var HTMLroutes = require('./app/routing/htmlRoutes.js')(app);

// Requires and sets the API routes in this file
var APIroutes = require('./app/routing/apiRoutes.js')(app);


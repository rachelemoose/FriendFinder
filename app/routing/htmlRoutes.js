// Packages and dependencies 
var path = require("path");

// Routing 
module.exports = function(app) {
    // Standard route that sends the user to the home page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
});
	// route to send user to survey page
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// if no matching route is found go to homepage 
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};
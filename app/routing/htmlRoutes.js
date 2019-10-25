// Path package required to get correct file path to html
var path = require("path");

// html GET requests, pass through app (express)
// displays the html page based on  user endpoint
module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

}
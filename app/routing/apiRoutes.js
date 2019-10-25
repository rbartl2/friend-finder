var friends = require("../data/friends.js");


// API GET requests
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });
    app.post("/api/friends", function(req, res){
        // Info from survey gets put in same format from array so they can be comnpared
        var bestMatch = {
            name: "",
            photo: "",
            difference: 1000
        };
        console.log(req.body);
        // take data and scores from the user
        var userData = req.body;
        var userScores = userData.scores;
        console.log(userScores);

        // variable calculates difference between the user score v. database scores
        var totalDifference = 0;

        // "nested" for loop
        // loop through each friend, but also loop through their score array
        for(var i = 0; i < friends.length; i++){
            console.log(friends[i]);
            totalDifference = 0;
            for(var j = 0; j < friends[i].scores[j].length; j++){
                // subtract user score from friends score 
                // absolute (always positive number)
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // if sum is less than current best match
                // reset match and friend
                if(totalDifference <= bestMatch.difference){
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.difference = totalDifference;
                }
            }
        }
        // push user data into the friend array
        friends.push(userData);
        // return JSON with the user's best match
        res.json(bestMatch);
    });
}
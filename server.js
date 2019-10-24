var express = require("express");

var app = express();

var PORT = process.env.PORT || 8082;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Route to files, import
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// Start server
app.listen(PORT, function(){
    console.log("Listening on port: " + PORT);
});
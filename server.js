var express = require("express");
var expressHandleBars = require("express-handlebars");
var mongojs = require("mongojs");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
// var request = require("request");
var cheerio = require("cheerio");

// Require all models
// var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

var router = express.Router();

require("./config/routes")(router);
// app.use(express.static(__dirname + "/public"));

//Connect Express app with Handlebars

app.engine("handlebars", expressHandleBars({
  defaultLayout:"main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
extended:false
}));

app.use(router);

// Data Base Configuration

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error){
  if(error){
    console.log(error);
  }
  else{
    console.log("mongoose is sucessful");
  }
});


// var databaseUrl = "scraper";
// var collections = ["scrapedData"];
// // Hook mongojs configuration to db variable
// var db = mongojs(databaseUrl, collections);
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });





// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


// module.exports = app;

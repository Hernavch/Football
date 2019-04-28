var express = require("express");
var exphbs = require("express-handlebars");
var mongojs = require("mongojs");
var mongoose = require("mongoose");

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

// Data Base Configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];
// Hook mongojs configuration to db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

app.get("/", function(req,res){
  res.send("Hello World")
});

app.get("/all", function(req,res){
  db.scrapedData.find({}, function(err,found){
    if(err){
      console.log(err);
    }
    else{
      res.json(found);
    }

  })
});

app.get("/scrape", function(req,res){
  axios.get("https://ramsondemand.com/").then(function(response) {
  var $ = cheerio.load(response.data);

  // An empty array to save the data that we'll scrape
  var results = [];

    $(".nodeTitle").each(function(i, element) {

    var title = $(element).children().text();
    var link = $(element).find("a").attr("href");

    // Save these results in an object that we'll push into the results array we defined earlier
    if (title && link) {
      db.scrapedData.save({
        title:title, 
        link: link
      },
      function(error,saved){
        if(error){
          console.log(error);
        }else{
          console.log(saved);
          // res.send(saved);
        }
      })
    }
    });
});

res.send("Scraping complete")
});



// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


module.exports = app;

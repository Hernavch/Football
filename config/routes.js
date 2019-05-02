var scrape = require("../scripts/scrape");

var headlinesController = require("../controllers/headlines");





module.exports = function(router){

  router.get("/", function(req, res){
    res.render("home");
  });

  router.get("/saved", function(req, res){
    res.render("saved");
  });
  // router.get("/all", function)

}

// var axios = require("axios");

// app.get("/", function(req,res){
//   res.send("Hello World")
// });

// app.get("/all", function(req,res){
//   db.scrapedData.find({}, function(err,found){
//     if(err){
//       console.log(err);
//     }
//     else{
//       res.json(found);
//     }

//   })
// });

// app.get("/scrape", function(req,res){
//   axios.get("https://ramsondemand.com/").then(function(response) {
//   var $ = cheerio.load(response.data);

//   // An empty array to save the data that we'll scrape
//   var results = [];

//     $(".nodeTitle").each(function(i, element) {

//     var title = $(element).children().text();
//     var link = $(element).find("a").attr("href");

//     // Save these results in an object that we'll push into the results array we defined earlier
//     if (title && link) {
//       db.scrapedData.save({
//         title:title, 
//         link: link
//       },
//       function(error,saved){
//         if(error){
//           console.log(error);
//         }else{
//           console.log(saved);
//           // res.send(saved);
//         }
//       })
//     }
//     });
// });

// res.send("Scraping complete")
// });
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
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
    results.push({
      title: title,
      link: link
    });
});

  console.log(results);
});


}) 

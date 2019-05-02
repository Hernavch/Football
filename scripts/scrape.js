var request = require('request');
var cheerio= require("cheerio");

var scrape = function (cb){
    
    request("https://www.therams.com/news/all-news", function(err, res, body){
        var $= cheerio.load(body);

        var news =[];

        $(".d3-o-media-object__body").each(function(i,element){
            var head = $(this).children(".d3-o-media-object__title").text().trim();
            var sum = $(this).children(".d3-o-media-object__summary").text().trim();

            if(head && sum){
                var headNeat = head.replace(/(\r\n\|\n|\r|\t|\s+)/gm, "").trim();
                var sumNeat = sum.replace(/(\r\n\|\n|\r|\t|\s+)/gm, "").trim();

                var dataToAdd = {
                    headline:headNeat,
                    summary:sumNeat
                };
                news.push(dataToAdd);
                
            }
        });
        cb(news);
    });
};

module.exports = scrape;
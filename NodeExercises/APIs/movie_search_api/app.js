var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


//ROUTES

app.get("/", function(req,res){
   res.render("search"); 
});

app.get("/results", function(req, res){
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    //api call
    request(url, function(error, response, body){
       if(!error && response.statusCode == 200){
           var data = JSON.parse(body);          //object form of the string
           //res.send(results["Search"][0]["Title"]);
           res.render("results",{data: data});
       } 
    });
});




app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Movie app has started!"); 
});
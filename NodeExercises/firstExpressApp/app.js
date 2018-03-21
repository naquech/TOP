var express = require("express");
var app = express();                    //everything done with express will be called app.<method>



/*------------ROUTES---------------*/

// "/" -> "hi there"
app.get('/', function(req, res){
    res.send("Hi there!");
});

// "/bye" -> "goodbye"
app.get('/bye', function(req, res){
    res.send("Goodbye!");
});

// "/dog" -> "meow"
app.get('/dog', function(req, res){
    console.log("someone made a request");
    res.send("Meowww!");
});

//Route parameters
// r -> telling to follow a patern
//: -> make it a variable

//https://webdevbootcamp-naquech.c9users.io/r/google
//welcome to the google subredit
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit + " subreddit");
});

//https://webdevbootcamp-naquech.c9users.io/r/yahoo/comments/myid/mytitle
//welcome to the comments page
//in console -> { subredditName: 'yahoo', id: 'myid', title: 'mytitle' }
app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("Welcome to the comments page");
});



//message for a non defined route (*), it will match wherever is typed
//if this route is not defined it will show '/jdlkjfal' -> cannot get /jdlkjfal
//or wherever is typed. Needs to be placed at the end to prevent it from 
//override the other requests
app.get('*', function(req, res){
    res.send("ERROR: page not found");
});



/*---------------SERVER-----------------*/
//Tell express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){        //tells express to listen on a particular cloud9 port and IP
    console.log("Server started!");
});        
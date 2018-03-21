var express = require ("express");
var app = express();
var bodyParser = require("body-parser");


app.use(express.static("public"));              //tells express to serve the contents of public directory
app.set("view engine", "ejs");                  //if added, no need to specify file.js when rendering (home.js, love.js...)         
app.use(bodyParser.urlencoded({extended: true}));


var friends = ["Tony", "Miranda", "Lily", "Justin"];            //move it to a place where is visible to all routes



/*----------ROUTES-----------*/
app.get("/", function(req,res){
   res.render("home"); 
});

            
app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar:thing});            //pass thingVar as an object to love.ejs
});


app.get("/posts", function(req, res){
   var postsVar = [
            {title: "post 1", author:"author 1"},
            {title: "post 2", author:"author 2"},
            {title: "post 3", author:"author 3"},
       ]; 
       
    res.render("posts", {posts: postsVar});           //posts is what is called in the template
});

app.get("/friends", function(req, res){
   //var friends = ["Tony", "Miranda", "Lily", "Justin"];
   res.render("friends", {friends: friends});
});


//POST
app.post("/addfriend", function(req, res){
    var newFriend = req.body.newfriend;                //req.body is an object that contains all the data from the request body
                                                    //req.body  will be undefined without body parser before: 'undefined' -- after { newfriend: 'bob' }
    friends.push(newFriend);
    //res.send("You have reached the POST page!");
    res.redirect("/friends");
});


/*----------SERVER------------*/
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("listening for EJS-Demo");
});
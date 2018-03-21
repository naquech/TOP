var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer");

var app = express();


//App Config
mongoose.connect("mongodb://localhost/restfulblogapp");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());                        //needs to be after body-parser
app.use(methodOverride("_method"));



//DB (mongoose) Schema / Model config
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema); 

/* db test
Blog.create({
   title: "Test blog",
   image: "https://unsplash.com/photos/2_3c4dIFYFU",
   body: "Hello, this is a blog post",
});
*/



/* ----- RESTful routes ----- */

app.get("/", function(req, res){
   res.redirect("/blogs"); 
});


//Index
app.get("/blogs", function(req, res){
   Blog.find({}, function(err, blogs){
       if (err){
           console.log("Error!");
       } else {
           res.render("index", {blogs: blogs});
       }
   });
});


//New
app.get("/blogs/new", function(req, res){
   res.render("new"); 
});


//Create
app.post("/blogs", function(req, res){
    //sanitize
    req.body.blog.body = req.sanitize(req.body.blog.body);
    
   //create blog
   Blog.create(req.body.blog, function(err, newBlog){
      if(err){
          res.render("new");
      } else {
          //then, redirect to index
          res.redirect("/blogs");
      }
   });
});


//Show
app.get("/blogs/:id", function(req, res){
   Blog.findById(req.params.id, function(err, foundBlog){
       if(err){
           res.redirect("/blogs");
       } else{
           res.render("show", {blog: foundBlog});
       }
   });
});


//Edit
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.render("edit", {blog: foundBlog});
        }
    });
});


//Update - uses method-override
app.put("/blogs/:id", function(req, res){
    //sanitize
    req.body.blog.body = req.sanitize(req.body.blog.body);
    
  // res.send("Update route"); 
  Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updateBlog){
     if(err){
         res.redirect("/blogs");
     } else{
         res.redirect("/blogs/" + req.params.id);
     }
  });
});


//Delete - uses method-override
app.delete("/blogs/:id", function(req, res){
   //res.send("this is the destroy route!"); 
   Blog.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/blogs");
      } else{
          res.redirect("/blogs");
      }
   });
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Blog server is running...");
});
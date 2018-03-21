var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");               //cat_app is the name of the db


//define what a cat looks like
var catSchema = new mongoose.Schema({
   name: String,
   age: Number,
   temperament: String,
});

//save the model to an object variable 
var Cat = mongoose.model("Cat", catSchema);             //check schema types mongoose - will create a collection of Cats


//add a new cat to db
// var newCat = new Cat({              //newCat is the name of the variable in JS
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil",
// });

// newCat.save(function(err, cat){             //cat is what we get from the db
//   if(err){
//       console.log("Something went wrong!");
//   } else {
//       console.log("Cat saved to the database:")
//       console.log(cat);
//   }
// });


//another method that crates and saves at once
Cat.create({
   name:"Snow White",
   age: 15,
   temperament: " Bland",
}, function(err, cat){
        if(err){
            console.log("Something went wrong!");
        } else {
            console.log("Cat saved to the database:"),
            console.log(cat);
   }
});



//retrieve all cats from db
Cat.find({}, function(err, cats){
   if(err){
       console.log("Oh No, Error!");
       console.log(err);
   } else{
       console.log("All the cats...");
       console.log(cats);
   }
});
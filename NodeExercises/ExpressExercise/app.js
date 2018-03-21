var express = require("express");
var app = express();


/*-----------ROUTES-----------*/
//visiting "/" shpuld print "Hi there, welcome to my assignment!"
app.get('/', function(req, res){
    res.send("Hi there, welcome to my assignment!")
});

//visiting "/speak/pig" should print "the pug says oink"
//visiting "/speak/cow" should print "the pug says moo"
//visiting "/speak/dog" should print "the pug says woof woof"
app.get('/speak/:animal', function(req, res){
    
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof",
        cat: "meow"
    };
    
    var userAnimal = req.params.animal.toLowerCase();
    var sound = sounds[userAnimal];
    res.send("The " + userAnimal + " says '" + sound + "'");
});


//visiting "repeat/hello/3" should print "hello hello hello" 
//visiting "repeat/hello/5" should print "hello hello hello hello hello hello" 
//visiting "repeat/blah/2" should print "blah blah" 
app.get('/repeat/:word/:times', function(req, res){
    var userWord = req.params.word;
    var userTimes = Number(req.params.times);
    var result = "";
    
    for (var i=0; i<userTimes; i++){
        result += userWord + " ";             //cannot have a response (res.send) here, will only work one time.
    }
    
    res.send(result);
});




app.get('*', function(req, res){
   res.send("Sorry, page not found!") 
});



/*-----------SERVER-----------*/
app.listen(process.env.PORT, process.env.IP, function(){        
    console.log("Server started!");
}); 

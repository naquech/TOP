//install package npm install request

var request = require('request');


console.log("Sunset is Hawaii is at... ");
//request('http://www.google.com', function(error, response, body){
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(error, response, body){   //yahoo weather endpoint
//request('http://www.googlejdlakjd.com', function(error, response, body){ 
   if (!error && response.statusCode == 200){                                                          // if (!error && response.statusCode == 200){
           var parsedData = JSON.parse(body);                   //body is a string, so it's parsed to a js object taht we can manipulate
           console.log(parsedData["query"]["results"]["channel"]["astronomy"]["sunset"]);
   }
});
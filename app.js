// building node.js express server

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'))

app.get("/", function(req, res){
  console.log("hit router")
})

app.listen(3000, "localhost");

console.log("server is running on localhost 3000")
var express = require("express");
var http = require("http");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.get("/index.html", function(req, res){
  res.render("index");
});

app.get("*", function(req,res){
 res.writeHead(200,{ "Content-Type": "application/json" }); 
 var ret = {
     ipaddress: req.get('X-Forwarded-For'),
     language: req.get('Accept-Language'),
     software: req.get('User-Agent')
 }
 res.end(JSON.stringify(ret));
});

http.createServer(app).listen(process.env.PORT);
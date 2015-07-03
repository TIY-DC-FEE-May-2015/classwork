var express = require('express');
var path = require('path');

var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

var simpleResource = require("./simple_resource")

/*
  Creates a simple resource list in memory
  Creates backbone-friendly rest routes:
  GET /movie
  GET /movie/:id
  POST /movie
  PUT /movie/:id
  DELETE /movie/:id
*/
app.use(simpleResource("page"))

module.exports = app;

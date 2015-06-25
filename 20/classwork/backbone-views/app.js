var express = require('express');
var path = require('path');

var app = express();

var u = require("underscore")

var bodyParser = require('body-parser');
var multer = require('multer'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

app.get("/donut", function(req, res){
  res.json(donutList)
})

app.get("/donut/:id", function(req, res){
  var id = parseInt(req.params.id)

  var donut = u.find(donutList, function(donut){
    return donut.id === id
  })

  res.json(donut)
})

app.post("/donut", function(req, res){
  var donutData = req.body
  idCounter += 1

  donutData.id = idCounter
  donutList.push(donutData)
  
  res.json(donutData)
})

app.put("/donut/:id", function(req, res){
  var id = parseInt(req.params.id)

  var donutData = req.body

  donutList = u.reject(donutList, function(donut){
    return donut.id === id
  })

  donutList.push(donutData)

  res.json(donutData)
})

app.delete("/donut/:id", function(req, res){
  var id = parseInt(req.params.id)

  donutList = u.reject(donutList, function(donut){
    return donut.id === id
  })

  res.json("OK")
})

var donutList = [
  { id: 1, name: "Jelly Donut", hole: false },
  { id: 2, name: "Boston Creme", hole: false },
  { id: 3, name: "Vanilla w/ Sprinkles", hole: true },
  { id: 4, name: "Old Fashioned", hole: true }
]
var idCounter = donutList.length

module.exports = app;

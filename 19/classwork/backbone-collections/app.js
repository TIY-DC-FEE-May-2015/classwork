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

app.get("/beer", function(req, res){
  res.json(beerList)
})

app.get("/beer/:id", function(req, res){
  var id = parseInt(req.params.id)

  var beer = u.find(beerList, function(beer){
    return beer.id === id
  })

  res.json(beer)
})

app.post("/beer", function(req, res){
  var beerData = req.body
  idCounter += 1

  beerData.id = idCounter
  beerList.push(beerData)
  
  res.json(beerData)
})

app.put("/beer/:id", function(req, res){
  var id = parseInt(req.params.id)

  var beerData = req.body

  beerList = u.reject(beerList, function(beer){
    return beer.id === id
  })

  beerList.push(beerData)

  res.json(beerData)
})

app.delete("/beer/:id", function(req, res){
  var id = parseInt(req.params.id)

  beerList = u.reject(beerList, function(beer){
    return beer.id === id
  })

  res.json("OK")
})

var beerList = [
  { id: 1, name: "Bell's Two Hearted", abv: 7 },
  { id: 2, name: "Edmund Fitzergald", abv: 5.6 },
  { id: 3, name: "Bud Light", abv: 4.2 },
  { id: 4, name: "O'Douls", abv: 0.45 }
]
var idCounter = beerList.length

module.exports = app;

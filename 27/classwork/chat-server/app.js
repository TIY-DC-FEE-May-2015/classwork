var express = require('express');
var path = require('path');

var moment = require('moment')

var app = express();

var userCollection, messageCollection

var MongoClient = require("mongodb").MongoClient
var url = "mongodb://heroku_9sm9cdmr:3v27n0c14f4i6rsl8i9a480s2h@ds047762.mongolab.com:47762/heroku_9sm9cdmr"
MongoClient.connect(url, function(err, db) {
  
  if (err) {
    console.log("Not connected because of", err)
  }
  else {
    messageCollection = db.collection("messages")
    userCollection = db.collection("users")
  }
  
});


var bodyParser = require('body-parser');
var multer = require('multer'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

app.get("/user", function(req, res){
  
  userCollection.find({}).toArray(function(err, users){

    if (err) {
      res.sendStatus(500)
      return
    }

    res.json(users)

  })

})

app.get("/messages/recent", function(req, res){
  
  messageCollection.find({
    timestamp: { "$gte": moment().subtract(4, "hours").toDate() }
  }).toArray(function(err, messages){

    if (err) {
      res.sendStatus(500)
      return
    }

    res.json(messages)

  })

})

app.post("/user", function(req, res){
  
  var submittedData = req.body

  if (!submittedData.username) {
    res.sendStatus(422)
    return
  }

  if (!submittedData.fullname) {
    submittedData.fullname = submittedData.username
  }

  if (!submittedData.status) {
    submittedData.status = "active"
  }

  userCollection.insert(submittedData, function(err, result){

    if (err) {
      res.sendStatus(500)
      return
    }

    res.json(result.ops)

  })

})

app.post("/message", function(req, res){

  var submittedData = req.body

  if (!submittedData.user_id) {
    res.sendStatus(422)
    return
  }

  if (!submittedData.text) {
    res.sendStatus(422)
    return
  }

  submittedData.timestamp = new Date()

  messageCollection.insert(submittedData, function(err, result){

    if (err) {
      res.sendStatus(500)
      return
    }

    res.json(result.ops)

  })

})

module.exports = app;

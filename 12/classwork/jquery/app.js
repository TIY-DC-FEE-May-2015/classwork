var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

var app_ideas = [
  "An app that comes up with app ideas for you",
  "Hotmail for emoji to ants",
  "Uber for pants",
  "Quora for people who use Quora",
  "Hacker News for people who aren't eating Soylent right now",
  "Reddit for people who aren't MRAs",
  "Reminders to tell us to tell Su Kim that she's awesome",
  "Get Kyle's Mom a birthday card"
]

app.get("/idea", function(req, res){
  var idea = app_ideas[Math.floor(Math.random() * app_ideas.length)]

  res.json({
    app_idea: idea 
  })
})

app.get("/idea/new", function(req, res){
  app_ideas.push(req.query.idea)

  res.json({
    app_idea: req.query.idea,
    added: true
  })
})

module.exports = app;

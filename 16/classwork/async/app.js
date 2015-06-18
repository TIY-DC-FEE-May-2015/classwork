var express = require('express');
var path = require('path');

var u = require('underscore');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'public/test.html'))
})

app.get("/book", function(req, res){
  res.json({ books: listOfBooks })
})

app.get("/book/:id", function(req, res){
  var book = u.find(listOfBooks, function(book){
    return book.id === parseInt(req.params.id)
  })

  res.json( book )
})

var listOfBooks = [
  { id: 1, title: "Catcher in the Rye", author: "JD Salinger", description: "Your favorite book as an angsty 15 year old that did not hold up well at all." },
  { id: 2, title: "Hatchet", author: "Gary Paulsen", description: "Survival training for elementary school kids" },
  { id: 3, title: "Harry Potter and the Philosopher's Stone", author: "JK Rowling", description: "Survival training for elementary school kids who are also gigantic dorks" },
  { id: 4, title: "Unbroken", author: "Some guy", description: "World War 2 kinda sucked" }
]

module.exports = app;
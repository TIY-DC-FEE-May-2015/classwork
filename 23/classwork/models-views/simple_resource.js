var express = require('express');
var u = require("underscore");

module.exports = function(resource) {

  var rows = [
    { id: 1, style: "Cabernet Sauvignon", color: "red", vineyard: "Gallo Estates", year: 2014, price: 11.99 },
    { id: 2, style: "Cabernet Blanc", color: "white", vineyard: "Cupcake Winery", year: 2014, price: 9.99 },
    { id: 3, style: "Pinot Noir", color: "red", vineyard: "Yellowtail", year: 2013, price: 6.99 },
    { id: 4, style: "Merlot Blend", color: "red", vineyard: "Beaujolais Noveau", year: 2015, price: 18.99 },
    { id: 5, style: "Ace of Spades", color: "white", sparkling: true, vineyard: "Armand de Brignac", year: 2001, price: 299.99 }
  ]
  var rowCounter = 5
  var router = express.Router();

  var findRow = function(id) {
    var id = parseInt(id)

    return u.find(rows, function(row){
      return row.id === id
    })
  }

  // List
  router.get("/" + resource, function(req, res, next){
    return res.json(rows)
  })

  // Get specific
  router.get("/" + resource + "/:id", function(req, res, next){
    var row = findRow(req.params.id)
    
    if (!row) {
      return next()
    }

    res.json(row)
  })

  // Create
  router.post("/" + resource, function(req, res, next){
    var newRow = req.body
    rowCounter++

    newRow.id = rowCounter

    rows.push(newRow)

    return res.json(newRow)
  })

  // Edit
  router.put("/" + resource + "/:id", function(req, res, next){
    var id = parseInt(req.params.id)
    var row = findRow(req.params.id)

    if (!row) {
      return next()
    }

    row = u.extend(row, req.body, {id: id})

    return res.json(row)
  })

  // Delete
  router.delete("/" + resource + "/:id", function(req, res, next){
    var id = parseInt(req.params.id)
    var deletedRow

    rows = u.filter(rows, function(row){
      if (row.id === id) {
        deletedRow = row
        return false
      }

      return true
    })
    
    return res.json(deletedRow)
  })

  return router

}



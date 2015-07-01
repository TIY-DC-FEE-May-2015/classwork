var express = require('express');
var u = require("underscore");

module.exports = function(resource) {

  var rows = []
  var rowCounter = 0
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

    row = u.extend({id: id}, row, req.body)
    
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



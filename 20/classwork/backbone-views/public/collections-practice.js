var Student = Backbone.Model.extend({

  defaults: {
    name: "Unnamed Student"
  }

})

var Collection = Backbone.Collection.extend({

  model: Student

})

var template = Handlebars.compile( $("#item-template").html() )

var updateViews = function(collection) {
  $("#item-container").empty()

  collection.each(function(student){
    $("#item-container").append( template(student.toJSON()) )
  })
}

App = {
  cohorts: {},
  templates: {},
  models: {},
  views: {}
}

$(document).on("ready", function(){
  summerCohort = new Collection([ 
    { name: "Amanda" }, 
    { name: "Ghaea" }, 
    { name: "Steve" }
  ])

  updateViews(summerCohort)

  summerCohort.on("add", function(){
    updateViews(this)
  })

  summerCohort.on("remove", function(){
    updateViews(this)
  })

})




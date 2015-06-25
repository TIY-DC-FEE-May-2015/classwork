// Dead simple donut model. Look ma, I'm empty
var Donut = Backbone.Model.extend({

})

// Dead simple donut collection.
var DonutBox = Backbone.Collection.extend({

  /* A collection with a url property will have the ability to
   automagically sync with the server with fetch and create
  
   It's constituent models will have the ability to automagically
   sync with the server with save and destroy
  
   One url property implies, to Backbone, FIVE routes with 
   various methods/paths; those routes all exist in our node app

   If those routes don't exist, Backbone will have a bad time
  */
  url: "/donut",

  // Which model should we use?
  model: Donut

})
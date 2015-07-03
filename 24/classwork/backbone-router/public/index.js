var Router = Backbone.Router.extend({

  routes: {
    "": "defaultRoute",
    "demo": "demoRoute",
    "page/:pageNumber": "pageRoute"
  },

  demoRoute: function() {
    console.log("we are on the demo route")
  },

  pageRoute: function(pageNumber) {
    console.log("page", pageNumber)
  },

  defaultRoute: function() {
    console.log("default route")
  }

})

var router = new Router()
Backbone.history.start()
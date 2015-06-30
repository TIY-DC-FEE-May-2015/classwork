var dispatcher = _.clone(Backbone.Events)

var AsteroidView = Backbone.View.extend({

  events: {
    "click": "clickedUpon"
  },

  className: "asteroid",

  initialize: function(viewData) {
    this.$el.addClass( viewData.size )
    
    this.$el.css({
      top: viewData.top + "px",
      left: viewData.left + "px"
    })
  },

  clickedUpon: function() {
    if (this.$el.hasClass("big")) {
      this.$el.removeClass("big").addClass("medium")
      dispatcher.trigger("asteroid:clicked", "medium")
    }
    else {
      if (this.$el.hasClass("medium")) {
        this.$el.removeClass("medium").addClass("small")
        dispatcher.trigger("asteroid:clicked", "small")
      }
      else {
        this.remove()
      }
    }
  }

})

$(document).on("ready", function(){

  var addAsteroidToPage = function(size) {
    var screenHeight = $("#game-container").height() - 100
    var screenWidth = $("#game-container").width() - 100

    var top = (Math.random() * screenHeight)
    var left = (Math.random() * screenWidth)

    var view = new AsteroidView({
      size: size,
      top: top,
      left: left
    })

    $("#game-container").append(view.$el)
  }

  addAsteroidToPage("big")
  addAsteroidToPage("big")
  addAsteroidToPage("big")
  addAsteroidToPage("big")

  dispatcher.on("asteroid:clicked", function(size){
    addAsteroidToPage(size)
  })

})
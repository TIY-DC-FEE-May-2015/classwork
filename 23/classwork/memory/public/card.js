// Using a common eventDispatcher for this project is a good idea.
var eventDispatcher = _.clone(Backbone.Events)


// todo
var Card = Backbone.View.extend({

  className: "card",

  // more todo
  events: {
    "click": "clickEvent"
  },

  // also todo
  initialize: function(viewData) {
    this.color = viewData.color
  },

  clickEvent: function() {
    eventDispatcher.trigger("clicked", this)
  },

  flipUp: function() {
    this.$el.css("background-color", this.color)
  },

  flipDown: function() {
    this.$el.css("background-color", "transparent")
  }

})
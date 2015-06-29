var GenericView = Backbone.View.extend({

  events: {
    "click .name": "clickName",
    "click .box-input": "clickCheckbox"
  },

  initialize: function(data) {
    this.render(data)
  },

  render: function(data) {
    this.data = data
    
    var htmlString = this.template(data)
    
    this.$el.html(htmlString)
  },

  clickName: function() {
    this.$el.find(".name").css("color", this.data.color)
  },

  clickCheckbox: function() {
    alert("You clicked on " + this.data.name)
  },

  template: Handlebars.compile( $("#generic-template").html() )

})


var view
$(document).on("ready", function(){

  view = new GenericView({
    color: "blue",
    name: "Claudia",
    className: "thisOneHasAClassName",
  })

  $("#container").append(view.$el)

  view = new GenericView({
    color: "green",
    name: "Tajaa",
  })

  $("#container").append(view.$el)

  view = new GenericView({
    color: "orange",
    name: "Scott",
  })

  $("#container").append(view.$el)

})
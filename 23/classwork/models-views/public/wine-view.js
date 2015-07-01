var WineView = Backbone.View.extend({

  events: {
    "click .top": "displayAllInformation",
    "click .edit-wine": "editInformation",
    "click .delete-wine": "deleteInformation"
  },

  className: "wine",

  initialize: function() {
    this.render()

    this.listenTo(this.model, "change", this.render)
  },

  render: function() {
    var attrs = this.model.toJSON()
    attrs.color = (attrs.color[0].toUpperCase()) + attrs.color.slice(1)

    var htmlString = this.template( attrs )
    this.$el.html( htmlString )
  },

  displayAllInformation: function() {
    console.log("display")
    this.$el.toggleClass("open")
  },

  editInformation: function() {
    dispatcher.trigger("editing", this.model)
  },

  deleteInformation: function(evt) {
    this.model.destroy()
    this.remove()
  },

  template: Handlebars.compile( $("#wine-template").html() )

})
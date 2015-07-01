var CatView = Backbone.View.extend({

  className: "cat",

  initialize: function() {
    this.render()

    this.listenTo(this.model, "change", this.render)
  },

  render: function() {
    var htmlString = this.template( this.model.toJSON() )
    this.$el.html( htmlString )
  },

  template: Handlebars.compile( $("#cat-template").html() )

})
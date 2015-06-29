var HeaderView = Backbone.View.extend({

  events: {
    "mouseover .tab": "mouseoverTab"
  },

  initialize: function(data) {
    this.render(data)
  },

  render: function(data) {
    this.data = data

    var htmlString = this.template(data)
    this.$el.html( htmlString )
  },

  mouseoverTab: function(evt) {
    this.$el.find(".tab").css({
      background: "transparent"
    })

    $(evt.target).css({
      "background": $(evt.target).attr('data-color')
    })
  },

  template: Handlebars.compile( $("#header-template").html() )

})
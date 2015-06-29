var FieldView = Backbone.View.extend({

  events: {
    "click .text-input": "clickInput"
  },

  initialize: function(data) {
    this.$container = data.$container

    this.render(data)
  },

  render: function(data) {
    this.$el.html( this.template(data) )

    this.$container.append( this.$el )
  },

  getValue: function() {
    return this.$el.find(".text-input").val()
  },

  clickInput: function() {
    this.$el.css('color', "green")
  },

  template: Handlebars.compile( $("#form-template").html() )

})
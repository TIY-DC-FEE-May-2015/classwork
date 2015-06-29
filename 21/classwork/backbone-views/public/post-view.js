var PostView = Backbone.View.extend({

  className: "post-container",

  initialize: function(data) {
    //this.$container = data.$container

    this.render(data)
  },

  render: function(data) {
    var templateData = {
      blurb: data.blurb,
      title: data.title,
      link: data.link,
      date: moment(data.date).format("MMMM D, YYYY")
    }

    this.$el.html( this.template(templateData) )

    //this.$container.append( this.$el )
  },

  template: Handlebars.compile( $("#post-template").html() )

})
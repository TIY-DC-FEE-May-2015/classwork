var Dispatcher = _.clone(Backbone.Events)

var DogView = Backbone.View.extend({

  events: {
    "click .dog-info": "clicked",
    "click .mascot-button": "clickedButton",
    "click .name-button": "clickedName"
  },

  className: "dog",

  initialize: function(viewData) {
    this.render(viewData)
  },

  render: function(viewData) {
    this.viewData = viewData

    this.$el.html( this.template(viewData) )
  },

  changeName: function(name) {
    this.viewData.name = name
    this.render(this.viewData)
  },

  changeMascot: function(company) {
    this.viewData.mascot = company
    this.render(this.viewData)
  },

  template: Handlebars.compile( $("#dog-template").html() ),

  clicked: function() {
    if (this.viewData.mascot) {
      alert(this.viewData.name + " is a mascot for " + this.viewData.mascot)
      this.$(".name-info").show()
    }
    else {
      this.$(".mascot-info").show()
    }
  },

  clickedButton: function() {
    var companyName = this.$(".mascot-input").val()
    Dispatcher.trigger("update:mascot", this, companyName)
  },

  clickedName: function() {
    var dogName = this.$(".name-input").val()
    Dispatcher.trigger("update:name", this, dogName)
  }

})

var dogs = []
$(document).on("ready", function(){

  $.ajax({
    method: "GET",
    url: "/dog",
    success: function(data) {

      dogs = _.map(data, function(dog){

        var view = new DogView(dog)

        $("#dogs-container").append( view.$el )

        return view

      })

    }
  })

  var updateDog = function(view, data) {
    $.ajax({
      url: "/dog/" + view.id,
      method: "PUT",
      data: data,
      success: function(data) {
        view.render(data)
      }
    })
  }

  Dispatcher.on("update:mascot", function(view, companyName){

    var viewData = view.viewData
    viewData.mascot = companyName

    updateDog(view, viewData)

  })

  Dispatcher.on("update:name", function(view, dogName){

    var viewData = view.viewData
    viewData.name = dogName

    updateDog(view, viewData)

  })

})


/*
  $.ajax({
    method: "POST",
    url: "/dog",
    data: {
      name: "Sparky",
      breed: "Newfie",
      isAGoodDog: true
    },
    success: function(data) {
      console.log(data)
    }
  })
*/

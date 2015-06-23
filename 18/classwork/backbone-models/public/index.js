var pizzas = {}
var template

$(document).on("ready", function(){

  template = Handlebars.compile( $("#pizza-template").html() )

  pizzas.grandma = new Pizza({ name: "Grandma Slice", hasToppings: true, hasSauce: true })
  pizzas.white = new Pizza({ name: "White Slice", hasToppings: true, hasCheese: true })
  pizzas.cheese = new Pizza({ name: "Boring Cheese Slice", hasCheese: true, hasSauce: true })
  pizzas.pepperoni = new Pizza({ name: "Literally Anything Else", hasCheese: true, hasSauce: true, hasToppings: true })

  $("#pizza-box").append( template(pizzas.grandma.toMenu()) )
  $("#pizza-box").append( template(pizzas.white.toMenu()) )
  $("#pizza-box").append( template(pizzas.cheese.toMenu()) )
  $("#pizza-box").append( template(pizzas.pepperoni.toMenu()) )

})

var Pizza = Backbone.Model.extend({

  defaults: {
    hasToppings: false,
    hasCheese: false,
    hasSauce: false
  },

  isBread: function() {
    if (this.get("hasToppings") === false &&
        this.get("hasCheese") === false &&
        this.get("hasSauce") === false) {
      return true
    }

    return false
  },

  toMenu: function() {
    return {
      name: this.get("name"),
      hasToppings: ( this.get("hasToppings") ? "This pizza has toppings" : "" ),
      hasSauce: ( this.get("hasSauce") ? "This pizza has sauce" : "" ),
      hasCheese: ( this.get("hasCheese") ? "This pizza has cheese" : "" )
    }
  },

  toJSON: function() {
    return _.extend({}, this.attributes, { isBread: this.isBread() })
  },

  rerender: function() {
    $("[data-pizza-type='" + this.get("name") + "']").remove()

    $("#pizza-box").append( template(this.toMenu()) )
  },

  initialize: function(data) {
    this.original = data

    this.on("change:hasToppings", this.rerender)
    this.on("change:hasCheese", this.rerender)
    this.on("change:hasSauce", this.rerender)
  }

})
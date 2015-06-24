var Beer = Backbone.Model.extend({

  defaults: {
    name: "Unnamed Beer",
    abv: 0,
    quantity: 0
  },

  urlRoot: "/beer",

  isNonAlcoholic: function() {
    return (this.get("abv") < .5)
  },

  increaseQuantity: function() {
    this.set({
      quantity: this.get("quantity") + 1
    })
  },

  decreaseQuantity: function() {
    if (this.get("quantity") > 0) {
      this.set({
        quantity: this.get("quantity") - 1
      })
    }
  },

  validate: function(attributes) {
    if (attributes.abv < 0) {
      return "What is negative ABV even"
    }
    if (attributes.quantity < 0) {
      return "You are not allowed to owe beers, you are a store"
    }
  },

  initialize: function() {
    this.on("change", function(){
      this.collection.updateViews()
    })
  }

})

var BeerStore = Backbone.Collection.extend({

  model: Beer,

  url: "/beer",

  initialize: function() {
    /*
    this.on("add", function(){
      console.log(arguments)
    })
    */
  },

  listNonAlcoholicBeers: function() {
    var naBeers = this.filter(function(beer){
      return beer.isNonAlcoholic()
    })

    return _.map(naBeers, function(beer){ return beer.get("name") })
  },

  comparator: function(beer){ return beer.get("quantity") * -1 },

  updateViews: function() {
    this.trigger("updated")
  }

})
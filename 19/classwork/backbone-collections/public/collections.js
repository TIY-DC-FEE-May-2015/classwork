var Beer = Backbone.Model.extend({

  defaults: {
    name: "Unnamed Beer",
    abv: 0,
    quantity: 0
  },

  isNonAlcoholic: function() {
    return (this.get("abv") < .5)
  },

  validate: function(attributes) {
    if (attributes.abv < 0) {
      return "What is negative ABV even"
    }
    if (attributes.quantity < 0) {
      return "You are not allowed to owe beers, you are a store"
    }
  }

})

var BeerStore = Backbone.Collection.extend({

  model: Beer,

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

  comparator: function(beer){ return beer.get("quantity") * -1 }

})

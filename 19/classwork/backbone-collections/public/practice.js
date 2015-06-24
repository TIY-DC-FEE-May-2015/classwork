var Slice = Backbone.Model.extend({

  defaults: {
    name: "Unknown Slice",
    hasSauce: true,
    hasCheese: true,
    hasGluten: true
  },

  validate: function(attrs) {
    if (attrs.hasGluten === false) {
      return "OMG it has gluten. It is a pizza. Why do you do this"
    }
  }

})

var PizzaBox = Backbone.Collection.extend({

  sliceList: function() {
    var sliceCount = {}

    this.each(function(slice){
      if (sliceCount[ slice.get("name") ]) {
        sliceCount[ slice.get("name") ] += 1
      }
      else {
        sliceCount[ slice.get("name") ] = 1
      }
    })

    var sliceText = _.map(sliceCount, function(value, key){
      if (value > 1) {
        return value + " " + key + "s"
      }

      return value + " " + key
    })

    sliceText[(sliceText.length - 1)] = "and " + sliceText[(sliceText.length - 1)]

    return sliceText.join(", ")
  }

})

var box = new PizzaBox([
  { name: "Italian Meat" },
  { name: "Cheese Slice" },
  { name: "Cheese Slice" },
  { name: "Eggplant Parm" },
  { name: "Cheese Slice" },
  { name: "Grandma Slice", hasCheese: false },
  { name: "Eggplant Parm" }
])
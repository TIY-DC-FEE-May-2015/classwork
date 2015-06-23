var Person = Backbone.Model.extend({

  defaults: {
    name: "Unknown Person",
    age: 0,
    male: undefined,
    height: "4'0"
  },

  validate: function(attributes) {
    if (attributes.age < 13) {
      return "Users must be over the age of 13"
    }
  },

  initialize: function(attributes, options) {
    
  }

})

var adult = new Person({
  name: "Kyle Hill",
  age: 31,
  male: true
})

var kid = new Person({
  name: "Cora Lashof-Sullivan",
  age: 0.003,
  male: false,
  height: "tiny"
})


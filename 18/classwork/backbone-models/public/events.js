var Farm = Backbone.Model.extend({

  initialize: function(attrs) {
    this.animals = []

    this.on("animal:add", this.renderAnimalPen)
    this.on("animal:remove", this.renderAnimalPen)
  },

  hasAnimal: function(animalName) {
    var animal = _.find(this.animals, function(animal){
      return animal === animalName
    })

    return !!(animal)
  },

  addAnimal: function(animalName) {
    if (this.hasAnimal(animalName)) {
      return
    }

    this.animals.push(animalName)

    this.trigger("animal:add", animalName)
  },

  removeAnimal: function(animalToRemove) {
    if (!this.hasAnimal(animalToRemove)) {
      return
    }

    this.animals = _.reject(this.animals, function(animalName){
      return animalName === animalToRemove
    })

    this.trigger("animal:remove", animalToRemove)
  },

  renderAnimalPen: function() {
    /*
    $("#animal-pen").html("")

    _.each(this.animals, function(animalName){
      $("#animal-pen").append("<div class='animal'>" + animalName + "</div>")
    })
    */
  }

})

var FarmSecurity = Backbone.Model.extend({

  clients: [],

  addClient: function(farm) {
    this.clients.push(farm)

    this.listenTo(farm, "animal:add animal:remove", this.displayFarmData)
  },

  displayFarmData: function() {
    $("#farm-list").empty()

    _.each(this.clients, function(farm){

      $("#farm-list").append( template({
        name: farm.get("name"),
        animals: farm.animals
      }) )

    })
  },

})

var template

var kylesPettingZoo = new Farm({ name: "Kyle's Petting Zoo" })
kylesPettingZoo.addAnimal("Cow")
kylesPettingZoo.addAnimal("Sheep")

var tajsPettingZoo = new Farm({ name: "Taj's Petting Zoo" })
tajsPettingZoo.addAnimal("So Many Goose")

var farmSecurityCo = new FarmSecurity()
farmSecurityCo.addClient(kylesPettingZoo)
farmSecurityCo.addClient(tajsPettingZoo)

$(document).on("ready", function(){

  template = Handlebars.compile( $("#farm-template").html() )

})











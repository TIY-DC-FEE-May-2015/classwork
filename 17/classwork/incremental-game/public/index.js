// Class Definition
var ThingToBuy = function(options) {

  this.name = options.name
  this.cost = options.cost
  this.benefit = options.benefit

  this.owned = 0

  this.getBenefit = function() {
    return this.owned * this.benefit
  }

  this.incrementOwned = function() {
    this.owned += 1
  }

}

// Class Definition
var IncrementalItem = function(options) {

  this.data = new ThingToBuy(options)

  var htmlString = templates.item( this.data )
  this.$div = $(htmlString)

  $("#item-container").append(this.$div)

  var clickListener = function(){
    this.data.incrementOwned()
  }

  var boundClickListener = clickListener.bind(this)

  this.$div.on("click", boundClickListener)

}

var templates = {}

var items = {}

$(document).on("ready", function(){

  templates.item = Handlebars.compile( $("#item-template").html() )

  items.litterBox = new IncrementalItem({
    name: "Litter Box",
    cost: 10,
    benefit: 1
  })
  items.jinglyToy = new IncrementalItem({
    name: "Jingly Toy",
    cost: 50,
    benefit: 4
  })

})
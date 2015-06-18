var kibblesAndBitcoins = 0
var highestTotal = 0
var templates = {}
var catalog = {}

var Purchaseable = function(options) {
  this.name = options.name
  this.cost = options.cost
  this.cps = options.cps
  this.owned = 0

  var htmlString = templates.purchaseable(this)
  this.$item = $(htmlString)

  this.$item.on("click", (function(){
    console.log(this)

    if (kibblesAndBitcoins < this.cost) {
      return
    }

    this.owned += 1
    kibblesAndBitcoins -= this.cost
    var htmlString = templates.purchaseable(this)
    this.$item.html(htmlString)

    updateHeader()
  }).bind(this))
}

var updateHeader = function() {
  var elem = document.getElementById("currency-count")
  elem.innerText = kibblesAndBitcoins
  //$("#currency-count").text(kibblesAndBitcoins)

  if (kibblesAndBitcoins > highestTotal) {
    highestTotal = kibblesAndBitcoins
  }

  if (highestTotal >= 5 && catalog["Button-Operated Hatchet"] === undefined) {
    catalog["Button-Operated Hatchet"] = new Purchaseable({
      name: "Button-Operated Hatchet", 
      cost: 20, 
      cps: 1
    })

    $("#purchaseables").append( catalog["Button-Operated Hatchet"].$item )
  }

  if (highestTotal >= 20 && catalog["Laser Pointer"] === undefined) {
    catalog["Laser Pointer"] = new Purchaseable({
      name: "Laser Pointer", 
      cost: 50, 
      cps: 3
    })

    $("#purchaseables").append( catalog["Laser Pointer"].$item )
  }

  if (highestTotal >= 100 && catalog["Turbo Catnip"] === undefined) {
    catalog["Turbo Catnip"] = new Purchaseable({
      name: "Turbo Catnip", 
      cost: 300, 
      cps: 10
    })

    $("#purchaseables").append( catalog["Turbo Catnip"].$item )
  }
}

var catClicked = function(){
  kibblesAndBitcoins++
  updateHeader()
}

var harvestCoins = function() {
  for (var itemName in catalog) {
    var item = catalog[itemName]
    kibblesAndBitcoins += (item.cps * item.owned)
  }
  updateHeader()
}

$(document).on("ready", function(){

  $("#clicky-thing").on("click", catClicked)

  // Compile Templates
  templates.purchaseable = Handlebars.compile( $("#purchaseableTemplate").html() )

  setInterval(harvestCoins, 1000)

})






/*
var addPurchaseable = function(options) {
  var data = {
    name: options.name,
    cost: options.cost,
    cps: options.cps,
    owned: 0
  }

  var htmlString = templates.purchaseable(data)

  var $item = $(htmlString)

  $item.on("click", function(){
    if (kibblesAndBitcoins < data.cost) {
      return
    }

    data.owned += 1
    kibblesAndBitcoins -= data.cost
    var htmlString = templates.purchaseable(data)
    $item.html(htmlString)

    updateHeader()
  })

  $("#purchaseables").append($item)

  catalog[data.name] = data
}
*/



/* Stuff we did for demo purposes */
var demoObject = {
  a: 42,
  b: function(x, y, z) { console.log(this.a, x, y, z) }
}

var a = 14
var b = function() { console.log(this.a) }

var Cat = function(catName) {

  this.isACat = true
  this.catName = catName

  this.meow = function() {
    console.log(this)
    console.log(this.catName + "says: meoooooow")
  }

}
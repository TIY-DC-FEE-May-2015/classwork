var updateView = function(collection) {
  var template = Handlebars.compile( $("#beer-template").html() )

  $("#beer-list").empty()  

  collection.each(function(beer){
    var beerData = beer.toJSON()

    var $div = $( template(beerData) )

    $div.find(".increase-button").on("click", function(){
      beer.increaseQuantity()
      console.log(beer)
    })

    $div.find(".decrease-button").on("click", function(){
      beer.decreaseQuantity()
      console.log(beer)
    })

    $div.find(".delete-button").on("click", function(){
      beer.destroy()
      console.log(beer)
    })

    $("#beer-list").append($div)
  })
}

$(document).on("ready", function(){

  var beerStore = new BeerStore()
  
  beerStore.on("updated", function(){
    updateView(this)
  })

  beerStore.on("remove", function(){
    updateView(this)
  })

  beerStore.fetch({
    success: updateView
  })

})
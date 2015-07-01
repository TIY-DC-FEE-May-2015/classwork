var wines
var activeWine
var dispatcher = _.clone(Backbone.Events)

var toggleContainerView = function() {
  $(".container").toggleClass("active")
}

$(document).on("ready", function(){

  wines = new WineShop()

  wines.on("add", function(wineModel){

    var view = new WineView({
      model: wineModel
    })

    $("#wine-list-container").append(view.$el)

  })

  wines.fetch()

  var editView = new EditWineView({
    el: $("#wine-edit-container")[0]
  })

  $("#add-wine-button").on("click", function(){

    toggleContainerView()
    
    editView.updateInputFields()
    
    activeWine = false

  })

  dispatcher.on("editing", function(wineModel){
    toggleContainerView()
    editView.updateInputFields(wineModel.toJSON())
    activeWine = wineModel
  })

  dispatcher.on("toggle:container", toggleContainerView)

})
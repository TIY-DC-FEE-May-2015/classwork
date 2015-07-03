var wines
var activeWine
var editView
var dispatcher = _.clone(Backbone.Events)

var Router = Backbone.Router.extend({

  routes: {
    "": "viewWineList",
    "view": "viewWineList",
    "edit": "editWine",
    "add": "addWine"
  },

  viewWineList: function() {
    $(".container").removeClass("active")
    $("#wine-list-container").addClass("active")
  },

  editWine: function() {
    $(".container").removeClass("active")
    $("#wine-edit-container").addClass("active")
  },

  addWine: function() {
    $(".container").removeClass("active")
    $("#wine-edit-container").addClass("active")

    editView.updateInputFields()

    activeWine = false
  }

})


$(document).on("ready", function(){

  wines = new WineShop()

  wines.on("add", function(wineModel){

    var view = new WineView({
      model: wineModel
    })

    $("#wine-list-container").append(view.$el)

  })

  wines.fetch()

  editView = new EditWineView({
    el: $("#wine-edit-container")[0]
  })

  $("#add-wine-button").on("click", function(){

    router.navigate("add", { trigger: true })
    
  })

  dispatcher.on("editing", function(wineModel){
    router.navigate("edit", { trigger: true })
    editView.updateInputFields(wineModel.toJSON())
    activeWine = wineModel
  })

  dispatcher.on("toggle:container", function(){
    router.navigate("view", { trigger: true })
  })

  var router = new Router()
  Backbone.history.start()

})
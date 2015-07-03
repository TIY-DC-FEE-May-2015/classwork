var cats

$(document).on("ready", function(){

  cats = new CatStore()

  cats.on("add", function(catModel){

    var view = new CatView({
      model: catModel
    })

    $("#cat-list-container").append(view.$el)

  })

})
var App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
}

$(document).on("ready", function(){

  App.readView = new App.Views.Read()
  App.writeView = new App.Views.Write()

  App.book = new App.Collections.Book()
  App.book.fetch({

    success: function() {
      App.router = new App.Routers.MainRouter()
      Backbone.history.start()
    }

  })

})
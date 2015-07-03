App.Routers.MainRouter = Backbone.Router.extend({

  routes: {
    "write": "writePage",
    "write/:pageNumber": "writePage",
    "read/:pageNumber": "readPage",
    "toc": "tableOfContents",
    "": "tableOfContents"
  },

  writePage: function(pageNumber) {
    $(".view").hide()
    $("#write-page-view").show()

    App.writeView.newPage(pageNumber)
  },

  readPage: function(pageNumber) {
    $(".view").hide()
    $("#read-page-view").show()
    
    var pageNum = parseInt(pageNumber)
    
    var pageModel = App.book.find(function(page){
      return page.get("page") === pageNum
    })

    if (pageModel) {
      App.readView.updatePage( pageModel )
      return
    }

    this.navigate("write/" + pageNum, { trigger: true })
  },

  tableOfContents: function() {
    $(".view").hide()
    $("#contents-view").show()

    $("#link-container").empty()

    App.book.sort()

    App.book.each(function(pageModel){

      var view = new App.Views.TableOfContents({
        model: pageModel
      })

      $("#link-container").append( view.$el )

    })
  }

})
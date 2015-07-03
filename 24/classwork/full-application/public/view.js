App.Views.TableOfContents = Backbone.View.extend({

  className: "page-link",

  initialize: function() {
    this.render()
  },

  render: function() {
    this.$el.html( this.template( this.model.tableOfContents() ) )
  },

  template: Handlebars.compile( $("#page-link-template").html() )

})

App.Views.Read = Backbone.View.extend({

  el: document.getElementById("read-page-view"),

  updatePage: function(pageModel) {
    this.$el.html( this.template( pageModel.toJSON() ) )
  },

  template: Handlebars.compile( $("#page-content-template").html() )

})

App.Views.Write = Backbone.View.extend({

  events: {
    "click .finish-page": "savePage"
  },

  el: document.getElementById("write-page-view"),

  newPage: function(writeNumber) {
    $("input, textarea").val("")
    $("#write-page-number").val(writeNumber)
  },

  savePage: function() {
    var pageNum = parseInt($("#write-page-number").val())

    var existingPage = App.book.find(function(pageInBook){
      return pageInBook.get("page") === pageNum
    })

    if (existingPage) {
      this.$(".row.page-num").addClass("invalid")
      return
    }

    var pageData = {
      page: pageNum,
      content: $("#write-page-content").val(),
      links: [
        {
          page: parseInt($("#write-link1-page").val()),
          action: $("#write-link1-action").val()
        },
        {
          page: parseInt($("#write-link2-page").val()),
          action: $("#write-link2-action").val()
        }
      ]
    }

    // Creation point
    App.book.create(pageData)

    App.router.navigate("read/" + pageNum, { trigger: true })
  }

})
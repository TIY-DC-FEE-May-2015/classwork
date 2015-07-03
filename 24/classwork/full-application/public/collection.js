App.Collections.Book = Backbone.Collection.extend({

  model: App.Models.Page,

  url: "/page",

  comparator: "page"

})
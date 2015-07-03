App.Models.Page = Backbone.Model.extend({

  validate: function(attributes) {
    if (attributes.content.length === 0) {
      return "Page content is required"
    }
  },

  tableOfContents: function() {
    var content = this.get("content")

    content = content.split(" ")

    if (content.length > 10) {
      content = _.first(content, 10).join(" ") + "..."
    }
    else {
      content = content.join(" ")
    }
    
    return {
      page: this.get("page"),
      content: content
    }
  }

})
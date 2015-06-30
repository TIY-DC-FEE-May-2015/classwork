var Rot13View = Backbone.View.extend({

  events: {
    "click .input-button": "buttonClicked"
  },

  buttonClicked: function() {
    var inputText = this.$(".input-text").val()
    var outputText = this.translateText( inputText )

    this.$(".output-text").text(outputText)
  },

  translateText: function(string) {
    var letters = string.split("")

    return _.map(letters, function(letter){

      var code = letter.charCodeAt(0)

      // Capital Letter
      if (code >= 65 && code <= 90) {
        if (code <= 77) {
          return String.fromCharCode(code + 13)
        }

        return String.fromCharCode(code - 13)
      }

      // Lowercase Letter
      if (code >= 97 && code <= 122) {
        if (code <= 109) {
          return String.fromCharCode(code + 13)
        }

        return String.fromCharCode(code - 13)
      }

      // Number or punctuation or something else
      return letter

    }).join("")
  }

})

var view
$(document).on("ready", function(){

  view = new Rot13View({
    el: $(".view-container")[0]
  })

  view = new Rot13View({
    el: $(".view-container")[1]
  })

})
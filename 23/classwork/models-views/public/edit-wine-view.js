var EditWineView = Backbone.View.extend({

  events: {
    "click #save-button": "saveButton"
  },

  updateInputFields: function(data) {
    data = data || {}

    $("#input-winery").val( data.vineyard )
    $("#input-style").val( data.style )
    $("#input-year").val( data.year )
    $("#input-price").val( data.price )

    $("#input-color").val( data.color )

    $("#input-sparkling").prop( "checked", data.sparkling )
  },

  saveButton: function() {
    if (activeWine) {

      activeWine.set({
        vineyard: $("#input-winery").val(),
        style: $("#input-style").val(),
        year: $("#input-year").val(),
        price: $("#input-price").val(),
        color: $("#input-color").val(),
        sparkling: $("#input-sparkling").is(":checked")
      })

      activeWine.save()

    }

    else {

      wines.create({
        vineyard: $("#input-winery").val(),
        style: $("#input-style").val(),
        year: $("#input-year").val(),
        price: $("#input-price").val(),
        color: $("#input-color").val(),
        sparkling: $("#input-sparkling").is(":checked")
      })

    }

    dispatcher.trigger("toggle:container")
  }

})
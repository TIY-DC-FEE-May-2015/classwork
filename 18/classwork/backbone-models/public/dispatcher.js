var dispatcher = _.clone(Backbone.Events)

var Candy = Backbone.Model.extend({

  defaults: {
    name: "Mystery Candy",
    price: 0,
    quantity: 0
  },

  initialize: function() {
    this.on("change", function(){
      dispatcher.trigger("candy:changed", this)
    })

    dispatcher.trigger("candy:created", this)
  }

})


$(document).on("ready", function(){

  var template = Handlebars.compile( $("#candy-template").html() )

  var candyCollection = []

  var clickHandler = function() {
    var cid = $(this).attr("data-candy")

    var candy = _.find(candyCollection, function(candy) {
      return candy.cid === cid
    })

    console.log(candy)
  }

  dispatcher.on("candy:created", function(candy){
    var htmlString = template(candy)
    var $candy = $(htmlString)
    $("#candy-store").append( $candy )

    $candy.on("click", clickHandler)
  })

  dispatcher.on("candy:changed", function(candy){
    $("[data-candy='" + candy.cid + "']").remove()
    
    var htmlString = template(candy)
    var $candy = $(htmlString)
    $("#candy-store").append( $candy )

    $candy.on("click", clickHandler)
  })

  $("#candy-button").on("click", function(){
    var candyName = $("#new-candy").val()
    var c = new Candy({ name: candyName })

    candyCollection.push(c)
  })


})




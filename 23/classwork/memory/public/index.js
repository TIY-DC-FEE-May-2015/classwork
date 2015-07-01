$(document).on("ready", function(){

  // Create a 16-member array with 2 each of eight colors
  var colors = [ 
    "red", "red", 
    "blue", "blue", 
    "green", "green", 
    "yellow", "yellow", 
    "purple", "purple", 
    "orange", "orange",
    "gray", "gray",
    "black", "black"
  ]

  // Shuffle that array
  colors = _.shuffle(colors)

  // Create an array of Card views based on the randomized color array
  _.each(colors, function(color){

    // Instantiate a new card view
    var card = new Card({ 
      color: color 
    })

    // Append that card view into the page
    $("#card-container").append( card.$el )

    // Return it (from the map iterator)
    return card

  })

  var card1, card2, clickCount = 0, matches = 0
  
  eventDispatcher.on("clicked", function(view){
    clickCount++

    if (clickCount === 1) {
      card1 = view
      card1.flipUp()
    }

    if (clickCount === 2) {
      card2 = view
      card2.flipUp()
    }

    if (clickCount === 3) {
      clickCount = 0

      // Check to see if its the same card twice
      if (card1.cid === card2.cid) {
        card1.flipDown()
        return
      }

      // Check to see if the colors match
      if (card1.color === card2.color) {
        card1.remove()
        card2.remove()
        matches++

        if (matches === 8) {
          alert("you are winnar")
        }
      }
      else {
        card1.flipDown()
        card2.flipDown()
        return
      }

    }

  })

})
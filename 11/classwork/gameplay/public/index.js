// Globally-accessible variables for the level, and all the timeouts
var timeouts = {}
var level = 1

// Function to add a new hippo to the game...
var addAHippo = function() {
  // Create a new <div class='hippo'>
  var $newHippo = $("<div class='hippo'></div>")
  // Append it to the container
  $(".game-container").append($newHippo)
}

// Function to add a new oyster to the game...
var addAnOyster = function() {
  // Create a new <div class='oyster'>
  var $newOyster = $("<div class='oyster'></div>")
  // Make a listener -- when this is mousedover, execute the 
  // mouseoverOyster function
  $newOyster.on("mouseover", mouseoverOyster)
  // Append it to the container
  $(".game-container").append($newOyster)
}

// Function executed when an oyster is mousedover...
var mouseoverOyster = function() {
  // Remove a single hippo
  $(".hippo:first").remove()
  
  // If there are no hippos remaining,
  if ($(".hippo").length === 0) {
    // add one to the current level
    level = level + 1

    // and initialize the new level
    initializeLevel(level)
  }

  // Check the current height and width of the window
  var containerHeight = $(".game-container").height()
  var containerWidth = $(".game-container").width()

  // Generate new coordinates (top and left) by generating a random number
  // between 0 and (screen width/height) - (width/height of oyster image)
  var leftProperty = (Math.random() * (containerWidth - 70))
  var topProperty = (Math.random() * (containerHeight- 70))

  // Set the new coordinates for the oyster
  $(".oyster").css({
    left: leftProperty + "px",
    top: topProperty + "px"
  })
}

// Function to start a new level...
var initializeLevel = function(level) {
  // Add (5 + level number) hippos
  for (var i = 0; i < (level + 5); i++) {
    addAHippo()
  }

  // Change the background to a random color
  // Generate 3 0-255 integers for RGB values
  var r = Math.round( Math.random() * 255 )
  var g = Math.round( Math.random() * 255 )
  var b = Math.round( Math.random() * 255 )

  // Set the background color to that composite value
  $(".game-container").css("background-color", "rgb(" + r + "," + g + "," + b + ")")

  // Reset how much hippos move (since the random walk delta increases)
  clearInterval(timeouts.hippoMove)

  // Start the "move all of the hippos" interval -- run every .5 seconds
  timeouts.hippoMove = setInterval(function(){

    // Check the current height and width of the window
    var containerHeight = $(".game-container").height()
    var containerWidth = $(".game-container").width()

    // For each of the <div class='hippo'>,
    $(".hippo").each(function(){
      // Create a reference to this specific hippo
      var $hippo = $(this)

      // Calculate the maximum delta in top/left/bottom/right movement
      // Higher levels = more movement per step
      var moveAmount = 75 + (level * 25)

      // Generate the relative movement for the hippo for top and left
      // Must move between (moveAmount and -moveAmount)
      var deltaTop = (Math.random() * (2 * moveAmount)) - moveAmount
      var deltaLeft = (Math.random() * (2 * moveAmount)) - moveAmount

      // Find the current top/left coordinates of the hippo
      var currentTop = parseFloat($hippo.css("top"))
      var currentLeft = parseFloat($hippo.css("left"))

      // Calculate the new, hypothetical coordinates of the hippo
      // by adding the top/left deltas to the current coordinates
      var topProperty = (deltaTop + currentTop)
      var leftProperty = (deltaLeft + currentLeft)
      
      // Prevent the hippo from going off the top of the screen
      if (topProperty < 0) {
        topProperty = 0
      }
      // Prevent the hippo from going off the bottom of the screen
      if (topProperty + 70 > containerHeight) {
        topProperty = (containerHeight - 70)
      }

      // Prevent the hippo from going off the left side of the screen
      if (leftProperty < 0) {
        leftProperty = 0
      }
      // Prevent the hippo from going off the right side of the screen
      if (leftProperty + 70 > containerWidth) {
        leftProperty = (containerWidth - 70)
      }

      // Set the new coordinates for the hippo
      $hippo.css({
        "top": topProperty + "px",
        "left": leftProperty + "px"
      })
    })
    
  }, 500)
}

// Function to start a new game...
var initializeGame = function() {

  // Set the level counter to 1
  level = 1

  // Remove the "you got eated" message from the screen
  $(".end-message").removeClass("active")

  // Add a <div class='oyster'> to the game
  addAnOyster()

  // Start the "check to see if the mouse is hovering over
  // one of the hippos" interval -- run every .1 seconds
  timeouts.checkForCollision = setInterval(function(){

    /*
      Because the browser isn't throwing a "mouseover" event
      when a hippo moves beneath the stationary cursor, we
      want to constantly check if there is a hippo that is being
      hovered over (via :hover pseudo-class).

      If there's any such hovered over hippos, the .each function
      attached will execute.
    */
    $(".hippo:hover").each(function(){
      
      // Remove all hippos and the oyster
      $(".hippo").remove()
      $(".oyster").remove()

      // Show the "you got eated" message
      $(".end-message").addClass("active")

      // Update the "you got X points" text
      $("#scoreText").text(level)

      // Clear all of our intervals -- set on the timeouts object
      clearInterval(timeouts.checkForCollision)
      clearInterval(timeouts.hippoMove)
      clearInterval(timeouts.hippoMultiply)
    })
  }, 100)

  // Start the "you've waited > 10 seconds to complete this level,
  // so lets add another hippo" interval -- run every 10s
  timeouts.hippoMultiply = setInterval(addAHippo, 10000)

  // Initialize the first level (aka level 1)
  initializeLevel(level)

}

// Once the page is finished loading,
$(document).on("ready", function(){

  // bind the "restart game" function to the restart game button,
  $("#restartButton").on("click", initializeGame)

  // and start the game.
  initializeGame()

})
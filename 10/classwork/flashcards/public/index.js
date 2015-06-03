var flipCard = function() {
  $(this).toggleClass("flipped")
}

$(document).on("ready", function(){

  // Function to handle clicks on submit button
  $("#add-card").on("click", function(){

    // Gets the value of the front-text input
    var frontText = $("#front-text").val()

    // Gets the value of the back-text input
    var backText = $("#back-text").val()

    // Option 1: very long string interpolation which is awful
    var $newCard = $("<div class='card'><div class='front'>" + frontText + "</div><div class='back'>" + backText + "</div></div>")
    
    // Option 2: seven lines of creating a bunch of jquery variables
    // and then appending them to a new thing
    // which is similarly awful
    var $newCard = $("<div class='card'></div>")
    var $frontOfCard = $("<div class='front'></div>")
    $frontOfCard.text(frontText)
    var $backOfCard = $("<div class='back'></div>")
    $backOfCard.text(backText)
    $newCard.append($frontOfCard).append($backOfCard)

    $newCard.on("click", flipCard)

    $(".card-row").append($newCard)

  })

  // Function to handle clicks on flash cards
  $(".card").on("click", flipCard)

})



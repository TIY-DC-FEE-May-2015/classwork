// Clicked item handler
var clickedItem = function() {  
    console.log("clicked item", this)

    // Get the item that was interacted with
    var $item = $(this)

    /* 
    if ($item.hasClass("complete")) {
      $item.removeClass("complete")
    }
    else {
      $item.addClass("complete")
    }
    */

    // Toggle the class -- equivalent to above comment block
    $item.toggleClass("complete")
}

// Function to add an item to the page
// Takes in the text and whether or not it is complete
var addNewItem = function(text, isComplete) {
  // Create a new HTML node AND jQuery wrap it
  var $newItem = $("<div class='item'></div>")

  // Add text inside of it
  $newItem.text(text)

  // Creating a new delete button
  var $itemButton = $("<button></button>")
  $itemButton.addClass("delete")
  $itemButton.text("Delete")

  $itemButton.on("click", function(){

    // This line works because of closures
    // I didn't even bother to try and explain that yet
    // I am so sorry
    // Closures are JavaScript: The Shitty Parts
    $newItem.remove()

    // This next line also works because of tree traversal
    //$(this).parent().remove()

    // Return false from a listener = don't bubble up
    return false
  })

  // Add that delete button to the new item
  $newItem.append($itemButton)

  // If this isComplete, then add class complete
  $newItem.toggleClass("complete", isComplete)

  // Bind the same click handler for the pre-existing ones
  $newItem.on("click", clickedItem)

  // Actually give that new node a place
  // inside of the item-container with the rest
  $(".item-container").append($newItem)
}

// Function to scrape the add item text box
// And add a new item by calling the addNewItem fn
var submitNewItem = function() {

  // Scrape the existing text field for the value
  // we want to give to the new item
  var newText = $("#add-item").val()

  // Call the add new item function for that item
  addNewItem(newText, false)

}

var items = [
  { text: "Build a todo list", complete: true },
  { text: "Check off items", complete: true },
  { text: "Add new items", complete: true },
  { text: "Don't have hardcoded HTML", complete: true },
  { text: "Allow a user to hit enter and submit", complete: true },
  { text: "Filter by active", complete: true },
  { text: "Filter by done", complete: true },
  { text: "Delete items", complete: true }
]

// Fires when the page is finished loading
$(document).on("ready", function(){

  // Binds a keyup handler to the input text field
  $("#add-item").on("keyup", function(evt){

    // Check to see if the user hit the enter key
    if (evt.keyCode === 13) {
      submitNewItem()
    }

  })

  // Binds a click handler to the input button
  $("#input-button").on("click", submitNewItem)

  // Iterate through every item that came from... somewhere else?
  _.each(items, function(item){
    
    // Call the add new item function for that item
    // With the item's text property and complete property
    addNewItem(item.text, item.complete)

  })

  $("#done-button").on("click", function(){
    $(".todo-container").removeClass("active").toggleClass("done")
  })

  $("#active-button").on("click", function(){
    $(".todo-container").removeClass("done").toggleClass("active")
  })

})
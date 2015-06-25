// Globally scoping variables..

// Our template(s)
var templates = {}

// The "current donut" that allows us to know what
// donut we're editing, or if we're creating a new one
var currentDonut


// Function to control/refresh UI of donut list
var updateDonutList = function(collection) {

  // We're using append; delete everything from the list
  $("#donut-list").empty()

  // Iterate over the collection that was passed in
  collection.each(function(donut){

    // Create the HTML string via the template and this donut's attributes
    var htmlString = templates.donut( donut.toJSON() )

    // jQuery wrap the donut (creates the HTML nodes in not-a-place)
    var $donut = $(htmlString)

    // Bind a listener to THIS SPECIFIC just-created delete button
    $donut.find(".delete-button").on("click", function(){
      /* Tell this Backbone model to off itself

        It deletes itself from the server
        It then removes itself from the collection
      */
      donut.destroy()

      // Update the donut list with the now smaller collection
      updateDonutList(collection)
    })

    // Bind a listener to THIS SPECIFC just-created edit button
    $donut.find(".edit-button").on("click", function(){

      // Fire the universal "switch view" function
      toggleEditMode()

      // Set the input fields to the existing data
      $("#donut-name").val(donut.get("name"))
      $("#donut-hole").prop("checked", donut.get("hole"))

      // Set the current donut variable to be the model we're working on
      currentDonut = donut
    })

    $("#donut-list").append($donut)

  })

}

// Universal view switch
var toggleEditMode = function() {
  $(".page-container").toggleClass("editing")
}

$(document).on("ready", function(){
  var box = new DonutBox()

  box.on("add remove", function(){
    $("#donut-count").text(box.length)
  })

  templates.donut = Handlebars.compile( $("#donut-template").html() )

  box.fetch({
    success: function(collection) {
      updateDonutList(collection)
    }
  })

  $("#save-donut").on("click", function(){
    // Check to see if we are currently editing a donut
    if (currentDonut) {
      currentDonut.set({
        name: $("#donut-name").val(),
        hole: $("#donut-hole").is(":checked")
      })

      currentDonut.save()
    }
    // Otherwise, create a brand new donut
    else{
      box.create({
        name: $("#donut-name").val(),
        hole: $("#donut-hole").is(":checked")
      })
    }

    toggleEditMode()

    updateDonutList(box)

  })

  $("#cancel-button").on("click", function(){
    toggleEditMode()
  })

  $("#add-donut").on("click", function(){
    toggleEditMode()
    currentDonut = false
    $("#donut-name").val("")
    $("#donut-hole").prop("checked", false)
  })

})




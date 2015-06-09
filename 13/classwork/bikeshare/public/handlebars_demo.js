$(document).on("ready", function(){

  /*
  var templateFunction = Handlebars.compile( $("#sillyTemplate").html() )
  var templateString = templateFunction( {
    front: "Here is the front of the card",
    back: "There is text on the back"
  } )

  $("#copyLocation").append(templateString)
  */

  
  var checklistItems = [
    { item: "Learn Ajax", complete: true },
    { item: "Learn Ajax Race Conditions", complete: true },
    { item: "Learn Handlebars", complete: true },
    { item: "Learn Handlebars Iteration", complete: false }
  ]
  
  var templateFunction = Handlebars.compile( $("#conditionalTemplate").html() )

  _.each(checklistItems, function(item){

    var htmlString = templateFunction(item)
    
    $("#copyLocation").append(htmlString)

  })
  

  /*
  var checklistItems = {
    items: [
      { item: "Learn Ajax", complete: true },
      { item: "Learn Ajax Race Conditions", complete: true },
      { item: "Learn Handlebars", complete: true },
      { item: "Learn Handlebars Iteration", complete: true }
    ]
  }

  var templateFunction = Handlebars.compile( $("#arrayTemplate").html() )

  $("#copyLocation").append( templateFunction(checklistItems) )
  */
})
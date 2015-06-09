/*
  Right, so here's the weird one. This function takes in THREE functions as parameters.

  The first two should be asynchronous functions which themselves 
    take a callback function as a parameter -- those functions
    should execute that callback function with the final result
    of whatever data they're getting.

  The last function will be executed with results of both of the async functions.
*/
var asyncBalancer = function(ajaxFunctionA, ajaxFunctionB, callback) {

  // Two variables need to be scoped.
  // The first is a flag to let us know if EITHER function has finished yet.
  var hasEitherFinished = false

  // The second is intentionally undefined, but scoped inside asyncBalancer.
  // It will hold the response of the FIRST async function that finishes.
  var returnedData

  // The callback function that's passed into BOTH of the async functions.
  var initialResponse = function(data) {

    // Check to see if the other one has finished, by looking at the
    // hasEitherFinished variable that we defined on line 15 
    if (hasEitherFinished === true) {
      // If the other one is done, then now they're both done.
      // Execute the callback function passed into asyncBalancer.
      // Use an array containing the results of both as a parameter to the callback.
      callback([ returnedData, data ])
    }
    else {
      // If the other one isn't done, set that flag to signify that, 
      // whenever it comes back, it should execute the callback.
      hasEitherFinished = true

      // Store the data from this first one as the value of the variable returnedData.
      // We scoped this on line 19 outside of the callback, so other executions
      // of this function will be able to access it later.
      returnedData = data
    }
  }

  // Execute both async functions with initialResponse as it's callback
  ajaxFunctionA(initialResponse)
  ajaxFunctionB(initialResponse)

}

/*
  Function to help understand asynchronous code, without AJAX.

  This function takes a callback as a parameter.

  It waits 500ms, then executes some other function, which itself excutes the
  callback with just the number 42.

  This isn't useful at all, but illustrates in a simple way the flow we're trying
  to encapsulate in the other functions.
*/
var waitABitAndThenDoSomething = function(callback) {

  // Define a function to be executed after the async thing completes
  var thingWeWaitedFor = function(){
    callback(42)
  }

  // Set off an async thing -- in this case, just wait 500ms
  setTimeout(thingWeWaitedFor, 500)

}

/*
  Function to retrieve the user's current lat/lng via HTML5 geolocation.

  It takes a callback as a parameter.
*/
var getPosition = function(callback) {

  // Define a function to be executed after the async thing completes
  var afterGettingCoordinates = function(geoposition) {
    // Execute the callback, passed in as a param to getPosition
    // Use the geoposition's coordinates as a param to the callback
    callback(geoposition.coords)    
  }

  // Set off an async thing -- asking the browser (for permission to) 
  // guess at the user's location
  navigator.geolocation.getCurrentPosition(afterGettingCoordinates)

}

var getStationData = function(callback) {

  // Define a function to be executed after the async thing completes
  var successFunction = function(stationArray) {
    // Execute the callback, passed in as a param to getStationData
    // Use the stationArray data from AJAX as a param to the callback
    callback(stationArray)
  }

  // Set off an async thing -- making a request to the server endpoint
  // for the list of all bikeshare stations with lat/lng/bikes/docks/name
  $.ajax({
    url: "live",
    method: "GET",
    success: successFunction
  })

}

// You know what this is
$(document).on("ready", function(){

  // First off, compile the template function with HBS
  // Use the contents of <template id="stationTemplate">
  var templateFn = Handlebars.compile( $("#stationTemplate").html() )

  // Define a function to be executed after the async thing completes
  var afterAjax = function(dataArray) {
    // Break the data down into its component parts
    // Note: This won't always work correctly :(, but it's fine for now
    var coordinates = dataArray[0]
    var stationData = dataArray[1]

    // Sort the station data by calculating distance from current location
    stationData = _.sortBy(stationData, function(station){
      // Use the pythagorean-ish formula to determine distance from origin
      // (Remember...  a^2 + b^2 = c^2)
      var latitudeDelta = Math.pow(station.latitude - coordinates.latitude, 2)
      var longitudeDelta = Math.pow(station.longitude - coordinates.longitude, 2)
      return longitudeDelta + latitudeDelta
    })

    // Get the first ten stations
    stationData = _.first(stationData, 10)

    // For each of those stations...
    _.each(stationData, function(station){
      
      // Call the previously compiled template function with that station object
      // This produces a string that looks like HTML
      var htmlString = templateFn(station)

      // Find the id=copyLocation element, append to it that HTML-looking string
      //
      // jQuery takes care of turning that into DOM nodes and putting it where
      // it needs to go for us.
      $("#copyLocation").append( htmlString )
    })
  }

  // Call the asyncBalancer with three functions as parameters.
  // The first two are asynchronous.
  //
  // When BOTH are completed, the afterAjax function is passed in as a callback
  asyncBalancer(getPosition, getStationData, afterAjax)

})
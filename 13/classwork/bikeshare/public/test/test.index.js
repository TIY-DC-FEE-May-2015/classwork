/*
$(document).on("ready", function(){

  var localStation = function() {
    
    $.ajax({
      url: "/stations",
      method: "GET",
      success: function(stationArray){
        var stationThatWeWant = _.find(stationArray, function(station){
          return station.id === "31221"
        })

        console.log(stationThatWeWant)
        return stationThatWeWant
      }
    })

  }

  var z = localStation()
  console.log(z)

})
*/

// Option 1: Put ajaxSuccess function definition inside
// of localStation definition so that callback variable
// is scoped to be accessible by the ajaxSuccss fn

$(document).on("ready", function(){

  // The root function that gets kicked off
  // which performs all of the async stuff
  // Param: Callback function executed at end
  var localStation = function(callback) {

    // Function that executes when the AJAX
    // data transfer completes
    // Param: Data returned from AJAX
    var ajaxSuccess = function(stationArray) {
      var stationThatWeWant = _.find(stationArray, function(station){
        return station.id === "31221"
      })

      callback( stationThatWeWant )
    }


    $.ajax({
      url: "/stations",
      method: "GET",
      success: ajaxSuccess
    })

  }

  // Function that is executed as a callback
  // Param: Data returned from AJAX, transformed somehow
  var stationData = function(data) {
    console.log("stationData", data)
  }

  localStation(stationData)

})

/*

// Option 2: Put a separate fn definiton inside of
// the $.ajax success function that calls ajaxSuccess
// with the returned data; ajaxSuccess transforms the data
// and then the callback fn is executed with transformed data

$(document).on("ready", function(){

  // The root function that gets kicked off
  // which performs all of the async stuff
  // Param: Callback function executed at end
  var localStation = function(callback) {

    $.ajax({
      url: "/stations",
      method: "GET",
      success: function(data){
        callback( ajaxSuccess(data) )
      }
    })

  }

  // Function that executes when the AJAX
  // data transfer completes
  // Param: Data returned from AJAX
  var ajaxSuccess = function(stationArray) {
    var stationThatWeWant = _.find(stationArray, function(station){
      return station.id === "31221"
    })

    return stationThatWeWant
  }

  

  // Function that is executed as a callback
  // Param: Data returned from AJAX, transformed somehow
  var stationData = function(data) {
    console.log("stationData", data)
  }

  localStation(stationData)

})
*/
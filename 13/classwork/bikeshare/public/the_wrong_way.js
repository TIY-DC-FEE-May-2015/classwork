/*
  These three functions are the same as in the_right_way.js...
*/
var getPosition = function(callback) {

  var afterGettingCoordinates = function(geoposition) {
    callback(geoposition.coords)    
  }

  navigator.geolocation.getCurrentPosition(afterGettingCoordinates)

}

var getStationData = function(callback) {

  var successFunction = function(stationArray) {
    callback(stationArray)
  }

  $.ajax({
    url: "live",
    method: "GET",
    success: successFunction
  })

}

var waitABitAndThenDoSomething = function(callback) {

  var thingWeWaitedFor = function(){
    callback(42)
  }

  setTimeout(thingWeWaitedFor, 500)

}

$(document).on("ready", function(){

  var start = new Date().valueOf()

  /*
    Here, we're waiting for the first function to return,
    then kicking off the second.

    Since both of them take ~500ms to come back
    with data, we're essentially doubling our wait time.
  */
  getPosition(function(coordinates){
    getStationData(function(stationArray){
      console.log(coordinates, stationArray)

      console.log(new Date().valueOf() - start)
    })
  })

})
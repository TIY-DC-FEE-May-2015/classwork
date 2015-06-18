var successFunction = function(arrayOfStations) {
  var templateFunction = Handlebars.compile( $("#kylesDemoTemplate").html() )

  $("#target").append( templateFunction(arrayOfStations) )

  return

  // too many nested comments, cant comment out everything
  // nothing below here is actually happening, everything is a lie
  // run away, delete facebook, lawyer up, hit the gym
  _.each(arrayOfStations, function(station){

    /*if (station.docks === 0) {
      return
    }*/

    /*
    var dataForTemplate = {
      bikes: station.bikes,
      name: station.name,
      docks: station.docks
    }

    if (dataForTemplate.docks === 0) {
      dataForTemplate.docks = "NONE"
      dataForTemplate.none = "none"
    }

    var htmlString = templateFunction(dataForTemplate)
    
    var $station = $(htmlString)
    $("#target").append($station)
    */

    var htmlString = templateFunction(station)
    
    $("#target").append(htmlString)

    /*
    if (station.docks === 0) {
      $station.find(".docks-container").text("NONE")
    }
    */
  })

}

$(document).on("ready", function(){

  successFunction(
    [
      {
        name: "18th and M NW",
        docks: 10,
        bikes: 7,
        location: {
          latitude: -77.52,
          longitude: 37.86
        }
      },
      {
        name: "Whole Foods P Street",
        docks: 0,
        bikes: 45
      },
      {
        name: "Somewhere in MoCo",
        docks: 10,
        bikes: 27
      }
    ]
  )
  

  


})
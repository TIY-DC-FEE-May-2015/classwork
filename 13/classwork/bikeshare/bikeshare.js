var staticData = require("./bikeshare_data")
var request = require("request")

var inflateStaticData = function(data) {
  return data.stations.map(function(station){
    return {
      id: station.n,
      name: station.s,
      latitude: station.la,
      longitude: station.lo,
      docks: station.da,
      bikes: station.ba,
      lastUpdated: 1433732947735 - station.lu
    }
  })
}

var inflateLiveData = function(data) {
  return data.stations.map(function(station){
    return {
      id: station.n,
      name: station.s,
      latitude: station.la,
      longitude: station.lo,
      docks: station.da,
      bikes: station.ba,
      lastUpdate: station.lu
    }
  })
}

var getStaticData = function(callback) {
  callback(null, inflateStaticData(staticData))
}

var getLiveData = function(callback) {
  request({
    url: "https://secure.capitalbikeshare.com/data/stations.json",
    json: true
  }, function(err, response, body) {
    callback(null, inflateLiveData(body))
  })
}

exports = module.exports = {

  stations: function(req, res, next) {
    getStaticData(function(err, data){
      res.json(data)
    })
  },

  live: function(req, res, next) {
    getLiveData(function(err, data){
      res.json(data)
    })
  }

}
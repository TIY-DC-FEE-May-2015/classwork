var BlackBox = (function() {

  var nameList = []

  var BlackBoxInsideOfIIFE = function(str) {

    this.name = str

    var counter = 0

    nameList.push(this.name)

    this.redButton = function() {
      counter += 1
      if (counter < 5) {
        return ("Hello, " + this.name)
      }
      return "Stop pressing me, damnit!"
    }

    this.blueButton = function() {
      return nameList
    }

    this.greenButton = function(callback) {
      var name = this.name

      setTimeout(function(){
        
        callback(name)

      }, 100)

    }

  }

  return BlackBoxInsideOfIIFE

})()

if (typeof module !== "undefined") {
  module.exports = BlackBox
}




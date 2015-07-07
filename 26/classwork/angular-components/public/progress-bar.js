var app = angular.module("progressBarApp", [])

app.controller("ProgressBarController", function($scope, $interval){

  var intervalFn = function() {

    var timeElapsed = new Date().valueOf() - startTime

    var widthPercentage = ((timeElapsed / stopAt) * 100)

    if (widthPercentage >= 100) {
      widthPercentage = 100
      $scope.stop()
    }

    $scope.progressWidth = {
      width: widthPercentage + "%"
    }

  }

  var startTime, timer
  var stopAt = 1000
  
  $scope.stop = function() {
    $interval.cancel(timer)
  }
  $scope.start = function() {
    $interval.cancel(timer)

    startTime = new Date().valueOf()

    timer = $interval(intervalFn, 50)
  }

  $scope.changeTime = function(milliseconds) {
    $scope.stop()
    stopAt = milliseconds
  }

})

// THAR BE DRAGONS BELOW...
/*

app.controller("TriviaController", function($scope, $controller){

  $scope.question = "Have you heard about the bird?"

  $scope.answers = [
    "Everybody knows that bird is the word",
    "The bird bird; bird bird. Bird bird?",
    "Uhh mao mao mao uhh maomao mao",
    "Shut up, Peter"
  ]

  $scope.clickAnswer = function(answer) {
    //progressController.stop()
  }

})
*/
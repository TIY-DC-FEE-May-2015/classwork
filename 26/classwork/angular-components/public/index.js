var app = angular.module("letsLearnAboutScopeApp", [])

app.controller("OutsideController", function($scope){

  $scope.text = "Some random string"

  $scope.getInsideValues = function() {
    var randomValues = []

    var cursor = $scope.$$childHead
    var atEnd = false

    while (atEnd === false) {
      randomValues.push(cursor.randomValue)
      
      cursor = cursor.$$nextSibling

      if (cursor === null) {
        atEnd = true
      }
    }

    $scope.childRandomValues = randomValues
  }

  $scope.showScope = function() {
    console.log($scope)
  }

})

app.controller("InsideController", function($scope){

  $scope.randomValue = Math.random()

})
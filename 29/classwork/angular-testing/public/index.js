var app = angular.module("testModule", [])

app.factory("CounterFactory", function(){

  var counter = 0

  return {
    increment: function() {
      counter += 1
    },

    value: function() {
      return counter
    }
  }

})

app.controller("TestController", function($scope, CounterFactory){

  $scope.clickCount = CounterFactory.value()

  $scope.clickButton = function() {
    CounterFactory.increment()
    $scope.clickCount = CounterFactory.value()
  }

})

app.controller("AnotherController", function($scope, $timeout, CounterFactory){

  $scope.loading = false
  $scope.clickCount = CounterFactory.value()

  $scope.clickButton = function() {
    CounterFactory.increment()
    $scope.clickCount = CounterFactory.value()

    $scope.loading = true
    $timeout(function(){
      $scope.loading = false
    }, (100 * $scope.clickCount))
  }

})

var app = angular.module("chatApp", [])

app.controller("ChatController", function($scope, $http, $interval){

  var getUsers = function() {
    $http.get( "https://tiy-chat-server.herokuapp.com/user" )
      .success(function(data){
        $scope.users = {}
        
        data.forEach(function(user){
          $scope.users[user._id] = user.username
        })
      })
  }
  getUsers()
  $interval(getUsers, 20000)

  var getMessages = function() {
    $http.get( "https://tiy-chat-server.herokuapp.com/messages/recent" )
      .success(function(data){
        $scope.messages = data
      })
  }
  getMessages()
  $interval(getMessages, 1000)

})

app.controller("UserController", function($scope, $http, $interval){

  var getUsers = function() {
    $http.get( "https://tiy-chat-server.herokuapp.com/user" )
      .success(function(data){
        $scope.users = data
      })
  }
  getUsers()

  $scope.status = "active"

  $scope.registerUser = function() {

    $http.post( "https://tiy-chat-server.herokuapp.com/user", {
      username: $scope.username,
      fullname: $scope.fullname,
      status: $scope.status
    }).success(getUsers)

  }

  $interval(getUsers, 20000)

})

app.controller("MessageController", function($scope, $http, $interval){

  var getUsers = function() {
    $http.get( "https://tiy-chat-server.herokuapp.com/user" )
      .success(function(data){
        $scope.users = data
      })
  }
  getUsers()
  $interval(getUsers, 20000)

  $scope.sendMessage = function() {

    if (!$scope.user_id) {
      return
    }

    $http.post("https://tiy-chat-server.herokuapp.com/message", {
      text: $scope.text,
      user_id: $scope.user_id
    }).success(function(data){
      $scope.text = ""
    })

  }

})
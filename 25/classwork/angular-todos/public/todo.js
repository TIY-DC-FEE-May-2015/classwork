var todoApp = angular.module("todoApp", [ "filterCollection" ])

todoApp.controller("todo", ["$http", "$scope", function($http, $scope){

  $scope.tasks = []
  $scope.viewType = "incomplete"

  var updateTaskOnServer = function(task) {
    $http.put("/tasks/" + task.id, task)
      .success(function(data){
        console.log("updated", data)
      })
  }

  var deleteTaskOnServer = function(task) {
    $http.delete("/tasks/" + task.id)
      .success(fetchTaskList)
  }

  var addTaskOnServer = function(name, value) {
    $http.post("/tasks", {
      task: name,
      value: value
    }).success(fetchTaskList)
  }

  var fetchTaskList = function() {
    $http.get("/tasks").success(function(data){
      $scope.tasks = data
    })
  }

  fetchTaskList()

  $scope.clickTask = function(task) {
    task.complete = !task.complete
    updateTaskOnServer(task)
  }

  $scope.deleteTask = function(task) {
    deleteTaskOnServer(task)
  }

  $scope.addTask = function() {
    addTaskOnServer($scope.taskName, parseInt($scope.taskValue))
  }


}])
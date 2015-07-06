var app = angular.module("iterationApp", [])

app.controller("StudentController", function($scope){

  $scope.students = [ 
    { name: 'Amanda', awesome: true }, 
    { name: 'Claudia', awesome: true },
    { name: 'Ghaea', late: true },
    { name: 'Steve' }, 
    { name: 'Tajaa' }, 
    { name: 'Scott' }, 
    { name: 'Carlos', specialClassName: "popcorn" } 
  ]

  $scope.clickStudent = function(student) {
    student.clickedOn = !student.clickedOn
  }

  $scope.addStudent = function() {
    
    $scope.students.push({
      name: $scope.registrationName
    })

    $scope.registrationName = ""

  }

})
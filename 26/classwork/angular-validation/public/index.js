angular.module("validationApp", [])
  .controller("ListController", function($scope){

    $scope.invalid = {}

    $scope.students = [
      { id: 1, name: "Aaron", email: "aaron@aaron.aaron" },
      { id: 2, name: "Josh", email: "redvelvetcupcakes@kyle.isajerk " },
      { id: 3, name: "Greg", email: "whereisgreg@missingpersons.info" },
      { id: 4, name: "John", email: "clemson@alsomissing.clemson" }
    ]

    $scope.studentId = $scope.students.length + 1

    $scope.submitNewStudent = function() {
      console.log($scope.students)

      $scope.invalid = {
        studentId: !($scope.studentId),
        name: !($scope.name),
        email: !($scope.email),
      }

      if( _.some($scope.invalid) ) {
        return
      }

      var matchingStudent = _.find($scope.students, function(student){
        return student.id === $scope.studentId
      })

      if( matchingStudent ) {
        $scope.invalid.existingId = matchingStudent.id
        return
      }
      
      $scope.students.push({
        id: $scope.studentId,
        name: $scope.name,
        email: $scope.email
      })

      $scope.studentId = ($scope.students.length + 1)
      $scope.name = ""
      $scope.email = ""
    }

  })
var cohort = {
  studentList: [ 
    "Amanda", 
    "Ghaea", 
    "Steve", 
    "Scott", 
    "Tajaa", 
    "Carlos", 
    "Claudia", 
    "Ola" 
  ],

  alumList: [
    "Josh",
    "John",
    "Autumn",
    "Greg",
    "Aaron"
  ],
  
  studentCount: function() {
    return cohort["studentList"]["length"]
  },

  addStudent: function(name) {
    cohort.studentList.push(name)
  },

  addAlumnus: function(name) {
    cohort.alumList.push(name)
  },

  popStudent: function() {
    return cohort.studentList.pop()
  },

  /*
    Returns true IF the name passed in as a parameter
      exist in the cohort.studentList array

    Returns false otherwise
  */
  findStudent: function(name) {
    // Loop through the student list
    for (var i = 0; i < cohort.studentList.length; i++) {

      // For this student, check to see if this student's name
      // matches what came in as the parameter
      if (cohort.studentList[i] === name) {

        // If so, return true
        return true

      }

    }

    // If no student in the student list matches, return false.
    return false
  },

  /*
    This function takes all of the students in the student list
      and adds them to the alumnus list.

    It then removes those students from the student list.
  */
  graduation: function() {
    var studentCount = cohort.studentList.length

    // Loop through the student list
    for (var i = 0; i < studentCount; i++) {
    
      // Get current student
      // and remove from student list
      var graduate = cohort.popStudent()

      console.log( graduate, studentCount, i )

      // Add to alumni list
      cohort.addAlumnus(graduate)
    }

    // Return the alumni list
    return cohort.alumList
  }
}

/*
console.log( cohort.studentCount() ) // 8

cohort.addStudent("Katie")
console.log( cohort.studentCount() ) // 9

console.log( cohort.popStudent() ) // Katie
console.log( cohort.studentCount() ) // 8

console.log( cohort.findStudent("Kyle") ) // false
console.log( cohort.findStudent("Ghaea") ) // true
*/

console.log( "graduation", cohort.graduation() )



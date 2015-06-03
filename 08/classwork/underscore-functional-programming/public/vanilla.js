/*
  This function should accept an array of strings as a parameter.
  It should return the array, with all strings coverted to uppercase.

  It should not use underscore.
*/
var uppercase = function(array){

  return array.map(function(word){

    return word.toUpperCase()

  })

}

/*
  This function should accept an array of numbers as a parameter.
  It should return the array, with all numbers sorted in descending order.

  It should not use underscore.
*/
var sort = function(array){

  return array.sort(function(a, b){

    return b - a

  })

}

/*
  This function should accept an array of objects as a parameter.
  It should return an array of objects that contain the property "name".
*/
var namesOnly = function(array) {

  return array.filter(function(object){

    if (object.name) {
      return true
    }

    return false

  })

}

/*
  This function should accept an array of numbers as a parameter.
  It should return the first number that is evenly divisible by 5.
*/
var firstFive = function(array) {

  /*
  return array.filter(function(number){

    if (number % 5 === 0) {
      return true
    }

    return false

  })[0]
  */

  return array.reduce(function(memory, number){

    if (memory !== false) {
      return memory
    }

    if (number % 5 === 0) {
      return number
    }

    return memory

  }, false)

}

/*
  This function should accept an array of numbers a parameter.
  It should return the sum of all ODD numbers in the array.
    (Ignore the even numbers.)
*/
var sumOdd = function(array) {

  return array.reduce(function(memory, number){

    if (number % 2 === 1) {
      memory += number
      return memory
    }

    return memory

  }, 0)

}

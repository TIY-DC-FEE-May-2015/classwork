/*
  This function should accept an array of strings as a parameter.
  It should return the array, with all strings coverted to uppercase.

  It SHOULD use underscore.
*/
var underscoreUppercase = function(array){

  return _.map(array, function(word){ return word.toUpperCase() })

}

/*
  This function should accept an array of numbers as a parameter.
  It should return the array, with all numbers sorted in descending order.

  It SHOULD use underscore.
*/
var underscoreSort = function(array){

  return _.sortBy(array, function(item){
    return item * -1
  })

}

/*
  This function should accept an array of objects as a parameter.
  It should return an array of objects that contain the property "name".

  It SHOULD use underscore.
*/
var underscoreNamesOnly = function(array) {

}

/*
  This function should accept an array of numbers as a parameter.
  It should return the first number that is evenly divisible by 5.

  It SHOULD use underscore.
*/
var underscoreFirstFive = function(array) {

}

/*
  This function should accept an array of numbers a parameter.
  It should return the sum of all ODD numbers in the array.
    (Ignore the even numbers.)

  It SHOULD use underscore.
*/
var underscoreSumOdd = function(array) {

}

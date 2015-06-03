var fib = function(number) {

  var array = [0, 1]

  for (var counter = 2; counter < number; counter++) {
    var sum = array[counter - 1] + array[counter - 2]
    array.push(sum)
  }

  return array

}


/* Using the variable swapping method
var fib = function(number) {

  if (number === 1) {
    return 0
  }
  if (number === 2) {
    return 1
  }
  
  var current = 1
  var previous = 0

  for (var counter = 3; counter <= number; counter++) {
    var sum = current + previous
    previous = current
    current = sum

    console.log(counter, previous, current)
  }

  return current

}
*/

console.log( fib(12) );
var fizzAdjudicator = function(number) {
  if (number % 15 == 0) {
    return "fizzbuzz"
  }

  if (number % 3 === 0) {
    return "fizz"
  }

  if (number % 5 === 0) {
    return "buzz"
  }

  return number
}

var fizzbuzz = function(n) {

  var counter = 1;
  var array = [];

  while (counter <= n) {
    var item = fizzAdjudicator(counter)
    
    array.push(item)

    counter += 1
  }

  return array

}

console.log( fizzbuzz(25) );
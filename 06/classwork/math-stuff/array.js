var doubleArray = function(array) {

  var counter = 0

  while(counter < array.length) {
    array[counter] = (array[counter] * 2)
    counter++;
  }

  return array

}

console.log( doubleArray([ 45, 0, -19, 7.5, 18.2, 56]) )

var firstEvenNumber = function(array) {

  for (var i = 0; i < array.length; i++) {
    
    if (array[i] % 2 === 0) {
      return array[i]
    }

  }

}

console.log( firstEvenNumber([ 19, 43, 18, 19, 27, 56, 0, -2 ]) );
console.log( firstEvenNumber([]) )
console.log( firstEvenNumber([10, 11, 12]) )

var minimumValue = function(array) {

  var smallestValue = array[0]

  for(var i = 0; i < array.length; i += 1){

    if (array[i] < smallestValue) {
      smallestValue = array[i]
    }
    
  }

  return smallestValue

}

console.log( minimumValue([19, 25, 16, 4, 37, -19, 22]) );
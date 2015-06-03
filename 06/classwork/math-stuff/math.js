var sineFunction = function() {

  var largestSineValue = -2;
  var largestInteger;

  var counter = 1;
  
  while(counter <= 10) {
    var sine = Math.sin(counter)

    if (sine > largestSineValue) {
      largestSineValue = sine
      largestInteger = counter
    }

    counter = counter + 1;
  }

  return largestInteger;
}

console.log( sineFunction() );


var sumFunction = function(number) {

  /*
  for(var i = number; i > 0; i--) {
    sum = i + sum;
  }
  */

  var sum = 0;
    
  for(var i = 1; i <= number; i++) {
    sum = i + sum;
  }

  return sum

}

var a = sumFunction(10);
//console.log(a)
// expect to return the sum of 1-10 (55)

//console.log(sumFunction(5));
// expect to return the sum of 1-5 (15)



var perfectSquareFunction = function(number) {

  var i = 1;

  while(i <= number) {
    console.log(i * i);
    i++;
  }

}

// perfectSquareFunction(5);
// expect to print 1, 4, 9, 16, 25 on sep. lines

// perfectSquareFunction(7);
// expect to print 1, 4, 9, 16, 25, 36, 49 on sep. lines

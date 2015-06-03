var string = "hello, world. my name is kyle"
var letters = string.split("")

var frequencyCounter = function(memory, letter) {
  if (letter in memory) {
    memory[letter] += 1
  }
  else {
    memory[letter] = 1
  }

  return memory
}

// console.log( letters.reduce(frequencyCounter, {}) )

var sineFinder = function(memory, number, index) {
  if (memory < Math.sin(number)) {
    return Math.sin(number)
  }

  return memory
}

// console.log( [2,3,4,5,6,7,8,9,10].reduce(sineFinder, -2) )

var checkIfEven = function(memory, number) {
  console.log(arguments)

  if (memory === false) {
    return false
  }

  return (number % 2 === 0) 
}

console.log( [4, 8, 12, 14, 22].reduce(checkIfEven, true) )
console.log( [2, 8, 17, 28].reduce(checkIfEven, true) )

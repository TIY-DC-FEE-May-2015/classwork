
// This function takes in a string as a param
// It returns an array of all unique characters in that string
var unique = function(string) {

  // Turn string into an array
  var letters = string.split("")

  // Object to count letters
  var letterCount = {}

  // Loop through every letter
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i]

    // Add to letter count object
    letterCount[letter] = 1
  }

  /*

  Note: All of the following is equivalent to the next line

  // Create empty array to get object keys
  var uniqueLetters = []

  // Loop through letter object
  for (var letter in letterCount) {
    uniqueLetters.push(letter)
  }

  return uniqueLetters
  */

  return Object.keys(letterCount)

}

console.log(unique("hello, world")) // d e h l o r w " " ,
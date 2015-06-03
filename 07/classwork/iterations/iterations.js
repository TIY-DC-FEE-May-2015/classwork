var object = {
  katie: "Is Awesome",
  steve: "Is Also Awesome",
  kyle: "eh"
}

for (var i in object) {
  //console.log(i, object[i])
}

var scoreboard = {
  Washington: 42,
  "New York": 19,
  Miami: 36,
  Atlanta: 1,
  Phildelphia: 1
}

// Loops through all keys in the scoreboard object
for (var team in scoreboard) {

  // Double the value for that property
  scoreboard[team] = scoreboard[team] * 2
}

//console.log(scoreboard)
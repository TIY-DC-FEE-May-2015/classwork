var app = angular.module("filterCollection", [])

app.filter("initialize", function(){
  return function(string){

    var words = string.split(" ")
    var firstLetters = words.map(function(word){
      return word[0]
    })

    return firstLetters.join(" ")

  }
})


app.filter("titleize", function(){
  return function(string){

    return string[0].toUpperCase() + string.slice(1)

  }
})

app.filter("sortByLength", function(){
  return function(array) {

    for (var i = 0; i < array.length; i++) {

      for (var j = i + 1; j < array.length; j++) {

        if (array[i].name.length < array[j].name.length) {
          var temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }

      }

    }

    return array

  }
})

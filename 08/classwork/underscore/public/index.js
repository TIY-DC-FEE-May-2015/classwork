var sortByAge = function(people) {

  return _.sortBy(people, function(person){

    return person.age * -1

  })

}

var doubleObjectValues = function(object) {

  return _.reduce(object, function(memory, value, key){

    memory[key] = value * 2

    return memory

  }, {})

}

var removeStartsWithA = function(object) {

  return _.reduce(object, function(memory, value, key){

    var formattedKey = key.toLowerCase()

    if (formattedKey.startsWith("a")) {
      return memory
    }

    memory[key] = value

    return memory

  }, {})

}
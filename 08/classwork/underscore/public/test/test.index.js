describe("sortByAge", function(){

  it("sorts people by age, descending", function(){

    var people = [
      { name: "Kyle", age: 31 },
      { name: "Su", age: 30 },
      { name: "Tom", age: 39 },
      { name: "James", age: 16 }
    ]

    expect( sortByAge(people) ).to.deep.equal([
      { name: "Tom", age: 39 },
      { name: "Kyle", age: 31 },
      { name: "Su", age: 30 },
      { name: "James", age: 16 }
    ])

  })

})

describe("map over objects", function(){

  it("doubles the value of each property", function(){

    var object = {
      a: 10,
      b: 25,
      c: -6
    }

    expect( doubleObjectValues(object) ).to.deep.equal({
      a: 20,
      b: 50,
      c: -12
    })

  })

})

describe("filter for objects", function(){

  it("removes all keys that start with A", function(){

    var object = {
      apple: 15,
      banana: 12,
      orange: 6,
      apricot: 18,
      cherry: 9
    }

    expect( removeStartsWithA(object) ).to.deep.equal({
      banana : 12,
      orange: 6,
      cherry: 9
    })

  })

})
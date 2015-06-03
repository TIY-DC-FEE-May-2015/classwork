describe("JavaScript with Underscore", function(){
  
  it("Uppercase", function(){

    expect(underscoreUppercase(["abc", "123", "def"])).to.deep.equal(["ABC", "123", "DEF"]);

  });

  it("Sort", function(){

    expect(underscoreSort([68, 82, 14])).to.deep.equal([82, 68, 14]);

  });

  it("Names Only", function(){

    var inputArray = [
      { name: "Kyle", score: 26 },
      { name: "Su", score: 31 },
      { score: 36 },
      { name: "James", score: 28, ruby: true }
    ];

    var outputArray = [
      { name: "Kyle", score: 26 },
      { name: "Su", score: 31 },
      { name: "James", score: 28, ruby: true }
    ];

    expect(underscoreNamesOnly(inputArray)).to.deep.equal(outputArray);

  });

  it("First Five", function(){

    expect(underscoreFirstFive([18, 26, 17, 29, 15, 30, 22, 8, 10])).to.equal(15);

  });

  it("Sum Odd", function(){

    expect(underscoreSumOdd([4, 10, 3, 9, 5, 12, 6, 1])).to.equal(18);
    
  });

})
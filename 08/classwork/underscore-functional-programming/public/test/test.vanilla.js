describe("Vanilla JavaScript", function(){
  
  it("Uppercase", function(){

    expect(uppercase(["abc", "123", "def"])).to.deep.equal(["ABC", "123", "DEF"]);

  });

  it("Sort", function(){

    expect(sort([68, 82, 14])).to.deep.equal([82, 68, 14]);

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

    expect(namesOnly(inputArray)).to.deep.equal(outputArray);

  });

  it("First Five", function(){

    expect(firstFive([18, 26, 17, 29, 15, 30, 22, 8, 10])).to.equal(15);

  });

  it("Sum Odd", function(){

    expect(sumOdd([4, 10, 3, 9, 5, 12, 6, 1])).to.equal(18);
    
  });

})
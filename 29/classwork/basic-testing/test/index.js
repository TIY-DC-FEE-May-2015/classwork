var expect = require("chai").expect
var BlackBox = require("../public/index")

describe("Black Box Testing", function(){

  describe("Constructor", function(){

    it("should accept a name parameter", function(){

      var b = new BlackBox("Jeannie")
      var c = new BlackBox("Alan")

      expect(b.name).to.equal("Jeannie")
      expect(c.name).to.equal("Alan")

    })

  })

  describe("Red Button", function(){

    it("should say 'Hello, $name' four times", function(){

      var b = new BlackBox("Calvin")

      expect(b.redButton()).to.equal("Hello, Calvin")
      
      expect(b.redButton()).to.equal("Hello, Calvin")
      
      expect(b.redButton()).to.equal("Hello, Calvin")
      
      expect(b.redButton()).to.equal("Hello, Calvin")

    })

    it("should say 'Stop pressing me, damnit!' on the fifth execution", function(){

      var b = new BlackBox("Jimmy")
      b.redButton()
      b.redButton()
      b.redButton()
      b.redButton()

      expect(b.redButton()).to.equal("Stop pressing me, damnit!")

      var c = new BlackBox("Theresa")
      expect(c.redButton()).to.equal("Hello, Theresa")
      
    })

    it("counter should not be publicly accessible", function(){

      var b = new BlackBox("Katelyn")
      expect(typeof counter === "undefined").to.equal(true)

    })

  })

  describe("Blue Button", function(){

    it("should say the names of all buttons", function(){

      var b = new BlackBox("Greg")
      expect(b.blueButton()).to.deep.equal(
        [ "Jeannie", "Alan", "Calvin", "Jimmy", "Theresa", "Katelyn", "Greg" ]
      )

      var c = new BlackBox("Sean")
      
      expect(b.blueButton()).to.deep.equal(
        [ "Jeannie", "Alan", "Calvin", "Jimmy", "Theresa", "Katelyn", "Greg", "Sean" ]
      )

    })

    it("nameList should not be publicly accessible", function(done){

      expect(typeof nameList === "undefined").to.equal(true)
      done()
      
    })

  })

  describe("Green Button", function(){

    it("should execute some code after a timeout", function(done){

      var b = new BlackBox("Scott")
      var callback = function(name){
        expect(name).to.equal("Scott")
        done()
      }
      
      b.greenButton(callback)

    })

  })

})


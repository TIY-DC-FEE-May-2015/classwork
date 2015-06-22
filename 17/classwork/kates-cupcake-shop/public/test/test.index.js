describe("Kates Cupcake Shop II -- now with OOP", function(){

  describe("CupcakeShop constructor", function(){

    it("has several properties", function(){

      var shop = new CupcakeShop()

      expect( shop.register ).to.equal(0)
      expect( shop.bank ).to.equal(0)
      expect( shop.price ).to.equal(3)
      expect( shop.inventory ).to.deep.equal( {} )

    })

    it("accepts a name parameter", function(){

      var shop = new CupcakeShop("Kate's Bakery")

      expect( shop.name ).to.equal("Kate's Bakery")

    })

    it("does not sell cookies", function(){

      var shop = new CupcakeShop()

      expect( shop.sellsCookies() ).to.equal( false )

    })

  })

  describe("CupcakeShop.addFlavor", function(){

    it("Can add a flavor that doesn't exist", function(){

      var shop = new CupcakeShop()

      var flavor = shop.addFlavor("Chocolate")

      expect( flavor ).to.equal(true)
      expect( shop.inventory.Chocolate ).to.exist()

    })

    it("Won't add a flavor that does exist", function(){

      var shop = new CupcakeShop()

      shop.addFlavor("Chocolate")
      var flavor = shop.addFlavor("Chocolate")

      expect( flavor ).to.equal(false)
      
    })

  })

  describe("CupcakeShop.hasFlavor", function(){

    it("Returns true or false if a flavor exists", function(){

      var shop = new CupcakeShop()
      shop.addFlavor("Chocolate")

      expect(shop.hasFlavor("Chocolate")).to.equal(true)
      expect(shop.hasFlavor("Vanilla")).to.equal(false)

    })

  })

  describe("CupcakeShop.bakeCupcake", function(){

    it("Accepts a flavor, increments that flavor in inventory by 1", function(){

      var shop = new CupcakeShop()
      shop.addFlavor("Chocolate")
      var result = shop.bakeCupcake("Chocolate")

      expect( result ).to.equal(true)
      expect( shop.inventory.Chocolate ).to.equal(1)

    })

    it("Does not change inventory if flavor does not exist, returns false", function(){

      var shop = new CupcakeShop()
      shop.addFlavor("Chocolate")
      var result = shop.bakeCupcake("Vanilla")

      expect( result ).to.equal(false)
      
    })

  })

  describe("CupcakeShop.bakeManyCupcake", function(){

    it("Accepts a flavor and number, increments that flavor in inventory by number", function(){

      var shop = new CupcakeShop()
      shop.addFlavor("Chocolate")
      var result = shop.bakeManyCupcake("Chocolate", 10)

      expect( result ).to.equal(true)
      expect( shop.inventory.Chocolate ).to.equal(10)

    })

    it("Does not change inventory if flavor does not exist, returns false", function(){

      var shop = new CupcakeShop()
      shop.addFlavor("Chocolate")
      var result = shop.bakeManyCupcake("Vanilla")

      expect( result ).to.equal(false)
      
    })

  })

  describe("CupcakeShop.retireFlavor", function(){

    it("Accepts a flavor, removes it from inventory, and disallows it from being added again", function(){

      var shop = new CupcakeShop()
      shop.addFlavor("Red Velvet")

      expect( shop.inventory["Red Velvet"] ).to.equal(0)

      shop.retireFlavor("Red Velvet")

      expect( shop.hasFlavor("Red Velvet") ).to.equal(false)

      shop.addFlavor("Red Velvet")

      expect( shop.hasFlavor("Red Velvet") ).to.equal(false)      

    })

  })

  describe("CupcakeShop.sellCupcake", function(){

    it("Accepts a flavor, removes 1 from inventory if possible, adds price to register", function(){

      var shop = new CupcakeShop()
      shop.addFlavor("Chocolate")
      shop.bakeManyCupcake("Chocolate", 10)

      shop.sellCupcake("Chocolate")

      expect(shop.inventory.Chocolate).to.equal(9)
      expect(shop.register).to.equal(3)

    })

    it("Doesn't sell an unknown cupcake", function(){

      var shop = new CupcakeShop()
      shop.addFlavor("Chocolate")
      
      expect( shop.sellCupcake("Vanilla") ).to.equal(false)

    })

    it("Doesn't sell an out-of-stock cupcake", function(){

      var shop = new CupcakeShop()
      shop.addFlavor("Chocolate")
      
      expect( shop.sellCupcake("Chocolate") ).to.equal(false)

    })

  })

})
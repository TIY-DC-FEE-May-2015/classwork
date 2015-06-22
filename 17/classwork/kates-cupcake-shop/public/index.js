var CupcakeShop = function(inputName) {

  // Private-ish
  this.addCupcakes = function(flavor, number) {
    if (this.hasFlavor(flavor)) {
      this.inventory[flavor] += number
      return true
    }
    return false
  }

  // Public interface

  this.name = inputName

  this.register = 0
  this.bank = 0
  this.price = 3
  this.inventory = {}

  this.retiredFlavors = []

  this.sellsCookies = function(){
    return false
  }

  this.addFlavor = function(flavor) {

    if (this.hasFlavor(flavor)) {
      return false
    }

    if (this.retiredFlavors.indexOf(flavor) > -1) {
      return false
    }

    this.inventory[flavor] = 0

    return true

  }

  this.hasFlavor = function(flavor) {
    return (flavor in this.inventory)
  }

  this.bakeCupcake = function(flavor) {
    return this.addCupcakes(flavor, 1)
  }

  this.bakeManyCupcake = function(flavor, number) {
    return this.addCupcakes(flavor, number)
  }

  this.retireFlavor = function(flavor) {
    delete this.inventory[flavor]
    this.retiredFlavors.push(flavor)
  }

  this.sellCupcake = function(flavor) {
    if (!this.hasFlavor(flavor)) {
      return false
    }

    if (this.inventory[flavor] === 0) {
      return false
    }

    this.addCupcakes(flavor, -1)
    this.register += this.price

  }

}
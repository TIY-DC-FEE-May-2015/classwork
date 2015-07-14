describe("a test suite", function(){

  it("should pass", function(){

    expect(true).to.equal(true)

  })

})

describe("testModule", function(){

  describe("CounterFactory", function(){

    beforeEach(module("testModule"))

    var factory

    beforeEach(inject(function(_CounterFactory_){
      factory = _CounterFactory_
    }))

    it("should have a counter", function(){
      expect(factory.value()).to.equal(0)
    })

    it("should increment a counter", function(){
      factory.increment()
      expect(factory.value()).to.equal(1)
    })

  })

  describe("TestController", function(){

    beforeEach(module("testModule"))

    var scope, TestController, factory

    beforeEach(inject(function($rootScope, $controller, _CounterFactory_){
      scope = $rootScope.$new()
      factory = _CounterFactory_
      TestController = $controller("TestController", {
        $scope: scope,
        CounterFactory: factory
      })
    }))

    it("should have a clickButton function", function(){

      expect(scope.clickButton).to.be.a("function")
      scope.clickButton()
      expect(scope.clickCount).to.equal(1)

    })

    it("should instantiate a TestController", function(){

      expect(scope.clickCount).to.equal(0)

    })

  })

  describe("AnotherController", function(){

    beforeEach(module("testModule"))

    var scope, controller

    beforeEach(inject(function($rootScope, $controller, _CounterFactory_, _$timeout_){
      scope = $rootScope.$new()
      $controller = $controller("AnotherController",{
        $scope: scope,
        CounterFactory: _CounterFactory_,
        $timeout: _$timeout_
      })
    }))

    it("should increment the clickCount", function(){

      expect(scope.clickCount).to.equal(0)
      scope.clickButton()
      expect(scope.clickCount).to.equal(1)

    })

    it("should have a delay before loading complete", function(done){

      expect(scope.loading).to.equal(false)
      scope.clickButton()
      expect(scope.loading).to.equal(true)

    })
  })

})
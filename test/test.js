var should = require('should');
describe("Monodriver", function() {
  var Monodriver;
  before(function() {
    Monodriver = require('../');
  });
  it("should be a function", function() {
    Monodriver.should.be.a.Function();
  });
  it("should have adapters available", function() {
    var adapters = Monodriver.getAdapters();
    adapters.should.be.an.Array();
    adapters.length.should.be.greaterThan(0, "expected adapters to have 1 or more adapters");
  });
});

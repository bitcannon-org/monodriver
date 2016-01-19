var Monodriver = require('../../');
var should = require('should');
describe("Mongodb", function() {
  var Mongodb;
  var driver;
  try {
    Mongodb = require('mongodb');
  } catch(err) {
    it("skip mongodb test if the database is not installed.");
    return;
  }
  before(function() {
    driver = new Monodriver("mongodb", Mongodb);
  });
  it("should have the database as a dependency", function() {
    Monodriver.getAdapterDeps("mongodb").should.containEql("mongodb");
  });
  it("should report the adapter name", function() {
    driver.getAdapterName().should.equal("mongodb");
  });
  it("should expose config values", function() {
    //
  });
});

var Monodriver = require('../');
console.log(Monodriver.getDrivers()); // [ 'example', 'mongodb' ]
try {
  var driver = new Monodriver("somedriver");
} catch (err) {
  console.log("Caught error when using nonexistant driver: " + err); //Error: Driver not supported by monodriver.
}
try {
  var driver = new Monodriver("mongodb");
} catch (err) {
  console.log("Caught error when required config options left out: " + err); // Error: Config not provided: url
}
var driver = new Monodriver("mongodb", {url: "localhost:1234"}); // started with config: {"url":"localhost:1234"}
console.log("Current driver is: " + driver.getCurrentDriverName()); // mongodb
var driver = new Monodriver("example"); // started <driver name here>
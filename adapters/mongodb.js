/*
 * An adapter for mongodb
 */
var configKeys = [{name: "URL", slug: "url", example: "mongodb://localhost:27017/database", required: true},
                  {name: "Username", slug: "username", example: "admin"},
                  {name: "Password", slug: "password", example: "password1"}];

// Constructor
function Adapter(driver) {
  this.driver = driver;
}

Adapter.prototype.connect = function() {
  console.log("connect called with %j", arguments);
}

// Export the class
module.exports = Adapter;
module.exports.configKeys = configKeys;
module.exports.dependencies = ['mongodb'];

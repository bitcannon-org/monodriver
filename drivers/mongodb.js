/*
 * A driver for mongodb
 */
var configKeys = [{name: "URL", slug: "url", example: "mongodb://localhost:27017/database", required: true},
                  {name: "Username", slug: "username", example: "admin"},
                  {name: "Password", slug: "password", example: "password1"}];

// Constructor
function Driver(config) {
  console.log("started with config: %j", config);
}

// Export the class
module.exports = Driver;
module.exports.configKeys = configKeys;
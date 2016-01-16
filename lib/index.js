/*
 * index.js: Top level include for the monodriver module
 */
var drivers = require('../drivers');

// Constructor
function Monodriver(driver, driverConfig) {

  // Check if the driver has an adapter in ../drivers
  if (!drivers[driver]) {
    throw Error("Driver not supported by monodriver.");
  }

  // Get the relevant config options
  var configKeys = drivers[driver].configKeys;
  // Loop through config keys
  for (var key in configKeys) {
    if (!configKeys.hasOwnProperty(key)) continue; // Safety check?
    var configKey = configKeys[key]; // Get the current config object
    // Ensure that config and setting exists if the key is required
    if (configKey.required && !(driverConfig && driverConfig[configKey.slug])) {
      throw Error("Config not provided: " + configKey.slug);
    }
  }

  this.driverName = driver; // Set the current driver name
  this.driver = new drivers[driver](driverConfig); // Initialize the driver with the provided config
}

Monodriver.prototype.getCurrentDriverName = function() {
  return this.driverName;
}

// Export the class
module.exports = Monodriver;
module.exports.getDrivers = function() {return Object.keys(drivers);}
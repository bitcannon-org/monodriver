/*
 * index.js: Top level include for the monodriver module
 */
var adapters = require('../adapters');

// Constructor
function Monodriver(adapter, driver) {

  // Check if the driver has an adapter in ../adapters
  if (!adapters[adapter]) {
    throw Error("Driver not supported by monodriver.");
  }

  this.adapterName = adapter; // Set the current adapter name
  this.adapter = new adapters[adapter](driver); // Set the current adapter
}

Monodriver.prototype.getAdapterName = function() {
  return this.adapterName;
}

Monodriver.prototype.getAdapterConfig = function() {
  return this.adapter.configKeys;
}

Monodriver.prototype.connect = function() {
  // Pass the arguments to the adapter
  this.adapter.connect.apply(null, arguments);
}

// Export the class
module.exports = Monodriver;
module.exports.getAdapters = function() {return Object.keys(adapters);}
module.exports.getAdapterDeps = function(adapter) {return adapters[adapter].dependencies;}

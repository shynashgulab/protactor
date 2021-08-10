const chromeOptions = require('./chromeOptions.js');
const firefoxOptions = require('./firefoxOptions.js');

// Common configuration files with defaults plus overrides from environment vars
module.exports = {

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [{
    'browserName': 'firefox',
    'moz:firefoxOptions': firefoxOptions.options
  }, {
    'browserName': 'chrome',
    'chromeOptions': chromeOptions.options,
  }]
};  
const chromeOptions = require('./chromeOptions.js');
const firefoxOptions = require('./firefoxOptions.js');

// Common configuration files with defaults plus overrides from environment vars
module.exports = {
    /* The address of a running selenium server.
      Selenium server needs to start first and uncomment
      Line 6 to 7 are required to run test in IE */
    // seleniumAddress:
    // (process.env.SELENIUM_URL || 'http://localhost:4444/wd/hub'),

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      // To run in IE uncomment line 12 to 13 and comment line 15 to 37
      // Also set the directconnect to false in config file and enable line 6 & 7
      // 'browserName': 'internet explorer',
      // 'ignoreProtectedModeSettings': true,
      'browserName':
       (process.env.TEST_BROWSER_NAME || 'firefox'),
      'version':
       (process.env.TEST_BROWSER_VERSION || 'ANY'),
      'chromeOptions': chromeOptions.options,
      'moz:firefoxOptions': firefoxOptions.options
    },
};
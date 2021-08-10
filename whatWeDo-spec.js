const WhatWeDoPage = require('../pages/whatWeDo-page.js');
const CommonMethods = require('../resuable/common.js');
const { browser } = require('protractor');

let whatWeDoPage = new WhatWeDoPage(browser);
let commonMethods = new CommonMethods(browser);

describe('What We Do Page', () => {

  beforeAll(async () => {
    await browser.get(browser.baseUrl);
  });
    
  it('Check title of the page', async () => {
    try {
      await whatWeDoPage.clickOnWhatWeDoInNavigation();
      expect(await commonMethods.getTitleOfPage()).toEqual('Web and Mobile App Development Company | Quovantis');
    } catch (e) {
      logger.error('exception occurred: '+ e);
    }
  });
});
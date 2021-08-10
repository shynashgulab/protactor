const HomePage = require('../pages/home-page.js');
const CommonMethods = require('../resuable/common.js');
const { browser } = require('protractor');

let homePage = new HomePage(browser);
let commonMethods = new CommonMethods(browser);

describe('Home Page', () => {

  beforeAll(async () => {
    await browser.get(browser.baseUrl);
  });
    
  it('Check title of the page', async () => {
    try {
      expect(await commonMethods.getTitleOfPage()).toEqual('Product Design and Development Company | Quovantis Technologies');
    } catch (e) {
      logger.error('exception occurred: '+ e);
    }
  });

  it('Check user is redirected to contact page', async () => {
    try {
      await homePage.clickOnGetInTouch();
      expect(await commonMethods.getTitleOfPage()).toEqual('Contact Details of Offices | Quovantis');
    } catch (error) {
      logger.error('exception occurred:' +e);
    }
  });
});
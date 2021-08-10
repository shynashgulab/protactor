const WhoWeArePage = require('../pages/whoWeAre-page.js');
const CommonMethods = require('../resuable/common.js');
const { browser } = require('protractor');

let whoWeArePage = new WhoWeArePage(browser);
let commonMethods = new CommonMethods(browser);

describe('Who We Are Page', () => {

  beforeAll(async () => {
    await browser.get(browser.baseUrl);
  });
    
  it('Check title of the page', async () => {
    try {
      await whoWeArePage.clickOnWhoWeAreInNavigation();
      expect(await commonMethods.getTitleOfPage()).toEqual('Outsourced Software Development Company | Quovantis');
    } catch (e) {
      logger.error('exception occurred: '+ e);
    }
  });

  it('Check header text is \'We are problem solvers\'', async () => {
    try {
      expect(await whoWeArePage.getHeaderText()).toEqual('We are problem solvers');
    } catch (error) {
      logger.error('exception occurred:' +e);
    }
  });
});
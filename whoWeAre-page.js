const whoWeAreElements = require('../elements/whoWeAre-elements.json');

let WhoWeArePage = function(browser) {
    let element = browser.element;

    let navigationWhoWeAre = element(by.id(whoWeAreElements.navigationWhoWeAreId));
    let whoWeAreHeaderText = $(whoWeAreElements.whoWeAreHeaderTextCss);

    this.clickOnWhoWeAreInNavigation = async () => {
        try {
            let button = protractor.ExpectedConditions;
            browser.wait(button.visibilityOf(navigationWhoWeAre), 4000, 'waiting for Who We Are link in navigation');
            await navigationWhoWeAre.click();
            logger.info('Click on Who We Are link in navigation');
        } catch (e) {
            logger.error('exception occurred: '+ e);
        }
    };

    this.getHeaderText = async () => {
        try {
            let text = protractor.ExpectedConditions;
            browser.wait(text.visibilityOf(whoWeAreHeaderText), 4000, 'waiting for Header Text');
            return await whoWeAreHeaderText.getText();
        } catch (e) {
            logger.error('exception occurred: '+ e);
        }
    };
};
module.exports = WhoWeArePage;
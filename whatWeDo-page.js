const whatWeDoElements = require('../elements/whatWeDo-elements.json');

let WhatWeDoPage = function(browser) {
    let element = browser.element;

    let navigationWhatWeDo = element(by.id(whatWeDoElements.navigationWhatWeDoId));

    this.clickOnWhatWeDoInNavigation = async () => {
        try {
            let button = protractor.ExpectedConditions;
            browser.wait(button.visibilityOf(navigationWhatWeDo), 4000, 'waiting for Who We Are link in navigation');
            await navigationWhatWeDo.click();
            logger.info('Click on What We Do link in navigation');
        } catch (e) {
            logger.error('exception occurred: '+ e);
        }
    };
};
module.exports = WhatWeDoPage;
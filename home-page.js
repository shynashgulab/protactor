const homeElements = require('../elements/home-elements.json');

let HomePage = function(browser) {
    let element = browser.element;

    let getInTouchButton = element(by.id(homeElements.getInTouchButtonId));

    this.clickOnGetInTouch = async () => {
        try {
            let button = protractor.ExpectedConditions;
            browser.wait(button.visibilityOf(getInTouchButton), 4000, 'waiting for Get in Touch button');
            await getInTouchButton.click();
            logger.info('Click on Get In Touch Button');
        } catch (e) {
            logger.error('exception occurred: '+ e);
        }

    };
};
module.exports = HomePage;
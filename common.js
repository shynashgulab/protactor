let CommonMethod = function(browser) {

    // Get title of the page 
    this.getTitleOfPage = async () => {
        try {
            return await browser.getTitle();
        } catch (e) {
            logger.error('exception occurred: '+ e);
        }
    };

    // Get current URL 
    this.getCurrentURL = async () => {
        try {
            return await browser.getCurrentUrl();
        } catch (e) {
            logger.error('exception occurred: '+ e);
        }
    };
};
module.exports = CommonMethod;
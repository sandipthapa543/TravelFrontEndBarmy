
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (async function () {

    this.Given(/^I am logged in user$/, function () {
        helpers.loadPage(page.login.url);

        return page.login.userInput("gaurav@asd.com", "gaurav123");
    });



    this.Then(/^I click on blog button$/, function () {
        return helpers.loadPage("http://localhost:3000/blog");
    });

    this.Then(/^I should see blog with name "([^"]*)"$/, function (expectedText) {
        return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div/div/div/div/div[1]')).getText()
            .then(textcheck => {
                assert.equal(expectedText, textcheck);
            });


    });
});
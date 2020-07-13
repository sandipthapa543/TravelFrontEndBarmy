
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const feature = require("../page-objects/feature");
module.exports = (async function () {

    this.Given(/^I am in packages page$/, function () {
       return helpers.loadPage(page.feature.home_url);

    });

    this.Then(/^I click on package name$/, function () {
        return helpers.loadPage(page.feature.packages_url);

    });
this.Then(/^I should see "([^"]*)"$/, function (expectedText) {
    return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[1]/div[3]/h1')).getText()
    .then(textcheck => {
        assert.equal(expectedText, textcheck);
    });
});
});


const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const feature = require("../page-objects/feature");
module.exports = (async function () {

    this.Given(/^I am in home page$/, function () {
       return helpers.loadPage(page.feature.url);

    });



    this.Then(/^I should see index page open$/, function () {
        return driver.findElement(by.xpath('//*[@id="app"]/div/header/div/a[1]')).click();

    });
this.Then(/^I should see "([^"]*)" under Top Packages view$/, function (expectedText) {
    return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[1]/div/div/div/h4')).getText()
    .then(textcheck => {
        assert.equal(expectedText, textcheck);
    });
});
});

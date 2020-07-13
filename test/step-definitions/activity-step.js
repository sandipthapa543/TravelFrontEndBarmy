
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const feature = require("../page-objects/feature");
const { when } = require("jquery");
module.exports = (async function () {

    this.Given(/^I am in index page$/, function () {
       return helpers.loadPage(page.activity.url);
    });

    this.Then(/^I click on activity shown$/, function () {
            return helpers.loadPage("http://localhost:3000/activities/hiking-and-camping.");
            });
    this.Then(/^I should see activity with name "([^"]*)"$/, function (expectedText) {
         return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[1]/div[3]/h1')).getText()
            .then(textcheck => {
                assert.equal(expectedText, textcheck);
            });
    });

});


const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (async function () {

    this.Given(/^I am logged in user$/, function () {
        helpers.loadPage(page.login.url);

        driver.findElement(by.name("email")).sendKeys("gaurav@asd.com", selenium.Key.ENTER);
        driver.findElement(by.name("password")).sendKeys("gaurav123", selenium.Key.ENTER);
        return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div/div[3]/button')).click();
    });



    this.Then(/^I click on blog button$/, function () {
        return helpers.loadPage("http://localhost:3000/blog");
    });

    this.Then(/^I should see blog with name "([^"]*)"$/, function (expectedText) {
        return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[1]/div/div[1]/div/div[1]')).getText()
            .then(textcheck => {
                assert.equal(expectedText, textcheck);
            });


    });
});
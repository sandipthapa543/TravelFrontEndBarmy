
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (function () {

    this.Given(/^I am login$/, async function () {
        helpers.loadPage(page.login.url);
        return page.login.userInput("gaurav@asd.com", "gaurav123");
    });



    this.Then(/^I viewed package from home screen$/, async function () {
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[2]/div/div/div/h4/a')).click()
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[4]/div[1]/div/div[1]/div[2]/div/div[6]')).click()
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[4]/div[1]/div/div[2]/div/div[2]/div/div[2]/a')).click()
    });

    this.Then(/^I gave Rating "([^"]*)" and Review Contents as "([^"]*)" and click on submit$/, async function (ratting, review) {
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="rating"]')).sendKeys(ratting);
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="review"]')).sendKeys(review);
        await new Promise(r => setTimeout(r, 2000));
        return driver.findElement(by.xpath('//*[@id="app"]/div[3]/div/div/div[2]/button[2]')).click()

    });
    this.Then(/^I should see my review "([^"]*)"$/, async function (expectedText) {
        await new Promise(r => setTimeout(r, 2000));
        helpers.loadPage("http://localhost:3000/packages/upper-dolpo");
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[4]/div[1]/div/div[1]/div[2]/div/div[6]')).click()
        await new Promise(r => setTimeout(r, 2000));
        return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[4]/div[1]/div/div[2]/div/div[2]/div/div[4]/div/div[2]/p')).getText()
            .then(textcheck => {
                assert.equal(expectedText, textcheck);
            });
    });
});
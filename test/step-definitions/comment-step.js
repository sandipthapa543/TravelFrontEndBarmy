
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (function () {

    this.Given(/^I am a register user$/, async function () {
        helpers.loadPage(page.login.url);
        return page.login.userInput("gaurav@asd.com", "gaurav123");
    });



    this.Then(/^I click on blog and write comment$/, async function () {
        await new Promise(r => setTimeout(r, 2000));
        helpers.loadPage("http://localhost:3000/blog");
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[1]/div/div/div/div[5]/a')).click();
        await new Promise(r => setTimeout(r, 3000));
        return driver.findElement(by.xpath('//*[@id="people"]')).sendKeys("hello");


    });
    this.When(/^I post the comment$/, async function () {
        await new Promise(r => setTimeout(r, 2000));
        return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/section/div/div/div/div[6]/form/div/div[2]/button')).click();
    });
    this.Then(/^I should see my comment "([^"]*)"$/, function (expectedText) {
        helpers.loadPage("http://localhost:3000/blog/hidden-kingdom-of-nepal");
        return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/section/div/div/div/div[6]/div[1]/div/p')).getText()
            .then(textcheck => {
                assert.equal(expectedText, textcheck);
            });
        });

    });

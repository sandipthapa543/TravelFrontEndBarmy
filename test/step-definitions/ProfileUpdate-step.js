
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const feature = require("../page-objects/feature");
module.exports = (function () {

    this.Given(/^I am login and in home page$/, async function () {
        helpers.loadPage(page.login.url);
        return page.login.userInput("gaurav@asd.com", "gaurav123");

    });

    this.Then(/^I click on side button and select profile and edit it$/, async function () {
        await new Promise(r => setTimeout(r, 2000));
        helpers.loadPage("http://localhost:3000/account/profile");
        await new Promise(r => setTimeout(r, 3000));
        return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div/div/div[1]/button')).click()


    });

    this.When(/^I edit my first name to "([^"]*)" and last name to "([^"]*)"$/, async function (firstName, lastName) {
        await new Promise(r => setTimeout(r, 1000));
        driver.findElement(by.xpath('//*[@id="fn"]')).click()
            .then(textcheck => {
                for (var i = 0; i < 20; i++) {
                    driver.findElement(by.xpath('//*[@id="fn"]')).sendKeys(selenium.Key.BACK_SPACE);
                }
            });
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="fn"]')).sendKeys(firstName);
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="ln"]')).click()
            .then(textcheck => {
                for (var i = 0; i < 20; i++) {
                    driver.findElement(by.xpath('//*[@id="ln"]')).sendKeys(selenium.Key.BACK_SPACE);
                }
            });
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="ln"]')).sendKeys(lastName);
        await new Promise(r => setTimeout(r, 2000));
        return driver.findElement(by.xpath('//*[@id="app"]/div[3]/div/div/div[3]/div/button[2]')).click();



    });
    this.Then(/^I should see change in the profile details with "([^"]*)"$/, async function (expectedText) {
        await new Promise(r => setTimeout(r, 2000));
         helpers.loadPage("http://localhost:3000/");
         await new Promise(r => setTimeout(r, 2000));
         driver.findElement(by.xpath('//*[@id="app"]/div/header/div/button[1]/span/i')).click();
         await new Promise(r => setTimeout(r, 2000));
         driver.findElement(by.xpath('//*[@id="app"]/div/nav/div[1]/div/div[1]/div[2]')).getText()
         .then(textcheck => {
             assert.equal(expectedText, textcheck);
         });
         await new Promise(r => setTimeout(r, 2000));


    });


});


const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (function () {

    this.Given(/^I am log in$/, async function () {
        helpers.loadPage(page.login.url);
        return page.login.userInput("gaurav@asd.com", "gaurav123");
    });



    this.Then(/^I viewed package from home screen for enquire$/, async function () {
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[2]/div/div/div/h4/a')).click()
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[4]/div[1]/div/div[1]/div[2]/div/div[6]')).click()
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div[1]/main/div/div[1]/div[4]/div[2]/div/button[1]')).click()
    });

    this.Then(/^I gave number of people "([^"]*)" and message "([^"]*)" and click on submit$/, async function (ratting, review) {
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="people"]')).sendKeys(ratting);
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="message"]')).sendKeys(review);
        await new Promise(r => setTimeout(r, 2000));
      driver.findElement(by.xpath('//*[@id="app"]/div[3]/div/div/div[2]/button[2]')).click()
    return  await new Promise(r => setTimeout(r, 2000));


    });
});
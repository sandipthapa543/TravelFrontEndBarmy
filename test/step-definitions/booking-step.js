
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (function () {

    this.Given(/^I am login and in homepage$/, async function () {
        helpers.loadPage(page.login.url);
        return page.login.userInput("gaurav@asd.com", "gaurav123");
    });

    this.Then(/^I viewed package from homepage$/, async function () {
        await new Promise(r => setTimeout(r, 2000));
      return  helpers.loadPage("http://localhost:3000/packages/upper-dolpo");
    });

    this.Then(/^I click on book this Trip$/, async function () {
        await new Promise(r => setTimeout(r, 3000));
       return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[4]/div[2]/div/button[2]')).click();

    });
    this.When(/^I enter number of people "([^"]*)" and departure date "([^"]*)"$/, async function (people, date) {
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="People"]')).sendKeys(people)
        await new Promise(r => setTimeout(r, 2000));
       return driver.findElement(by.xpath('//*[@id="departure"]')).sendKeys(date)

    });
    this.Then(/^I should see my booking confirmed$/, async function () {
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div[3]/div/div/div[3]/div/button[2]')).click();
        return   await new Promise(r => setTimeout(r, 2000));
       
    });
});
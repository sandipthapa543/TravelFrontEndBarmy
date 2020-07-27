
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (function () {

    this.Given(/^I am register user$/, async function () {
        helpers.loadPage(page.login.url);
        return page.login.userInput("gaurav@asd.com", "gaurav123");
    });



    this.Then(/^I click on blog$/, async function () {
        await new Promise(r => setTimeout(r, 1000));
        return helpers.loadPage("http://localhost:3000/blog");



    });
    this.When(/^I click on delete button of any blog$/, async function () {
        await new Promise(r => setTimeout(r, 1000));
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/section/div/div/div/div[6]/form/div/div[2]/button')).click();
        await new Promise(r => setTimeout(r, 1000));
    });
    this.Then(/^select blog should be deleted$/, async function () {
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div[1]/main/div/div[1]/div[1]/div/div[2]/div/div[5]/button[2]')).click()
        await new Promise(r => setTimeout(r, 2000));
        driver.findElement(by.xpath('//*[@id="app"]/div[3]/div/div/div[3]/div/button[2]')).click()
        await new Promise(r => setTimeout(r, 1000));
        helpers.loadPage("http://localhost:3000/blog");
        await new Promise(r => setTimeout(r, 2000));


    });

});

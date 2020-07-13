
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (function () {

    this.Given(/^register user and click on blog navbar$/, function () {
        helpers.loadPage(page.login.url);
        return page.login.userInput("gaurav@asd.com", "gaurav123");
    })

    this.Then(/^I click edit button$/, async function () {
        await new Promise(r => setTimeout(r, 5000));
            helpers.loadPage("http://localhost:3000/blog");
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div[1]/div/div/div/div[5]/button')).click();
        await new Promise(r => setTimeout(r, 5000));
        driver.findElement(by.xpath('//*[@id="content"]')).sendKeys("gaurav don", selenium.Key.ENTER);
        return driver.findElement(by.xpath('//*[@id="app"]/div[3]/div/div/div[3]/button[2]')).click();
    });


});


const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (async function () {

    this.Given(/^I am a register user$/, function () {
        helpers.loadPage(page.login.url);
        driver.findElement(by.name("email")).sendKeys("gaurav@asd.com", selenium.Key.ENTER);
        driver.findElement(by.name("password")).sendKeys("gaurav123", selenium.Key.ENTER);
        return driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div/div[3]/button')).click();
    });



    this.Then(/^I click on blog$/, function () {
        return helpers.loadPage(page.comment.home_url);
    });
    
    this.Then(/^I select particular blog to comment$/, function () {
        return helpers.loadPage(page.comment.blog_url);
    });
    this.When(/^I write comment on blog$/, function () {
        driver.findElement(by.xpath('//*[@id="app"]/div[1]/main/div/section/div/div/div/div[5]/button[1]')).click();
        return driver.findElement(by.xpath('//*[@id="input-67"]')).sendKeys("my first comment", selenium.Key.ENTER);

    });

    this.Then(/^Comment should be posted$/, function (expectedText) {
        return driver.findElement(by.xpath('//*[@id="app"]/div[3]/div/div/div[2]/button[2]')).click()
            


    });
});
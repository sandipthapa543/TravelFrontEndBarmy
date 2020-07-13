
const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");
module.exports = (async function () {

    this.Given(/^register user$/, function () {
        helpers.loadPage(page.login.url);
        page.login.userInput("gaurav@asd.com", "gaurav123");
        driver.findElement(by.xpath('//*[@id="app"]/div/main/div/div[1]/div/div[3]/button')).click();
     
    
    });

    this.Then(/^I click on blog which i want to edit$/, function () {
      
       
        return driver.findElement(by.xpath('//*[@id="app"]/div[1]/main/div/div[1]/button')).click();
    });
   

});
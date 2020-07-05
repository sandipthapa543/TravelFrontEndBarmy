const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");

module.exports = function () {

    this.Given(/^I am on the Login page$/, function () {


        return helpers.loadPage(page.login.url);

    });
    this.When(/^I enter "([^"]*)" and I enter "([^"]*)" and I click login$/, function (userEmail, userPassword) {
    
        return page.login.userInput(userEmail, userPassword);
    });
   
    this.Then(/^I should see index page open\.$/, function () {
        return  driver.findElement(by.xpath('/html/body/div/div/div/div/main/div/div/div[1]/div/form/div[2]/div/button[1]/span')).click();
   
            });
        }




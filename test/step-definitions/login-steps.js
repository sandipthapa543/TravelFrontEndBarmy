const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai");
const { By } = require("selenium-webdriver");

module.exports = function () {

    this.Given(/^I am on the Login page$/, function () {


        return helpers.loadPage(page.login.url);

    });
    this.When(/^I enter "([^"]*)" and I enter "([^"]*)" and I click login$/, function (userEmail, userPassword) {
        const p = './page-objects/login';
        return page.login.userInput(userEmail, userPassword);
    });
   
    this.Then(/^I should see index page open\.$/, function () {
        return helpers.loadPage(page.login.homepage);
            });
        }




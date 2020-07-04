const { Driver } = require("selenium-webdriver/edge");

module.exports = function () {

    this.Given(/^I am logged in user$/, function () {


       helpers.loadPage(page.login.url);
       return page.login.userInput("gaurav@asd.com", "gaurav123");

    });
    this.When(/^I am on blog page$/, function () {
        return helpers.loadPage(page.blog.url);
       
    });
   
    this.Then(/^I enter "([^"]*)" and I enter "([^"]*)" and I enter "([^"]*)"$/, function (string1,string2,string3) {
        return page.blog.userInput(string1,string2,string3);
       
            });
        
        this.Then(/^Post should be shared$/, function () {
            return driver.findElement(by.xpath('/html/body/div/div/div/div/main/div/div/div[1]/div/form/div[2]/div/button[1]/span')).click();
           
        });
    }


       // return driver.findElement(by.xpath('/html/body/div/div/div/div/main/div/div/div[1]/div/form/div[2]/div/button[1]/span')).click();
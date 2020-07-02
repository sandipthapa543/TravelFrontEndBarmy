const { Driver } = require("selenium-webdriver/chrome");
const { assert } = require("chai")
module.exports = function () {
    this.Given(/^I am on the Registration page$/, function () {


        return helpers.loadPage(page.registration.url);
    });
// return page.registration.userInput(ufname, ulname,ucountry,uemail,upassword,uphone,uaddress);
this.When(/^I enter "([^"]*)" as First Name and I enter "([^"]*)" as last Name and I enter "([^"]*)" as country and I enter "([^"]*)" as email and I enter "([^"]*)" as password and I enter "([^"]*)" as phone number and I enter "([^"]*)" as address$/, function (ufname, ulname,ucountry,uemail,upassword,uphone,uaddress) {
    return page.registration.userInput(ufname, ulname,ucountry,uemail,upassword,uphone,uaddress);
    
  });
  this.Then(/^I should direct to login page\.$/, function () {
    return  driver.findElement(by.xpath('/html/body/div/div/div/div/main/div/div/div[1]/div/div/div/form/div/div/div[2]/div/button/span')).click();
   
        });



};

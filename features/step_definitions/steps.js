const assert = require('assert');
const { Given, When, Then,AfterAll } = require('cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai');

require("chromedriver");
// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the  Registration page',{timeout: 6 * 5000}, async function () {
    await driver.get('http://localhost:3000/register');
});
When('I enter {string} as first name ,and I enter {string} as last name ,and and I enter {string} in country,and I enter {string},and I enter {string} and I enter {string} as password,and I enter {string} as phone number,and I enter {string} as address', function (string1, string2, string3, string4, string5, string6, string7, string8) {
    const element =  driver. findElement(By.name('first_name'));
    element.sendKeys(string1, Key.RETURN);
    element.submit();
    const element1 =  driver. findElement(By.name('last_name'));
    element1.sendKeys(string2, Key.RETURN);
    element1.submit();
    const element2 =  driver. findElement(By.name('countries'));
    element2.sendKeys(string3, Key.RETURN);
    element2.submit();
    const element3 =  driver. findElement(By.name('email'));
    element3.sendKeys(string4, Key.RETURN);
    element3.submit();
    const element4 =  driver. findElement(By.name('password'));
    element4.sendKeys(string5, Key.RETURN);
    element4.submit();
    const element5 =  driver. findElement(By.name('contact'));
    element5.sendKeys(string6, Key.RETURN);
    element5.submit();
    const element6 =  driver. findElement(By.name('city'));
    element6.sendKeys(string7, Key.RETURN);
    element6.submit();
  });
  Then('I should see homepage',{timeout: 6 * 5000}, async function () {
    await driver.get('http://localhost:3000/login');
});

Given('I am on the login page and user is not logged in',{timeout: 6 * 5000}, async function () {
    await driver.get('http://localhost:3000/login');
});
When('I enter {string} and I enter {string} and I click login', function (string1, string2) {
    const element =  driver. findElement(By.name('Email'));
    element.sendKeys(string1, Key.RETURN);
    element.submit();
    const element1 =  driver. findElement(By.name('Password'));
    element1.sendKeys(string2, Key.RETURN);
    element1.submit();
  });
  
  Then('I should see home page',{timeout: 6 * 5000}, async function () {
    await driver.get('http://localhost:3000/');
});
  AfterAll('end', async function(){
    await driver.quit();
});
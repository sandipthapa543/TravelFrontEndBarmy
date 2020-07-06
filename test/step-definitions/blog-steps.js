const { Driver } = require("selenium-webdriver/edge");
const { Builder } = require('selenium-webdriver');
require('chromedriver')
module.exports = (async function () {

    this.Given(/^I am logged in user$/, function () {


         helpers.loadPage(page.login.url);
          driver.findElement(by.name("email")).sendKeys("gaurav@asd.com", selenium.Key.ENTER);
         driver.findElement(by.name("password")).sendKeys("gaurav123", selenium.Key.ENTER);
    return  driver.findElement(by.xpath('/html/body/div/div/div/div/main/div/div/div[1]/div/form/div[2]/div/button[1]/span')).click();
    });
  
    this.When(/^I am on blog page$/, function () {
      
            const run= driver.findElement(by.xpath('//*[@id="app"]/div/header/div/a[4]'));
            // return helpers.loadPage(page.blog.blogs);
     console.log(run);
     run.click();
       
       
    });
   
    this.Then(/^I enter$/, function () {
    //     driver.setTimeout(() => {
    //    driver.findElement(by.xpath('//*[@id="title"]')).sendKeys("gaurav123", selenium.Key.ENTER);
    //     }, 10000);
    driver.wait(driver.findElement(by.xpath('//*[@id="title"]')).sendKeys("gaurav123", selenium.Key.ENTER),5000);
        // driver.manage().timeouts().implicitlyWait(5000);
    //    driver.findElement(by.xpath('//*[@id="title"]')).sendKeys("gaurav123", selenium.Key.ENTER);
            });
        
    //     this.Then(/^Post should be shared$/, function () {
    //         return driver.findElement(by.xpath('/html/body/div/div/div/div/main/div/div/div[1]/div/form/div[2]/div/button[1]/span')).click();
           
    //     });
    });


       // return driver.findElement(by.xpath('/html/body/div/div/div/div/main/div/div/div[1]/div/form/div[2]/div/button[1]/span')).click();
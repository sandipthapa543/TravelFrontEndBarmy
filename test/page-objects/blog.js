module.exports = {

    url: 'http://localhost:3000/blog',
   

    elements: {
        Title: by.id('input-111'),
        Content: by.id('input-115'),
        Image: by.id("input-119"),
        loginButton: by.xpath('//*[@id="app"]/div/main/div/div/div[1]/div[3]/button[2]/span'),
      
    },
  
    userInput: function (usertitle,usercontent,userimage) {

        var selectorTitle = page.login.elements.Email;
        var selectorContent = page.login.elements.Password;
        var selectorImage=page.login.elements.loginButton;

       
            driver.findElement(selectorTitle).sendKeys(usertitle, selenium.Key.ENTER);
            driver.findElement(selectorContent).sendKeys(usercontent, selenium.Key.ENTER);
            driver.findElement(selectorImage).sendKeys(userimage, selenium.Key.ENTER);
            return driver.findElement(selectorButton).click();
           
    }

    
};
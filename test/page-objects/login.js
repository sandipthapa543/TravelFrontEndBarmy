module.exports = {

    url: 'http://localhost:3000/login',
    homepage: 'http://localhost:3000/index',

    elements: {
        Email: by.name('email'),
        Password: by.name('password'),
        loginButton: by.xpath('/html/body/div/div/div/div/main/div/div/div[1]/div/form/div[2]/div/button[1]/span'),
      
    },
  
    userInput: function (userEmail,userPassword) {

        var selectorEmail = page.login.elements.Email;
        var selectorPassword = page.login.elements.Password;
        var selectorButton=page.login.elements.loginButton;

       
            driver.findElement(selectorEmail).sendKeys(userEmail, selenium.Key.ENTER);
            driver.findElement(selectorPassword).sendKeys(userPassword, selenium.Key.ENTER);
            return driver.findElement(selectorButton).click();
           
    }

    
};
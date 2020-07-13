module.exports = {

    url: 'http://localhost:3000/login',


    elements: {
        Email: by.name('email'),
        Password: by.name('password'),
        loginButton: by.xpath('//*[@id="app"]/div/main/div/div[1]/div/div[3]/button'),
    },

    userInput: function (userEmail, userPassword) {

        var selectorEmail = page.login.elements.Email;
        var selectorPassword = page.login.elements.Password;
        var selectorButton=page.login.elements.loginButton;
     driver.findElement(selectorEmail).sendKeys(userEmail, selenium.Key.ENTER);
     driver.findElement(selectorPassword).sendKeys(userPassword, selenium.Key.ENTER);
     return driver.findElement(selectorButton).click();


    }


};
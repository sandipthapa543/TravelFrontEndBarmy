module.exports = {

    url: 'http://localhost:3000/login',


    elements: {
        Email: by.name('email'),
        Password: by.name('password'),

    },

    userInput: function (userEmail, userPassword) {

        var selectorEmail = page.login.elements.Email;
        var selectorPassword = page.login.elements.Password;
                driver.findElement(selectorEmail).sendKeys(userEmail, selenium.Key.ENTER);
        driver.findElement(selectorPassword).sendKeys(userPassword, selenium.Key.ENTER);


    }


};
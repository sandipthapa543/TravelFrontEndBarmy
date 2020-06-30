module.exports = {

    url: 'http://localhost:3000/register',
    
    elements: {
        FirstName: by.name('fname'),
        LastName: by.name('lname'),
        Country: by.name('country'),
        Email: by.name('email'),
        Password: by.name('password'),
        Phone: by.name('phone'),
        Address: by.name('address'),
        registerButton: by.xpath('/html/body/div/div/div/div/main/div/div/div[1]/div/div/div/form/div/div/div[2]/div/button/span')
    },
    userInput: function (userfname, userlname,ucountry,uemail,upassword,uphone,uaddress) {
        var selectorFnmae = page.registration.elements.FirstName;
        var selectorLname = page.registration.elements.LastName;
        var selectorCountry = page.registration.elements.Country;
        var selectorEmail = page.registration.elements.Email;
        var selectorPassword = page.registration.elements.Password;
        var selectorPhone = page.registration.elements.Phone;
        var selectorAddress = page.registration.elements.Address;
        var selectorButton = page.registration.elements.registerButton;

        driver.findElement(selectorFnmae).sendKeys(userfname, selenium.Key.ENTER);
        driver.findElement(selectorLname).sendKeys(userlname, selenium.Key.ENTER);   
        driver.findElement(selectorCountry).sendKeys(ucountry, selenium.Key.ENTER);
        driver.findElement(selectorEmail).sendKeys(uemail, selenium.Key.ENTER);
        driver.findElement(selectorPassword).sendKeys(upassword, selenium.Key.ENTER);
        driver.findElement(selectorPhone).sendKeys(uphone, selenium.Key.ENTER);
        driver.findElement(selectorAddress).sendKeys(uaddress, selenium.Key.ENTER);
        return driver.findElement(selectorButton).click();

    }
};
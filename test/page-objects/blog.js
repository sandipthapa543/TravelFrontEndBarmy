module.exports = {

blogs:("http://localhost:3000/blog"),
    elements: {
        Title: by.id('title'),
        Content: by.id('content'),
        Image: by.id('image'),
        loginButton: by.xpath('//*[@id="app"]/div/main/div/div/div[1]/div[3]/button[2]/span'),
      
    },
  
    
    userInput: function (usertitle,usercontent,userimage) {

        var selectorTitle = page.login.elements.Title;
        var selectorContent = page.login.elements.Content;
        var selectorImage=page.login.elements.Image;

       
            driver.findElement(selectorTitle).sendKeys(usertitle, selenium.Key.ENTER);
            driver.findElement(selectorContent).sendKeys(usercontent, selenium.Key.ENTER);
            driver.findElement(selectorImage).sendKeys(userimage);
           
    }

    
};
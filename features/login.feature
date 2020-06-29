Feature: user login
  
    Scenario: The user logs in and sees the Home page
        Given I am on the login page and user is not logged in
        When I enter "test@gmail.com" and I enter "admin123" and I click login
        Then I should see home page

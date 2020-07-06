@search
Feature: User Login 
 
  
  Scenario: The user logs in and sees the Home page
   Given I am on the Login page
    When I enter "Gaurav@asd.com" and I enter "gaurav123" and I click login
    Then I should see index page open.
 
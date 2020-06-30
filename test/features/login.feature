@search
Feature: User Login 
 
  
  Scenario: The user logs in and sees the Home page
   Given I am on the Login page
    When I enter "test@test.com" and I enter "testtesttest" and I click login
 
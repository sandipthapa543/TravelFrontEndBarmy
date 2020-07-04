@search
Feature: add blog
 
  
  Scenario: register user add blog
   Given I am logged in user
    When I am on blog page
    Then  I enter "Titile" and I enter "Contetnt" and I enter "C:\Users\Gaurav Shrestha\Pictures\Screenshots"
    Then Post should be shared
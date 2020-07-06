@search
Feature: new Register in login
  
  
  Scenario: new user registeration vaidation test
    Given I am on the Registration page
    When I enter "barmy" as First Name and I enter "bbarmy" as last Name and I enter "Nepal" as country and I enter "barmy@gmail.com" as email and I enter "barmy0123" as password and I enter "9865321245" as phone number and I enter "Damak" as address
    Then I should direct to login page.
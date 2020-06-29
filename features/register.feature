Feature: new user Register
  
  
  Scenario: user registeration test
    Given I am on the  Registration page
    When I enter "test" as first name ,and I enter "test" as last name ,and and I enter "Nepal" in country,and I enter "Test@gmail.com",and I enter "Damak" and I enter "test123" as password,and I enter "9800000000" as phone number,and I enter "kathmandu" as address
    Then I should see homepage
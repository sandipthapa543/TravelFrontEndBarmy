@search
Feature: Book Package
 
  Scenario: See package and book it
   Given I am login and in homepage
   Then I viewed package from homepage
   Then I click on book this Trip
   When I enter number of people "4" and departure date "2020-07-21"
   Then I should see my booking confirmed

 
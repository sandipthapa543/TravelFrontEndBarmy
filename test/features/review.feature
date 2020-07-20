@search
Feature: Review Package
 
  Scenario: See package and review it
   Given I am login
   Then I viewed package from home screen 
   Then I gave Rating "4" and Review Contents as "I like this" and click on submit

 
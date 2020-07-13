@search
Feature: comment in blogs
 
  Scenario: register user comment in  blog
   Given I am a register user
   Then I click on blog 
   Then I select particular blog to comment
   When I write comment on blog
   Then Comment should be posted


 
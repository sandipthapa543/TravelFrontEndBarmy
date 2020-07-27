@search
Feature: Delete  blogs

  Scenario: User Delete own  blog
    Given I am register user 
    Then I click on blog 
    When I click on delete button of any blog 
    Then select blog should be deleted



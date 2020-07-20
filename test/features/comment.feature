@search
Feature: comment in blogs

  Scenario: register user comment in  blog
    Given I am a register user
    Then I click on blog and write comment
    When I post the comment
    Then I should see my comment "hello"



@search
Feature: view single packages


    Scenario: The user logs in and sees the Home page
        Given I am in packages page
        Then I click on package name
        Then I should see "UPPER DOLPO"


@search
Feature: view packages


    Scenario: The user logs in and sees the Home page
        Given I am in home page
        Then I should see index page open
        Then I should see "Upper Dolpo" under Top Packages view


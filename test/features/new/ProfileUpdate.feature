@search
Feature: Profile Update

    Scenario: User update own profile
        Given I am login and in home page
        Then I click on side button and select profile and edit it
        When I edit my first name to "Gaurav" and last name to "Shrestha"
        Then I should see change in the profile details with "Gaurav Shrestha"


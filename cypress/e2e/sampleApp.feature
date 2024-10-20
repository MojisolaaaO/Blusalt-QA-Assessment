Feature: Sample App

Scenario: Successful login using valid credentials
    Given I am on the UI Test Automation Playground website
    When I click Sample App
    And I input a valid username with "testuser"
    And I input a valid password with "pwd"
    And I click the login button
    Then I should get a welcome text
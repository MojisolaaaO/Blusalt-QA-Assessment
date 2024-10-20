Feature: Client Side Delay

Scenario: Wait for label text to appear 15 seconds after clicking a button
    Given I am on the UI Test Automation Playground homepage
    When I click Client Side Delay
    And I click the button
    Then data should appear afer 15 seconds


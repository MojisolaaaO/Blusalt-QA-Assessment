Feature: Shadow DOM 

  Scenario: Generate GUID and verify clipboard value
    Given I am on the Shadow DOM page
    When I click on the "Generate GUID" button
    And I click on the "Copy to Clipboard" button
    Then the guid generated should be copied to the clipboard

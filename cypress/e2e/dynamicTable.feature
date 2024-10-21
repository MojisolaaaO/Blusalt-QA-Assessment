Feature: Dynamic Table 

  Scenario: Verify CPU Load in Dynamic Table
    Given I am on the Dynamic Table page
    When I reload the page
    Then the Chrome CPU value should be the same as the value in the yellow label
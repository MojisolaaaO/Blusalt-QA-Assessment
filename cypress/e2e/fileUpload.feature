Feature: File Upload

Scenario: Uploading a file via drag & drop
    Given I am on the site
    When I click File Upload
    And I drag & drop a file
    Then the file should be selected

Scenario: Uploading a file using the `Browse files` 
    Given I am on the UITAP site
    When I click on File Upload
    And  I click on browse and select a file
    Then the file is selected
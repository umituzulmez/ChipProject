@PurgoMalumTest
Feature: TextValidationTest

  @suit @textValidation @positive
  Scenario: User should be able send a valid text and validate it
    Given User sends a text to PurgoMalum
      | text | Hello World! |
    Then User should get status code 200
    And User should get the correct text in response
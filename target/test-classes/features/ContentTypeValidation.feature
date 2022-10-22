@PurgoMalumTest @contentType
Feature: Content Type Validation Tests

  @suit @positive
  Scenario: User should be able to send a text in content type "json"
    Given User sends a text to PurgoMalum in following type
      | text         | Just Testing |
      | request type | json         |
    Then User should get status code 200
    And User should get correct type as response

  @suit @positive
  Scenario: User should be able to send a text in content type "xml"
    Given User sends a text to PurgoMalum in following type
      | text         | Hello World! |
      | request type | xml          |
    Then User should get status code 200
    And User should get correct type as response

  @suit @positive
  Scenario: User should be able to send a text in content type "plain"
    Given User sends a text to PurgoMalum in following type
      | text         | Hello World! |
      | request type | plain        |
    Then User should get status code 200
    And User should get correct type as response

  @suit @negative
  Scenario: User should not be able to send a text in invalid content type
    Given User sends a text to PurgoMalum in following type
      | text         | Hello World! |
      | request type | some text    |
    Then User should get status code 404

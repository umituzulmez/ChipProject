@PurgoMalumTest
Feature: Profanity Validation Test

  @suit @profanityValidationTest
  Scenario Outline: User should be able to validate a text contains profanity
    Given User sends a '<text>' to PurgoMalum to check it in profanity list
    Then User should get status code 200
    And User should get following '<response>'

    Examples:
      | text                 | response |
      | Hello World          | false    |
      | Do not do any shit   | true     |
      | Hey you swear        | false    |
      | Do not be a twat     | true     |
      | What is wrong        | false    |
      | He is like silly     | false    |
      | Sorry for that words | false    |
      | I am just testing    | false    |
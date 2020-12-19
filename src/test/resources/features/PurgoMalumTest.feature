@PurgoMalumTest
Feature: PurgoMalum Tests

  #Text validation Test - positive -
  @suit
  Scenario: User should be able send a valid text and validate it
    Given User sends a text to PurgoMalum
      | text | Hello World! |
    Then User should get status code 200
    And User should get the correct text in response

  #ContentType Validation Test - positive -
  @suit @contentType
  Scenario: User should be able to send a text in content type "json"
    Given User sends a text to PurgoMalum in following type
      | text         | Just Testing |
      | request type | json         |
    Then User should get status code 200
    And User should get correct type as response

  #ContentType Validation Test - positive -
  @suit @contentType
  Scenario: User should be able to send a text in content type "xml"
    Given User sends a text to PurgoMalum in following type
      | text         | Hello World! |
      | request type | xml          |
    Then User should get status code 200
    And User should get correct type as response

  #ContentType Validation Test - positive -
  @suit @contentType
  Scenario: User should be able to send a text in content type "plain"
    Given User sends a text to PurgoMalum in following type
      | text         | Hello World! |
      | request type | plain        |
    Then User should get status code 200
    And User should get correct type as response

  #ContentType Validation Test - negative -
  @suit @contentType
  Scenario: User should not be able to send a text in invalid content type
    Given User sends a text to PurgoMalum in following type
      | text         | Hello World! |
      | request type | some text    |
    Then User should get status code 404

  #Texts Contain Profanity Test
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

  #Adding Profanity Word and Masking it by '*' by leaving replace key empty
  @suit @profanityMaskingTest
  Scenario: User should be able to add some words as profanity list and mask it by '*'
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace |                  |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  ######BUG######
  #Api is not giving proper response body after replacement of more than one words
  #Adding Profanity Word and Replacing it by any text provided by replace key
  @failed @bug @profanityMaskingTest
  Scenario: User should be able to add some words as profanity list and replace it by 'removed'
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly |
      | word    | silly,very       |
      | replace | [removed]        |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  #Adding Profanity Word and Replacing it by ignoring the uppercase
  @suit @profanityMaskingTest
  Scenario: User should be able to add some words as profanity list and replace it by ignoring the uppercase
    Given User sends following text and adds following word as Profanity
      | text    | Silly is very silly |
      | word    | silly               |
      | replace | [replaced]          |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  ######BUG#######
  #Should give 400 status code instead of 200
  #Adding more than 10 words
  @failed @bug @profanityMaskingTest
  Scenario: User should not be able to add more than 10 words as profanity list
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly but sometimes he makes some jokes and that makes us really happy |
      | word    | silly,but,jokes,that,makes,us,really,happy,is,very,he                             |
      | replace | [removed]                                                                         |
    Then User should get status code 400
    And User should get following error message
      | User Black List Exceeds Limit of 10 Words. |

  ######BUG######
  #Should give 400 status code instead of 200
  #Adding more than 200 characters to profanity word
  @failed @bug @profanityMaskingTest
  Scenario: User should not be able to add a word more than 200 characters as profanity list
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly but sometimes he makes some jokes and that makes us really happy                                                                                                                         |
      | word    | sillyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz |
      | replace | [removed]                                                                                                                                                                                                 |
    Then User should get status code 400
    And User should get following error message
      | User Black List Exceeds Limit of 10 Words. |

  ######BUG######
  #Should give 400 status code instead of 200
  #Adding more than 200 characters to replacement word
  @failed @bug @profanityMaskingTest
  Scenario: User should not be able to add a replacement word more that 20 characters
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly         |
      | word    | silly                    |
      | replace | thistextismorethantwenty |
    Then User should get status code 400
    And User should get following error message
      | User Replacement Text Exceeds Limit of 20 Characters. |

  #Some valid symbols test in replacement word
  @suit @profanityMaskingTest
  Scenario: User should be able to add some symbols in replacement word
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace | [=]]!"           |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  ######BUG######
  #Should give 400 status code instead of 200
  #Some invalid symbols test in replacement word
  @failed @bug @profanityMaskingTest
  Scenario: User should be able to add some symbols in replacement word
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace | $£&%#            |
    Then User should get status code 200
    And User should get following error message
      | Invalid User Replacement Text |

  #Adding Profanity Word and Replacing it by character
  @suit @profanityMaskingTest
  Scenario: User should be able to add some words as profanity list and replace it by valid character
    Given User sends following text and adds following character as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace | _                |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  #######BUG######
  #Should give 400 status code instead of 200 and correct error message
  #Invalid replacement character test
  @failed @bug @profanityMaskingTest
  Scenario: User should be able to replace words by invalid character
    Given User sends following text and adds following character as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace | @                |
    Then User should get status code 200
    And User should get following error message
      | Invalid User Replacement Characters |



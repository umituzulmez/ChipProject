@PurgoMalumTest @profanityMaskingTest
Feature: Profanity Masking Tests

  @suit @MaskingWith* @EmptyReplaceKey
  Scenario: User should be able to add some words as profanity list and mask it by '*'
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace |                  |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  ######BUG######
  #Api is not giving proper response body after replacement of more than one words
  @failed @bug @MaskinWithWord
  Scenario: User should be able to add some words as profanity list and replace it by 'removed'
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly |
      | word    | silly,very       |
      | replace | [removed]        |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  @suit @MaskinWithWord @ignoringUpperCase
  Scenario: User should be able to add some words as profanity list and replace it by ignoring the uppercase
    Given User sends following text and adds following word as Profanity
      | text    | Silly is very silly |
      | word    | silly               |
      | replace | [replaced]          |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  ######BUG#######
  #Should give 400 status code instead of 200
  @failed @bug @MaskinWithWord @negative @boundry
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
  @failed @bug @MaskinWithWord @negative @boundry
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
  @failed @bug @MaskinWithWord @negative @boundry
  Scenario: User should not be able to add a replacement word more that 20 characters
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly         |
      | word    | silly                    |
      | replace | thistextismorethantwenty |
    Then User should get status code 400
    And User should get following error message
      | User Replacement Text Exceeds Limit of 20 Characters. |

  @suit @MaskinWithChars @validSymbol @positive
  Scenario: User should be able to add some symbols in replacement word
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace | [=]]!"           |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  ######BUG######
  #Should give 400 status code instead of 200
  @failed @bug @MaskinWithChars @invalidSymbol @negative
  Scenario: User should be able to add some symbols in replacement word
    Given User sends following text and adds following word as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace | $£&%#            |
    Then User should get status code 400
    And User should get following error message
      | Invalid User Replacement Text |

  @suit @MaskinWithChars
  Scenario: User should be able to add some words as profanity list and replace it by valid character
    Given User sends following text and adds following character as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace | _                |
    Then User should get status code 200
    And User should get newly added profanity word as masked

  #######BUG######
  #Should give 400 status code instead of 200 and correct error message
  @failed @bug @MaskinWithChars @negative
  Scenario: User should be able to replace words by invalid character
    Given User sends following text and adds following character as Profanity
      | text    | He is very silly |
      | word    | silly            |
      | replace | @                |
    Then User should get status code 400
    And User should get following error message
      | Invalid User Replacement Characters |



$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ContentTypeValidation.feature");
formatter.feature({
  "name": "Content Type Validation Tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@contentType"
    }
  ]
});
formatter.scenario({
  "name": "User should be able to send a text in content type \"json\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@contentType"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "User sends a text to PurgoMalum in following type",
  "rows": [
    {
      "cells": [
        "text",
        "Just Testing"
      ]
    },
    {
      "cells": [
        "request type",
        "json"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_text_to_PurgoMalum_in_following_type(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get correct type as response",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_correct_type_as_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to send a text in content type \"xml\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@contentType"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "User sends a text to PurgoMalum in following type",
  "rows": [
    {
      "cells": [
        "text",
        "Hello World!"
      ]
    },
    {
      "cells": [
        "request type",
        "xml"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_text_to_PurgoMalum_in_following_type(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get correct type as response",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_correct_type_as_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to send a text in content type \"plain\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@contentType"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "User sends a text to PurgoMalum in following type",
  "rows": [
    {
      "cells": [
        "text",
        "Hello World!"
      ]
    },
    {
      "cells": [
        "request type",
        "plain"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_text_to_PurgoMalum_in_following_type(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get correct type as response",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_correct_type_as_response()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to send a text in invalid content type",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@contentType"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "User sends a text to PurgoMalum in following type",
  "rows": [
    {
      "cells": [
        "text",
        "Hello World!"
      ]
    },
    {
      "cells": [
        "request type",
        "some text"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_text_to_PurgoMalum_in_following_type(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 404",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/ProfanityMasking.feature");
formatter.feature({
  "name": "Profanity Masking Tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    }
  ]
});
formatter.scenario({
  "name": "User should be able to add some words as profanity list and mask it by \u0027*\u0027",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@MaskingWith*"
    },
    {
      "name": "@EmptyReplaceKey"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following word as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "He is very silly"
      ]
    },
    {
      "cells": [
        "word",
        "silly"
      ]
    },
    {
      "cells": [
        "replace",
        ""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_word_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get newly added profanity word as masked",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_newly_added_profanity_word_as_masked()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to add some words as profanity list and replace it by \u0027removed\u0027",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@failed"
    },
    {
      "name": "@bug"
    },
    {
      "name": "@MaskinWithWord"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following word as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "He is very silly"
      ]
    },
    {
      "cells": [
        "word",
        "silly,very"
      ]
    },
    {
      "cells": [
        "replace",
        "[removed]"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_word_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get newly added profanity word as masked",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_newly_added_profanity_word_as_masked()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003che is [removed] [][removed]\u003e but was:\u003che is [removed] [ ][removed]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.Chip.stepDefinitions.PurgoMalumStepDefs.user_should_get_newly_added_profanity_word_as_masked(PurgoMalumStepDefs.java:123)\n\tat ✽.User should get newly added profanity word as masked(file:src/test/resources/features/ProfanityMasking.feature:22)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User should be able to add some words as profanity list and replace it by ignoring the uppercase",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@MaskinWithWord"
    },
    {
      "name": "@ignoringUpperCase"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following word as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "Silly is very silly"
      ]
    },
    {
      "cells": [
        "word",
        "silly"
      ]
    },
    {
      "cells": [
        "replace",
        "[replaced]"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_word_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get newly added profanity word as masked",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_newly_added_profanity_word_as_masked()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should not be able to add more than 10 words as profanity list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@failed"
    },
    {
      "name": "@bug"
    },
    {
      "name": "@MaskinWithWord"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@boundry"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following word as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "He is very silly but sometimes he makes some jokes and that makes us really happy"
      ]
    },
    {
      "cells": [
        "word",
        "silly,but,jokes,that,makes,us,really,happy,is,very,he"
      ]
    },
    {
      "cells": [
        "replace",
        "[removed]"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_word_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat org.junit.Assert.assertEquals(Assert.java:631)\n\tat com.Chip.stepDefinitions.PurgoMalumStepDefs.user_should_get_status_code(PurgoMalumStepDefs.java:35)\n\tat ✽.User should get status code 400(file:src/test/resources/features/ProfanityMasking.feature:41)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should get following error message",
  "rows": [
    {
      "cells": [
        "User Black List Exceeds Limit of 10 Words."
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User should not be able to add a word more than 200 characters as profanity list",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@failed"
    },
    {
      "name": "@bug"
    },
    {
      "name": "@MaskinWithWord"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@boundry"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following word as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "He is very silly but sometimes he makes some jokes and that makes us really happy"
      ]
    },
    {
      "cells": [
        "word",
        "sillyzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
      ]
    },
    {
      "cells": [
        "replace",
        "[removed]"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_word_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat org.junit.Assert.assertEquals(Assert.java:631)\n\tat com.Chip.stepDefinitions.PurgoMalumStepDefs.user_should_get_status_code(PurgoMalumStepDefs.java:35)\n\tat ✽.User should get status code 400(file:src/test/resources/features/ProfanityMasking.feature:53)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should get following error message",
  "rows": [
    {
      "cells": [
        "User Black List Exceeds Limit of 10 Words."
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User should not be able to add a replacement word more that 20 characters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@failed"
    },
    {
      "name": "@bug"
    },
    {
      "name": "@MaskinWithWord"
    },
    {
      "name": "@negative"
    },
    {
      "name": "@boundry"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following word as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "He is very silly"
      ]
    },
    {
      "cells": [
        "word",
        "silly"
      ]
    },
    {
      "cells": [
        "replace",
        "thistextismorethantwenty"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_word_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 400",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c400\u003e but was:\u003c200\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:645)\n\tat org.junit.Assert.assertEquals(Assert.java:631)\n\tat com.Chip.stepDefinitions.PurgoMalumStepDefs.user_should_get_status_code(PurgoMalumStepDefs.java:35)\n\tat ✽.User should get status code 400(file:src/test/resources/features/ProfanityMasking.feature:65)\n",
  "status": "failed"
});
formatter.step({
  "name": "User should get following error message",
  "rows": [
    {
      "cells": [
        "User Replacement Text Exceeds Limit of 20 Characters."
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following_error_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User should be able to add some symbols in replacement word",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@MaskinWithChars"
    },
    {
      "name": "@validSymbol"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following word as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "He is very silly"
      ]
    },
    {
      "cells": [
        "word",
        "silly"
      ]
    },
    {
      "cells": [
        "replace",
        "[\u003d]]!\""
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_word_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get newly added profanity word as masked",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_newly_added_profanity_word_as_masked()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to add some symbols in replacement word",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@failed"
    },
    {
      "name": "@bug"
    },
    {
      "name": "@MaskinWithChars"
    },
    {
      "name": "@invalidSymbol"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following word as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "He is very silly"
      ]
    },
    {
      "cells": [
        "word",
        "silly"
      ]
    },
    {
      "cells": [
        "replace",
        "$£\u0026%#"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_word_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following error message",
  "rows": [
    {
      "cells": [
        "Invalid User Replacement Text"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to add some words as profanity list and replace it by valid character",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@MaskinWithChars"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following character as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "He is very silly"
      ]
    },
    {
      "cells": [
        "word",
        "silly"
      ]
    },
    {
      "cells": [
        "replace",
        "_"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_character_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get newly added profanity word as masked",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_newly_added_profanity_word_as_masked()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to replace words by invalid character",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@profanityMaskingTest"
    },
    {
      "name": "@failed"
    },
    {
      "name": "@bug"
    },
    {
      "name": "@MaskinWithChars"
    },
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "User sends following text and adds following character as Profanity",
  "rows": [
    {
      "cells": [
        "text",
        "He is very silly"
      ]
    },
    {
      "cells": [
        "word",
        "silly"
      ]
    },
    {
      "cells": [
        "replace",
        "@"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_following_text_and_adds_following_character_as_Profanity(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following error message",
  "rows": [
    {
      "cells": [
        "Invalid User Replacement Characters"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following_error_message(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003cInvalid User Replacement Characters\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat com.Chip.stepDefinitions.PurgoMalumStepDefs.user_should_get_following_error_message(PurgoMalumStepDefs.java:131)\n\tat ✽.User should get following error message(file:src/test/resources/features/ProfanityMasking.feature:108)\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/ProfanityValidation.feature");
formatter.feature({
  "name": "Profanity Validation Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to validate a text contains profanity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@suit"
    },
    {
      "name": "@profanityValidationTest"
    }
  ]
});
formatter.step({
  "name": "User sends a \u0027\u003ctext\u003e\u0027 to PurgoMalum to check it in profanity list",
  "keyword": "Given "
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.step({
  "name": "User should get following \u0027\u003cresponse\u003e\u0027",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "text",
        "response"
      ]
    },
    {
      "cells": [
        "Hello World",
        "false"
      ]
    },
    {
      "cells": [
        "Do not do any shit",
        "true"
      ]
    },
    {
      "cells": [
        "Hey you swear",
        "false"
      ]
    },
    {
      "cells": [
        "Do not be a twat",
        "true"
      ]
    },
    {
      "cells": [
        "What is wrong",
        "false"
      ]
    },
    {
      "cells": [
        "He is like silly",
        "false"
      ]
    },
    {
      "cells": [
        "Sorry for that words",
        "false"
      ]
    },
    {
      "cells": [
        "I am just testing",
        "false"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should be able to validate a text contains profanity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@profanityValidationTest"
    }
  ]
});
formatter.step({
  "name": "User sends a \u0027Hello World\u0027 to PurgoMalum to check it in profanity list",
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_to_PurgoMalum_to_check_it_in_profanity_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following \u0027false\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to validate a text contains profanity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@profanityValidationTest"
    }
  ]
});
formatter.step({
  "name": "User sends a \u0027Do not do any shit\u0027 to PurgoMalum to check it in profanity list",
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_to_PurgoMalum_to_check_it_in_profanity_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following \u0027true\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to validate a text contains profanity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@profanityValidationTest"
    }
  ]
});
formatter.step({
  "name": "User sends a \u0027Hey you swear\u0027 to PurgoMalum to check it in profanity list",
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_to_PurgoMalum_to_check_it_in_profanity_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following \u0027false\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to validate a text contains profanity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@profanityValidationTest"
    }
  ]
});
formatter.step({
  "name": "User sends a \u0027Do not be a twat\u0027 to PurgoMalum to check it in profanity list",
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_to_PurgoMalum_to_check_it_in_profanity_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following \u0027true\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to validate a text contains profanity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@profanityValidationTest"
    }
  ]
});
formatter.step({
  "name": "User sends a \u0027What is wrong\u0027 to PurgoMalum to check it in profanity list",
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_to_PurgoMalum_to_check_it_in_profanity_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following \u0027false\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to validate a text contains profanity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@profanityValidationTest"
    }
  ]
});
formatter.step({
  "name": "User sends a \u0027He is like silly\u0027 to PurgoMalum to check it in profanity list",
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_to_PurgoMalum_to_check_it_in_profanity_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following \u0027false\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to validate a text contains profanity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@profanityValidationTest"
    }
  ]
});
formatter.step({
  "name": "User sends a \u0027Sorry for that words\u0027 to PurgoMalum to check it in profanity list",
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_to_PurgoMalum_to_check_it_in_profanity_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following \u0027false\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to validate a text contains profanity",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@profanityValidationTest"
    }
  ]
});
formatter.step({
  "name": "User sends a \u0027I am just testing\u0027 to PurgoMalum to check it in profanity list",
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_to_PurgoMalum_to_check_it_in_profanity_list(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get following \u0027false\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_following(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/TextValidation.feature");
formatter.feature({
  "name": "TextValidationTest",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    }
  ]
});
formatter.scenario({
  "name": "User should be able send a valid text and validate it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PurgoMalumTest"
    },
    {
      "name": "@suit"
    },
    {
      "name": "@textValidation"
    },
    {
      "name": "@positive"
    }
  ]
});
formatter.step({
  "name": "User sends a text to PurgoMalum",
  "rows": [
    {
      "cells": [
        "text",
        "Hello World!"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_sends_a_text_to_PurgoMalum(String,String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should get the correct text in response",
  "keyword": "And "
});
formatter.match({
  "location": "PurgoMalumStepDefs.user_should_get_the_correct_text_in_response()"
});
formatter.result({
  "status": "passed"
});
});
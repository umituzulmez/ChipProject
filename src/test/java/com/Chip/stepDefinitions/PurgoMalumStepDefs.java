package com.Chip.stepDefinitions;

import com.Chip.microservices.PurgoMalumManager;
import com.Chip.utilities.TestDataReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.Method;
import io.restassured.response.Response;
import org.junit.Assert;

import java.sql.SQLOutput;
import java.util.Map;

import static io.restassured.RestAssured.given;

public class PurgoMalumStepDefs {

    private static Response response;
    private static String text;
    private static String reqType;
    private static String [] profanityWords;
    private static String replace;
    private static String symbol;

    @Given("User sends a text to PurgoMalum")
    public void user_sends_a_text_to_PurgoMalum(Map<String,String> userData) {
        text = userData.get("text");

        response = PurgoMalumManager.getText(text);
    }

    @Then("User should get status code {int}")
    public void user_should_get_status_code(int statusCode) {
        Assert.assertEquals(statusCode, response.statusCode());
    }

    @And("User should get the correct text in response")
    public void user_should_get_the_correct_text_in_response() {
        String actualText = response.body().path("result");
        String expectedText = text;

        Assert.assertEquals(expectedText, actualText);
    }

    @Given("User sends a text to PurgoMalum in following type")
    public void user_sends_a_text_to_PurgoMalum_in_following_type(Map<String,String> userData) {
        text = userData.get("text");
        reqType = userData.get("request type");

        response = PurgoMalumManager.getText(text, reqType);
    }


    @Then("User should get correct type as response")
    public void user_should_get_correct_type_as_response() {
        String actualContentType = response.contentType();
        String expectedContentType = "";

        if(reqType.equals("json") || reqType.equals("xml")){
            expectedContentType = "application/" + reqType;
        }else if(reqType.equals("plain")){
            expectedContentType = "text/" + reqType;
        }

        Assert.assertEquals(expectedContentType, actualContentType);
    }

    @Given("User sends a {string} to PurgoMalum to check it in profanity list")
    public void user_sends_a_to_PurgoMalum_to_check_it_in_profanity_list(String text) {
        response = PurgoMalumManager.containsProfanity(text);

    }

    @Then("User should get following {string}")
    public void user_should_get_following(String flag) {
        String expectedBoolean = flag;
        String actualBoolean = response.asString();

        Assert.assertEquals(expectedBoolean, actualBoolean);
    }

    @Given("User sends following text and adds following word as Profanity")
    public void user_sends_following_text_and_adds_following_word_as_Profanity(Map<String,String> userData) {
        text = userData.get("text").toLowerCase();
        replace = userData.get("replace").toLowerCase();
        String words = userData.get("word").toLowerCase();
        profanityWords = words.split(",");

        System.out.println("words = " + words.length());
        System.out.println("profanityWord = " + profanityWords.length);

        response = PurgoMalumManager.addToProfanity(text,words,replace);
    }

    @Then("User should get newly added profanity word as masked")
    public void user_should_get_newly_added_profanity_word_as_masked() {
        if(replace.isEmpty()){
            for(int i=0; i<profanityWords.length; i++){
                String mask = "";
                for(int j=0; j<profanityWords[i].length(); j++){
                    mask += "*";
                }
                text = text.replace(profanityWords[i],mask);
            }
        }else if (replace.equals(symbol)) {
            for (int i = 0; i < profanityWords.length; i++) {
                String mask = "";
                for (int j = 0; j < profanityWords[i].length(); j++) {
                    mask += replace;
                }
                text = text.replace(profanityWords[i], mask);
            }
        }else{
                for(int i=0; i<profanityWords.length; i++){
                    text = text.replace(profanityWords[i],replace);
                }
        }

        String actualText = response.body().path("result");
        String expectedText = text;

        Assert.assertEquals(expectedText, actualText);
    }

    @Then("User should get following error message")
    public void user_should_get_following_error_message(String message) {
        String expectedMessage =message;
        String actualMessage = response.body().path("error");

        Assert.assertEquals(expectedMessage,actualMessage);
    }
    @Then("User should get following message")
    public void user_should_get_following_message(String message) {
        String expectedMessage =message;
        String actualMessage = response.body().path("result");

        Assert.assertEquals(expectedMessage,actualMessage);
    }

    @Given("User sends following text and adds following character as Profanity")
    public void user_sends_following_text_and_adds_following_character_as_Profanity(Map<String,String> userData) {
        text = userData.get("text").toLowerCase();
        String words = userData.get("word").toLowerCase();
        profanityWords = words.split(",");

        String character = userData.get("replace");
        if(character.equals("_") || character.equals("~") || character.equals("-") || character.equals("=") || character.equals("|") || character.equals("*")){
            replace = character;
            symbol = character;
        }
        response = PurgoMalumManager.addToProfanityChar(text,words,replace);
    }

}

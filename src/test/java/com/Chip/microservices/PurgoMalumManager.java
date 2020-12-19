package com.Chip.microservices;

import com.Chip.utilities.TestDataReader;
import io.restassured.http.Method;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;

public class PurgoMalumManager extends Base{


    public static Response getText(String text){

        Response response = given().
                baseUri(TestDataReader.get("purgoMalumUri")).
                basePath("json").
                queryParam("text", text).
                request(Method.GET).prettyPeek();

        return response;
    }

    public static Response getText(String text, String type){

        Response response = given().
                baseUri(TestDataReader.get("purgoMalumUri")).
                basePath(type).
                queryParam("text", text).
                request(Method.GET).prettyPeek();

        return response;
    }

    public static Response containsProfanity(String text){

        Response response = given().
                baseUri(TestDataReader.get("purgoMalumUri")).
                basePath("containsprofanity").
                queryParam("text", text).
                request(Method.GET).prettyPeek();

        return response;
    }

    public static Response addToProfanity(String text, String words, String replace){

        Response response = given().
                baseUri(TestDataReader.get("purgoMalumUri")).
                basePath("json").
                queryParam("text",text).
                queryParam("add", words).
                queryParam("fill_text", replace).
                request(Method.GET).prettyPeek();

        return response;
    }

    public static Response addToProfanityChar(String text, String words, String replace){

        Response response = given().
                baseUri(TestDataReader.get("purgoMalumUri")).
                basePath("json").
                queryParam("text",text).
                queryParam("add", words).
                queryParam("fill_char", replace).
                request(Method.GET).prettyPeek();

        return response;
    }
}

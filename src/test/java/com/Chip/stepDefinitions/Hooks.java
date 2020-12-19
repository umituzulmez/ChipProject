package com.Chip.stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {

    //incase we need to to do some action before and after each test
    //like creating connection to retrieve some data for assertion etc.

    @Before("@db")
    public void dbHook() {
        System.out.println("creating database connection");
    }

    @After("@db")
    public void afterDbHook() {
        System.out.println("closing database connection");
    }
}

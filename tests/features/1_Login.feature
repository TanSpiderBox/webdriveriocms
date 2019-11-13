Feature: Login
    Background: 
        Given User Access CSM Website

    @TestCase001
    Scenario: Verfiy user can login system with correct username and password
        When User input correct username and password
        Then User can login system successful

    @TestCase002
    Scenario: Verify user can't login when blank username and password
        When User blank username and password
        Then User can't login system 1st

    @TestCase003
    Scenario: Verify user can't login when blank username
        When User blank username
        Then User can't login system 2nd

    @TestCase004
    Scenario: Verify user can't login when blank password
        When User blank password
        Then User can't login system 3rd

    @TestCase005
    Scenario: Verify user can't login when incorect username and password
        When User input incorect username and password
        Then User can't login system 4th

    @TestCase006
    Scenario: Verify user can't login when input incorrect username
        When User input incorrect username
        Then User can't login system 5th

    @TestCase007
    Scenario: Verify user can't login when input incorrect password
        When User input incorrect password
        Then User can't login system 6th
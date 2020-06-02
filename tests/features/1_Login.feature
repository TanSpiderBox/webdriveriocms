Feature: Login

    Background: As a User I want to check all scenario of Login feature
        Given User Access CSM Website

    @LG001
    Scenario: Verify user can not login when blank UserName and Password
        When User blank UserName and Password
        Then User can not login System with blank UserName and Password

    @LG002
    Scenario: Verify user can not login when blank UserName
        When User blank UserName
        Then User can not login System with blank UserName

    @LG003
    Scenario: Verify user can not login when blank Password
        When User blank Password
        Then User can not login System with blank Password

    @LG004
    Scenario: Verify user can not login when incorect UserName and Password
        When User input incorect UserName and Password
        Then User can not login System with incorrect UserName and Password

    @LG005
    Scenario: Verify user can not login when input incorrect UserName
        When User input incorrect UserName
        Then User can not login System with incorrect UserName

    @LG006
    Scenario: Verify user can not login when input incorrect Password
        When User input incorrect Password
        Then User can not login System with incorrect Password

    @LG007
    Scenario: Verfiy user can login System with correct UserName and Password
        When User input correct UserName and Password
        Then User can login System Successfully
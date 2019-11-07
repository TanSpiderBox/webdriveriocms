Feature: Login

        Given

    Scenario: Verfiy user input correct username/password
        When User input correct username/password
        Then User can login system successful

    Scenario: Verify user blank username/password
        When User blank username/password
        Then User can't login system 1st

    Scenario: Verify user blank username
        When User blank username
        Then User can't login system 2nd

    Scenario: Verify user blank password
        When User blank password
        Then User can't login system 3rd

    Scenario: Verify user input incorect username/password
        When User input incorect username/password
        Then User can't login system 4th

    Scenario: Verify user input incorrect username
        When User input incorrect username
        Then User can't login system 5th

    Scenario: Verify user input incorrect password
        When User input incorrect password
        Then User can't login system 6th
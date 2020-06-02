Feature: Master Role

  Background: As a User I want check all scenario of Master Role feature

  Scenario: Visit Master Role index screen Successfully
    Given User open index page
    When User input correct username and password
    Then User is navigated to index page

  Scenario: User can not creating a new Master Role with a blank field
    Given User open index page
    When User click new buttonf
    When User click save button
    Then A failed message is appeared

  Scenario: User can create Master Role Successfully
    Given User open index page
    When User click new button
    When User input valid Role name
    When User click save button
    Then Create a new Master Role Successfully

  Scenario: User can search Master Role
    Given User open index page
    When User input sample Role
    When User presses enter
    Then Sample Role was be found

  Scenario: User can update a Master Role Successfully
    Given User open index page
    When User clicks edit button of sample Role
    When Edit modal is appeared, user inputs a new Role name
    When User click save button
    Then Updated the sample Role Successfully

  Scenario: User can remove a Master Role not assigned
    Given User open index page
    When User clicks remove button of sample Role
    When A confirm alert is appeared, user clicks Yes
    Then Removed a Master Role Successfully

  Scenario: User can assign Master Role to Employer

  Scenario: User can assign Master Role to Employee

  Scenario: User can select Master Role when create new Employee in Appointment
  
  Scenario: User can select Master Role when create new Employee in Onsite Appointment

  Scenario: User can not unassign Master Role assigned to Employee

  Scenario: User can not unassign Master Role assigned to Employer

  Scenario: Overview Logic
    Given User open index page
    When Create sample Role
    When User moves to employer screen, choosing Employer
    When Assign sample Role to employer
    Then Cannot remove sample Role
    When User moves to employer screen, choosing Employer
    When Un-assign sample Role
    Then Remove sample Role Successfully
    When Create sample Role
    When User moves to employer screen, choosing Employer
    When Assign sample Role to employer
    When Assign sample Role to employee
    When User moves to employer screen, choosing Employer
    Then Cannot un-assign sample Role from employer
    When Un-assign sample Role from employee
    When User moves to employer screen, choosing Employer
    When Un-assign sample Role
    Then Remove sample Role Successfully





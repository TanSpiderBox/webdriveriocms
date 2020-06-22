Feature: Master Role

  Background: As a User I want check all scenario of Master Role feature

  @MR001
  Scenario: Verify Visit Master Role index screen Successfully
    Given User open index page
    When User input correct UserName and Password
    Then User is navigated to index page

  @MR002
  Scenario: Verify User can not creating a new Master Role with a blank field
    Given User open index page
    When User click new button
    When User click save button
    Then A failed message is appeared

  @MR003
  Scenario: Verify User can create Master Role Successfully
    Given User open index page
    When User click new button
    When User input valid Role name
    When User click save button
    Then Create a new Master Role Successfully

  @MR004
  Scenario: Verify User can search Master Role
    Given User open index page
    When User input sample Role
    When User presses enter
    Then Sample Role was be found

  @MR005
  Scenario: Verify User can update a Master Role Successfully
    Given User open index page
    When User presses enter
    When User clicks edit button of sample Role
    When Edit modal is appeared, user inputs a new Role name
    When User click save button
    Then Updated the sample Role Successfully

  @MR006
  Scenario: Verify User can remove a Master Role not assigned
    Given User open index page
    When User clicks remove button of sample Role
    When A confirm alert is appeared, user clicks Yes
    Then Removed a Master Role Successfully

  @MR007
  Scenario: Verify User can assign Master Role to Employer
    Given User open index page
    When Create sample Role
    When User moves to Employer screen, choosing Employer
    When Assign sample Role to Employer

  @MR008
  Scenario: Verify User can not unassign Master Role assigned to Employer
    Then Cannot remove sample Role
    When User moves to Employer screen, choosing Employer

  @MR009
  Scenario: Verify User can unassign Master Role assigned to Employer
    When Un-assign sample Role
    Then Remove sample Role Successfully

  @MR010
  Scenario: Verify User can assign Master Role to Employee
    When Create sample Role
    When User moves to Employer screen, choosing Employer
    When Assign sample Role to Employer
    When Assign sample Role to Employee

  @MR011
  Scenario: Verify User can not unassign Master Role assigned to Employee
    When User moves to Employer screen, choosing Employer
    Then Cannot un-assign sample Role from Employer
    When Un-assign sample Role from Employee

  @MR012
  Scenario: Verify User can unassign Master Role assigned to Employee
    When User moves to Employer screen, choosing Employer
    When Un-assign sample Role
    Then Remove sample Role Successfully
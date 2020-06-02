Feature: Medical Type

  Background: As a User I want check all scenario of Medical Type Feature

  @MT001
  Scenario: User can create new Medical Type Successfully
    When
    Then

  @MT002
  Scenario: User can create new Questionaire in Form Builder
    When
    Then

  @MT003
  Scenario: User can create new Assesstment in Form Builder
    When
    Then

  @MT004
  Scenario: User can create new Email Template
    When
    Then

  @MT005
  Scenario: User can create new SMS Template
    When
    Then

  @MT006
  Scenario: Can not remove Medical Type when it was be assigned to Employer
    Given User opens index page
    When User input correct UserName and Password
    When Create sample Medical Type
    When Employer - Choose Employer "1"
    When Assign sample Medical Type to Employer
    Then Can not remove sample Medical Type

  @MT007
  Scenario: Can remove Medical Type if it was be un-assigned from Employer
    When Employer - Choose Employer "1"
    Then Un-assign sample Medical Type
    Then Remove sample Medical Type Successfully

  @MT008
  Scenario: Can not unassign Medical Type if Appointment is existed
    When Create sample Medical Type
    When Employer - Choose Employer "1"
    When Assign sample Medical Type to Employer
    When Create new Appointment with sample Medical Type and Employer "1"
    When Employer - Choose Employer "1"
    Then Can not un-assign sample Medical Type

  @MT009
  Scenario: Can un-assign Medical Type if Appointment is not existed
    When Employer - Choose Employer "2"
    When Assign sample Medical Type to Employer
    When Create new Appointment with sample Medical Type and Employer "2"
    When Remove the Appointment of Employer "1"
    When Employer - Choose Employer "1"
    Then Un-assign sample Medical Type
    When Remove the Appointment of Employer "2"
    When Employer - Choose Employer "2"
    Then Un-assign sample Medical Type
    Then Remove sample Medical Type Successfully

  @MT010
  Scenario: User can not unassign Medical Type if Onsite Appointment is existed
    When
    Then

  @MT011
  Scenario: User can un-assign medical  type if Onsite Appointment is not existed
    When
    Then
Feature: Location

  Background: As a User I want check all scenario of Location feature

  @LC001
  Scenario: Verify User create Onsite Location Successfully
    Given User Access CSM Website
    When User input correct UserName and Password
    When Employer - Choose Employer "1"
    Then Create a Onsite Location

  @LC002
  Scenario: Verify User can not delete Onsite Location if it has a Appointment
    When Create a new Onsite Appointment
    When Employer - Choose Employer "1"
    Then Can not delete Onsite Appointment

  @LC003
  Scenario: Verify User can delete Onsite Location if it has not any Appointments
    When Delete Onsite Appointment
    When Employer - Choose Employer "1"
    Then Can delete Onsite Appointment

  @LC004
  Scenario: Verify User can not un-assign a Location if if has a Appointment
    Given Create sample Location if it is not exist
    When Employer - Choose Employer "1"
    When Assign sample Location to Employer
    When Create a new Appointment with sample Location and Employer "1"
    When Employer - Choose Employer "1"
    Then Can not un-assign sample Location

  @LC005
  Scenario: Verify User can un-assign sample Location from Employer
    When Employer - Choose Employer "2"
    When Assign sample Location to Employer
    When Create a new Appointment with sample Location and Employer "2"
    When Remove Appointment of Employer "1"
    When Employer - Choose Employer "1"
    Then Can un-assign sample Location
    When Remove Appointment of Employer "2"
    When Employer - Choose Employer "2"
    Then Can un-assign sample Location
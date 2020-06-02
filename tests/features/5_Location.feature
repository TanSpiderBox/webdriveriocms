Feature: Location

  Background: As a User I want check all scenario of Location feature

  @LC001
  Scenario: Create Onsite Location Successfully
    Given User Access CSM Website
    When User input correct username and password
    When Employer - Choose Employer "1"
    Then Create a onsite Location

  @LC002
  Scenario: Can not delete Onsite Location if it has a Appointment
    When Create a new onsite Appointment
    When Employer - Choose Employer "1"
    Then Cannot delete onsite Appointment

  @LC003
  Scenario: Can delete Onsite Location if it has not any Appointments
    When Delete onsite Appointment
    When Employer - Choose Employer "1"
    Then Can delete onsite Appointment

  @LC004
  Scenario: Cannot un-assign a Location if if has a Appointment
    Given Create sample Location if it is not exist
    When Employer - Choose Employer "1"
    When Assign sample Location to Employer
    When Create a new Appointment with sample Location and Employer "1"
    When Employer - Choose Employer "1"
    Then Cannot un-assign sample Location

  @LC005
  Scenario: Can un-assign sample Location from Employer
    When Employer - Choose Employer "2"
    When Assign sample Location to Employer
    When Create a new Appointment with sample Location and Employer "2"
    When Remove Appointment of Employer "1"
    When Employer - Choose Employer "1"
    Then Can un-assign sample Location
    When Remove Appointment of Employer "2"
    When Employer - Choose Employer "2"
    Then Can un-assign sample Location
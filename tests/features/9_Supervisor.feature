Feature: Supervisor

  Background: As a User I want check all scenario of Supervisor feature

  Scenario: Create a Supervisor Successfully
    Given User opens index page
    When User input correct username and password
    Then Create sample Supervisor

  Scenario: User can create Supervisor in Appointment Successfully

  Scenario: User can create Supervisor in Onsite Appointment Successfully

  Scenario: Can not delete Supervisor which was be assiged to employer
    When Employer - Choose employer "1"
    When Assign sample Supervisor to employer
    Then Can not remove sample Supervisor

  Scenario: Can not unassign Supervisor which was be assigned to employee
    When Employer - Choose employer "1"
    When Assign sample Supervisor to employee
    When Employer - Choose employer "1"
    Then Can not unassign Supervisor from employer

  Scenario: Can unassign Supervisor which isn't be assigned to employee
    When Can un-assign sample Supervisor from employee
    When Employer - Choose employer "1"
    Then Can unassign sample Supervisor from employer

  Scenario: Auto assign Supervisor to employee if appointment is created
    When Employer - Choose employer "1"
    When Assign sample Supervisor to employer
    When Create appointment which contains sample Supervisor
    When Employer - Choose employer "1"
    Then Supervisor was be assigned to employee
    When Employer - Choose employer "1"
    Then Can not unassign Supervisor from employer

  Scenario: Can delete Supervisor which haven't be assigned to anything
    When Remove the appointment of employer "1"
    When Employer - Choose employer "1"
    When Can un-assign sample Supervisor from employee
    When Employer - Choose employer "1"
    Then Can unassign sample Supervisor from employer
    Then Deleted sample Supervisor Successfully
Feature: Supervisor

  Background: As a User I want check all scenario of Supervisor feature

@SP001
  Scenario: Verify User can create a Supervisor Successfully
    Given User Access CSM Website
    When User input correct UserName and Password
    Then User Create sample Supervisor

@SP002
  Scenario: Verify User can create Supervisor in Appointment Successfully

@SP003
  Scenario: Verify User can create Supervisor in Onsite Appointment Successfully

@SP004
  Scenario: Verify User can not delete Supervisor which was be assiged to Employer
    When Employer - Choose Employer "1"
    When Assign sample Supervisor to Employer
    Then Can not remove sample Supervisor

@SP005
  Scenario: Verify User can not unassign Supervisor which was be assigned to Employee
    When Employer - Choose Employer "1"
    When Assign sample Supervisor to Employee
    When Employer - Choose Employer "1"
    Then Can not unassign Supervisor from Employer

@SP006
  Scenario: Verify User can unassign Supervisor which isn't be assigned to Employee
    When Can un-assign sample Supervisor from Employee
    When Employer - Choose Employer "1"
    Then Can unassign sample Supervisor from Employer

@SP007
  Scenario: Verify Supervisor Auto assign Supervisor to Employee if appointment is created
    When Employer - Choose Employer "1"
    When Assign sample Supervisor to Employer
    When Create appointment which contains sample Supervisor
    When Employer - Choose Employer "1"
    Then Supervisor was be assigned to Employee
    When Employer - Choose Employer "1"
    Then Can not unassign Supervisor from Employer

@SP008
  Scenario: Verify User can delete Supervisor which haven't be assigned to anything
    When Remove the appointment of Employer "1"
    When Employer - Choose Employer "1"
    When Can un-assign sample Supervisor from Employee
    When Employer - Choose Employer "1"
    Then Can unassign sample Supervisor from Employer
    Then Deleted sample Supervisor Successfully
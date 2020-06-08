Feature: Staff

  Background: As a User I want check all scenario of Staff Feature

  Scenario: Verify User can create new Staff Successfully
    Given User Access CSM Website
    When User input correct UserName and Password
    Then Staff - Create sample staff

  Scenario: Verify User can create new Staff in Appointment Successfully

  Scenario: Verify User can create new Staff in Onsite Appointment Successfully

  Scenario: Verify Staff can login system with password recived in email

  Scenario: Verify User can not remove staff which was be assiged to Appointment

  Scenario: Verify User can not remove staff which was be assiged to Onsite appointment
    When Staff - Create on-site appointment
    Then Staff - Cannot remove staff

  Scenario: Verify User can remove staff Successfully if it wasn't be assigned to anything
    When Staff - Remove on-site appointment
    Then Staff - Remove staff Successfully

  Scenario: Verify Staff can complete Onsite Appointment assigned
    When User create new Onsite Appointment
    Given User access Biz UI Successfully
    When User input correct passcode
    When User input all valid information
    Then User can create Appointment in guest Biz UI
    Given User access Staff page Successfully
    When User input correct Staff username and password
    Then User can login Staff Successfully
    When User complete question and assessment
    Then User can accept onsite appointment
    Given User Access CSM Website
    When User input correct UserName and Password
    Then User can login System Successfully
    Then User create new Onsite Appointment Successfully
     Given User Access CSM Website
    When User input correct UserName and Password
    Then User can login System Successfully
    Then User create new Onsite Appointment Successfully

  Scenario: Verify Staff can complete Appointment assigned
    When User create new Appointment with existing Employee
    Then User create new Appointment Successfully
    Given User access Staff page Successfully
    When User input correct Staff username and password
    Then User can login Staff Successfully

# Scenario: Verify Staff can create new walk in for Employee
#   When Staff input all valid information of walkin
#   Then Staff can add new walkin Successfully

# Scenario: Verify Staff can set status for Employee
#   When Staff click button change status present to absent
#   Then Status of Employee will change present  to absent
#   When Staff click button change status absent to present
#   Then Status of Employee will change absent to present

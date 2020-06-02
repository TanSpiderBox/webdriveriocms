Feature: Staff

  Background: As a User I want check all scenario of Staff Feature

  Scenario: User can create new Staff successfully
    Given User Access CSM Website
    When User input correct username and password
    Then Staff - Create sample staff

  Scenario: User can create new Staff in Appointment successfully

  Scenario: User can create new Staff in Onsite Appointment successfully

  Scenario: Staff can login system with password recived in email

  Scenario: User can not remove staff which was be assiged to Appointment

  Scenario: User can not remove staff which was be assiged to Onsite appointment
    When Staff - Create on-site appointment
    Then Staff - Cannot remove staff

  Scenario: User can remove staff successfully if it wasn't be assigned to anything
    When Staff - Remove on-site appointment
    Then Staff - Remove staff successfully

  Scenario: Staff can complete Onsite Appointment assigned
    When User create new Onsite Appoinment
    Given User access Biz UI successful
    When User input correct passcode
    When User input all valid information
    Then User can create appointment in guest Biz UI
    Given User access Staff page successful
    When User input correct Staff username and password
    Then User can login Staff successful
    When User complete question and assessment
    Then User can accept onsite appointment
    Given User Access CSM Website
    When User input correct username and password
    Then User can login system successful
    Then User create new Onsite Appoinment successful
    Given User Access CSM Website
    When User input correct username and password
    Then User can login system successful
    Then User create new Onsite Appoinment successful

  Scenario: Staff can complete Appointment assigned
    When User create new Appointment with existing Employee
    Then User create new Appointment Success
    Given User access Staff page successful
    When User input correct Staff username and password
    Then User can login Staff successful

  Scenario: Staff can create new walk in for Employee
    When Staff input all valid information of walkin
    Then Staff can add new walkin successfully

  Scenario: Staff can set status for Employee

Feature: Staff

  Scenario: Create a staff successfully
    Given User Access CSM Website
    When User input correct username and password
    Then Staff - Create sample staff

  Scenario: Cannot remove staff which was be assiged to on-site appointment
    When Staff - Create on-site appointment
    Then Staff - Cannot remove staff

  Scenario: Remove staff successfully if it wasn't be assigned to anything
    When Staff - Remove on-site appointment
    Then Staff - Remove staff successfully

  Scenario: Staff can accept onsite appointment
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

  # Scenario: Staff can accept on-off appointment
  #   When User create new Appointment with existing Employee
  #   Then User create new Appointment Success
  #   Given User access Staff page successful
  #   When User input correct Staff username and password
  #   Then User can login Staff successful

# Scenario: Staff can add new walkin
#   When Staff input all valid information of walkin
#   Then Staff can add new walkin successfully


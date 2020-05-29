Feature: Calendar

    @TestCase008
    Scenario: Verify user can create Appointment with existing Employee
        Given User Access CSM Website
        When User input correct username and password
        Then User can login system successful
        When User create new Appointment with existing Employee
        Then User create new Appointment Success

    @TestCase009
    Scenario: Verify user can create Appointment which new Employee
        When User create new Appointment with new Employee
        Then User create new Appointment with new Employee Success and Employee added in Employer
        Then User can view Employee added in Employer

    @TestCase010
    Scenario: Verify user can update Appointment
        When User update existing Appointment
        Then User update Appointment Successful

@TestCase013
Scenario: Verify user can create Onsite Appointment
    When User create new Onsite Appoinment
    Then User create new Onsite Appoinment successful
# When User create new Onsite Appoinment with existing Employee
# Then User create new Onsite Appoinment with existing Employee successful
# When User create new Onsite Appoinment with new Employee
# Then User create new Onsite Appoinment with new Employee successful
# Then User can view Employee added in Employer

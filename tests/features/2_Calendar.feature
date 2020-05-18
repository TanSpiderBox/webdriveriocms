Feature: Calendar

    @TestCase008
    Scenario: Verify user can create Appointment with existing Employee
        Given User Access CSM Website
        When User input correct username and password
        Then User can login system successful
        When User create new Appointment with existing Employee
        Then User create new Appointment Success

    # @TestCase009
    # Scenario: Verify user can create Appointment which new Employee
    #     When User create new Appointment with new Employee
    #     Then User create new Appointment with new Employee Success and Employee added in Employer

    @TestCase010
    Scenario: Verify user can update Appointment
        When User update existing Appointment 
        Then User update Appointment Successful

    @TestCase011
    Scenario: Verify Employee Manager can create New Appointment for Employee
        When Employee Manager create New Appoinment for Employee 
        Then Employee can see this appointment 

    @TestCase013
    Scenario: Verify user can create Onsite Appointment
        When User create new Onsite Appoinment 
        Then User create new Onsite Appoinment successful 

    # @TestCase014
    # Scenario: Verify user can create Onsite Appointment with none employee
    #     When User create new Onsite Appoinment with none employee
    #     Then User create new Onsite Appoinment successful 

# @TestCase015
# Scenario: Verify Employee register Onsite Appointment Form
#     When User fill all valid information
#     Then User can register Onsite Appoinment Success

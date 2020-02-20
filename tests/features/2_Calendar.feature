Feature: Calendar

    @TestCase008
    Scenario: Verify user can create Appointment with existing Employee
        Given User Access CSM Website
        When User input correct username and password
        Then User can login system successful
        When User create new Appointment with existing Employee
        Then User create new Appointment Success '1'

    # @TestCase009
    # Scenario: Verify user can create Appointment which new Employee
    #     When User create new Appointment with new Employee
    #     Then User create new Appointment with new Employee Success and Employee added in Employer '1'

    @TestCase010
    Scenario: Verify user can update Appointment
        When User update existing Appointment '1'
        Then User update Appointment Successful '1'

    @TestCase011
    Scenario: Verify Employee Manager can create New Appointment for Employee
        When Employee Manager create New Appoinment for Employee
        Then Employee can see this appointment '1'

    @TestCase013
    Scenario: Verify user can create Onsite Appointment
        When User create new Onsite Appoinment '1'
        Then User create new Onsite Appoinment successful

    # @TestCase014
    # Scenario: Verify Employee register Onsite Appointment Form
    #     When User fill all valid information
    #     Then User can register Onsite Appoinment Success

Feature: Calendar

    @CL001
    Scenario: Verify user can create Appointment with existing Employee
        Given User Access CSM Website
        When User input correct username and password
        Then User can login system successful
        When User create new Appointment with existing Employee
        Then User create new Appointment Success

    @LG002
    Scenario: Verify user can create Appointment which new Employee
        When User create new Appointment with new Employee
        Then User create new Appointment with new Employee Success and Employee added in Employer
        Then User can view Employee added in Employer

    @LG003
    Scenario: Verify user can update Appointment
        When User update existing Appointment
        Then User update Appointment Successful

    @LG004
    Scenario: Verify user can create Onsite Appointment
        When User create new Onsite Appoinment
        Then User create new Onsite Appoinment successful

    @LG005
    Scenario: User can create Onsite Appointment with existing employee
        When User create new Onsite Appoinment with existing Employee
        Then User create new Onsite Appoinment with existing Employee successful

    @LG006
    Scenario: User can create Onsite Appointment with new employee
        When User create new Onsite Appoinment with new Employee
        Then User create new Onsite Appoinment with new Employee successful
        Then User can view Employee added in Employer

    @LG007
    Scenario: User can create Onsite Appointment and don't enable time slot
        When User create Onsite Appoinment and don't enable time slot
        And Employee can not select time slot of Appoinment
        Then User create new Onsite Appoinment successful

    @LG008
    Scenario: User can create Onsite Appointment and enable time slot
        When User create Onsite Appoinment and enable time slot
        And Employee can select time slot of Appoinment
        Then User create new Onsite Appoinment successful

    @LG009
    Scenario: User can create Onsite Appointment and do not public time slot
        When User create Onsite Appointment and do not public time slot
        Then Employee can view time slot in BizUI

    @LG010
    Scenario: User can create Onsite Appointment and edit duration time slot
        When User create Onsite Appointment and edit duration time slot
        Then User create new Onsite Appoinment successful

    @LG011
    Scenario: User can create Onsite Appointment and add room
        When User create Onsite Appointment and add room
        And User can select time slot with room
        Then User create new Onsite Appoinment successful

    @LG012
    Scenario: User can create Onsite Appointment and remove room
        When User create Onsite Appointment and remove room
        And User can select room removed
        Then User create new Onsite Appoinment successful

    @LG013
    Scenario: User can view Question form in Onsite Appointment
        When
        Then

    @LG014
    Scenario:User can view Assessment form in Onsite Appointment
        When
        Then

    @LG015
    Scenario: User can reschedule of Employee in Onsite Appointment
        When
        Then

    @LG016
    Scenario: User can remove Employee in Onsite Appointment
        When
        Then
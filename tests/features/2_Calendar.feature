Feature: Calendar

    Background: As a User I want check all scenario of Calendar feature

    @CL001
    Scenario: Verify user can create Appointment with existing Employee
        Given User Access CSM Website
        When User input correct UserName and Password
        Then User can login System Successfully
        When User create new Appointment with existing Employee
        Then User create new Appointment Successfully

    @CL002
    Scenario: Verify user can create Appointment which new Employee
        When User create new Appointment with new Employee
        Then User create new Appointment with new Employee Success and Employee added in Employer
        And User can view Employee added in Employer

    @CL003
    Scenario: Verify user can update Appointment
        When User update existing Appointment
        Then User update Appointment Successfully

    @CL004
    Scenario: Verify user can create Onsite Appointment
        When User create new Onsite Appointment
        Then User create new Onsite Appointment Successfully

    @CL005
    Scenario: Verify User can create Onsite Appointment with existing Employee
        When User create new Onsite Appointment with existing Employee
        Then User create new Onsite Appointment Successfully

    @CL006
    Scenario: Verify User can create Onsite Appointment with new Employee
        When User create new Onsite Appointment with new Employee
        Then User create new Onsite Appointment Successfully
        And User can view Employee added in Employer

    @CL007
    Scenario: Verify User can create Onsite Appointment and do not enable time slot
        When User create Onsite Appointment and do not enable time slot
        And Employee can not select time slot of Appointment
        Then User create new Onsite Appointment Successfully

    @CL008
    Scenario: Verify User can create Onsite Appointment and enable time slot
        When User create Onsite Appointment and enable time slot
        And Employee can select time slot of Appointment
        Given User access Biz UI Successfully
        When User input correct employee UserName Password
        And Employee can view Appointment in BizUI
        Given User Access CSM Website
        When User input correct UserName and Password
        Then User can login System Successfully
        Then User create new Onsite Appointment Successfully

    @CL009
    Scenario: Verify User can create Onsite Appointment and do not public time slot
        When User create Onsite Appointment and do not public time slot
        Given User access Biz UI Successfully
        When User input correct employee UserName Password
        Then Employee can not view time slot in BizUI
        Given User Access CSM Website
        When User input correct UserName and Password
        Then User can login System Successfully
        Then User create new Onsite Appointment Successfully

    @CL010
    Scenario: Verify User can create Onsite Appointment and edit duration time slot
        When User create Onsite Appointment and edit duration time slot
        Then User create new Onsite Appointment Successfully

    @CL011
    Scenario: Verify User can create Onsite Appointment and add room
        When User create Onsite Appointment and add room
        And User can select time slot with room
        Then User create new Onsite Appointment Successfully

    @CL012
    Scenario: Verify User can create Onsite Appointment and remove room
        When User create Onsite Appointment and remove room
        And User can not select room removed
        Then User create new Onsite Appointment Successfully

    @CL013
    Scenario: Verify User can view Question form in Onsite Appointment
        When User open Onsite Appointment have Employee
        Then User can view Question form of Employee
        Then User create new Onsite Appointment Successfully


    @CL014
    Scenario: Verify User can view Assessment form in Onsite Appointment
        When User open Onsite Appointment have Employee
        Then User can view Assessment form of Employee
        Then User create new Onsite Appointment Successfully

    # @CL015
    # Scenario: User can reschedule of Employee in Onsite Appointment
    #     When User open Onsite Appointment have Employee
    #     Then User can reschedule of Employee
    #     Then User create new Onsite Appointment Successfully

    @CL016
    Scenario: Verify User can remove Employee in Onsite Appointment
        When User open Onsite Appointment have Employee
        Then User can remove Employee in Onsite Appointment Successfully
        Then User create new Onsite Appointment Successfully
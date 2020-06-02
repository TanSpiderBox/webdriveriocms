Feature: Employers

    Background: As a User I want check all scenario of Employers Feature

    @ELs001
    Scenario: User can create new Employer
        Given User Access CSM Website
        When User input all valid information of Employer
        Then User can create Employee Scuccessful

    @ELs002
    Scenario: User can add New Employee in Employer
        When User input all valid information of Employee
        Then User can creat new Employee Successfully

    @ELs003
    Scenario: User can create new Appointment with new Employer
        When User create new Appointment with new Employer
        Then User can create Appointment Successfully

    @ELs004
    Scenario: User can select Location in Employer
        When User select access Location tab in Employer
        Then User can select location existing in System

    @ELs005
    Scenario: User can not create new Onsite Location with blank field
        When User create new Onsite Location and blank all field
        Then User can not create new Onsite Location

    @ELs006
    Scenario: User can add New on site Location for Employer
        When User create new Onsite Location and input all valid information
        Then User create new Onsite Location Successfully

    @ELs007
    Scenario: User can create new Onsite Appointment with new Onsite location
        When User create new Onsite Appointment with new Onsite Location
        Then User create new Onsite Appoinment Successfully

    @ELs008
    Scenario: User can not add New Employee with blank field
        When User create New Employee and blank all field
        Then User can not create new Employee

    @ELs009
    Scenario: User can add New Employee
        When User create New Employee and input all valid information
        Then User create New Employee Successfully

    @ELs009
    Scenario: User can create new Appointment with new Employee
        When User create new Appointment with new Employee
        Then User create new Appointment Successfully

    @ELs010
    Scenario: User can create new Onsite Appointment with new Employee
        When User create new Onsite Appointment with new Employee
        Then User create new Onsite Appoinment Successfully

    @ELs011
    Scenario: User can select Medical Type to Employer
        When User select access Medical Type tab in Employer
        Then User can select Medical Type existing in System

    @ELs012
    Scenario: User can select Role to Employer
        When User select access Role tab in Employer
        Then User can select Role existing in System

    @ELs013
    Scenario: User can select Supervisor to Employer
        When User select access Supervisor tab in Employer
        Then User can select Role existing in System
        And User can assign Supervisor to Employee
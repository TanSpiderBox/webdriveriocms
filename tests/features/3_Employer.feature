Feature: Employers

    Background: As a User I want check all scenario of Employers Feature

    @ELs001
    Scenario: Verify User can create new Employer
        Given User Access CSM Website
        When User input correct UserName and Password
        When User input all valid information of Employer
        Then User can create Employeer Scuccessful

    @ELs004
    Scenario: Verify User can select Location in new Employer
        When User select access Location tab in Employer
        Then User can select Location existing in System

    @ELs005
    Scenario: Verify User can not create new Onsite Location with blank field
        When User create new Onsite Location and blank all field
        Then User can not create new Onsite Location

    @ELs006
    Scenario: Verify User can add New on site Location for Employer
        When User input all valid information of Onsite Location
        Then User create new Onsite Location in new Employer Successfully

    @ELs011
    Scenario: Verify User can select Medical Type to Employer
        When User select access Medical Type tab in Employer
        Then User can select Medical Type existing in System

    @ELs012
    Scenario: Verify User can select Role to Employer
        When User select access Role tab in Employer
        Then User can select Role existing in System

    # @ELs008
    # Scenario: Verify User can not add New Employee with blank field
    #     When User create New Employee and blank all field
    #     Then User can not create new Employee

    @ELs002
    Scenario: Verify User can add New Employee in Employer
        When User input all valid information of Employee
        Then User can creat new Employee Successfully

    @ELs003
    Scenario: Verify User can create new Appointment with new Employer
        When User create new Appointment with new Employer
        Then User can create Appointment with new Employer Successfully

    @ELs007
    Scenario: Verify User can create new Onsite Appointment with new Onsite location
        When User create new Onsite Appointment with new Employer
        Then User create new Onsite Appoinment with new Employer Successfully
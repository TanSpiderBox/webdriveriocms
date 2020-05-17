Feature: Employers

    Scenario: User can create new Employer
        Given User Access CSM Website
        When User input all valid information of Employer
        Then User can create Employee Scuccessfull

    Scenario: User can add Location for Employer
        When User input all valid information of Location
        Then User can create Location Successfull

    Scenario: User can't create new on site Location with blank field
        When User blank all field Location
        Then User can't create appointment Successfull

    Scenario: User can add New on site Location for Employer
        When User input all valid information of On Site Location
        Then User can crate On Site Location Successfull

    Scenario: User can add New Employee for Employer
        When User input all valid information of Employee
        Then User can creat new Employee Successfull

    Scenario: User can't add New Employee with blank field
        When User blank all field of Employee
        Then User can't create Employee Successfull

    Scenario: User can add Medical Type for Employer
        When User select existing Medical Type in system
        Then User can create new appointment with Medical Type Added

    Scenario: User can add Role for Employer
        When User select existing Role in system
        Then User can assign role added to Employee 

    Scenario: User can add Supervisor for Employer
        When User select existing Supervisor in system 
        Then User can assign Supervisor added to Employee 
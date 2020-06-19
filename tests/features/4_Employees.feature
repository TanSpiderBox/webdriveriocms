Feature: Employees

    Background: As a User I want check all scenario of Employees feature

    @EL001
    Scenario: Verify User can create New Employee in Appointment
        Given User Access CSM Website
        When User input correct UserName and Password
        When User create new Appointment with new Employee
        Then User create new Appointment with new Employee Success and Employee added in Employer
        Then User can view Employee added in Employer

    @EL002
    Scenario: Verify User can create New Employee in On site Appointment
        When User create new Onsite Appointment with new Employee
        Then User create new Onsite Appointment Successfully
        Then User can view Employee added in Employer

    @EL003
    Scenario: Verify User can create New Employee in Biz UI
        When User create new Onsite Appointment
        Given User access Biz UI Successfully
        When User input correct passcode
        Then User can access guest Biz UI
        When User input all valid information of new Employee in BizUI
        Then User can create Appointment in guest Biz UI
        Given User Access CSM Website
        When User input correct UserName and Password
        Then User can login System Successfully
        Then User create new Onsite Appointment Successfully
        Then User can view new Employee created in BizUI added in Employer

@ignore
    @EL004
    Scenario: Verify User can edit Employee in Employer
        When User edit existing Employee in Employer
        Then User can update existing Employee Successfully
@ignore
    @EL005
    Scenario: Verify User can edit Employee in Biz UI
        When User dit existing Employee in BizUI
        Then User can update existing Employee Successfully
@ignore
    @EL006
    Scenario: Verify User can search employee in Employee Submenu
        When User use functional search Employee
        Then User can search correct Employee
@ignore
    @EL007
    Scenario: Verify User can add Medical Report Card for Employee
        When User add new Medical Questionaire
        Then User can view Medical Questionaire Completed
        When User add new Assessment
        Then User can view Assessment Completed
@ignore
    @EL008
    Scenario: Verify User can add Medical Appointments History for Employee
        When User and new Medical Appointment Histoires
        Then User can view Medical Appointment Histoires Completed

    # @EL009
    # Scenario: Verify User can add Medical Records for Employee
    #     When User add new Medical Records 
    #     Then

    # @EL010
    # Scenario: Verify User can login with new password send to email
    #     When
    #     Then
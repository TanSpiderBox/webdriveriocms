Feature: Employees

    Background: As a User I want check all scenario of Employees feature

@EL001
    Scenario: Verify User can create New Employee in Appointment
        When User create new Appointment with new Employee
        Then User create new Appointment with new Employee Success and Employee added in Employer
        Then User can view Employee added in Employer

@EL002
    Scenario: Verify User can create New Employee in On site Appointment
        When User create new Onsite Appoinment with new Employee
        Then User create new Onsite Appoinment with new Employee Successfully
        Then User can view Employee added in Employer

@EL003
    Scenario: Verify User can create New Employee in Biz UI
        When User create new Onsite Appoinment with new Employee
        Then User create new Onsite Appoinment with new Employee Successfully
        Then User can view Employee added in Employer

@EL004
    Scenario: Verify User can edit Employee in Employer
        When
        Then

@EL005
    Scenario: Verify User can edit Employee in Biz UI
        When
        Then

@EL006
    Scenario: Verify User can search employee in Employee Submenu
        When
        Then

@EL007
    Scenario: Verify User can add Medical Report Card for Employee
        When
        Then

@EL008
    Scenario: Verify User can add Medical Appointments History for Employee
        When
        Then

@EL009
    Scenario: Verify User can add Medical Records for Employee
        When
        Then

@EL010
    Scenario: Verify User can login with new password send to email
        When
        Then
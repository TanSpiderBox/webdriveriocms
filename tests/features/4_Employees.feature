Feature: Employees

    Background: As a User I want check all scenario of Employees feature

@EL001
    Scenario: User can create New Employee in Appointment
        When User create new Appointment with new Employee
        Then User create new Appointment with new Employee Success and Employee added in Employer
        Then User can view Employee added in Employer

@EL002
    Scenario: User can create New Employee in On site Appointment
        When User create new Onsite Appoinment with new Employee
        Then User create new Onsite Appoinment with new Employee Successfully
        Then User can view Employee added in Employer

@EL003
    Scenario: User can create New Employee in Biz UI
        When User create new Onsite Appoinment with new Employee
        Then User create new Onsite Appoinment with new Employee Successfully
        Then User can view Employee added in Employer

@EL004
    Scenario: User can edit Employee in Employer
        When
        Then

@EL005
    Scenario: User can edit Employee in Biz UI
        When
        Then

@EL006
    Scenario: User can search employee in Employee Submenu
        When
        Then

@EL007
    Scenario: User can add Medical Report Card for Employee
        When
        Then

@EL008
    Scenario: User can add Medical Appointments History for Employee
        When
        Then

@EL009
    Scenario: User can add Medical Records for Employee
        When
        Then

@EL010
    Scenario: User can login with new password send to email
        When
        Then

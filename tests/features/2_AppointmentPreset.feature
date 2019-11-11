Feature: Appointment Preset
    Background:
        Given User Access CSM Website

    @TestCase008
    Scenario: Verify user can create appointment
        When User click button New Appointment and fill all valid data
        Then User create new appointment success

    @TestCase009
    Scenario: Verify user can change Appointment date time
        When User change datetime of existing appoinment
        Then User change date time of appointment success

    @TestCase010
    Scenario: Verify user can filter Employee by Employer
        When User select Employer in drop down filter
        Then User can see all list emloyee of employers

    @TestCase011
    Scenario: Verify user can filter appointment by Location
        When User select location in drop down filter
        Then User can see all appointment were filter in calender

    @TestCase012
    Scenario: Verify user can clear all filter
        When User click button clear all filter
        Then All filter information will delete

    @TestCase013
    Scenario: Verify system will auto bidding when user select Employee
        When User select existing employee in new appoinment
        Then All information of Employee will populate to New Appointment Form

    @TestCase014
    Scenario: Verify system will auto bidding when user drag and drop employee
        When User drag and drop employee
        Then Information of Appoitment will auto bididing

    @TestCase015
    Scenario: Verify system will auto clear value when user click button clear form
        When User click button clear all filter
        Then All value of New Appointment form will delete

    @TestCase016
    Scenario: Verify user can delete appointment
        When User delte appoinment
        Then User delete appointment success

    @TestCase017
    Scenario: Verify user can create appointment which new emmployee
        When User create new appoinment with new employee
        Then User can create new appointment with new user
        When User access Employee of Employer
        Then New Employee have added 

    @TestCase018
    Scenario: Verify dropdown of Employers filter will display all employer exisitng sytem
        When User select drop down Employer in Filter
        Then Drop down filter will dispaly all employer existing system correct

    @TestCase019
    Scenario: Verify dropdown of Employers New Appointment will display all employer exisitng sytem
        When User select drop down Employer in New Appointment
        Then Drop down new appointment will dispaly all employer existing system correct

    @TestCase020
    Scenario: Verify user can receive email when appointment created
        When User create new appoinment
        Then Employee have received Email with contains of appointment

    @TestCase021
    Scenario: Verify user can receive email when appointment update
        When User change date time of Appointment
        Then Employee have received Email with contains of appointment reschedule

    @TestCase022
    Scenario: Verify user can view appointment by week
        When User click button Week
        Then All appointment of week will dispaly correct

    @TestCase023
    Scenario: Verify user can view appointment by day
        When User click button Day
        Then All appointment of day will dispaly correct
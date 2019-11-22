Feature: Calendar
    Background:

    @TestCase008
    Scenario: Verify user can create Appointment with existing Employee
        Given User Access CSM Website
        When User input correct username and password
        Then User can login system successful
        # When User create new Appointment with existing Employee
        Then User create new Appointment Success

    # @TestCase009
    # Scenario: Verify user can create Appointment which new Employee 
    #     When User create new Appointment with new Employee
    #     Then User create new Appointment with new Employee Success and Employee added in Employer

    # @TestCase010
    # Scenario: Verify user can delete Appointment
    #     When User click button delete exisitng Appointment
    #     Then User delete Appointment Success

    # @TestCase011
    # Scenario: Verify user can change Appointment date time
    #     When User change date time of existing Appointment
    #     Then User change date time of Appointment Success

    # @TestCase012
    # Scenario: Verify user can filter Employee by Employer
    #     When User select Employer in dropdown filter 
    #     Then User can see all list Emloyee of Employers

    # @TestCase013
    # Scenario: Verify user can filter Appointment by Location
    #     When User select Loccation in dropdown filter
    #     Then User can see all Appointment were filter in Calender

    # @TestCase014
    # Scenario: Verify user can clear all Filter
    #     When User click button clear all Filter
    #     Then User can clear all Filter information

    # @TestCase015
    # Scenario: Verify system will auto bidding when user drag and drop Employee
    #     When User drag and drop Employee 
    #     Then System auto bidding information of Employee

    # @TestCase016
    # Scenario: Verify system will auto clear value when user click button Clear Form
    #     When User click button clear form 
    #     Then All information of New Appointment form will delete

    # @TestCase017
    # Scenario: Verify dropdown of Employers filter will display all employer exisitng sytem
    #     When User select drop down Employer in Filter
    #     Then Drop down filter will dispaly all employer existing system correct

    # @TestCase018
    # Scenario: Verify dropdown of Employers New Appointment will display all employer exisitng sytem
    #     When User select drop down Employer in New Appointment
    #     Then Drop down new appointment will dispaly all employer existing system correct

    # @TestCase019
    # Scenario: Verify user can receive email when Appointment created
    #     When User create New Appoinment
    #     Then Employee have received Email with contains of Appointment

    # @TestCase020
    # Scenario: Verify user can receive email when Appointment update
    #     When User update New Appointment Success
    #     Then Employee have received Email with contains of Appointment Reschedule

    # @TestCase021
    # Scenario: Verify user can view appointment by Week
    #     When User click button Week
    #     Then All Appointment of week will dispaly correct

    # @TestCase022
    # Scenario: Verify user can view appointment by Day
    #     When User click button Day
    #     Then All Appointment of day will dispaly correct
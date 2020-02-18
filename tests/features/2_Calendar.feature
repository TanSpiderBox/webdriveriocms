Feature: Calendar

    @TestCase008
    Scenario: Verify user can create Appointment with existing Employee
        Given User Access CSM Website
        When User input correct username and password
        Then User can login system successful
        When User create new Appointment with existing Employee
        Then User create new Appointment Success '1'

    # @TestCase009
    # Scenario: Verify user can create Appointment which new Employee
    #     When User create new Appointment with new Employee
    #     Then User create new Appointment with new Employee Success and Employee added in Employer '1'

    # @TestCase010
    # Scenario: Verify user can update Appointment
    #     When User update existing Appointment '1'
    #     Then User update Appointment Successful '1'

    @TestCase011
    Scenario: Verify Employee Manager can create New Appointment for Employee
        When Employee Manager create New Appoinment for Employee
        Then Employee can see this appointment '1'

# @TestCase01
# Scenario: Verify user can filter Appointment by Location
#     When User select Loccation in dropdown filter
#     Then User can see all Appointment were filter in Calender

# @TestCase01
# Scenario: Verify user can clear all Filter
#     When User click button clear all Filter
#     Then User can clear all Filter information

# @TestCase01
# Scenario: Verify system will auto bidding when user drag and drop Employee
#     When User drag and drop Employee
#     Then System auto bidding information of Employee

# @TestCase01
# Scenario: Verify system will auto clear value when user click button Clear Form
#     When User click button clear form
#     Then All information of New Appointment form will delete

# @TestCase01
# Scenario: Verify dropdown of Employers filter will display all employer exisitng sytem
#     When User select drop down Employer in Filter
#     Then Drop down filter will dispaly all employer existing system correct

# @TestCase01
# Scenario: Verify dropdown of Employers New Appointment will display all employer exisitng sytem
#     When User select drop down Employer in New Appointment
#     Then Drop down new appointment will dispaly all employer existing system correct

# @TestCase01
# Scenario: Verify user can receive email when Appointment created
#     When User create New Appoinment
#     Then Employee have received Email with contains of Appointment

# @TestCase0
# Scenario: Verify user can receive email when Appointment update
#     When User update New Appointment Success
#     Then Employee have received Email with contains of Appointment Reschedule

# @TestCase0
# Scenario: Verify user can view appointment by Week
#     When User click button Week
#     Then All Appointment of week will dispaly correct

# @TestCase0
# Scenario: Verify user can view appointment by Day
#     When User click button Day
#     Then All Appointment of day will dispaly correct
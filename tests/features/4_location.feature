Feature: Location

# Onsite Location
Scenario: Create Onsite Location successfully
  Given User Access CSM Website
  When User input correct username and password
  When Employer - Choose employer "1"
  Then L - Create a onsite Location

Scenario: Cannot delete onsite location if it has a appointment
  When L - Create a new onsite appointment
  When Employer - Choose employer "1"
  Then L - Cannot delete onsite appointment

Scenario: Can delete onsite location if it hasn't any appointments
  When L - Delete onsite appointment
  When Employer - Choose employer "1"
  Then L - Can delete onsite appointment

# Location
Scenario: Cannot un-assign a location if if has a appointment
  Given L - Create sample location if it isn't exist
  When Employer - Choose employer "1"
  When L - Assign sample location to employer
  When L - Create a new appointment with sample location and employer "1"
  When Employer - Choose employer "1"
  Then L - Cannot un-assign sample location

Scenario: Can un-assign sample location from employer
  When Employer - Choose employer "2"
  When L - Assign sample location to employer
  When L - Create a new appointment with sample location and employer "2"
  When L - Remove appointment of employer "1"
  When Employer - Choose employer "1"
  Then L - Can un-assign sample location
  When L - Remove appointment of employer "2"
  When Employer - Choose employer "2"
  Then L - Can un-assign sample location

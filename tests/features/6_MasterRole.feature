Feature: Master Role

Scenario: Visit master role index screen successfully
  Given MSI - User open index page
  When User input correct username and password
  Then MSI - User is navigated to index page

Scenario: Creating a new master role with a blank name failed
  Given MSI - User open index page
  When MSI - User click new button
  When MSI - User click save button
  Then MSI - A failed message is appeared

Scenario: Creating a new master role successfully
  Given MSI - User open index page
  When MSI - User click new button
  When MSI - User input valid role name
  When MSI - User click save button
  Then MSI - Create a new master role successfully

Scenario: Search a master role
  Given MSI - User open index page
  When MSI - User input sample role
  When MSI - User presses enter
  Then MSI - Sample role was be found

Scenario: Update a master role successfully
  Given MSI - User open index page
  When MSI - User clicks edit button of sample role
  When MSI - Edit modal is appeared, user inputs a new role name
  When MSI - User click save button
  Then MSI - Updated the sample role successfully

Scenario: Remove a master role
  Given MSI - User open index page
  When MSI - User clicks remove button of sample role
  When MSI - A confirm alert is appeared, user clicks Yes
  Then MSI - Removed a master role successfully

# overview logic
Scenario: Overview Logic
  Given MSI - User open index page
  When MS - Create sample role
  When MS - User moves to employer screen, choosing Employer
  When MS - Assign sample role to employer
  Then MS - Cannot remove sample role
  When MS - User moves to employer screen, choosing Employer
  When MS - Un-assign sample role
  Then MS - Remove sample role successfully
  When MS - Create sample role
  When MS - User moves to employer screen, choosing Employer
  When MS - Assign sample role to employer
  When MS - Assign sample role to employee
  When MS - User moves to employer screen, choosing Employer
  Then MS - Cannot un-assign sample role from employer
  When MS - Un-assign sample role from employee
  When MS - User moves to employer screen, choosing Employer
  When MS - Un-assign sample role
  Then MS - Remove sample role successfully


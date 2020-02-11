Feature: Staff

Scenario: Create a staff successfully
  Given User Access CSM Website
  When User input correct username and password
  Then Staff - Create sample staff

Scenario: Cannot remove staff which was be assiged to on-site appointment
  When Staff - Create on-site appointment
  Then Staff - Cannot remove staff

Scenario: Remove staff successfully if it wasn't be assigned to anything
  When Staff - Remove on-site appointment
  Then Staff - Remove staff successfully

Feature: Supervisor

Scenario: Create a supervisor successfully
  Given S - User opens index page
  When User input correct username and password
  Then S - Create sample supervisor

Scenario: Cannot delete supervisor which was be assiged to employer
  When Employer - Choose employer "1"
  When S - Assign sample supervisor to employer
  Then S - Cannot remove sample supervisor

Scenario: Cannot unassign supervisor which was be assigned to employee
  When Employer - Choose employer "1"
  When S - Assign sample supervisor to employee
  When Employer - Choose employer "1"
  Then S - Cannot unassign supervisor from employer

Scenario: Can unassign supervisor which isn't be assigned to employee
  When S - Can un-assign sample supervisor from employee
  When Employer - Choose employer "1"
  Then S - Can unassign sample supervisor from employer

Scenario: Auto assign supervisor to employee if appointment is created
  When Employer - Choose employer "1"
  When S - Assign sample supervisor to employer
  When S - Create appointment which contains sample supervisor
  When Employer - Choose employer "1"
  Then S - Supervisor was be assigned to employee
  When Employer - Choose employer "1"
  Then S - Cannot unassign supervisor from employer

Scenario: Can delete supervisor which haven't be assigned to anything
  When S - Remove the appointment of employer "1"
  When Employer - Choose employer "1"
  When S - Can un-assign sample supervisor from employee
  When Employer - Choose employer "1"
  Then S - Can unassign sample supervisor from employer
  Then S - Deleted sample supervisor successfully

Feature: Medical Type

Scenario: Cannot remove medical type when it was be assigned to employer
  Given MT - User opens index page
  When User input correct username and password
  When MT - Create sample medical type
  When Employer - Choose employer "1"
  When MT - Assign sample medical type to employer
  Then MT - Cannot remove sample medical type

Scenario: Can remove medical type if it was be un-assigned from employer
  When Employer - Choose employer "1"
  Then MT - Un-assign sample medical type
  Then MT - Remove sample medical type successfully

Scenario: Cannot unassign mt if appointment is existed
  When MT - Create sample medical type
  When Employer - Choose employer "1"
  When MT - Assign sample medical type to employer
  When MT - Create new appointment with sample medical type and employer "1"
  When Employer - Choose employer "1"
  Then MT - Cannot un-assign sample medical type

Scenario: Can un-assign mt if appointment isn't existed
  When Employer - Choose employer "2"
  When MT - Assign sample medical type to employer
  When MT - Create new appointment with sample medical type and employer "2"
  When MT - Remove the appointment of employer "1"
  When Employer - Choose employer "1"
  Then MT - Un-assign sample medical type
  When MT - Remove the appointment of employer "2"
  When Employer - Choose employer "2"
  Then MT - Un-assign sample medical type
  Then MT - Remove sample medical type successfully

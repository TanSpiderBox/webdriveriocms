import { Given, When, Then } from "cucumber"
import { assert, expect } from "chai"
import { MasterRoleObject } from  "../page-object/MasterRole.po"
import { MasterRoleData } from "../data/Data.MasterRole";
import { EmployerData } from "../data/Data.Employer";
import { EmployerObject } from "../page-object/Employers.po.js";
import { EmployeeData } from "../data/Data.Employee";
import { AppointmentObject } from "../page-object/Calendar.po";

var removeRoleButton = function (name) {
  return "//tr[.//button[contains(text(), " + "'" + name + "'" + ")]]//button/i[contains(text(), 'clear')]";
}

Given("User open index page", () => {
  browser.url('http://cms.spiderbox.design/r/master-roles')
})

Then('User is navigated to index page', () => {
  assert.strictEqual($(MasterRoleObject.title).getText(), 'Master Roles')
})

When('User click new button', () => {
  $(MasterRoleObject.newButton).click()
})

When('User click save button', () => {
  $(MasterRoleObject.saveButton).click()
})

Then('A failed message is appeared', () => {
  browser.pause(3000)
  assert.include($(MasterRoleObject.errorNewMasterRole).getText(), 'Please review required fields!')
})

When('User input valid Role name', () => {
  $(MasterRoleObject.nameInput).setValue(MasterRoleData.sampleRole)
})

Then('Create a new Master Role Successfully', () => {
  browser.pause(3000)
  assert.equal($(MasterRoleObject.successfullySaved).getText(), 'Successfully saved')
})

When('User input sample Role', () => {
  $(MasterRoleObject.searchInput).setValue(MasterRoleData.sampleRole)
})

When('User presses enter', () => {
  $(MasterRoleObject.searchInput).setValue(MasterRoleData.sampleRole)
  $(MasterRoleObject.searchInput).click();
  browser.keys("\uE007");
})

Then('Sample Role was be found', () => {
  browser.pause(2000)
  assert.exists($("//table//tr//button[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]").getText(), MasterRoleData.sampleRole)
})

When('User clicks edit button of sample Role', () => {
  $("//tr[.//button[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]//button/i[contains(text(), 'create')]").click()
})

When('Edit modal is appeared, user inputs a new Role name', () => {
  assert.exists($(MasterRoleObject.editModal))
  $(MasterRoleObject.nameInput).setValue(MasterRoleData.newName)
})

Then('Updated the sample Role Successfully', () => {
  browser.pause(2000)
  assert.equal($(MasterRoleObject.successfullySaved).getText(), 'Successfully saved')
})

When('User clicks remove button of sample Role', () => {
  $(removeRoleButton(MasterRoleData.newName)).click()
})

When('A confirm alert is appeared, user clicks Yes', () => {
  assert.exists($(MasterRoleObject.confirmAlert))
  $(MasterRoleObject.yesButtonOfConfirmation).click()
})

Then('Removed a Master Role Successfully', () => {
  browser.pause(2000)
  assert.equal($(MasterRoleObject.successfullyDeleted).getText(), 'Successfully deleted')
})

//
// overview logic
//
When('Create sample Role', () => {
  $(MasterRoleObject.newButton).click()
  $(MasterRoleObject.nameInput).setValue(MasterRoleData.sampleRole)
  $(MasterRoleObject.saveButton).click()
})

When('User moves to Employer screen, choosing Employer', () => {
  $(MasterRoleObject.employerMenu).click()
  // [Warning] - Because the loading-inner 
  $(MasterRoleObject.masterRoleMenu).click()
  $(MasterRoleObject.employerMenu).click()
  $(EmployerObject.searchBox).click()
  $(EmployerObject.searchBox).setValue(EmployerData.employer1.name);
  browser.keys("\uE007");
  $(EmployerObject.find(EmployerData.employer1.name)).click()
  browser.pause(3000)
})

When('Assign sample Role to Employer', () => {
  $(MasterRoleObject.roleOnEmployer).click()
  browser.pause(2000)
  $("//app-employer-roles//*[contains(@class, 'employer-master-role-item') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").click()
  browser.pause(2000)
  let assignSuccess = $("//app-employer-roles//*[contains(@class, 'bg-primary') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").isExisting()
  expect(assignSuccess).to.be.true
})
Then('Cannot remove sample Role', () => {
  $(MasterRoleObject.masterRoleMenu).click()
  browser.pause(2000)

  $(MasterRoleObject.searchInput).setValue(MasterRoleData.sampleRole)
  $(MasterRoleObject.searchInput).click()
  browser.keys("\uE007")
  browser.pause(2000)

  $(removeRoleButton(MasterRoleData.sampleRole)).click()
  assert.exists($(MasterRoleObject.confirmAlert))
  $(MasterRoleObject.yesButtonOfConfirmation).click()
  browser.pause(2000)

  let failedAlert = $(MasterRoleObject.FailedDelete).isExisting()
  expect(failedAlert).to.be.true
})
When('Un-assign sample Role', () => {
  $(MasterRoleObject.roleOnEmployer).click()
  browser.pause(2000)
  $("//app-employer-roles//*[contains(@class, 'employer-master-role-item') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").click()
  browser.pause(2000)
  let assignSuccess = $("//app-employer-roles//*[contains(@class, 'bg-primary') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").isExisting()
  expect(assignSuccess).to.be.false
})
Then('Remove sample Role Successfully', () => {
  $(MasterRoleObject.masterRoleMenu).click()
  browser.pause(2000)

  $(MasterRoleObject.searchInput).setValue(MasterRoleData.sampleRole)
  $(MasterRoleObject.searchInput).click()
  browser.keys("\uE007")
  browser.pause(2000)

  $(removeRoleButton(MasterRoleData.sampleRole)).click()
  assert.exists($(MasterRoleObject.confirmAlert))
  $(MasterRoleObject.yesButtonOfConfirmation).click()
  browser.pause(2000)

  let failedAlert = $(MasterRoleObject.successfullyDeleted).isExisting()
  expect(failedAlert).to.be.true
})
When('Assign sample Role to Employee', () => {
  // Assign to employee
  $(MasterRoleObject.employeeOnEmployer).click()
  $(EmployerObject.searchBox).click()
  $(EmployerObject.searchBox).setValue(EmployeeData.emp1.email)
  browser.keys('Enter');
  $(EmployerObject.EditEmployeeBtn).click()
  $(EmployerObject.employee.editBtn).click()
  
  $(AppointmentObject.masterRoleSelector).click();
  $(EmployerObject.roleInput).setValue(MasterRoleData.sampleRole)
  browser.keys('Enter');
  $(EmployerObject.employee.saveBtn).click()
  browser.pause(1000)
})
Then('Cannot un-assign sample Role from Employer', () => {
  $(MasterRoleObject.roleOnEmployer).click()
  browser.pause(2000)
  $("//app-employer-roles//*[contains(@class, 'employer-master-role-item') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").click()
  browser.pause(2000)
  let assignSuccess = $("//app-employer-roles//*[contains(@class, 'bg-primary') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").isExisting()
  expect(assignSuccess).to.be.true
})
When('Un-assign sample Role from Employee', () => {
  $(MasterRoleObject.employeeOnEmployer).click()
  $(EmployerObject.searchBox).click()
  $(EmployerObject.searchBox).setValue(EmployeeData.emp1.email)
  browser.keys('Enter');
  $(EmployerObject.EditEmployeeBtn).click()
  $(EmployerObject.employee.editBtn).click()
  
  $(AppointmentObject.masterRoleSelector).click();
  $(EmployerObject.roleInput).setValue(MasterRoleData.defaultRole)
  browser.keys('Enter');
  $(EmployerObject.employee.saveBtn).click()
  browser.pause(1000)
  let updateSuccess = $("//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Updated successfully')]").isExisting()
  browser.pause(3000)
  expect(updateSuccess).to.be.true
})

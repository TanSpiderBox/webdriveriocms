import { Given, When, Then } from "cucumber"
import { assert, expect } from "chai"
import { MasterRoleObject } from  "../page-object/MasterRole.po"
import { MasterRoleData } from "../data/Data.MasterRole";
import { EmployerData } from "../data/Data.Employer";
import { EmployerObject } from "../page-object/Employers.po.js";
import { EmployeeData } from "../data/Data.Employee";

var removeRoleButton = function (name) {
  return "//tr[.//button[contains(text(), " + "'" + name + "'" + ")]]//button/i[contains(text(), 'clear')]";
}

Given("MSI - User open index page", () => {
  browser.url('http://cms.spiderbox.design/r/master-roles')
})

Then('MSI - User is navigated to index page', () => {
  assert.strictEqual($(MasterRoleObject.title).getText(), 'Master Roles')
})

When('MSI - User click new button', () => {
  $(MasterRoleObject.newButton).click()
})

When('MSI - User click save button', () => {
  $(MasterRoleObject.saveButton).click()
})

Then('MSI - A failed message is appeared', () => {
  browser.pause(3000)
  assert.include($(MasterRoleObject.errorNewMasterRole).getText(), 'Please review required fields!')
})

When('MSI - User input valid role name', () => {
  $(MasterRoleObject.nameInput).setValue(MasterRoleData.sampleRole)
})

Then('MSI - Create a new master role successfully', () => {
  browser.pause(3000)
  assert.equal($(MasterRoleObject.successfullySaved).getText(), 'Successfully saved')
})

When('MSI - User input sample role', () => {
  $(MasterRoleObject.searchInput).setValue(MasterRoleData.sampleRole)
})

When('MSI - User presses enter', () => {
  $(MasterRoleObject.searchInput).setValue(MasterRoleData.sampleRole)
  $(MasterRoleObject.searchInput).click();
  browser.keys("\uE007");
})

Then('MSI - Sample role was be found', () => {
  browser.pause(2000)
  assert.exists($("//table//tr//button[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]").getText(), MasterRoleData.sampleRole)
})

When('MSI - User clicks edit button of sample role', () => {
  $("//tr[.//button[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]//button/i[contains(text(), 'create')]").click()
})

When('MSI - Edit modal is appeared, user inputs a new role name', () => {
  assert.exists($(MasterRoleObject.editModal))
  $(MasterRoleObject.nameInput).setValue(MasterRoleData.newName)
})

Then('MSI - Updated the sample role successfully', () => {
  browser.pause(2000)
  assert.equal($(MasterRoleObject.successfullySaved).getText(), 'Successfully saved')
})

When('MSI - User clicks remove button of sample role', () => {
  $(removeRoleButton(MasterRoleData.newName)).click()
})

When('MSI - A confirm alert is appeared, user clicks Yes', () => {
  assert.exists($(MasterRoleObject.confirmAlert))
  $(MasterRoleObject.yesButtonOfConfirmation).click()
})

Then('MSI - Removed a master role successfully', () => {
  browser.pause(2000)
  assert.equal($(MasterRoleObject.successfullyDeleted).getText(), 'Successfully deleted')
})

//
// overview logic
//
When('MS - Create sample role', () => {
  $(MasterRoleObject.newButton).click()
  $(MasterRoleObject.nameInput).setValue(MasterRoleData.sampleRole)
  $(MasterRoleObject.saveButton).click()
})

When('MS - User moves to employer screen, choosing Employer', () => {
  $(MasterRoleObject.employerMenu).click()
  // [Warning] - Because the loading-inner 
  $(MasterRoleObject.masterRoleMenu).click()
  $(MasterRoleObject.employerMenu).click()
  $(EmployerObject.searchboxEmployer).click()
  $(EmployerObject.searchboxEmployer).setValue(EmployerData.employer1.name);
  browser.keys("\uE007");
  $(EmployerObject.find(EmployerData.employer1.name)).click()
  browser.pause(3000)
})

When('MS - Assign sample role to employer', () => {
  $(MasterRoleObject.roleOnEmployer).click()
  browser.pause(2000)
  $("//app-employer-roles//*[contains(@class, 'employer-master-role-item') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").click()
  browser.pause(2000)
  let assignSuccess = $("//app-employer-roles//*[contains(@class, 'bg-primary') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").isExisting()
  expect(assignSuccess).to.be.true
})
Then('MS - Cannot remove sample role', () => {
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
When('MS - Un-assign sample role', () => {
  $(MasterRoleObject.roleOnEmployer).click()
  browser.pause(2000)
  $("//app-employer-roles//*[contains(@class, 'employer-master-role-item') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").click()
  browser.pause(2000)
  let assignSuccess = $("//app-employer-roles//*[contains(@class, 'bg-primary') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").isExisting()
  expect(assignSuccess).to.be.false
})
Then('MS - Remove sample role successfully', () => {
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
When('MS - Assign sample role to employee', () => {
  // Assign to employee
  $(MasterRoleObject.employeeOnEmployer).click()
  $(EmployerObject.searchboxEmployer).click()
  $(EmployerObject.searchboxEmployer).setValue(EmployeeData.emp1.email)
  browser.keys('Enter');
  $(EmployerObject.EditEmployeeBtn).click()
  $(EmployerObject.employee.editBtn).click()
  
  $(EmployerObject.roleSelector).click()
  $(EmployerObject.roleInput).setValue(MasterRoleData.sampleRole)
  browser.keys('Enter');
  $(EmployerObject.employee.saveBtn).click()
  browser.pause(1000)
})
Then('MS - Cannot un-assign sample role from employer', () => {
  $(MasterRoleObject.roleOnEmployer).click()
  browser.pause(2000)
  $("//app-employer-roles//*[contains(@class, 'employer-master-role-item') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").click()
  browser.pause(2000)
  let assignSuccess = $("//app-employer-roles//*[contains(@class, 'bg-primary') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").isExisting()
  expect(assignSuccess).to.be.true
})
When('MS - Un-assign sample role from employee', () => {
  $(MasterRoleObject.employeeOnEmployer).click()
  $(EmployerObject.searchboxEmployer).click()
  $(EmployerObject.searchboxEmployer).setValue(EmployeeData.emp1.email)
  browser.keys('Enter');
  $(EmployerObject.EditEmployeeBtn).click()
  $(EmployerObject.employee.editBtn).click()
  
  $(EmployerObject.roleSelector).click()
  $(EmployerObject.roleInput).setValue(MasterRoleData.defaultRole)
  browser.keys('Enter');
  $(EmployerObject.employee.saveBtn).click()
  browser.pause(1000)
  let updateSuccess = $("//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Updated successfully')]").isExisting()
  browser.pause(3000)
  expect(updateSuccess).to.be.true
})

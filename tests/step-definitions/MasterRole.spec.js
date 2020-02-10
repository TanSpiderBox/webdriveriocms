import { Given, When, Then } from "cucumber"
import { assert, expect } from "chai"
import { MasterRoleObject } from  "../page-object/MasterRole.po"
import { MasterRoleData } from "../data/Data.MasterRole";

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
  browser.pause(2000)
  assert.include($(MasterRoleObject.errorNewMasterRole).getText(), 'Please review required fields!')
})

When('MSI - User input valid role name', () => {
  $(MasterRoleObject.nameInput).setValue(MasterRoleData.sampleRole)
})

Then('MSI - Create a new master role successfully', () => {
  browser.pause(2000)
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

When('MS - User moves to employer screen, choosing Spiderbox', () => {
  $(MasterRoleObject.employerMenu).click()
  // [Warning] - Because the loading-inner 
  $(MasterRoleObject.masterRoleMenu).click()
  $(MasterRoleObject.employerMenu).click()
  browser.waitUntil(() => {
    return $("//*[contains(@class, 'loading-inner')]").isExisting() == false
  }, 20000)
  $("//tr/td[contains(@class, 'cdk-column-name')]//*[contains(text(), 'Spiderbox')]").click()
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
  // Assign to hoang
  $(MasterRoleObject.employeeOnEmployer).click()
  browser.pause(2000)
  $("//app-employee-list//tr[.//td[contains(@class, 'mat-column-email') and contains(text(), 'hoang@spiderbox.design')]]//*[contains(@class, 'link')]").click()
  browser.pause(2000)

  $("//app-employee-details//button[contains(text(), 'Edit')]").click();
  browser.pause(1000)
  $("//app-employee-form//ng-select[contains(@formcontrolname, 'masterRoleId')]").click();
  browser.pause(1000)
  $("//app-employee-form//ng-select[contains(@formcontrolname, 'masterRoleId')]//ng-dropdown-panel//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + MasterRoleData.sampleRole + "'" + ")]]").click();
  browser.pause(2000)
  $("//app-employee-details//button[contains(text(), 'Save')]").click()
  browser.pause(3000)
  let updateSuccess = $("//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Updated successfully')]").isExisting()
  browser.pause(3000)
  expect(updateSuccess).to.be.true
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
  browser.pause(2000)
  $("//app-employee-list//tr[.//td[contains(@class, 'mat-column-email') and contains(text(), 'hoang@spiderbox.design')]]//*[contains(@class, 'link')]").click()
  browser.pause(2000)

  $("//app-employee-details//button[contains(text(), 'Edit')]").click();
  browser.pause(1000)
  $("//app-employee-form//ng-select[contains(@formcontrolname, 'masterRoleId')]").click();
  browser.pause(1000)
  $("//app-employee-form//ng-select[contains(@formcontrolname, 'masterRoleId')]//ng-dropdown-panel//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + MasterRoleData.defaultRole + "'" + ")]]").click();
  browser.pause(2000)
  $("//app-employee-details//button[contains(text(), 'Save')]").click()
  browser.pause(3000)
  let updateSuccess = $("//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Updated successfully')]").isExisting()
  browser.pause(3000)
  expect(updateSuccess).to.be.true
})

import { Given, When, Then } from "cucumber";
import { assert, expect } from "chai";
import { MenuObject } from "../page-object/shared/Menu.po";
import { SupervisorObject } from "../page-object/Supervisor.po";
import { SupervisorData } from "../data/Data.Supervisor";
import { EmployerObject } from "../page-object/Employers.po";
import { EmployerData } from "../data/Data.Employer";
import { EmployeeData } from "../data/Data.Employee";
import { AppointmentObject } from "../page-object/Calendar.po";

function waitingLoadingInner() {
  browser.waitUntil(() => {
    return expect($("//*[contains(@class, 'loading-inner')]").isExisting()).to.be.true
  }, 20000)
  browser.waitUntil(() => {
    return expect($("//*[contains(@class, 'loading-inner')]").isExisting()).to.be.false
  }, 20000)
}
function waitingLoad(name) {
  browser.waitUntil(() => {
    return expect($(name).isExisting()).to.be.true
  }, 20000)
}

Given('S - User opens index page', () => {
  browser.url('http://cms.spiderbox.design/')
})

Then('S - Create sample supervisor', () => {
  $(MenuObject.supervisor).click()
  waitingLoadingInner()

  $(SupervisorObject.newButton).click()
  $(SupervisorObject.emailInput).setValue(SupervisorData.sampleSupervisor)
  $(SupervisorObject.saveButton).click()
})

When('S - Assign sample supervisor to employer', () => {
  $(EmployerObject.supervisorTab).click()
  waitingLoad(EmployerObject.supervisorSection)
  $(EmployerObject.findSupervisor(SupervisorData.sampleSupervisor)).click()
  browser.waitUntil(() => {
    let classAttr = $(EmployerObject.findSupervisor(SupervisorData.sampleSupervisor)).getAttribute('class')
    return expect(classAttr).to.include('bg-primary')
  }, 20000)
})

Then('S - Cannot remove sample supervisor', () =>{
  $(MenuObject.supervisor).click()
  waitingLoadingInner();
  // $(SupervisorObject.searchInput).setValue(SupervisorData.sampleSupervisor)
  // browser.keys("\uE007")
  // [Warning] The search function isn't working

  waitingLoad(SupervisorObject.find(SupervisorData.sampleSupervisor))
  $(SupervisorObject.find(SupervisorData.sampleSupervisor)).$(SupervisorObject.removeBtn).click()

  waitingLoad(SupervisorObject.yesButtonOfConfirmation)
  $(SupervisorObject.yesButtonOfConfirmation).click()

  waitingLoad(SupervisorObject.FailedDelete)
})

When('S - Assign sample supervisor to employee', () => {
  $(EmployerObject.employeeTab).click()

  waitingLoad(EmployerObject.employeesSection)
  $(EmployerObject.findEmployee(EmployeeData.emp1.email)).$("span").click()

  waitingLoad(EmployerObject.employee.editBtn)
  $(EmployerObject.employee.editBtn).click()
  browser.pause(1000)

  $(EmployerObject.employee.supervisorSelector).click()
  $(EmployerObject.employee.findSupervisor(SupervisorData.sampleSupervisor)).click()
  browser.pause(1000)

  $(EmployerObject.employee.saveBtn).click()
  waitingLoad(EmployerObject.updatedSuccessfully)
})

Then('S - Cannot unassign supervisor from employer', () => {
  $(EmployerObject.supervisorTab).click()
  waitingLoad(EmployerObject.supervisorSection)

  $(EmployerObject.findSupervisor(SupervisorData.sampleSupervisor)).click()
  browser.pause(1000)
  waitingLoad(EmployerObject.failedUnAssign)
})

When('S - Can un-assign sample supervisor from employee', () => {
  $(EmployerObject.employeeTab).click()

  waitingLoad(EmployerObject.employeesSection)
  $(EmployerObject.findEmployee(EmployeeData.emp1.email)).$("span").click()

  waitingLoad(EmployerObject.employee.editBtn)
  $(EmployerObject.employee.editBtn).click()
  browser.pause(1000)

  $(EmployerObject.employee.clearSupervisor).click()

  $(EmployerObject.employee.saveBtn).click()
  waitingLoad(EmployerObject.updatedSuccessfully)
})

Then('S - Can unassign sample supervisor from employer', () => {
  $(EmployerObject.supervisorTab).click()
  waitingLoad(EmployerObject.supervisorSection)
  $(EmployerObject.findSupervisor(SupervisorData.sampleSupervisor)).click()
  browser.waitUntil(() => {
    let classAttr = $(EmployerObject.findSupervisor(SupervisorData.sampleSupervisor)).getAttribute('class')
    return expect(classAttr).to.not.include('bg-primary')
  }, 20000)
})

When('S - Create appointment which contains sample supervisor', () => {
  $(MenuObject.calendar).click()
  waitingLoadingInner()

  $(AppointmentObject.newBtn).click()
  waitingLoad(AppointmentObject.modal)

  // fill form
  $(AppointmentObject.employerSelector).click()
  $(AppointmentObject.selectEmployer(EmployerData.employer1.name)).waitForExist(20000)
  $(AppointmentObject.selectEmployer(EmployerData.employer1.name)).click()

  $(AppointmentObject.locationSelector).click()
  $(AppointmentObject.defaultLocation).waitForExist(20000)
  $(AppointmentObject.defaultLocation).click()

  $(AppointmentObject.medicalTypeSelector).click()
  $(AppointmentObject.selectMedicalType('')).waitForExist(20000)
  $(AppointmentObject.selectMedicalType('')).click()

  $(AppointmentObject.emailSelector).click()
  $(AppointmentObject.selectEmail(EmployeeData.emp1.email)).waitForExist(20000)
  $(AppointmentObject.selectEmail(EmployeeData.emp1.email)).click()

  $(AppointmentObject.supervisorSelector).click()
  $(AppointmentObject.selectSupervisor(SupervisorData.sampleSupervisor)).waitForExist(20000)
  $(AppointmentObject.selectSupervisor(SupervisorData.sampleSupervisor)).click()

  browser.pause(1000)
  $(AppointmentObject.saveBtn).click()

  waitingLoad(AppointmentObject.createdSuccessfully)
})

Then('S - Supervisor was be assigned to employee', () => {
  $(EmployerObject.employeeTab).click()
  waitingLoad(EmployerObject.employeesSection)

  $(EmployerObject.findEmployee(EmployeeData.emp1.email)).$("span").click()
  waitingLoad(EmployerObject.employee.editBtn)
  browser.pause(2000)

  expect($(EmployerObject.employee.supervisorSelector).getText()).to.include(SupervisorData.sampleSupervisor)
})

When('S - Remove the appointment of employer {string}', (num) => {
  if (num == 1) {
    var employer = EmployerData.employer1
  } else {
    var employer = EmployerData.employer2
  }
  $(MenuObject.calendar).click()
  browser.pause(3000)
  // Find all appoinments which contain sample supervisor. After that, removing it 
  AppointmentObject.find({ employer: employer.name, supervisor: SupervisorData.sampleSupervisor }).forEach(el => {
    el.click();
    waitingLoad(AppointmentObject.removeBtn)
    $(AppointmentObject.removeBtn).click()
    waitingLoad(SupervisorObject.yesButtonOfConfirmation)
    $(SupervisorObject.yesButtonOfConfirmation).click()
    waitingLoad(AppointmentObject.successfullyDeleted)
    browser.pause(2000)
  })
})

Then("S - Deleted sample supervisor successfully", () => {
  $(MenuObject.supervisor).click()
  waitingLoadingInner()

  $(SupervisorObject.find(SupervisorData.sampleSupervisor)).$(SupervisorObject.removeBtn).click()

  waitingLoad(SupervisorObject.yesButtonOfConfirmation)
  $(SupervisorObject.yesButtonOfConfirmation).click()

  waitingLoad(SupervisorObject.successfullyDeleted)
})

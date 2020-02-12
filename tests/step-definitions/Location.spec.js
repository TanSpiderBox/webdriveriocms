import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { EmployerObject } from '../page-object/Employers.po'
import { LocationData } from '../data/Data.Location'
import { EmployerData } from '../data/Data.Employer'
import { EmployeeData } from '../data/Data.Employee'
import { MenuObject } from '../page-object/shared/Menu.po'
import { OnsiteAppointmentObject, AppointmentObject } from '../page-object/Calendar.po'
import { LocationObject } from '../page-object/Location.po'

Then('L - Create a onsite Location', () => {
  $(EmployerObject.onsiteLocationTab).click()
  $(EmployerObject.newOnsiteLocationBtn).click()
  // fill form
  $(EmployerObject.onsiteLocation.titleInput).setValue(LocationData.sampleOnsiteLocation.title)
  $(EmployerObject.onsiteLocation.streetLine1Input).setValue(LocationData.sampleOnsiteLocation.streetLine1)
  $(EmployerObject.onsiteLocation.suburbInput).setValue(LocationData.sampleOnsiteLocation.suburb)
  $(EmployerObject.onsiteLocation.stateSelector).click()
  $(EmployerObject.onsiteLocation.defaultState).click()
  $(EmployerObject.onsiteLocation.postCodeInput).setValue(LocationData.sampleOnsiteLocation.postCode)
  browser.pause(1000)
  $(EmployerObject.onsiteLocation.saveBtn).click()
  $(EmployerObject.onsiteLocation.createSuccessfully).waitForExist(20000)
})

When('L - Create a new onsite appointment' , () => {
  $(MenuObject.calendar).click()
  $(OnsiteAppointmentObject.newBtn).click()
  $(OnsiteAppointmentObject.modal).waitForExist(20000)
  // fill form
  $(OnsiteAppointmentObject.employerSelect).click()
  $(OnsiteAppointmentObject.selectEmployer(EmployerData.employer1.name)).waitForExist(20000)
  $(OnsiteAppointmentObject.selectEmployer(EmployerData.employer1.name)).click()
  $(OnsiteAppointmentObject.locationSelect).click()
  $(OnsiteAppointmentObject.selectLocation(LocationData.sampleOnsiteLocation.title)).waitForExist(20000)
  $(OnsiteAppointmentObject.selectLocation(LocationData.sampleOnsiteLocation.title)).click()
  $(OnsiteAppointmentObject.medicalTypeSelect).click()
  $(OnsiteAppointmentObject.selectMedicalType('')).waitForExist(20000)
  $(OnsiteAppointmentObject.selectMedicalType('')).click()

  $(OnsiteAppointmentObject.saveBtn).click()
  $(OnsiteAppointmentObject.createdSuccessfully).waitForExist(20000)
})

Then('L - Cannot delete onsite appointment', () => {
  $(EmployerObject.onsiteLocationTab).click()
  browser.pause(2000)
  while(!$(EmployerObject.findOnsiteLocation(LocationData.sampleOnsiteLocation.title)).isExisting()) {
    // If next button wasn't found => wrong
    $(EmployerObject.nextOnsiteLocation).click()
    browser.pause(2000)
  }
  $(EmployerObject.findOnsiteLocation(LocationData.sampleOnsiteLocation.title)).$(EmployerObject.deleteBtn).click()
  $(EmployerObject.yesButtonOfConfirmation).click()
  $(EmployerObject.onsiteLocation.failedDelete).waitForExist(20000)
})

When('L - Delete onsite appointment', () => {
  $(MenuObject.calendar).click()
  browser.pause(3000)
  // Find all appoinments which contain sample staff. After that, removing it 
  OnsiteAppointmentObject.find({ employer: EmployerData.employer1.name, location: LocationData.sampleOnsiteLocation.title }).forEach(el => {
    el.click();
    $(OnsiteAppointmentObject.removeBtn).waitForExist(20000)
    $(OnsiteAppointmentObject.removeBtn).click()
    $(EmployerObject.yesButtonOfConfirmation).waitForExist(20000)
    $(EmployerObject.yesButtonOfConfirmation).click()
    $(OnsiteAppointmentObject.successfullyDeleted).waitForExist(20000)
  })
  browser.pause(1000)
})

Then('L - Can delete onsite appointment', () => {
  $(EmployerObject.onsiteLocationTab).click()
  browser.pause(2000)
  while(!$(EmployerObject.findOnsiteLocation(LocationData.sampleOnsiteLocation.title)).isExisting()) {
    // If next button wasn't found => wrong
    $(EmployerObject.nextOnsiteLocation).click()
    browser.pause(2000)
  }
  $(EmployerObject.findOnsiteLocation(LocationData.sampleOnsiteLocation.title)).$(EmployerObject.deleteBtn).click()
  $(EmployerObject.yesButtonOfConfirmation).click()
  browser.pause(2000)
  expect($(EmployerObject.onsiteLocation.failedDelete).isNull===undefined).to.be.equal(true);
})

Given("L - Create sample location if it isn't exist", () => {
  $(MenuObject.location).click()
  browser.pause(2000)
  $("/đâsdasds").isExisting()
  while(!$(LocationObject.find(LocationData.sampleLocation.title)).isExisting()) {
    // If next button wasn't found => wrong
    if($(LocationObject.nextPage).isExisting()) {
      $(LocationObject.nextPage).click()
    } else {
      break;
    }
    browser.pause(2000)
  }

  if (!$(LocationObject.find(LocationData.sampleLocation.title)).isExisting()) {
    $(LocationObject.newButton).click()
    // fill form
    $(LocationObject.titleInput).setValue(LocationData.sampleLocation.title)
    $(LocationObject.streetLine1Input).setValue(LocationData.sampleLocation.streetLine1)
    $(LocationObject.suburbInput).setValue(LocationData.sampleLocation.suburb)
    $(LocationObject.stateSelector).click()
    $(LocationObject.defaultState).click()
    $(LocationObject.postCodeInput).setValue(LocationData.sampleLocation.postCode)
    browser.pause(1000)
    $(LocationObject.saveBtn).click()
    $(LocationObject.createSuccessfully).waitForExist(20000)
  }
})

When('L - Assign sample location to employer', () => {
  $(EmployerObject.locationTab).click()
  $(EmployerObject.findLocation(LocationData.sampleLocation.title)).click()
  browser.pause(1000)
  browser.waitUntil(() => {
    let classAttr = $(EmployerObject.findLocation(LocationData.sampleLocation.title)).getAttribute('class')
    return expect(classAttr).to.include('bg-primary')
  }, 20000)
})

When('L - Create a new appointment with sample location and employer {string}', (num) => {
  let employer = EmployerData['employer' + num]
  $(MenuObject.calendar).click()
  browser.pause(1000)

  $(AppointmentObject.newBtn).click()
  $(AppointmentObject.modal).waitForExist(20000)
  // fill form
  $(AppointmentObject.employerSelector).click()
  $(AppointmentObject.selectEmployer(employer.name)).waitForExist(20000)
  $(AppointmentObject.selectEmployer(employer.name)).click()

  $(AppointmentObject.locationSelector).click()
  $(AppointmentObject.selectLocation(LocationData.sampleLocation.title)).waitForExist(20000)
  $(AppointmentObject.selectLocation(LocationData.sampleLocation.title)).click()

  $(AppointmentObject.medicalTypeSelector).click()
  $(AppointmentObject.selectMedicalType('')).waitForExist(20000)
  $(AppointmentObject.selectMedicalType('')).click()

  $(AppointmentObject.startTimeSelector).click()
  let hour = new Date().getHours() + parseInt(num)
  $(AppointmentObject.selectStartTime(hour + ':00')).waitForExist(20000)
  $(AppointmentObject.selectStartTime(hour + ':00')).click()

  $(AppointmentObject.emailSelector).click()
  $(AppointmentObject.selectEmail(EmployeeData.emp1.email)).waitForExist(20000)
  $(AppointmentObject.selectEmail(EmployeeData.emp1.email)).click()

  browser.pause(1000)
  $(AppointmentObject.saveBtn).click()

  $(AppointmentObject.createdSuccessfully).waitForExist(20000)
})

Then('L - Cannot un-assign sample location', () => {
  $(EmployerObject.locationTab).click()

  $(EmployerObject.findLocation(LocationData.sampleLocation.title)).click()
  $(EmployerObject.locationFailedUnassign).waitForExist(20000)
  browser.pause(1000)
})

When('L - Remove appointment of employer {string}', (num) => {
  let employer = EmployerData['employer' + num]
  $(MenuObject.calendar).click()
  browser.pause(3000)
  // Find all appoinments which contain sample supervisor. After that, removing it 
  AppointmentObject.find({ employer: employer.name, location: LocationData.sampleLocation.title }).forEach(el => {
    el.click();
    $(AppointmentObject.removeBtn).waitForExist(20000)
    $(AppointmentObject.removeBtn).click()
    $(LocationObject.yesButtonOfConfirmation).waitForExist(20000)
    $(LocationObject.yesButtonOfConfirmation).click()
    $(AppointmentObject.successfullyDeleted).waitForExist(20000)
    browser.pause(2000)
  })
})

Then('L - Can un-assign sample location', () => {
  $(EmployerObject.locationTab).click()

  $(EmployerObject.findLocation(LocationData.sampleLocation.title)).click()
  browser.pause(2000)
  let classAttr = $(EmployerObject.findLocation(LocationData.sampleLocation.title)).getAttribute('class')
  return expect(classAttr).to.not.include('bg-primary')
})

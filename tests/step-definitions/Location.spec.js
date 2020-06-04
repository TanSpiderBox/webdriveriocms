import { Given, When, Then } from "cucumber";
import { expect } from "chai";
import { EmployerObject } from '../page-object/Employers.po'
import { LocationData } from '../data/Data.Location'
import { EmployerData } from '../data/Data.Employer'
import { EmployeeData } from '../data/Data.Employee'
import { MenuObject } from '../page-object/shared/Menu.po'
import { CalendarObject, OnsiteAppointmentObject, AppointmentObject } from '../page-object/Calendar.po'
import { LocationObject } from '../page-object/Location.po'

Then('Create a Onsite Location', () => {
  $(EmployerObject.onsiteLocationTab).click()
  $(EmployerObject.newOnsiteLocationBtn).click()
  browser.pause(1000)
  // fill form
  $(EmployerObject.onsiteLocation.titleInput).setValue(LocationData.sampleOnsiteLocation.title)
  $(EmployerObject.onsiteLocation.streetLine1Input).setValue(LocationData.sampleOnsiteLocation.streetLine1)
  $(EmployerObject.onsiteLocation.suburbInput).setValue(LocationData.sampleOnsiteLocation.suburb)
  $(EmployerObject.onsiteLocation.stateSelector).click()
  $(EmployerObject.onsiteLocation.defaultState).click()
  $(EmployerObject.onsiteLocation.postCodeInput).setValue(LocationData.sampleOnsiteLocation.postCode)
  browser.pause(1000)
  $(EmployerObject.onsiteLocation.saveBtn).click()
})

When('Create a new Onsite Appointment', () => {
  browser.pause(1000)
  $(MenuObject.calendar).click()
  $(OnsiteAppointmentObject.appointmentNewOnsiteBtn).click()
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
  //User Select Enable Time Slot
  $(OnsiteAppointmentObject.onsiteappointmentEnableBtn).click();
  $(OnsiteAppointmentObject.onsiteappointmentPublicBtn).click();
  $(CalendarObject.appointmentSaveBtn).click()
})

Then('Can not delete Onsite Appointment', () => {
  $(EmployerObject.onsiteLocationTab).click()
  browser.pause(2000)
  while (!$(EmployerObject.findOnsiteLocation(LocationData.sampleOnsiteLocation.title)).isExisting()) {
    // If next button wasn't found => wrong
    $(EmployerObject.nextOnsiteLocation).click()
    browser.pause(2000)
  }
  $(EmployerObject.findOnsiteLocation(LocationData.sampleOnsiteLocation.title)).click()
  browser.pause(1000)
  $(EmployerObject.yesButtonOfConfirmation).click()
  browser.pause(2000)
  expect($(EmployerObject.onsiteLocation.failedDelete).isNull === undefined).to.be.equal(true);
})

When('Delete Onsite Appointment', () => {
  $(MenuObject.calendar).click()
  browser.pause(2000)
  // Find all appoinments which contain sample staff. After that, removing it 
  OnsiteAppointmentObject.find({ employer: EmployerData.employer1.name, location: LocationData.sampleOnsiteLocation.title }).forEach(el => {
    el.click();
    $(CalendarObject.appointmentRemoveBtn).click()
    browser.pause(1000)
    $(EmployerObject.yesButtonOfConfirmation).waitForExist(20000)
    browser.pause(1000)
    $(EmployerObject.yesButtonOfConfirmation).click()
  })
  browser.pause(1000)
})

Then('Can delete Onsite Appointment', () => {
  $(EmployerObject.onsiteLocationTab).click()
  browser.pause(2000)
  while (!$(EmployerObject.findOnsiteLocation(LocationData.sampleOnsiteLocation.title)).isExisting()) {
    // If next button wasn't found => wrong
    $(EmployerObject.nextOnsiteLocation).click()
    browser.pause(2000)
  }
  $(EmployerObject.findOnsiteLocation(LocationData.sampleOnsiteLocation.title)).click()
  $(EmployerObject.yesButtonOfConfirmation).click()
  browser.pause(2000)
  // expect($(EmployerObject.onsiteLocation.failedDelete).isNull === undefined).to.be.equal(false);
})

Given("Create sample Location if it is not exist", () => {
  $(MenuObject.location).click()
  browser.pause(2000)
  while (!$(LocationObject.find(LocationData.sampleLocation.title)).isExisting()) {
    // If next button wasn't found => wrong
    if ($(LocationObject.nextPage).isExisting()) {
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

When('Assign sample Location to Employer', () => {
  browser.pause(1000)
  $(EmployerObject.locationTab).click()
  browser.pause(1000)
  $(EmployerObject.findLocation(LocationData.sampleLocation.title)).click()
  browser.pause(1000)
  browser.waitUntil(() => {
    let classAttr = $(EmployerObject.findLocation(LocationData.sampleLocation.title)).getAttribute('class')
    return expect(classAttr).to.include('bg-primary')
  }, 20000)
})

When('Create a new Appointment with sample Location and Employer {string}', (num) => {
  let employer = EmployerData['employer' + num]
  browser.pause(1000)
  $(MenuObject.calendar).click()
  browser.pause(1000)

  $(AppointmentObject.appointmentNewBtn).click()
  // fill form
  $(AppointmentObject.employerSelector).click()
  $(AppointmentObject.selectEmployer(employer.name)).click()

  $(AppointmentObject.locationSelector).click()
  $(AppointmentObject.selectLocation(LocationData.sampleLocation.title)).click()

  $(AppointmentObject.medicalTypeSelector).click()
  $(AppointmentObject.selectMedicalType('')).click()

  $(AppointmentObject.startTimeSelector).click()
  let hour = new Date().getHours() + parseInt(num)
  $(AppointmentObject.selectStartTime(hour + ':00')).click()

  $(AppointmentObject.emailSelector).click()
  $(AppointmentObject.emailInput).setValue(EmployeeData.emp1.email)
  $(AppointmentObject.selectEmail(EmployeeData.emp1.email)).click()

  browser.pause(1000)
  $(CalendarObject.appointmentSaveBtn).click()
})

Then('Can not un-assign sample Location', () => {
  browser.pause(1000)
  $(EmployerObject.locationTab).click()

  $(EmployerObject.findLocation(LocationData.sampleLocation.title)).click()
  $(EmployerObject.locationFailedUnassign).waitForExist(20000)
  browser.pause(1000)
})

When('Remove Appointment of Employer {string}', (num) => {
  let employer = EmployerData['employer' + num]
  browser.pause(1000)
  $(MenuObject.calendar).click()
  browser.pause(3000)
  // Find all appoinments which contain sample supervisor. After that, removing it 
  AppointmentObject.find({ employer: employer.name, location: LocationData.sampleLocation.title }).forEach(el => {
    el.click();
    $(CalendarObject.appointmentRemoveBtn).click()
    browser.pause(1000)
    $(LocationObject.yesButtonOfConfirmation).click()
    browser.pause(2000)
  })
})

Then('Can un-assign sample Location', () => {
  browser.pause(1000)
  $(EmployerObject.locationTab).click()
  $(EmployerObject.findLocation(LocationData.sampleLocation.title)).click()
  browser.pause(2000)
  let classAttr = $(EmployerObject.findLocation(LocationData.sampleLocation.title)).getAttribute('class')
  return expect(classAttr).to.not.include('bg-primary')
})

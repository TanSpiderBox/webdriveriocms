import { Given, When, Then } from "cucumber"
import { assert, expect } from "chai"
import { MedicalTypeObject } from "../page-object/MedicalType.po"
import { EmployerObject } from "../page-object/Employers.po"
import { OnsiteAppointmentObject, CalendarObject } from "../page-object/Calendar.po"
import { MenuObject } from "../page-object/shared/Menu.po";
import { MedicalTypeData } from "../data/Data.MedicalType"
import { EmployerData } from "../data/Data.Employer"
import { appointmentdata } from "../data/Data.Calendar"
import moment from "moment";

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

Given('User opens index page', () => {
  browser.url('http://cms.spiderbox.design/r/medical-types')
})

When('Create sample Medical Type', () => {
  browser.pause(1000)
  $(MenuObject.medicalType).click()
  browser.pause(1000)
  $(MedicalTypeObject.newButton).click()
  $(MedicalTypeObject.nameInput).setValue(MedicalTypeData.sampleMedicalType)
  $(MedicalTypeObject.saveButton).click()
})
When('Assign sample Medical Type to Employer', () => {
  $(EmployerObject.medicalTypeTab).click()
  browser.waitUntil(() => {
    return $(EmployerObject.medicalTypesSection).isExisting() == true
  }, 20000)
  $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).click()
  browser.waitUntil(() => {
    let classAttr = $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).getAttribute('class')
    return expect(classAttr).to.include('bg-primary')
  }, 20000)
})
Then('Can not remove sample Medical Type', () => {
  $(MenuObject.medicalType).click()
  waitingLoadingInner();
  $(MedicalTypeObject.searchInput).setValue(MedicalTypeData.sampleMedicalType)
  browser.keys("\uE007")

  waitingLoad(MedicalTypeObject.findMt(MedicalTypeData.sampleMedicalType))
  $(MedicalTypeObject.findMt(MedicalTypeData.sampleMedicalType)).$(MedicalTypeObject.removeBtn).click()

  waitingLoad(MedicalTypeObject.yesButtonOfConfirmation)
  $(MedicalTypeObject.yesButtonOfConfirmation).click()

  waitingLoad(MedicalTypeObject.FailedDelete)
})

Then('Un-assign sample Medical Type', () => {
  $(EmployerObject.medicalTypeTab).click()
  waitingLoad(EmployerObject.medicalTypesSection)

  $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).click()
  browser.waitUntil(() => {
    let classAttr = $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).getAttribute('class')
    return expect(classAttr).to.not.include('bg-primary')
  }, 20000)
})
Then('Remove sample Medical Type Successfully', () => {
  $(MenuObject.medicalType).click()
  waitingLoadingInner();
  $(MedicalTypeObject.searchInput).setValue(MedicalTypeData.sampleMedicalType)
  browser.keys("\uE007")

  waitingLoad(MedicalTypeObject.findMt(MedicalTypeData.sampleMedicalType))
  $(MedicalTypeObject.findMt(MedicalTypeData.sampleMedicalType)).$(MedicalTypeObject.removeBtn).click()

  waitingLoad(MedicalTypeObject.yesButtonOfConfirmation)
  $(MedicalTypeObject.yesButtonOfConfirmation).click()

  waitingLoad(MedicalTypeObject.successfullyDeleted)
})

When('Create new Appointment with sample Medical Type and Employer {string}', (num) => {
  if (num == 1) {
    var employer = EmployerData.employer1
  } else {
    var employer = EmployerData.employer2
  }
  $(MenuObject.calendar).click()
  waitingLoadingInner()

  $(OnsiteAppointmentObject.appointmentNewOnsiteBtn).click()
  waitingLoad(OnsiteAppointmentObject.modal)
  // fill form
  $(OnsiteAppointmentObject.employerSelect).click()
  $(OnsiteAppointmentObject.selectEmployer(employer.name)).waitForExist(20000)
  $(OnsiteAppointmentObject.selectEmployer(employer.name)).click()
  $(OnsiteAppointmentObject.locationSelect).click()
  $(OnsiteAppointmentObject.defaultLocation).waitForExist(20000)
  $(OnsiteAppointmentObject.defaultLocation).click()
  $(OnsiteAppointmentObject.medicalTypeSelect).click()
  $(OnsiteAppointmentObject.selectMedicalType(MedicalTypeData.sampleMedicalType)).waitForExist(20000)
  $(OnsiteAppointmentObject.selectMedicalType(MedicalTypeData.sampleMedicalType)).click()
  //User Select Enable Time Slot
  $(OnsiteAppointmentObject.onsiteappointmentEnableBtn).click();
  $(OnsiteAppointmentObject.onsiteappointmentPublicBtn).click();
  $(CalendarObject.appointmentSaveBtn).click()

  // waitingLoad(OnsiteAppointmentObject.createdSuccessfully)
})
Then('Can not un-assign sample Medical Type', () => {
  $(EmployerObject.medicalTypeTab).click()
  waitingLoad(EmployerObject.medicalTypesSection)

  $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).click()
  browser.pause(2000)
  browser.waitUntil(() => {
    let classAttr = $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).getAttribute('class')
    return expect(classAttr).to.include('bg-primary')
  }, 20000)
})

When('Remove the Appointment of Employer {string}', (num) => {
  if (num == 1) {
    var employer = EmployerData.employer1
  } else {
    var employer = EmployerData.employer2
  }
  browser.pause(2000)
  $(MenuObject.calendar).scrollIntoView()
  $(MenuObject.calendar).click()
  $(CalendarObject.calendarMonthBtn).click();
  $(CalendarObject.selectCalendar(moment().format('D'), moment().format('dddd'))).click();
  browser.pause(3000)
  // Find all appoinments which contain sample medical type. After that, removing it 
  OnsiteAppointmentObject.findApMonth({ employer: employer.name, employee: appointmentdata.employeeEmail, type: MedicalTypeData.sampleMedicalType }).forEach(elmth => {
    elmth.click();
    browser.pause(1000)
    $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
    browser.pause(1000)
    $(CalendarObject.appointmentRemoveBtn).click()
    browser.pause(1000)
    $(MedicalTypeObject.yesButtonOfConfirmation).click()
    browser.pause(2000)
  })
})

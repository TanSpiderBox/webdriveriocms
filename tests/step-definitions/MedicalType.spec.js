import { Given, When, Then } from "cucumber"
import { assert, expect } from "chai"
import { MedicalTypeObject } from  "../page-object/MedicalType.po"
import { EmployerObject } from  "../page-object/Employers.po"
import { OnsiteAppointmentObject, CalendarObject } from  "../page-object/Calendar.po"
import { MenuObject } from "../page-object/shared/Menu.po";
import { MedicalTypeData } from "../data/Data.MedicalType"
import { EmployerData } from "../data/Data.Employer"

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

Given('MT - User opens index page', () => {
  browser.url('http://cms.spiderbox.design/r/medical-types')
})

When('MT - Create sample medical type', () => {
  $(MenuObject.medicalType).click()
  waitingLoadingInner();
  $(MedicalTypeObject.newButton).click()
  $(MedicalTypeObject.nameInput).setValue(MedicalTypeData.sampleMedicalType)
  $(MedicalTypeObject.saveButton).click()
})
When('MT - Assign sample medical type to employer', () => {
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
Then('MT - Cannot remove sample medical type', () => {
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

Then('MT - Un-assign sample medical type', () => {
  $(EmployerObject.medicalTypeTab).click()
  waitingLoad(EmployerObject.medicalTypesSection)

  $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).click()
  browser.waitUntil(() => {
    let classAttr = $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).getAttribute('class')
    return expect(classAttr).to.not.include('bg-primary')
  }, 20000)
})
Then('MT - Remove sample medical type successfully', () => {
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

When('MT - Create new appointment with sample medical type and employer {string}', (num) => {
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
  $(CalendarObject.appointmentSaveBtn).click()

  // waitingLoad(OnsiteAppointmentObject.createdSuccessfully)
})
Then('MT - Cannot un-assign sample medical type', () => {
  $(EmployerObject.medicalTypeTab).click()
  waitingLoad(EmployerObject.medicalTypesSection)

  $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).click()
  browser.pause(2000)
  browser.waitUntil(() => {
    let classAttr = $(EmployerObject.findMedicalType(MedicalTypeData.sampleMedicalType)).getAttribute('class')
    return expect(classAttr).to.include('bg-primary')
  }, 20000)
})

When('MT - Remove the appointment of employer {string}', (num) => {
  if (num == 1) {
    var employer = EmployerData.employer1
  } else {
    var employer = EmployerData.employer2
  }
  $(MenuObject.calendar).click()
  browser.pause(3000)
  // Find all appoinments which contain sample medical type. After that, removing it 
  OnsiteAppointmentObject.find({ employer: employer.name, type: MedicalTypeData.sampleMedicalType }).forEach(el => {
    el.click();
    $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
    $(CalendarObject.appointmentRemoveBtn).click()
    $(MedicalTypeObject.yesButtonOfConfirmation).click()
    browser.pause(2000)
  })
})

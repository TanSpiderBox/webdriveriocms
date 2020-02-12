import { Given, Then, When } from "cucumber";
import { StaffData } from "../data/Data.Staff";
import { StaffObject } from "../page-object/Staff.po";
import { MenuObject } from "../page-object/shared/Menu.po";
import { OnsiteAppointmentObject } from "../page-object/Calendar.po";
import { EmployerData } from "../data/Data.Employer";

Then('Staff - Create sample staff', () => {
  $(MenuObject.staff).click()
  $(StaffObject.newButton).waitForExist(20000)
  $(StaffObject.newButton).click()

  $(StaffObject.firstNameInput).setValue(StaffData.sampleStaff.firstName)
  $(StaffObject.lastNameInput).setValue(StaffData.sampleStaff.lastName)
  $(StaffObject.genderSelector).click()
  $(StaffObject.selectGender('')).click()
  $(StaffObject.dob).click()
  $(StaffObject.defaultDob).click()
  $(StaffObject.phone).setValue(StaffData.sampleStaff.phone)
  $(StaffObject.email).setValue(StaffData.sampleStaff.email)

  browser.pause(1000)
  $(StaffObject.saveBtn).click()
  $(StaffObject.successfullyCreated).waitForExist(20000)
})

When('Staff - Create on-site appointment', () => {
  $(MenuObject.calendar).click()
  $(OnsiteAppointmentObject.newBtn).click()
  $(OnsiteAppointmentObject.modal).waitForExist(20000)
  // fill form
  $(OnsiteAppointmentObject.employerSelect).click()
  $(OnsiteAppointmentObject.selectEmployer(EmployerData.employer1.name)).waitForExist(20000)
  $(OnsiteAppointmentObject.selectEmployer(EmployerData.employer1.name)).click()
  $(OnsiteAppointmentObject.locationSelect).click()
  $(OnsiteAppointmentObject.defaultLocation).waitForExist(20000)
  $(OnsiteAppointmentObject.defaultLocation).click()
  $(OnsiteAppointmentObject.medicalTypeSelect).click()
  $(OnsiteAppointmentObject.selectMedicalType('')).waitForExist(20000)
  $(OnsiteAppointmentObject.selectMedicalType('')).click()

  $(OnsiteAppointmentObject.staffSelector).click()
  $(OnsiteAppointmentObject.staffInput).setValue(StaffData.sampleStaff.email)
  $(OnsiteAppointmentObject.selectStaff(StaffData.sampleStaff.email)).waitForExist(20000)
  $(OnsiteAppointmentObject.selectStaff(StaffData.sampleStaff.email)).click()
  $(OnsiteAppointmentObject.saveBtn).click()

  $(OnsiteAppointmentObject.createdSuccessfully).waitForExist(20000)
})

Then('Staff - Cannot remove staff', () => {
  $(MenuObject.staff).click()
  $(StaffObject.searchInput).setValue(StaffData.sampleStaff.email)
  browser.keys("\uE007")
  
  $(StaffObject.find(StaffData.sampleStaff.email)).waitForExist()
  $(StaffObject.find(StaffData.sampleStaff.email)).$(StaffObject.removeBtn).click()
  $(StaffObject.yesButtonOfConfirmation).click()
  $(StaffObject.failedDelete).waitForExist(2000)
})

When('Staff - Remove on-site appointment', () => {
  $(MenuObject.calendar).click()
  browser.pause(3000)
  // Find all appoinments which contain sample staff. After that, removing it 
  OnsiteAppointmentObject.find({ employer: EmployerData.employer1.name, staff: StaffData.sampleStaff.firstName + ' ' + StaffData.sampleStaff.lastName }).forEach(el => {
    el.click();
    $(OnsiteAppointmentObject.removeBtn).waitForExist(20000)
    $(OnsiteAppointmentObject.removeBtn).click()
    $(StaffObject.yesButtonOfConfirmation).waitForExist(20000)
    $(StaffObject.yesButtonOfConfirmation).click()
    $(OnsiteAppointmentObject.successfullyDeleted).waitForExist(20000)
  })
})

Then('Staff - Remove staff successfully', () => {
  $(MenuObject.staff).click()
  $(StaffObject.searchInput).setValue(StaffData.sampleStaff.email)
  browser.keys("\uE007")
  
  $(StaffObject.find(StaffData.sampleStaff.email)).waitForExist()
  $(StaffObject.find(StaffData.sampleStaff.email)).$(StaffObject.removeBtn).click()
  $(StaffObject.yesButtonOfConfirmation).click()
  $(StaffObject.successfullyDeleted).waitForExist(20000)
})

import { Given, Then, When } from "cucumber";
import { StaffData } from "../data/Data.Staff";
import { StaffObject } from "../page-object/Staff.po";
import { MenuObject } from "../page-object/shared/Menu.po";
import { OnsiteAppoitmentObject } from "../page-object/Calendar.po";
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
  $(OnsiteAppoitmentObject.newBtn).click()
  $(OnsiteAppoitmentObject.modal).waitForExist(20000)
  // fill form
  $(OnsiteAppoitmentObject.employerSelect).click()
  $(OnsiteAppoitmentObject.selectEmployer(EmployerData.employer1.name)).waitForExist(20000)
  $(OnsiteAppoitmentObject.selectEmployer(EmployerData.employer1.name)).click()
  $(OnsiteAppoitmentObject.locationSelect).click()
  $(OnsiteAppoitmentObject.defaultLocation).waitForExist(20000)
  $(OnsiteAppoitmentObject.defaultLocation).click()
  $(OnsiteAppoitmentObject.medicalTypeSelect).click()
  $(OnsiteAppoitmentObject.selectMedicalType('')).waitForExist(20000)
  $(OnsiteAppoitmentObject.selectMedicalType('')).click()

  $(OnsiteAppoitmentObject.staffSelector).click()
  $(OnsiteAppoitmentObject.staffInput).setValue(StaffData.sampleStaff.email)
  $(OnsiteAppoitmentObject.selectStaff(StaffData.sampleStaff.email)).waitForExist(20000)
  $(OnsiteAppoitmentObject.selectStaff(StaffData.sampleStaff.email)).click()
  $(OnsiteAppoitmentObject.saveBtn).click()

  $(OnsiteAppoitmentObject.createdSuccessfully).waitForExist(20000)
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
  OnsiteAppoitmentObject.find({ employer: EmployerData.employer1.name, staff: StaffData.sampleStaff.firstName + ' ' + StaffData.sampleStaff.lastName }).forEach(el => {
    el.click();
    $(OnsiteAppoitmentObject.removeBtn).waitForExist(20000)
    $(OnsiteAppoitmentObject.removeBtn).click()
    $(StaffObject.yesButtonOfConfirmation).waitForExist(20000)
    $(StaffObject.yesButtonOfConfirmation).click()
    $(OnsiteAppoitmentObject.successfullyDeleted).waitForExist(20000)
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

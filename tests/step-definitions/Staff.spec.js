import { Given, Then, When } from "cucumber";
import { StaffData } from "../data/Data.Staff";
import { StaffObject } from "../page-object/Staff.po";
import { MenuObject } from "../page-object/shared/Menu.po";
import { CalendarObject, OnsiteAppointmentObject, CalendarVerify } from "../page-object/Calendar.po";
import { EmployerData } from "../data/Data.Employer";
import { appointmentdata, employeedata } from "../data/Data.Calendar";
import { BizUIObject } from "../page-object/BizUI.po";
import { DataBizUI } from "../data/Data.BizUI";
import { assert } from 'chai'

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
  $(OnsiteAppointmentObject.appointmentNewOnsiteBtn).click()
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

  //User Select Enable Time Slot
  $(OnsiteAppointmentObject.onsiteappointmentEnableBtn).click();
  $(OnsiteAppointmentObject.onsiteappointmentPublicBtn).click();

  $(CalendarObject.appointmentSaveBtn).click()

  $(CalendarVerify.createdSuccessfully).waitForExist(20000)
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
    browser.pause(1000)
    $(CalendarObject.appointmentRemoveBtn).click()
    browser.pause(1000)
    $(StaffObject.yesButtonOfConfirmation).scrollIntoView();
    browser.pause(1000)
    $(StaffObject.yesButtonOfConfirmation).click()
    browser.pause(1000)
  })
})

Then('Staff - Remove staff Successfully', () => {
  $(MenuObject.staff).click()
  $(StaffObject.searchInput).setValue(StaffData.sampleStaff.email)
  browser.keys("\uE007")

  $(StaffObject.find(StaffData.sampleStaff.email)).waitForExist()
  $(StaffObject.find(StaffData.sampleStaff.email)).$(StaffObject.removeBtn).click()
  $(StaffObject.yesButtonOfConfirmation).click()
  $(StaffObject.successfullyDeleted).waitForExist(20000)
})


Given("User access Staff page Successfully", () => {
  browser.reloadSession();
  browser.url(StaffData.stafurl)
})
When("User input correct Staff username and password", () => {
  $(StaffObject.staffusername).setValue(appointmentdata.emailmedicalstaff);
  $(StaffObject.staffpassword).setValue(123456);
  $(StaffObject.staffloginBtn).click();
})
Then("User can login Staff Successfully", () => {

})
When("User complete question and assessment", () => {
  $(StaffObject.selectCalendar(appointmentdata.calendarday)).click();
  $(StaffObject.selectAppointment(appointmentdata.fulltime)).click();
  $(StaffObject.selectEmployee(appointmentdata.employeefirstname)).click();
  $(StaffObject.startsessionBtn).click();
  browser.pause(1000)
  $(StaffObject.selectForm(StaffData.staffasseessment)).click();
  browser.pause(1000)
  $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion1, DataBizUI.answerno)).click()
  $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion2, DataBizUI.answerno)).click()
  $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion3, DataBizUI.answerno)).click()
  $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion4, DataBizUI.answerno)).click()
  $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion5, DataBizUI.answerno)).click()
  $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion6, DataBizUI.answerno)).click()
  $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion7, DataBizUI.answerno)).click()
  $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion8, DataBizUI.answerno)).click()
  $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion9, DataBizUI.answerno)).click()

  $(BizUIObject.bizuiDeclarationCk).click();
  $(BizUIObject.bizuiPrintNameInput).setValue(DataBizUI.printName);
  $(BizUIObject.bizuiDateInput).setValue(appointmentdata.fulldate);

  $(StaffObject.acceptBtn).click();
  browser.pause(1000)
})
Then("User can accept onsite appointment", () => {
  $(StaffObject.backBtn).click();
  $(StaffObject.selectEmployee(appointmentdata.employeefirstname)).click();
  assert.equal($(StaffObject.medicalform).isExisting(),true)
  $(StaffObject.backBtn).click();
  $(StaffObject.stafflogoutBtn).click();
})
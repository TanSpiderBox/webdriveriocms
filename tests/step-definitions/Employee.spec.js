import { When, Then } from "cucumber";
import { BizUIObject } from "../page-object/BizUI.po";
import { appointmentdata } from "../data/Data.Calendar";
import { DataBizUI } from "../data/Data.BizUI";
import { CalendarObject, OnsiteAppointmentObject, AppointmentObject } from "../page-object/Calendar.po";
import { assert } from "chai";
import { MenuObject } from "../page-object/shared/Menu.po";
import { EmployerObject } from "../page-object/Employers.po";
import { MedicalTypeObject } from "../page-object/MedicalType.po";

var timeout = 1000
When("User input all valid information of new Employee in BizUI", () => {
    browser.pause(timeout)
    $(BizUIObject.selectbizuiMedicalType(appointmentdata.apmedtype)).click()
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    $(BizUIObject.selectbizuiDateTime(appointmentdata.fulldate)).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    $(BizUIObject.selectbizuiRoom(DataBizUI.room1, appointmentdata.apstartime)).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    $(BizUIObject.bizuiEmailInput).setValue(appointmentdata.newemployeeemail);
    $(BizUIObject.bizuiNextBnt).click();
    browser.pause(timeout)

    //Fill Data
    $(CalendarObject.employeeFirstNameInput).setValue(appointmentdata.employeefirstname);
    $(CalendarObject.employeeLastNameInput).setValue(appointmentdata.employeelastname);

    $(OnsiteAppointmentObject.genderSelector).click();
    $(OnsiteAppointmentObject.selectGender(appointmentdata.employeegender)).click();

    $(CalendarObject.employeeDoBInput).setValue(appointmentdata.employeedob);
    $(CalendarObject.employeePhoneInput).setValue(appointmentdata.employeephone);
    $(CalendarObject.employeeStrLn1Input).setValue(appointmentdata.employeestrline);
    $(CalendarObject.employeeSuburbInput).setValue(appointmentdata.employeesuburb);

    $(OnsiteAppointmentObject.stateSelector).click();
    $(OnsiteAppointmentObject.selectState(appointmentdata.employeestate)).click();

    $(CalendarObject.employeePostCodeInput).setValue(appointmentdata.employeepostalcode);

    $(BizUIObject.bizuiNextBtn).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();
    browser.pause(timeout)
    assert.equal($(BizUIObject.bizuiAlert).getText().slice(5), DataBizUI.errorcodeBlankRequiredField, '')
    browser.pause(timeout)

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
    $(BizUIObject.bizuiNextBtn).click();
    browser.pause(timeout)
})

Then("User can view new Employee created in BizUI added in Employer", () => {
    //Select Employer
    $(MenuObject.employer).click();
    $(EmployerObject.searchBox).click()
    $(EmployerObject.searchBox).setValue(appointmentdata.apemployer)
    browser.keys('Enter');
    $(EmployerObject.find(appointmentdata.apemployer)).click()
    $(EmployerObject.employeeTab).click()
    $(EmployerObject.searchBox).click()
    $(EmployerObject.searchBox).setValue(appointmentdata.newemployeeemail)
    browser.keys('Enter');
    $(EmployerObject.EditEmployeeBtn).click()
    browser.pause(timeout)

    //Verify Employee Data
    assert.equal($(AppointmentObject.emailSelector).getValue(), appointmentdata.newemployeeemail);
    assert.equal($(CalendarObject.employeeFirstNameInput).getValue(), appointmentdata.employeefirstname);
    assert.equal($(CalendarObject.employeeLastNameInput).getValue(), appointmentdata.employeelastname);
    assert.equal($(AppointmentObject.genderSelector).getText(), appointmentdata.employeegender);
    assert.equal($(CalendarObject.employeeDoBInput).getValue(), appointmentdata.employeedob);
    assert.equal($(CalendarObject.employeePhoneInput).getValue(), appointmentdata.employeephone);
    assert.equal($(CalendarObject.employeeStrLn1Input).getValue(), appointmentdata.employeestrline);
    assert.equal($(CalendarObject.employeeSuburbInput).getValue(), appointmentdata.employeesuburb);
    assert.equal($(AppointmentObject.stateSelector).getText(), appointmentdata.employeestate);
    assert.equal($(CalendarObject.employeePostCodeInput).getValue(), appointmentdata.employeepostalcode);
    assert.equal($(AppointmentObject.genderSelector).getText(), appointmentdata.employeegender);

    //Delete new Employee
    $(MenuObject.employer).click();
    $(EmployerObject.searchBox).click()
    $(EmployerObject.searchBox).setValue(appointmentdata.apemployer)
    browser.keys('Enter');
    $(EmployerObject.find(appointmentdata.apemployer)).click()
    $(EmployerObject.employeeTab).click()
    $(EmployerObject.searchBox).click()
    $(EmployerObject.searchBox).setValue(appointmentdata.newemployeeemail)
    browser.keys('Enter');
    $(EmployerObject.deleteBtn).click();
    browser.pause(timeout);
    $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
    $(MedicalTypeObject.yesButtonOfConfirmation).click();
    browser.pause(timeout);
})
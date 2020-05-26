import { Given, When, Then } from "cucumber"
import { LoginObject } from "../page-object/Login.po"
import { BizUIObject } from "../page-object/BizUI.po";
import { DataBizUI } from "../data/Data.BizUI";
import { assert } from 'chai';
import { appointmentdata } from "../data/Data.Calendar";

/* BU001 */
Given('User access Biz UI successful', () => {
    browser.pause(1000)
    $(LoginObject.btn_Logout).click();
    browser.url(DataBizUI.urlBizUI);
    $(BizUIObject.bizuiNewUserBtn).click()
})
When('User input incorrect passcode', () => {
    $(BizUIObject.bizuiPasswordInput).setValue(DataBizUI.incorrectPasscode)
    browser.keys('Enter');
})
Then("User can't access guest Biz UI", () => {
    browser.pause(1000)
    var errorcode = $(BizUIObject.bizuiAlert).getText().slice(5)
    assert.equal(errorcode, DataBizUI.errorcodeIncorrect, '');
})

/* BU002 */
When('User input correct passcode', () => {
    browser.pause(1000)
    $(BizUIObject.bizuiPasswordInput).setValue(DataBizUI.Passcode)
    browser.keys('Enter');
})
Then("User can access guest Biz UI", () => {
    browser.pause(1000)
    var firstpage = $(BizUIObject.bizuiForm).getText().slice(8, 53)
    assert.equal(firstpage, DataBizUI.firstPage, '');
})

/* BU003 */
When('User input all valid information', () => {
    var timeout = 1000
    browser.pause(timeout)
    $(BizUIObject.selectbizuiMedicalType(appointmentdata.apmedtype.medicaltype)).click()
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    $(BizUIObject.selectbizuiDateTime(appointmentdata.date, appointmentdata.month, appointmentdata.year)).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    $(BizUIObject.selectbizuiRoom(DataBizUI.room1, DataBizUI.timeslot1)).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    $(BizUIObject.bizuiEmailInput).setValue(appointmentdata.apemail.email);
    $(BizUIObject.bizuiNextBnt).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();
    browser.pause(timeout)

    $(BizUIObject.bizuiNextBtn).click();
    browser.pause(timeout)
    var blankfield = $(BizUIObject.bizuiAlert).getText();
    var sliceblankfield = blankfield.slice(5)
    assert.equal(sliceblankfield, DataBizUI.errorcodeBlankRequiredField, '')
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
    $(BizUIObject.bizuiDateInput).setValue(appointmentdata.year, appointmentdata.month, appointmentdata.date);
    $(BizUIObject.bizuiNextBtn).click();
    browser.pause(timeout)
})
Then('User can create appointment in guest Biz UI', () => {
    var time = $(BizUIObject.bizuiTime).getText().slice(0, 13)
    var room = $(BizUIObject.bizuiTime).getText().slice(15, 21)

    assert.equal($(BizUIObject.bizuiDate).getText(), DataBizUI.appointmentverifydate, '')
    assert.equal(time, DataBizUI.timeslot1, '')
    assert.equal(room, DataBizUI.room1, '')
    assert.equal($(BizUIObject.bizuiMedical).getText(), appointmentdata.apmedtype.medicaltype, '')
    $(BizUIObject.bizuiLoginLink).click();
})

/* BU004 */
When('User input correct employee username password', () => {
    $(BizUIObject.bizuiUsername).setValue(DataBizUI.username);
    $(BizUIObject.bizuiPassword).setValue(DataBizUI.password);
    browser.keys('Enter')
})
Then('User can login Biz UI successful', () => {
    // var time = $(BizUIObject.bizuiTime).getText().slice(0, 13)
    // var room = $(BizUIObject.bizuiTime).getText().slice(15, 21)

    // assert.equal($(BizUIObject.bizuiDate).getText(), DataBizUI.appointmentverifydate, '')
    // assert.equal(time, DataBizUI.timeslot1, '')
    // assert.equal(room, DataBizUI.room1, '')
    // assert.equal($(BizUIObject.bizuiMedical).getText(), DataBizUI.medicalType, '')
})

/* BU007 */
When('User click button re-schedule appointment', () => {
    var timeout = 1000
    $(BizUIObject.selectbizuiAction(DataBizUI.timeslot1, DataBizUI.reschdule)).click();
    $(BizUIObject.selectbizuiDateTime(appointmentdata.date, appointmentdata.month, appointmentdata.year)).click();
    $(BizUIObject.bizuiNextBtn).click();
    browser.pause(timeout)

    $(BizUIObject.selectbizuiRoom(DataBizUI.room2, DataBizUI.timeslot2)).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();
})
Then('User can change date time and room appointment successfull', () => {
    var time = $(BizUIObject.bizuiTime).getText().slice(0, 13)
    var room = $(BizUIObject.bizuiTime).getText().slice(15, 21)

    assert.equal($(BizUIObject.bizuiDate).getText(), DataBizUI.appointmentverifydate, '')
    assert.equal(time, DataBizUI.timeslot2, '')
    assert.equal(room, DataBizUI.room2, '')
    assert.equal($(BizUIObject.bizuiMedical).getText(), appointmentdata.apmedtype.medicaltype, '')
})

/* BU008 */
When('User click button edit questionare appointment', () => {
    $(BizUIObject.bizuiHomePageBtn).click();
    var timeout = 1000
    $(BizUIObject.selectbizuiAction(DataBizUI.timeslot2, DataBizUI.editquestion)).click();

    $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion2, DataBizUI.answeryes)).click()
    $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion5, DataBizUI.answeryes)).click()
    $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion6, DataBizUI.answeryes)).click()
    $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion7, DataBizUI.answeryes)).click()
    $(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion9, DataBizUI.answeryes)).click()

    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();
})
Then('User can change questionare appointment successful', () => {
    var time = $(BizUIObject.bizuiTime).getText().slice(0, 13)
    var room = $(BizUIObject.bizuiTime).getText().slice(15, 21)

    assert.equal($(BizUIObject.bizuiDate).getText(), DataBizUI.appointmentverifydate, '')
    // assert.equal(time, DataBizUI.timeslot2, '')
    // assert.equal(room, DataBizUI.room2, '')
    assert.equal($(BizUIObject.bizuiMedical).getText(), appointmentdata.apmedtype.medicaltype, '')
})

/* BU009 */
When('User click button delete appointment', () => {
    $(BizUIObject.bizuiHomePageBtn).click();
    var timeout = 1000
    $(BizUIObject.selectbizuiAction(DataBizUI.timeslot2, DataBizUI.cancel)).click();
    $(BizUIObject.bizuiConfirmYesBtn).click();
})
Then('User can delete appointment successfull', () => {
    var successful = $(BizUIObject.bizuiPopUp).getText().slice(0, 43)
    assert.equal(successful, DataBizUI.deletesuccessfull, '');
    $(BizUIObject.bizuiLogOutBtn).click();
})
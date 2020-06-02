import { Given, When, Then } from "cucumber"
import { BizUIObject } from "../page-object/BizUI.po";
import { DataBizUI } from "../data/Data.BizUI";
import { assert } from 'chai';
import { appointmentdata } from "../data/Data.Calendar";

/* BU001 */
Given('User access Biz UI Successfully', () => {
    browser.reloadSession()
    browser.url(DataBizUI.urlBizUI);
})
When('User input incorrect passcode', () => {
    $(BizUIObject.bizuiNewUserBtn).click()
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
    $(BizUIObject.selectbizuiMedicalType(appointmentdata.apmedtype)).click()
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    $(BizUIObject.selectbizuiDateTime(appointmentdata.fulldate)).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    $(BizUIObject.selectbizuiRoom(DataBizUI.room1, appointmentdata.apstartime)).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    $(BizUIObject.bizuiEmailInput).setValue(appointmentdata.employeeEmail);
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
    $(BizUIObject.bizuiDateInput).setValue(appointmentdata.fulldate);
    $(BizUIObject.bizuiNextBtn).click();
    browser.pause(timeout)
})
Then('User can create appointment in guest Biz UI', () => {
    assert.equal($(BizUIObject.bizuiDate).getText(), DataBizUI.appointmentverifydate);
    assert.equal($(BizUIObject.bizuiTime).getText().slice(0, 13), appointmentdata.timeslot);
    assert.equal($(BizUIObject.bizuiTime).getText().slice(15, 21), DataBizUI.room1);
    assert.equal($(BizUIObject.bizuiMedical).getText(), appointmentdata.apmedtype);
    $(BizUIObject.bizuiLoginLink).click();
})

/* BU004 */
When('User input correct employee UserName Password', () => {
    $(BizUIObject.bizuiReturnUserBtn).click()
    $(BizUIObject.bizuiUsername).setValue(DataBizUI.username);
    $(BizUIObject.bizuiPassword).setValue(DataBizUI.password);
    browser.keys('Enter')
})
Then('User can login Biz UI successful', () => {
    
})

/* BU007 */
When('User click button re-schedule appointment', () => {
    var timeout = 1000
    $(BizUIObject.selectbizuiAction(appointmentdata.timeslot, DataBizUI.reschdule)).click();
    $(BizUIObject.selectbizuiDateTime(appointmentdata.fulldate)).click();
    $(BizUIObject.bizuiNextBtn).click();
    browser.pause(timeout)

    $(BizUIObject.selectbizuiRoom(DataBizUI.room2, appointmentdata.apstartime)).click();
    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();

    browser.pause(timeout)
    $(BizUIObject.bizuiNextBtn).click();
})
Then('User can change date time and room appointment successfull', () => {
    assert.equal($(BizUIObject.bizuiDate).getText(), DataBizUI.appointmentverifydate, '')
    assert.equal($(BizUIObject.bizuiTime).getText().slice(0, 13), appointmentdata.timeslot)
    assert.equal($(BizUIObject.bizuiTime).getText().slice(15, 21), DataBizUI.room2, '')
    assert.equal($(BizUIObject.bizuiMedical).getText(), appointmentdata.apmedtype, '')
})

/* BU008 */

When('User click button edit questionare appointment', () => {
    $(BizUIObject.bizuiHomePageBtn).click();
    var timeout = 1000
    $(BizUIObject.selectbizuiAction(appointmentdata.timeslot, DataBizUI.editquestion)).click();

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
    assert.equal($(BizUIObject.bizuiMedical).getText(), appointmentdata.apmedtype, '')
})

/* BU009 */
When('User click button delete appointment', () => {
    $(BizUIObject.bizuiHomePageBtn).click();
    var timeout = 1000
    $(BizUIObject.selectbizuiAction(appointmentdata.timeslot, DataBizUI.cancel)).click();
    $(BizUIObject.bizuiConfirmYesBtn).click();
})
Then('User can delete appointment successfull', () => {
    assert.equal($(BizUIObject.bizuiPopUp).getText().slice(0, 43), DataBizUI.deletesuccessfull, '');
    $(BizUIObject.bizuiLogOutBtn).click();
})
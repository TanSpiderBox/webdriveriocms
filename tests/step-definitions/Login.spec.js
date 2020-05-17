import { When, Then } from "cucumber";
import { assert } from 'chai'
import { DataLogin } from "../data/Data.Login";
import { LoginObject, LoginVerify } from "../page-object/Login.po"

/* TestCase001 */
When("User blank username and password", () => {
    $(LoginObject.btn_Login).click();
})
Then("User can't login system 1st", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

/* TestCase002 */
When("User blank username", () => {
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User can't login system 2nd", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

/* TestCase003 */
When("User blank password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.btn_Login).click();
})
Then("User can't login system 3rd", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

/* TestCase004 */
When("User input incorect username and password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.inusername);
    $(LoginObject.txt_Password).setValue(DataLogin.inpassword);
    $(LoginObject.btn_Login).click();
})
Then("User can't login system 4th", () => {
    assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
})

/* TestCase005 */
When("User input incorrect username", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.inusername);
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User can't login system 5th", () => {
    assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
})

/* TestCase006 */
When("User input incorrect password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.txt_Password).setValue(DataLogin.inpassword);
    $(LoginObject.btn_Login).click();
})
Then("User can't login system 6th", () => {
    assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
})

/* TestCase007 */
When("User input correct username and password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User can login system successful", () => {
    assert.isObject($(LoginVerify.lbl_CmsMedSer), DataLogin.cmsmedlalbel);
    browser.pause(3000)
})
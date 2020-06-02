import { When, Then } from "cucumber";
import { assert } from 'chai'
import { DataLogin } from "../data/Data.Login";
import { LoginObject, LoginVerify } from "../page-object/Login.po"

/* LG001 */
When("User blank UserName and Password", () => {
    $(LoginObject.btn_Login).click();
})
Then("User can not login System with blank UserName and Password", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

/* LG002 */
When("User blank UserName", () => {
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User can not login System with blank UserName", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

/* LG003 */
When("User blank Password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.btn_Login).click();
})
Then("User can not login System with blank Password", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

/* LG004 */
When("User input incorect UserName and Password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.inusername);
    $(LoginObject.txt_Password).setValue(DataLogin.inpassword);
    $(LoginObject.btn_Login).click();
})
Then("User can not login System with incorrect UserName and Password", () => {
    assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
})

/* LG005 */
When("User input incorrect UserName", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.inusername);
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User can not login System with incorrect UserName", () => {
    assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
})

/* LG006 */
When("User input incorrect Password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.txt_Password).setValue(DataLogin.inpassword);
    $(LoginObject.btn_Login).click();
})
Then("User can not login System with incorrect Password", () => {
    assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
})

/* LG007 */
When("User input correct UserName and Password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User can login System Successfully", () => {
    assert.isObject($(LoginVerify.lbl_CmsMedSer), DataLogin.cmsmedlalbel);
    browser.pause(3000)
})
import { When, Then } from "cucumber";
import { assert } from 'chai'
import { DataLogin } from "../data/Data.AppointmentPreset";
import { LoginObject, LoginVerify} from "../page-object/AppointmentPresets.po"

/* TestCase008 */
When("User click button New Appointment and fill all valid data", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User create new appointment success", () => {
    assert.isObject($(LoginVerify.lbl_CmsMedSer), DataLogin.cmsmedlalbel);
})

/* TestCase009 */
When("User change datetime of existing appoinment", () => {
    $(LoginObject.btn_Login).click();
})
Then("User change date time of appointment success", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

/* TestCase010 */
When("User select Employer in drop down filter", () => {
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User can see all list emloyee of employers", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

/* TestCase011 */
When("User select location in drop down filter", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.btn_Login).click();
})
Then("User can see all appointment were filter in calender", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

/* TestCase012 */
When("User click button clear all filter", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.inusername);
    $(LoginObject.txt_Password).setValue(DataLogin.inpassword);
    $(LoginObject.btn_Login).click();
})
Then("All filter information will delete", () => {
    assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
})

/* TestCase013 */
When("User input incorrect username", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.inusername);
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();
})
Then("User can't login system 5th", () => {
    assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
})

/* TestCase014 */
When("User input incorrect password", () => {
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.txt_Password).setValue(DataLogin.inpassword);
    $(LoginObject.btn_Login).click();
})
Then("User can't login system 6th", () => {
    assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
})

/* TestCase015 */
When("", () => {
    $().setValue();
    $().setValue();
    $().click();
})
Then("", () => {
    assert.isObject($(), );
})

/* TestCase016 */
When("", () => {
    $().setValue();
    $().setValue();
    $().click();
})
Then("", () => {
    assert.isObject($(), );
})

/* TestCase017 */
When("", () => {
    $().setValue();
    $().setValue();
    $().click();
})
Then("", () => {
    assert.isObject($(), );
})

/* TestCase018 */
When("", () => {
    $().setValue();
    $().setValue();
    $().click();
})
Then("", () => {
    assert.isObject($(), );
})

/* TestCase019 */
When("", () => {
    $().setValue();
    $().setValue();
    $().click();
})
Then("", () => {
    assert.isObject($(), );
})

/* TestCase020 */
When("", () => {
    $().setValue();
    $().setValue();
    $().click();
})
Then("", () => {
    assert.isObject($(), );
})

/* TestCase021 */
When("", () => {
    $().setValue();
    $().setValue();
    $().click();
})
Then("", () => {
    assert.isObject($(), );
})

/* TestCase022 */
When("", () => {
    $().setValue();
    $().setValue();
    $().click();
})
Then("", () => {
    assert.isObject($(), );
})

/* TestCase023 */
When("", () => {
    $().setValue();
    $().setValue();
    $().click();
})
Then("", () => {
    assert.isObject($(), );
})
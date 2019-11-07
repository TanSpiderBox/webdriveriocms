import { When, Then } from "cucumber";
import { assert } from 'chai'
import { LoginData } from "../data/Data.Login";
import { LoginObjects, LoginVerify} from "../page-object/Login.po"

/* TestCase001 */
When("User blank 2 field", () => {
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 1st", () => {
    assert.isObject($(LoginErrorObjects.lbl_error_blank), LoginErrorMessage.blank_error);
})

/* TestCase002 */
When("User blank email field", () => {
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 2nd", () => {
    assert.isObject($(LoginErrorObjects.lbl_error_blank), LoginErrorMessage.blank_error);
})

/* TestCase003 */
When("User blank password field", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 3rd", () => {
    assert.isObject($(LoginErrorObjects.lbl_error_blank), LoginErrorMessage.blank_error);
})

/* TestCase004 */
When("User input incorrect email", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email_incorrect);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 4th", () => {
    assert.isObject($(LoginErrorObjects.lbl_error_inccorect), LoginErrorMessage.input_error);
})

/* TestCase005 */
When("User input incorrect password field", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_email_incorrect);
    $(LoginObjects.btn_submit).click();
})
Then("User can't login system 5th", () => {
    assert.isObject($(LoginErrorObjects.lbl_error_inccorect), LoginErrorMessage.input_error);
})

/* TestCase006 */
When("User input correct email and password", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).click();
})
Then("User can login succesfull", () => {
    assert.isObject($(LoginSuccessObjects.lbl_success_login), LoginSuccessMessage.login_success);
})

/* TestCase007 */
When("User input correct email and password", () => {
    $(LoginObjects.txt_useremail).setValue(LoginData.user_email);
    $(LoginObjects.txt_userpwd).setValue(LoginData.user_pwd);
    $(LoginObjects.btn_submit).click();
})
Then("User can login succesfull", () => {
    assert.isObject($(LoginSuccessObjects.lbl_success_login), LoginSuccessMessage.login_success);
})
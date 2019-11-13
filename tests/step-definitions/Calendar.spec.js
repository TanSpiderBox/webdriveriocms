import { When, Then, And } from "cucumber";
import { assert } from 'chai'
import { DataCal } from "../data/Data.Calendar";
import { CalObject, CalVerify } from "../page-object/Calendar.po"

/* TestCase008 */
When("User create new Appointment with existing Employee", () => {
    browser.pause(6000);
    $(CalObject.btn_CalNwAp).click();
    //User Select Employer
    $(CalObject.drop_CalNewApEyer).click();
    $(CalObject.value_Ap_Employer).click();

    //User Select Location
    $(CalObject.drop_CalNewApLocation).click();
    $(CalObject.value_Ap_Location).click();

    //User Select Medical Type
    $(CalObject.drop_CalNewApMedType).click();
    $(CalObject.value_Ap_MedType).click();

    //User Select Role
    $(CalObject.drop_CalNewApRole).click();
    $(CalObject.value_Ap_Role).click();

    //User Select Date Time
    $(CalObject.txt_CalNewApDate).setValue(DataCal.Ap_Date);

    $(CalObject.drop_CalNewApStartTime).click();
    $(CalObject.value_Ap_StarTime).click();
    // browser.pause(50000);
    // $(CalObject.drop_CalNewApEndTime).click();
    // $(CalObject.value_Ap_EndTime).click();

    //User Select Employee
    $(CalObject.drop_CalNewApEyee).click();
    $(CalObject.value_Ap_Employee).click();

    // $(CalObject.txt_CalNewApFirstName).setValue(DataCal.Ap_Employee);

    $(CalObject.btn_CalNewApSave).click();
    browser.pause(5000);
})
Then("User create new Appointment Success", () => {
    $(CalObject.lbl_CalDay).click();
    // assert.isObject($(CalObject.),);
    // assert.isObject($(CalObject.),);
    // assert.isObject($(CalVerify.lbl_CmsMedSer), DataLogin.cmsmedlalbel);
})

// /* TestCase009 */
// When("User create new Appointment with new Employee", () => {
//     $(CalObject.btn_Login).click();
// })
// Then("User create new Appointment with new Employee Success", () => {
//     assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
// })
// And("Employee added in Employer", () => {

// })

// /* TestCase010 */
// When("User click button delete exisitng Appointment", () => {
//     $(CalObject.txt_Password).setValue(DataLogin.password);
//     $(CalObject.btn_Login).click();
// })
// Then("User delete Appointment Success", () => {
//     assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
// })

// /* TestCase011 */
// When("User change date time of existing Appointment", () => {
//     $(CalObject.txt_Username).setValue(DataLogin.username);
//     $(LoginObject.btn_Login).click();
// })
// Then("User change date time of Appointment Success", () => {
//     assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
// })

// /* TestCase012 */
// When("User select Employer in dropdown filter ", () => {
//     $(LoginObject.txt_Username).setValue(DataLogin.inusername);
//     $(LoginObject.txt_Password).setValue(DataLogin.inpassword);
//     $(LoginObject.btn_Login).click();
// })
// Then("User can see all list Emloyee of Employers", () => {
//     assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
// })

// /* TestCase013 */
// When("User select Loccation in dropdown filter", () => {
//     $(LoginObject.txt_Username).setValue(DataLogin.inusername);
//     $(LoginObject.txt_Password).setValue(DataLogin.password);
//     $(LoginObject.btn_Login).click();
// })
// Then("User can see all Appointment were filter in Calender", () => {
//     assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
// })

// /* TestCase014 */
// When("User click button clear all Filter", () => {
//     $(LoginObject.txt_Username).setValue(DataLogin.username);
//     $(LoginObject.txt_Password).setValue(DataLogin.inpassword);
//     $(LoginObject.btn_Login).click();
// })
// Then("User can clear all Filter information", () => {
//     assert.isObject($(LoginVerify.lbl_ErrorFeedback), DataLogin.errormessage);
// })

// /* TestCase015 */
// When("User drag and drop Employee ", () => {
//     $().setValue();
//     $().setValue();
//     $().click();
// })
// Then("System auto bidding information of Employee", () => {
//     assert.isObject($(), );
// })

// /* TestCase016 */
// When("User click button clear form ", () => {
//     $().setValue();
//     $().setValue();
//     $().click();
// })
// Then("All information of New Appointment form will delete", () => {
//     assert.isObject($(), );
// })

// /* TestCase017 */
// When("User select drop down Employer in Filter", () => {
//     $().setValue();
//     $().setValue();
//     $().click();
// })
// Then("Drop down filter will dispaly all employer existing system correct", () => {
//     assert.isObject($(), );
// })

// /* TestCase018 */
// When("User select drop down Employer in New Appointment", () => {
//     $().setValue();
//     $().setValue();
//     $().click();
// })
// Then("Drop down new appointment will dispaly all employer existing system correct", () => {
//     assert.isObject($(), );
// })

// /* TestCase019 */
// When("User create New Appoinment", () => {
//     $().setValue();
//     $().setValue();
//     $().click();
// })
// Then("Employee have received Email with contains of Appointment", () => {
//     assert.isObject($(), );
// })

// /* TestCase020 */
// When("User update New Appointment Success", () => {
//     $().setValue();
//     $().setValue();
//     $().click();
// })
// Then("Employee have received Email with contains of Appointment Reschedule", () => {
//     assert.isObject($(), );
// })

// /* TestCase021 */
// When("User click button Week", () => {
//     $().setValue();
//     $().setValue();
//     $().click();
// })
// Then("All Appointment of week will dispaly correct", () => {
//     assert.isObject($(), );
// })

// /* TestCase022 */
// When("User click button Day", () => {
//     $().setValue();
//     $().setValue();
//     $().click();
// })
// Then("All Appointment of day will dispaly correct", () => {
//     assert.isObject($(), );
// })

import { When, Then, And } from "cucumber";
import { assert } from 'chai'
import { DataCal } from "../data/Data.Calendar";
import { CalObject, CalVerify } from "../page-object/Calendar.po"
import { EyersObj } from "../page-object/Employers.po";

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
    browser.pause(3000);
    //Select Appointment Details
    $(CalObject.lbl_CalDay).click();
    browser.pause(3000);
    $(CalObject.form_ApDetails).click();
    browser.pause(3000);
    // Assert Value of Appointment
    assert.equal($(CalVerify.drop_MedVerify).getText(), DataCal.Ap_MedType, 'Verify Mediccal Type');

    assert.equal($(CalObject.drop_CalNewApRole).getText(), DataCal.Ap_Role), 'Verify Role';

    // assert.equal($(CalObject.txt_CalNewApDate).getText(),DataCal.Ap_Date,'Verify Appointment Date');

    // assert.equal($(CalObject.drop_CalNewApStartTime).getText(),DataCal.Ap_StarTime,'Verify Appointment Start Time');

    // assert.equal($(CalObject.drop_CalNewApEndTime).getText(),DataCal.Ap_EndTime,'Verify Appointment End Time');

    // assert.equal($(CalObject.txt_CalNewApFirstName).getText(),DataCal.Ap_FirstName,'Verify Appointment First Name');

    // assert.equal($(CalObject.txt_CalNewApLastName).getText(),DataCal.Ap_LastName,'Verify Appointment Last Name');

    // assert.equal($(CalObject.txt_CalNewAphone).getText(),DataCal.Ap_Phone,'Verify Appointment Phone');

    // assert.equal($(CalObject.txt_CalNewApEmail).getText(),DataCal.Ap_Email,'Verify Appointment Email');

})

/* TestCase009 */
When("User create new Appointment with new Employee", () => {
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
    $(CalObject.txt_CalNewApFirstName).setValue(DataCal.Ap_EyeeFirstName);
    $(CalObject.txt_CalNewApLastName).setValue(DataCal.Ap_EyeeLastName);
    $(CalObject.txt_CalNewApDob).setValue(DataCal.Ap_EyeeDob);
    $(CalObject.txt_CalNewAphone).setValue(DataCal.Ap_EyeePhone);
    $(CalObject.txt_CalNewApEmail).setValue(DataCal.Ap_EyeeEmail);
    $(CalObject.txt_CalNewApStrLn1).setValue(DataCal.Ap_EyeeStrln1);
    $(CalObject.txt_CalNewApSuburb).setValue(DataCal.Ap_EyeeSuburd);
    $(CalObject.txt_CalNewApState).click();
    $(CalObject.value_Ap_State).click();
    $(CalObject.drop_CalNewApPostCode).setValue(DataCal.Ap_EyeePostCode);

    $(CalObject.btn_CalNewApSave).click();
    browser.pause(5000);
})
Then("User create new Appointment with new Employee Success and Employee added in Employer", () => {
    browser.pause(3000);
    //Select Appointment Details
    $(CalObject.lbl_CalDay).click();
    browser.pause(3000);
    $(CalObject.form_ApDetails).click();
    browser.pause(3000);
    // Assert Value of Appointment
    assert.equal($(CalVerify.drop_MedVerify).getText(), DataCal.Ap_MedType, 'Verify Mediccal Type');

    assert.equal($(CalObject.drop_CalNewApRole).getText(), DataCal.Ap_Role), 'Verify Role';

    //Verify Employee have added in Emloyer
    $(CalObject.btn_CalNewApCancel).click();
    browser.pause(2000);
    $(EyersObj.menu_Eyers).click();
    browser.pause(2000);
    $(EyersObj.btn_EloyerNext).click();
    browser.pause(2000);
    $(EyersObj.btn_ElEdit).click();
    browser.pause(2000);
    $(EyersObj.tabmenu_EyerEyees).click();

    assert.equal($(CalVerify.lbl_ElyerMailVerify).getText(),DataCal.Ap_EyeeEmail,'')
})


// /* TestCase010 */
// When("User click button delete exisitng Appointment", () => {
//     $(CalObject.txt_Password).setValue(DataLogin.password);
//     $(CalObject.btn_Login).click();
// })
// Then("User delete Appointment Success", () => {
//     assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
// })

/* TestCase011 */
When("User change date time of existing Appointment", () => {
    browser.pause(3000);
    //Select Appointment Details
    $(CalObject.lbl_CalDay).click();
    browser.pause(3000);
    $(CalObject.form_ApDetails).click();
    browser.pause(3000);

    //Change Date Time
    $(CalObject.txt_CalNewApDate).setValue(DataCal.Ap_Date);

    $(CalObject.drop_CalNewApStartTime).click();
    $(CalObject.value_Ap_StarTime).click();
})
Then("User change date time of Appointment Success", () => {
    assert.isObject($(LoginVerify.lbl_WarMessage), DataLogin.warmessage);
})

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

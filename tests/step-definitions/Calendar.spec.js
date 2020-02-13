import { When, Then, And } from "cucumber";
import { assert } from 'chai'
import { DataCal } from "../data/Data.Calendar";
import { CalObject, CalVerify, OnsiteAppointmentObject, AppointmentObject } from "../page-object/Calendar.po"
import { EyersObj } from "../page-object/Employers.po";
import { MenuObject } from "../page-object/shared/Menu.po";
import { MedicalTypeObject } from "../page-object/MedicalType.po"
/* TestCase008 */
When("User create new Appointment with existing Employee", () => {

    // $(CalObject.btn_CalMth).waitForExist(20000);
    // $(CalObject.btn_CalMth).click();
    browser.pause(3000);
    $(CalObject.btn_CalNwAp).waitForExist(20000);
    $(CalObject.btn_CalNwAp).click();

    //User Select Employer
    browser.pause(3000);
    $(CalObject.drop_CalNewApEyer).click();
    $(CalObject.value_Ap_Employer).click();

    //User Select Location
    $(CalObject.drop_CalNewApLocation).click();
    $(CalObject.value_Ap_Location).click();

    //User Select Medical Type
    $(CalObject.drop_CalNewApMedType).click();
    $(CalObject.value_Ap_MedType).click();

    //User Select Employee
    $(CalObject.drop_CalNewApEyee).click();
    $(CalObject.value_Ap_Employee).click();

    //Save Appoinment
    $(CalObject.btn_CalNewApSave).click();
})
Then("User create new Appointment Success {string}", (num) => {
    if (num == 1) {
        var employer = DataCal.Ap_Employer1
    } else {
        var employer = EmployerData.employer2
    }
    $(MenuObject.calendar).click()
    browser.pause(3000)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.find({ employer: employer.name }).forEach(el => {
        browser.pause(3000)
        el.click();
        // waitingLoad(AppointmentObject.removeBtn)
        $(AppointmentObject.removeBtn).click()
        // waitingLoad(MedicalTypeObject.yesButtonOfConfirmation)
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        // waitingLoad(AppointmentObject.successfullyDeleted)
        browser.pause(2000)
    })

})

/* TestCase009 */
When("User create new Appointment with new Employee", () => {
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

    //User Select Employee
    $(CalObject.drop_CalNewApLocation).click();
    $(CalObject.txt_CalNewApEyee).setValue(DataCal.Ap_NewEmployee);
    $(CalObject.lbl_AddNew).click();
    $(CalObject.txt_CalNewApFirstName).setValue(DataCal.Ap_EyeeFirstName);
    $(CalObject.txt_CalNewApLastName).setValue(DataCal.Ap_EyeeLastName);
    $(CalObject.drop_CalNewApGender).click();
    $(CalObject.value_CalNewApGender).click();
    $(CalObject.txt_CalNewApDob).setValue(DataCal.Ap_EyeeDob);
    $(CalObject.txt_CalNewAphone).setValue(DataCal.Ap_EyeePhone);
    $(CalObject.txt_CalNewApStrLn1).setValue(DataCal.Ap_EyeeStrln1);
    $(CalObject.txt_CalNewApSuburb).setValue(DataCal.Ap_EyeeSuburd);
    $(CalObject.txt_CalNewApState).click();
    $(CalObject.value_Ap_State).click();
    $(CalObject.drop_CalNewApPostCode).setValue(DataCal.Ap_EyeePostCode);
    $(CalObject.drop_CalNewApRole).click();
    $(CalObject.value_Ap_Role).click();

    $(CalObject.btn_CalNewApSave).click();
    browser.pause(3000);
})
Then("User create new Appointment with new Employee Success and Employee added in Employer {string}", (num) => {
    // if (num == 1) {
    //     var employer = DataCal.Ap_Employer1
    // } else {
    //     var employer = EmployerData.employer2
    // }
    // $(MenuObject.calendar).click()
    // browser.pause(3000)
    // // Find all appoinments which contain sample medical type. After that, removing it 
    // AppointmentObject.find({ employer: employer.name }).forEach(el => {
    //     browser.pause(3000)
    //     el.click();
    //     // waitingLoad(AppointmentObject.removeBtn)
    //     $(AppointmentObject.removeBtn).click()
    //     // waitingLoad(MedicalTypeObject.yesButtonOfConfirmation)
    //     $(MedicalTypeObject.yesButtonOfConfirmation).click()
    //     // waitingLoad(AppointmentObject.successfullyDeleted)
    //     browser.pause(2000)
    // })

    //Verify Employee have added in Emloyer
    $(EyersObj.menu_Eyers).click();
    browser.pause(2000);
    $(EyersObj.searchbox_Employer).setValue('Rochell Maffetti')
    $(EyersObj.searchbox_Employer).keys("\uE007")
    browser.pause(5000);
    $(EyersObj.btn_ElEdit).waitForExist(20000)
    $(EyersObj.btn_ElEdit).click();
    $(EyersObj.tabmenu_EyerEyees).click();
    browser.pause(5000);

    // assert.equal($(CalVerify.lbl_ElyerMailVerify).getText(), DataCal.Ap_EyeeEmail, '')
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
//     $(CalObject.drop_CalEyers).click();
//     $(CalObject.value_Ap_Employer).click();
//     $(CalObject.btn_CalAlFt).click();
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

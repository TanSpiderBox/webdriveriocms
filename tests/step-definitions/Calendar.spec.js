import { When, Then, And } from "cucumber";
import { assert } from 'chai'
import { appointmentdata, employeedata } from "../data/Data.Calendar";
import { CalObject, CalVerify, OnsiteAppointmentObject, AppointmentObject } from "../page-object/Calendar.po";
import { MenuObject } from "../page-object/shared/Menu.po";
import { LoginObject } from "../page-object/Login.po";
import { DataLogin } from "../data/Data.Login";
import { MedicalTypeObject } from "../page-object/MedicalType.po";

var employer = appointmentdata.apemployer;
var email = appointmentdata.apemail;
var location = appointmentdata.aplocation;
var medical = appointmentdata.apmedtype;
var employeeemail = employeedata.employeeEmail

var onsitelocation = appointmentdata.onsitelocation;

/* TestCase008 */
When("User create new Appointment with existing Employee", () => {
    browser.pause(1000);
    $(CalObject.btn_CalNwAp).waitForExist(20000);
    $(CalObject.btn_CalNwAp).click();

    //User Select Employer
    browser.pause(1000);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(CalObject.drop_CalNewApLocation).click();
    $(AppointmentObject.selectLocation(location.location)).click();

    //User Select Medical Type
    $(CalObject.drop_CalNewApMedType).click();
    $(AppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //User Select Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.selectEmail(email.email)).click();

    //Save Appoinment
    $(CalObject.btn_CalNewApSave).click();
    browser.pause(1000)
})
Then("User create new Appointment Success", () => {
    $(MenuObject.calendar).click()
    browser.pause(1000)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.find({ employer: employer.name }).forEach(el => {
        browser.pause(1000)
        el.click();
        $(AppointmentObject.removeBtn).click()
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(1000)
    })
})

/* TestCase009 */
When("User create new Appointment with new Employee", () => {
    var employer = appointmentdata.apemployer;
    var location = appointmentdata.aplocation;
    var medical = appointmentdata.apmedtype;
    var gender = employeedata.employeegender;
    var state = employeedata.employeestate;
    var role = employeedata.employeerole;

    //Create New Appointment
    $(CalObject.btn_CalNwAp).click();

    //User Select Employer
    browser.pause(1000);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(CalObject.drop_CalNewApLocation).click();
    $(AppointmentObject.selectLocation(location.location)).click();

    //User Select Medical Type
    $(CalObject.drop_CalNewApMedType).click();
    $(AppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //Add new Employee
    $(CalObject.drop_CalNewApLocation).click();
    $(CalObject.txt_CalNewApEyee).setValue(employeedata.newemployeeemail);
    $(CalObject.lbl_AddNew).click();

    //Fill Data
    $(CalObject.txt_CalNewApFirstName).setValue(DataCal.Ap_EyeeFirstName);
    $(CalObject.txt_CalNewApLastName).setValue(DataCal.Ap_EyeeLastName);

    $(CalObject.drop_CalNewApGender).click();
    $(AppointmentObject.selectGender(gender.gender)).click();
    $(CalObject.txt_CalNewApDob).setValue(employeedata.employeedob);
    $(CalObject.txt_CalNewAphone).setValue(employeedata.employeephone);
    $(CalObject.txt_CalNewApStrLn1).setValue(employeedata.employeestrline);
    $(CalObject.txt_CalNewApSuburb).setValue(employeedata.employeesuburb);
    $(AppointmentObject.selectState(state.state)).click();
    $(CalObject.drop_CalNewApPostCode).setValue(employeedata.employeepostalcode);
    $(AppointmentObject.selectRole(role.role)).click();

    $(CalObject.btn_CalNewApSave).click();
    browser.pause(3000);
})
Then("User create new Appointment with new Employee Success and Employee added in Employer", () => {
    var employer = DataCal.Ap_Employer1

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

    //Verify Employee have added in Emloyer
    $(EyersObj.menu_Eyers).click();
    $(EyersObj.searchbox_Employer).setValue('Rochell Maffetti')
    $(EyersObj.searchbox_Employer).keys("\uE007")
    $(EyersObj.btn_ElEdit).waitForExist(20000)
    $(EyersObj.btn_ElEdit).click();
    $(EyersObj.tabmenu_EyerEyees).click();

})


/* TestCase010 */
When("User update existing Appointment", () => {
    //Select Calendar Menu
    $(CalObject.menu_Cal).click();

    browser.pause(3000);
    $(CalObject.btn_CalNwAp).waitForExist(20000);
    $(CalObject.btn_CalNwAp).click();

    //User Select Employer
    browser.pause(3000);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(CalObject.drop_CalNewApLocation).click();
    $(AppointmentObject.selectLocation(location.location)).click();

    //User Select Medical Type
    $(CalObject.drop_CalNewApMedType).click();
    $(AppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //User Select Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.selectEmail(email.email)).click();

    //Save Appoinment
    $(CalObject.btn_CalNewApSave).click();

    //Update existing Appoinment
    $(MenuObject.calendar).click()
    browser.pause(3000)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.find({ employer: employer.name }).forEach(el => {
        browser.pause(3000)
        el.click();

        $(CalObject.txt_CalNewApNote).setValue('NewUpdate');
        $(AppointmentObject.updateBtn).waitForExist(20000)
        $(AppointmentObject.updateBtn).click()
        browser.pause(1000)
    })
})
Then("User update Appointment Successful", () => {
    $(MenuObject.calendar).click()
    browser.pause(3000)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.find({ employer: employer.name }).forEach(el => {
        browser.pause(3000)
        el.click();

        $(AppointmentObject.removeBtn).click()

        $(MedicalTypeObject.yesButtonOfConfirmation).click()

        browser.pause(2000)
    })
})

/* TestCase011 */
When("Employee Manager create New Appoinment for Employee", () => {

    //Login System With Employee Manager Account
    $(LoginObject.btn_Logout).click();
    $(LoginObject.txt_Username).setValue(DataLogin.employeeMusername);
    $(LoginObject.txt_Password).setValue(DataLogin.employeeMpassword);
    $(LoginObject.btn_Login).click();

    //Select Calendar Menu
    $(CalObject.menu_Cal).click();

    browser.pause(3000);
    $(CalObject.btn_CalNwAp).waitForExist(20000);
    $(CalObject.btn_CalNwAp).click();

    //User Select Employer
    browser.pause(3000);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(CalObject.drop_CalNewApLocation).click();
    $(AppointmentObject.selectLocation(location.location)).click();

    //User Select Medical Type
    $(CalObject.drop_CalNewApMedType).click();
    $(AppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //User Select Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.selectEmail(employeeemail.employeeemail)).click();

    //Save Appoinment
    $(CalObject.btn_CalNewApSave).click();

})
Then("Employee can see this appointment", () => {
    //Employee Login System
    browser.pause(3000)
    $(LoginObject.btn_Logout).click();
    $(LoginObject.txt_Username).setValue(DataLogin.employeeusername);
    $(LoginObject.txt_Password).setValue(DataLogin.employeepassword);
    $(LoginObject.btn_Login).click();

    $(MenuObject.calendar).click()
    browser.pause(3000)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.findConf({ employer: employer.name }).forEach(elConf => {
        browser.pause(3000)
        elConf.click();
        $(AppointmentObject.removeBtn).click()
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(2000)
    })
})

/* TestCase013 */
When("User create new Onsite Appoinment", () => {
    //Login System With Employee Manager Account
    $(LoginObject.btn_Logout).click();
    $(LoginObject.txt_Username).setValue(DataLogin.username);
    $(LoginObject.txt_Password).setValue(DataLogin.password);
    $(LoginObject.btn_Login).click();

    //Create New Onsite Appointment
    $(OnsiteAppointmentObject.newBtn).click()

    //User Select Employer
    browser.pause(3000);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(CalObject.drop_CalNewApLocation).click();
    $(AppointmentObject.selectLocation(onsitelocation.onsite)).click();

    //User Select Medical Type
    $(CalObject.drop_CalNewApMedType).click();
    $(AppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //User Select Public Time Slot
    $(OnsiteAppointmentObject.publicBtn).click();

    //User Add Room
    $(OnsiteAppointmentObject.addroomBtn).click();
    $(OnsiteAppointmentObject.slottimeTxt).setValue(20);
    $(OnsiteAppointmentObject.slottimeTxt).keys("\uE007");
    // $(OnsiteAppointmentObject.timeslotBtn).click(),

    //Save Appoinment
    $(CalObject.btn_CalNewApSave).click();
    browser.pause(1000)

})
Then("User create new Onsite Appoinment successful", () => {
    browser.url(employeedata.registerurl);
    browser.pause(1000)
})

/* TestCase014 */
When("User fill all valid information", () => {
    browser
})
Then("User can register Onsite Appoinment Success", () => {

})


import { When, Then } from "cucumber";
import { assert } from 'chai'
import { appointmentdata, employeedata } from "../data/Data.Calendar";
import { CalendarObject, CalendarVerify, OnsiteAppointmentObject, AppointmentObject } from "../page-object/Calendar.po";
import { MenuObject } from "../page-object/shared/Menu.po";
import { LoginObject } from "../page-object/Login.po";
import { DataLogin } from "../data/Data.Login";
import { MedicalTypeObject } from "../page-object/MedicalType.po";

const timeout = 4000
var employer = appointmentdata.apemployer;
var email = appointmentdata.apemail;
var location = appointmentdata.aplocation;
var medical = appointmentdata.apmedtype;
var gender = employeedata.employeegender;
var state = employeedata.employeestate;
var role = employeedata.employeerole;
var onsite = appointmentdata.onsitelocation
var medical = appointmentdata.apmedtype

/* TestCase008 */
When("User create new Appointment with existing Employee", () => {
    browser.pause(timeout);
    $(AppointmentObject.appointmentNewBtn).click();

    //User Select Employer
    browser.pause(timeout);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(AppointmentObject.locationSelector).click();
    $(AppointmentObject.selectLocation(location.location)).click();

    //User Select Medical Type
    $(AppointmentObject.medicalTypeSelector).click();
    $(AppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //User Select Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.emailInput).setValue(email.email);
    $(AppointmentObject.selectEmail(email.email)).click();

    //Save Appoinment
    $(CalendarObject.appointmentSaveBtn).click();
})

Then("User create new Appointment Success", () => {
    $(MenuObject.calendar).click()
    browser.pause(timeout)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.find({ employer: employer.name, employee: email.email }).forEach(el => {
        el.click();
        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click()
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout)
    })
})

/* TestCase009 */
When("User create new Appointment with new Employee", () => {
    //Create New Appointment
    $(AppointmentObject.appointmentNewBtn).click();

    //User Select Employer
    browser.pause(timeout);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(AppointmentObject.locationSelector).click();
    $(AppointmentObject.selectLocation(location.location)).click();

    //User Select Medical Type
    $(AppointmentObject.medicalTypeSelector).click();
    $(AppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //Add new Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.emailInput).setValue(employeedata.newemployeeemail);
    $(CalendarObject.ememployeeSelect).click();

    //Fill Data
    $(CalendarObject.employeeFirstNameInput).setValue(employeedata.employeefirstname);
    $(CalendarObject.employeeLastNameInput).setValue(employeedata.employeelastname);

    $(AppointmentObject.genderSelector).click();
    $(AppointmentObject.selectGender(gender.gender)).click();

    $(CalendarObject.employeeDoBInput).setValue(employeedata.employeedob);
    $(CalendarObject.employeePhoneInput).setValue(employeedata.employeephone);
    $(CalendarObject.employeeStrLn1Input).setValue(employeedata.employeestrline);
    $(CalendarObject.employeeSuburbInput).setValue(employeedata.employeesuburb);

    $(AppointmentObject.stateSelector).click();
    $(AppointmentObject.selectState(state.state)).click();

    $(CalendarObject.employeePostCodeInput).setValue(employeedata.employeepostalcode);

    $(AppointmentObject.masterRoleSelector).click();
    $(AppointmentObject.selectRole(role.role)).click();

    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout);
})
Then("User create new Appointment with new Employee Success and Employee added in Employer", () => {
    $(MenuObject.calendar).click()
    browser.pause(timeout)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.find({ employer: employer.name, employee: employeedata.newemployeeemail }).forEach(el => {
        el.click();
        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click()
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout)
    })
})

/* TestCase010 */
When("User update existing Appointment", () => {
    //Select Calendar Menu
    $(AppointmentObject.appointmentNewBtn).click();

    ///User Select Employer
    browser.pause(timeout);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(AppointmentObject.locationSelector).click();
    $(AppointmentObject.selectLocation(location.location)).click();

    //User Select Medical Type
    $(AppointmentObject.medicalTypeSelector).click();
    $(AppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //User Select Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.emailInput).setValue(email.email);
    $(AppointmentObject.selectEmail(email.email)).click();

    //Save Appoinment
    $(CalendarObject.appointmentSaveBtn).click();

    //Update existing Appoinment
    $(MenuObject.calendar).click()
    browser.pause(timeout)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.find({ employer: employer.name, employee: email.email }).forEach(el => {
        el.click();
        $(CalendarObject.employeeNoteInput).setValue('NewUpdate');
        $(CalendarObject.appointmentUpdateBtn).click()
        browser.pause(timeout)
    })
})
Then("User update Appointment Successful", () => {
    $(MenuObject.calendar).click()
    browser.pause(timeout)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.find({ employer: employer.name, employee: email.email }).forEach(el => {
        el.click();
        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click()
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout)
    })
})

/* TestCase011 */
When("Employee Manager create New Appoinment for Employee", () => {
    //Login System With Employee Manager Account
    $(LoginObject.btn_Logout).scrollIntoView();
    $(LoginObject.btn_Logout).click();
    $(LoginObject.txt_Username).setValue(DataLogin.employeeMusername);
    $(LoginObject.txt_Password).setValue(DataLogin.employeeMpassword);
    $(LoginObject.btn_Login).click();

    //Select Calendar Menu
    browser.pause(timeout);
    $(AppointmentObject.appointmentNewBtn).click();

    //User Select Employer
    browser.pause(timeout);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(AppointmentObject.locationSelector).click();
    $(AppointmentObject.selectLocation(location.location)).click();

    //User Select Medical Type
    $(AppointmentObject.medicalTypeSelector).click();
    $(AppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //User Select Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.emailInput).setValue(email.email);
    $(AppointmentObject.selectEmail(email.email)).click();

    //Save Appoinment
    $(CalendarObject.appointmentSaveBtn).click();
})
Then("Employee can see this appointment", () => {
    //Employee Login System
    $(LoginObject.btn_Logout).scrollIntoView();
    $(LoginObject.btn_Logout).click();
    $(LoginObject.txt_Username).setValue(DataLogin.employeeusername);
    $(LoginObject.txt_Password).setValue(DataLogin.employeepassword);
    $(LoginObject.btn_Login).click();

    $(MenuObject.calendar).click()
    browser.pause(3000)
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.findConf({ employer: employer.name }).forEach(elConf => {
        elConf.click();
        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(AppointmentObject.removeBtn).click()
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout)
    })
})

/* TestCase013 */
When("User create new Onsite Appoinment", () => {
    //Create New Onsite Appointment
    $(OnsiteAppointmentObject.appointmentNewOnsiteBtn).click()

    //User Select Employer
    browser.pause(3000);
    $(OnsiteAppointmentObject.employerSelect).click();
    $(OnsiteAppointmentObject.selectEmployer(employer.name)).click();

    ///User Select Employer
    browser.pause(timeout);
    $(OnsiteAppointmentObject.employerSelect).click();
    $(OnsiteAppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(OnsiteAppointmentObject.locationSelect).click();
    $(OnsiteAppointmentObject.selectLocation(onsite.onsitelocatio)).click();

    //User Select Medical Type
    $(OnsiteAppointmentObject.medicalTypeSelect).click();
    $(OnsiteAppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //User Select Enable Time Slot
    $(OnsiteAppointmentObject.onsiteappointmentEnableBtn).click();
    $(OnsiteAppointmentObject.onsiteappointmentPublicBtn).click();
    //User Add Room
    $(OnsiteAppointmentObject.onsiteappointmentAddRoomBtn).click();
    $(OnsiteAppointmentObject.onsiteappointmentSlottimeTxt).setValue(5);
    browser.keys("\uE007");

    //User Select Employee
    $(OnsiteAppointmentObject.employeeDetails).click();
    $(OnsiteAppointmentObject.emailSelector).click();
    $(OnsiteAppointmentObject.emailInput).setValue(email.email);
    $(OnsiteAppointmentObject.selectEmail(email.email)).click();
    $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();

    //Save Appoinment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
})
Then("User create new Onsite Appoinment successful", () => {
    $(MenuObject.calendar).click()
    browser.pause(timeout)
    OnsiteAppointmentObject.find({ employer: employer.name }).forEach(el => {
        el.click();
        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click()
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout)
    })
})

/* TestCase014 */
When("User fill all valid information", () => {
    //Create New Onsite Appointment
    $(OnsiteAppointmentObject.appointmentNewOnsiteBtn).click()

    //User Select Employer
    browser.pause(3000);
    $(OnsiteAppointmentObject.employerSelect).click();
    $(OnsiteAppointmentObject.selectEmployer(employer.name)).click();

    ///User Select Employer
    browser.pause(timeout);
    $(OnsiteAppointmentObject.employerSelect).click();
    $(OnsiteAppointmentObject.selectEmployer(employer.name)).click();

    //User Select Location
    $(OnsiteAppointmentObject.locationSelect).click();
    $(OnsiteAppointmentObject.selectLocation(onsite.onsitelocatio)).click();

    //User Select Medical Type
    $(OnsiteAppointmentObject.medicalTypeSelect).click();
    $(OnsiteAppointmentObject.selectMedicalType(medical.medicaltype)).click();

    //User Select Enable Time Slot
    $(OnsiteAppointmentObject.onsiteappointmentEnableBtn).click();
    $(OnsiteAppointmentObject.onsiteappointmentPublicBtn).click();
    //User Add Room
    $(OnsiteAppointmentObject.onsiteappointmentAddRoomBtn).click();
    $(OnsiteAppointmentObject.onsiteappointmentSlottimeTxt).setValue(5);
    browser.keys("\uE007");

    //Add new Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.emailInput).setValue(employeedata.newemployeeemail);
    $(CalendarObject.ememployeeSelect).click();

    //Fill Data
    $(CalendarObject.employeeFirstNameInput).setValue(employeedata.employeefirstname);
    $(CalendarObject.employeeLastNameInput).setValue(employeedata.employeelastname);

    $(AppointmentObject.genderSelector).click();
    $(AppointmentObject.selectGender(gender.gender)).click();

    $(CalendarObject.employeeDoBInput).setValue(employeedata.employeedob);
    $(CalendarObject.employeePhoneInput).setValue(employeedata.employeephone);
    $(CalendarObject.employeeStrLn1Input).setValue(employeedata.employeestrline);
    $(CalendarObject.employeeSuburbInput).setValue(employeedata.employeesuburb);

    $(AppointmentObject.stateSelector).click();
    $(AppointmentObject.selectState(state.state)).click();

    $(CalendarObject.employeePostCodeInput).setValue(employeedata.employeepostalcode);

    $(AppointmentObject.masterRoleSelector).click();
    $(AppointmentObject.selectRole(role.role)).click();

    $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();

    //Save Appoinment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
})
Then("User can register Onsite Appoinment Success", () => {
    $(MenuObject.calendar).click()
    browser.pause(timeout)
    OnsiteAppointmentObject.find({ employer: employer.name }).forEach(el => {
        el.click();
        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click()
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout)
    })
})
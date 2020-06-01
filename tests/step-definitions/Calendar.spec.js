import { When, Then } from "cucumber";
import { assert } from 'chai'
import { appointmentdata, employeedata } from "../data/Data.Calendar";
import { CalendarObject, CalendarVerify, OnsiteAppointmentObject, AppointmentObject } from "../page-object/Calendar.po";
import { MenuObject } from "../page-object/shared/Menu.po";
import { MedicalTypeObject } from "../page-object/MedicalType.po";
import { EmployerObject } from "../page-object/Employers.po";

const timeout = 3000

/* TestCase008 */
When("User create new Appointment with existing Employee", () => {
    browser.pause(timeout);
    $(AppointmentObject.appointmentNewBtn).click();

    //User Select Employer
    browser.pause(timeout);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(appointmentdata.apemployer)).click();

    //User Select Location
    $(AppointmentObject.locationSelector).click();
    $(AppointmentObject.selectLocation(appointmentdata.aplocation)).click();

    //User Select Medical Type
    $(AppointmentObject.medicalTypeSelector).click();
    $(AppointmentObject.selectMedicalType(appointmentdata.apmedtype)).click();

    //User Select Medical Staff
    $(AppointmentObject.staffSelector).click();
    $(AppointmentObject.staffInput).setValue(appointmentdata.emailmedicalstaff);
    $(AppointmentObject.selectStaff(appointmentdata.emailmedicalstaff)).click();

    //User Select Date
    $(CalendarObject.appointmentDateInput).setValue(appointmentdata.fulldate);

    //User Select Start Time
    $(AppointmentObject.startTimeSelector).click();
    $(AppointmentObject.selectStartTime(appointmentdata.apstartime)).click();

    //User Select End Time
    $(AppointmentObject.endTimeSelector).click();
    $(AppointmentObject.selectEndTime(appointmentdata.apendtime)).click();

    //User Select Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.emailInput).setValue(appointmentdata.employeeEmail);
    $(AppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();

    //Save Appoinment
    $(CalendarObject.appointmentSaveBtn).click();
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})

Then("User create new Appointment Success", () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.findApMonth({ employer: appointmentdata.apemployer, employee: appointmentdata.employeeEmail, location: appointmentdata.aplocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        assert.equal($(AppointmentObject.employerSelector).getText(), appointmentdata.apemployer)
        assert.equal($(AppointmentObject.locationSelector).getText().slice(0, 11), appointmentdata.aplocation);
        assert.equal($(AppointmentObject.medicalTypeSelector).getText().slice(0, 11), appointmentdata.apmedtype);
        assert.equal($(AppointmentObject.staffSelector).getText().slice(1, 11), appointmentdata.staffname);
        assert.equal($(CalendarObject.appointmentDateInput).getValue(), appointmentdata.fulldate);
        assert.equal($(AppointmentObject.startTimeSelector).getText(), appointmentdata.apstartime);
        assert.equal($(AppointmentObject.endTimeSelector).getText(), appointmentdata.apendtime);

        assert.equal($(AppointmentObject.emailSelector).getText(), appointmentdata.employeeEmail);
        assert.equal($(CalendarObject.employeeFirstNameInput).getValue(), appointmentdata.employeefirstname);
        assert.equal($(CalendarObject.employeeLastNameInput).getValue(), appointmentdata.employeelastname);
        assert.equal($(CalendarObject.employeePhoneInput).getValue(), appointmentdata.employeephone);
        assert.equal($(AppointmentObject.masterRoleSelector).getText(), appointmentdata.employeerole);

        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click();
        browser.pause(timeout);
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click();
        browser.pause(timeout);
    })
})

/* TestCase009 */
When("User create new Appointment with new Employee", () => {
    browser.pause(timeout)
    //Create New Appointment
    $(AppointmentObject.appointmentNewBtn).click();

    //User Select Employer
    browser.pause(timeout);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(appointmentdata.apemployer)).click();

    //User Select Location
    $(AppointmentObject.locationSelector).click();
    $(AppointmentObject.selectLocation(appointmentdata.aplocation)).click();

    //User Select Medical Type
    $(AppointmentObject.medicalTypeSelector).click();
    $(AppointmentObject.selectMedicalType(appointmentdata.apmedtype)).click();

    //User Select Medical Staff
    $(AppointmentObject.staffSelector).click();
    $(AppointmentObject.staffInput).setValue(appointmentdata.emailmedicalstaff);
    $(AppointmentObject.selectStaff(appointmentdata.emailmedicalstaff)).click();

    //User Select Date
    $(CalendarObject.appointmentDateInput).setValue(appointmentdata.fulldate)

    //User Select Start Time
    $(AppointmentObject.startTimeSelector).click();
    $(AppointmentObject.selectStartTime(appointmentdata.apstartime)).click();

    //User Select End Time
    $(AppointmentObject.endTimeSelector).click();
    $(AppointmentObject.selectEndTime(appointmentdata.apendtime)).click();

    //Add new Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.emailInput).setValue(appointmentdata.newemployeeemail);
    $(CalendarObject.ememployeeSelect).click();

    //Fill Data
    $(CalendarObject.employeeFirstNameInput).setValue(appointmentdata.employeefirstname);
    $(CalendarObject.employeeLastNameInput).setValue(appointmentdata.employeelastname);

    $(AppointmentObject.genderSelector).click();
    $(AppointmentObject.selectGender(appointmentdata.employeegender)).click();

    $(CalendarObject.employeeDoBInput).setValue(appointmentdata.employeedob);
    $(CalendarObject.employeePhoneInput).setValue(appointmentdata.employeephone);
    $(CalendarObject.employeeStrLn1Input).setValue(appointmentdata.employeestrline);
    $(CalendarObject.employeeSuburbInput).setValue(appointmentdata.employeesuburb);

    $(AppointmentObject.stateSelector).click();
    $(AppointmentObject.selectState(appointmentdata.employeestate)).click();

    $(CalendarObject.employeePostCodeInput).setValue(appointmentdata.employeepostalcode);

    $(AppointmentObject.masterRoleSelector).click();
    $(AppointmentObject.selectRole(appointmentdata.employeerole)).click();

    $(CalendarObject.appointmentSaveBtn).click();
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout);
    browser.pause(timeout);
})
Then("User create new Appointment with new Employee Success and Employee added in Employer", () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.findApMonth({ employer: appointmentdata.apemployer, employee: appointmentdata.employeeEmail, location: appointmentdata.aplocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        //Verify Calendar Data
        assert.equal($(AppointmentObject.employerSelector).getText(), appointmentdata.apemployer);
        assert.equal($(AppointmentObject.locationSelector).getText().slice(0, 11), appointmentdata.aplocation);
        assert.equal($(AppointmentObject.medicalTypeSelector).getText().slice(0, 11), appointmentdata.apmedtype);
        assert.equal($(AppointmentObject.staffSelector).getText().slice(1, 11), appointmentdata.staffname);
        assert.equal($(CalendarObject.appointmentDateInput).getValue(), appointmentdata.fulldate);
        assert.equal($(AppointmentObject.startTimeSelector).getText(), appointmentdata.apstartime);
        assert.equal($(AppointmentObject.endTimeSelector).getText(), appointmentdata.apendtime);

        assert.equal($(AppointmentObject.emailSelector).getText(), appointmentdata.newemployeeemail);
        assert.equal($(CalendarObject.employeeFirstNameInput).getValue(), appointmentdata.employeefirstname);
        assert.equal($(CalendarObject.employeeLastNameInput).getValue(), appointmentdata.employeelastname);
        assert.equal($(CalendarObject.employeePhoneInput).getValue(), appointmentdata.employeephone);
        assert.equal($(AppointmentObject.masterRoleSelector).getText(), appointmentdata.employeerole);

        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click();
        browser.pause(timeout);
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click();
        browser.pause(timeout);
    })
})

Then("User can view Employee added in Employer", () => {
    //Select Employer
    $(MenuObject.employer).click();
    $(EmployerObject.searchboxEmployer).click()
    $(EmployerObject.searchboxEmployer).setValue(appointmentdata.apemployer)
    browser.keys('Enter');
    $(EmployerObject.find(appointmentdata.apemployer)).click()
    $(EmployerObject.employeeTab).click()
    $(EmployerObject.searchboxEmployer).click()
    $(EmployerObject.searchboxEmployer).setValue(appointmentdata.newemployeeemail)
    browser.keys('Enter');
    $(EmployerObject.EditEmployeeBtn).click()
    browser.pause(timeout)

    //Verify Employee Data
    assert.equal($(AppointmentObject.emailSelector).getValue(), appointmentdata.newemployeeemail);
    assert.equal($(CalendarObject.employeeFirstNameInput).getValue(), appointmentdata.employeefirstname);
    assert.equal($(CalendarObject.employeeLastNameInput).getValue(), appointmentdata.employeelastname);
    assert.equal($(AppointmentObject.genderSelector).getText(), appointmentdata.employeegender);
    assert.equal($(CalendarObject.employeeDoBInput).getValue(), appointmentdata.employeedob);
    assert.equal($(CalendarObject.employeePhoneInput).getValue(), appointmentdata.employeephone);
    assert.equal($(CalendarObject.employeeStrLn1Input).getValue(), appointmentdata.employeestrline);
    assert.equal($(CalendarObject.employeeSuburbInput).getValue(), appointmentdata.employeesuburb);
    assert.equal($(AppointmentObject.stateSelector).getText(), appointmentdata.employeestate);
    assert.equal($(CalendarObject.employeePostCodeInput).getValue(), appointmentdata.employeepostalcode);
    assert.equal($(AppointmentObject.genderSelector).getText(), appointmentdata.employeegender);
    assert.equal($(AppointmentObject.masterRoleSelector).getText(), appointmentdata.employeerole);
})

/* TestCase010 */
When("User update existing Appointment", () => {
    $(MenuObject.calendar).click();
    browser.pause(timeout);
    //Select Calendar Menu
    $(AppointmentObject.appointmentNewBtn).click();

    //User Select Employer
    browser.pause(timeout);
    $(AppointmentObject.employerSelector).click();
    $(AppointmentObject.selectEmployer(appointmentdata.apemployer)).click();

    //User Select Location
    $(AppointmentObject.locationSelector).click();
    $(AppointmentObject.selectLocation(appointmentdata.aplocation)).click();

    //User Select Medical Type
    $(AppointmentObject.medicalTypeSelector).click();
    $(AppointmentObject.selectMedicalType(appointmentdata.apmedtype)).click();

    //User Select Medical Staff
    $(AppointmentObject.staffSelector).click();
    $(AppointmentObject.staffInput).setValue(appointmentdata.emailmedicalstaff);
    $(AppointmentObject.selectStaff(appointmentdata.emailmedicalstaff)).click();

    //User Select Date
    $(CalendarObject.appointmentDateInput).setValue(appointmentdata.fulldate);

    //User Select Start Time
    $(AppointmentObject.startTimeSelector).click();
    $(AppointmentObject.selectStartTime(appointmentdata.apstartime)).click();

    //User Select End Time
    $(AppointmentObject.endTimeSelector).click();
    $(AppointmentObject.selectEndTime(appointmentdata.apendtime)).click();

    //User Select Employee
    $(AppointmentObject.emailSelector).click();
    $(AppointmentObject.emailInput).setValue(appointmentdata.employeeEmail);
    $(AppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();

    //Save Appoinment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)

    //Update existing Appoinment
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();

    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.findApMonth({ employer: appointmentdata.apemployer, employee: appointmentdata.employeeEmail, location: appointmentdata.aplocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        $(CalendarObject.employeeNoteInput).setValue('NewUpdate');
        $(CalendarObject.appointmentUpdateBtn).click();
        browser.pause(timeout);
    })
    $(CalendarVerify.updateSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})
Then("User update Appointment Successful", () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    AppointmentObject.findApMonth({ employer: appointmentdata.apemployer, employee: appointmentdata.employeeEmail, location: appointmentdata.aplocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        //Verify Appointment
        assert.equal($(AppointmentObject.employerSelector).getText(), appointmentdata.apemployer)
        assert.equal($(AppointmentObject.locationSelector).getText().slice(0, 11), appointmentdata.aplocation);
        assert.equal($(AppointmentObject.medicalTypeSelector).getText().slice(0, 11), appointmentdata.apmedtype);
        assert.equal($(AppointmentObject.staffSelector).getText().slice(1, 11), appointmentdata.staffname);
        assert.equal($(CalendarObject.appointmentDateInput).getValue(), appointmentdata.fulldate);
        assert.equal($(AppointmentObject.startTimeSelector).getText(), appointmentdata.apstartime);
        assert.equal($(AppointmentObject.endTimeSelector).getText(), appointmentdata.apendtime);

        assert.equal($(AppointmentObject.emailSelector).getText(), appointmentdata.employeeEmail);
        assert.equal($(CalendarObject.employeeFirstNameInput).getValue(), appointmentdata.employeefirstname);
        assert.equal($(CalendarObject.employeeLastNameInput).getValue(), appointmentdata.employeelastname);
        assert.equal($(CalendarObject.employeePhoneInput).getValue(), appointmentdata.employeephone);
        assert.equal($(AppointmentObject.masterRoleSelector).getText(), appointmentdata.employeerole);
        assert.equal($(CalendarObject.employeeNoteInput).getValue(), 'NewUpdate');
        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click();
        browser.pause(timeout);
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click();
        browser.pause(timeout);
    })
})

/* TestCase013 */
When("User create new Onsite Appoinment", () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    browser.pause(timeout);

    //Create New Onsite Appointment
    $(OnsiteAppointmentObject.appointmentNewOnsiteBtn).click()

    //User Select Employer
    browser.pause(timeout);
    $(OnsiteAppointmentObject.employerSelect).click();
    $(OnsiteAppointmentObject.selectEmployer(appointmentdata.apemployer)).click();

    //User Select Location
    $(OnsiteAppointmentObject.locationSelect).click();
    $(OnsiteAppointmentObject.selectLocation(appointmentdata.onsitelocation)).click();

    //User Select Medical Type
    $(OnsiteAppointmentObject.medicalTypeSelect).click();
    $(OnsiteAppointmentObject.selectMedicalType(appointmentdata.apmedtype)).click();

    //User Select Medical Staff
    $(OnsiteAppointmentObject.staffSelector).click();
    $(OnsiteAppointmentObject.staffInput).setValue(appointmentdata.emailmedicalstaff);
    $(OnsiteAppointmentObject.selectStaff(appointmentdata.emailmedicalstaff)).click();

    //User Select Date Time
    $(CalendarObject.appointmentDateInput).setValue(appointmentdata.fulldate)

    //User Select Start Time
    $(AppointmentObject.startTimeSelector).click();
    $(AppointmentObject.selectStartTime(appointmentdata.apstartime)).click();

    //User Select End Time
    $(AppointmentObject.endTimeSelector).click();
    $(AppointmentObject.selectEndTime(appointmentdata.apendtime)).click();

    //User Select Enable Time Slot
    $(OnsiteAppointmentObject.onsiteappointmentEnableBtn).click();
    $(OnsiteAppointmentObject.onsiteappointmentPublicBtn).click();

    //User Add Room
    $(OnsiteAppointmentObject.onsiteappointmentAddRoomBtn).click();
    $(OnsiteAppointmentObject.onsiteappointmentSlottimeTxt).setValue(5);
    browser.keys("\uE007");

    //Save Appoinment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})
Then("User create new Onsite Appoinment successful", () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    OnsiteAppointmentObject.findApMonth({ employer: appointmentdata.apemployer, employee: appointmentdata.employeeEmail, location: appointmentdata.onsitelocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        browser.pause();
        assert.equal($(AppointmentObject.employerSelector).getText(), appointmentdata.apemployer)
        assert.equal($(AppointmentObject.locationSelector).getText().slice(0, 13), appointmentdata.onsitelocation);
        assert.equal($(AppointmentObject.medicalTypeSelector).getText().slice(0, 11), appointmentdata.apmedtype);
        assert.equal($(AppointmentObject.staffSelector).getText().slice(1, 11), appointmentdata.staffname);
        assert.equal($(CalendarObject.appointmentDateInput).getValue(), appointmentdata.fulldate);
        assert.equal($(AppointmentObject.startTimeSelector).getText(), appointmentdata.apstartime);
        assert.equal($(AppointmentObject.endTimeSelector).getText(), appointmentdata.apendtime);

        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click()
        browser.pause(timeout)
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout)
    })
})

//User Select Employee
    // $(OnsiteAppointmentObject.employeeDetails).click();
    // $(OnsiteAppointmentObject.emailSelector).click();
    // $(OnsiteAppointmentObject.emailInput).setValue(email.email);
    // $(OnsiteAppointmentObject.selectEmail(email.email)).click();
    // $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
import { When, Then } from "cucumber";
import { assert } from 'chai'
import { appointmentdata } from "../data/Data.Calendar";
import { CalendarObject, CalendarVerify, OnsiteAppointmentObject, AppointmentObject } from "../page-object/Calendar.po";
import { MenuObject } from "../page-object/shared/Menu.po";
import { MedicalTypeObject } from "../page-object/MedicalType.po";
import { EmployerObject } from "../page-object/Employers.po";
import { BizUIObject } from "../page-object/BizUI.po";
import { DataBizUI } from "../data/Data.BizUI";

const timeout = 2000

/* CL001 */
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
    browser.pause(timeout);
    $(AppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();

    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})

Then("User create new Appointment Successfully", () => {
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
/* CL002 */
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
    $(AppointmentObject.emailInput).setValue(appointmentdata.newemployeeemail());
    browser.pause(timeout)
    $(AppointmentObject.selectEmail(appointmentdata.newemployeeemail())).click();

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
    AppointmentObject.findApMonth({ employer: appointmentdata.apemployer, employee: employee1, location: appointmentdata.aplocation }).forEach(elmth => {
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

        assert.equal($(AppointmentObject.emailSelector).getText(), employee1);
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
    $(EmployerObject.searchboxEmployer).setValue(employee1)
    browser.keys('Enter');
    $(EmployerObject.EditEmployeeBtn).click()
    browser.pause(timeout)

    //Verify Employee Data
    assert.equal($(AppointmentObject.emailSelector).getValue(), employee1);
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

/* CL003 */
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
    browser.pause(timeout);
    $(AppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();

    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)

    //Update existing Appointment
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
Then("User update Appointment Successfully", () => {
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

/* CL004 */
When("User create new Onsite Appointment", () => {
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

    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})
Then("User create new Onsite Appointment Successfully", () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    OnsiteAppointmentObject.findApMonth({ employer: appointmentdata.apemployer, location: appointmentdata.onsitelocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        assert.equal($(OnsiteAppointmentObject.employerSelect).getText(), appointmentdata.apemployer)
        assert.equal($(OnsiteAppointmentObject.locationSelect).getText().slice(0, 13), appointmentdata.onsitelocation);
        assert.equal($(OnsiteAppointmentObject.medicalTypeSelect).getText().slice(0, 11), appointmentdata.apmedtype);
        assert.equal($(OnsiteAppointmentObject.staffSelector).getText().slice(1, 11), appointmentdata.staffname);
        assert.equal($(CalendarObject.appointmentDateInput).getValue(), appointmentdata.fulldate);
        assert.equal($(OnsiteAppointmentObject.startTimeSelector).getText(), appointmentdata.apstartime);
        assert.equal($(OnsiteAppointmentObject.endTimeSelector).getText(), appointmentdata.apendtime);

        $(CalendarObject.appointmentRemoveBtn).scrollIntoView();
        $(CalendarObject.appointmentRemoveBtn).click()
        browser.pause(timeout)
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout)
    })
})

/* CL005 */
When('User create new Onsite Appointment with existing Employee', () => {
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

    //User Select Employee
    $(OnsiteAppointmentObject.employeeDetails).click();
    $(OnsiteAppointmentObject.emailSelector).click();
    $(OnsiteAppointmentObject.emailInput).setValue(appointmentdata.employeeEmail);
    browser.pause(timeout)
    $(OnsiteAppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();
    $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
    browser.pause(timeout)

    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})

/* CL006 */
When('User create new Onsite Appointment with new Employee', () => {
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

    //User Select Employee
    $(OnsiteAppointmentObject.employeeDetails).click();
    $(OnsiteAppointmentObject.emailSelector).click();
    $(OnsiteAppointmentObject.emailInput).setValue(appointmentdata.newemployeeemail);
    browser.pause(timeout)
    $(OnsiteAppointmentObject.selectEmail(appointmentdata.newemployeeemail)).click();

    //Fill Data
    $(CalendarObject.employeeFirstNameInput).setValue(appointmentdata.employeefirstname);
    $(CalendarObject.employeeLastNameInput).setValue(appointmentdata.employeelastname);

    $(OnsiteAppointmentObject.genderSelector).click();
    $(OnsiteAppointmentObject.selectGender(appointmentdata.employeegender)).click();

    $(CalendarObject.employeeDoBInput).setValue(appointmentdata.employeedob);
    $(CalendarObject.employeePhoneInput).setValue(appointmentdata.employeephone);
    $(CalendarObject.employeeStrLn1Input).setValue(appointmentdata.employeestrline);
    $(CalendarObject.employeeSuburbInput).setValue(appointmentdata.employeesuburb);

    $(OnsiteAppointmentObject.stateSelector).click();
    $(OnsiteAppointmentObject.selectState(appointmentdata.employeestate)).click();

    $(CalendarObject.employeePostCodeInput).setValue(appointmentdata.employeepostalcode);

    $(OnsiteAppointmentObject.masterRoleSelector).click();
    $(OnsiteAppointmentObject.selectRole(appointmentdata.employeerole)).click();

    $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
    browser.pause(timeout)
    $(MedicalTypeObject.yesButtonOfConfirmation).click()
    browser.pause(timeout)
    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})

/* CL007 */
When('User create Onsite Appointment and do not enable time slot', () => {
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
})
Then('Employee can not select time slot of Appointment', () => {
    //User Select Employee
    $(OnsiteAppointmentObject.employeeDetails).click();
    $(OnsiteAppointmentObject.emailSelector).click();
    $(OnsiteAppointmentObject.emailInput).setValue(appointmentdata.employeeEmail);
    browser.pause(timeout)
    $(OnsiteAppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();
    assert.equal($(OnsiteAppointmentObject.timeslotSelector).isExisting(), false);
    $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
    browser.pause(timeout)
    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})

/* CL008 */
When('User create Onsite Appointment and enable time slot', () => {
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

})
Then('Employee can select time slot of Appointment', () => {
    //User Select Employee
    $(OnsiteAppointmentObject.employeeDetails).click();
    $(OnsiteAppointmentObject.emailSelector).click();
    $(OnsiteAppointmentObject.emailInput).setValue(appointmentdata.employeeEmail);
    browser.pause(timeout)
    $(OnsiteAppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();
    assert.equal($(OnsiteAppointmentObject.timeslotSelector).isExisting(), true);
    $(OnsiteAppointmentObject.timeslotSelector).click();
    $(OnsiteAppointmentObject.selectTimeSlot(appointmentdata.timeslot, DataBizUI.room1)).click();
    $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
    browser.pause(timeout)

    assert.equal($(OnsiteAppointmentObject.timeslotSlected(appointmentdata.timeslot)).isExisting(), true);

    assert.equal($(OnsiteAppointmentObject.verifyName(appointmentdata.employeefirstname, appointmentdata.employeelastname)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifyPhone(appointmentdata.employeephone)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifyemail(appointmentdata.employeeEmail)).isExisting(), true);
    // assert.equal($(OnsiteAppointmentObject.verifyaddress(appointmentdata.)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifytimeslot(appointmentdata.timeslot, DataBizUI.room1)).isExisting(), true);

    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})

Then('Employee can view Appointment in BizUI', () => {
    browser.pause(timeout)
    assert.equal($(BizUIObject.verifydate(DataBizUI.appointmentverifydate, DataBizUI.appointmentverifymonth)).isExisting(), true)
    assert.equal($(BizUIObject.verifytimeslot(appointmentdata.timeslot, DataBizUI.room1)).isExisting(), true)
    // assert.equal($(BizUIObject.verifyaddress()).isExisting(), true)
    assert.equal($(BizUIObject.verifymedicaltype(appointmentdata.timeslot, DataBizUI.room1, appointmentdata.apmedtype)).isExisting(), true)
})

/* CL009 */
When('User create Onsite Appointment and do not public time slot', () => {
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

    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})
Then('Employee can not view time slot in BizUI', () => {
    browser.pause(timeout);
    $(BizUIObject.bizuiNewApBtn).click();
    browser.pause(timeout);
    assert.equal($(BizUIObject.selectbizuiMedicalType(appointmentdata.apmedtype)).isExisting(), false);
})

/* CL010 */
When('User create Onsite Appointment and edit duration time slot', () => {
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

    //User Add Room
    $(OnsiteAppointmentObject.onsiteappointmentAddRoomBtn).click();
    $(OnsiteAppointmentObject.onsiteappointmentSlottimeTxt).setValue(70);
    browser.keys("\uE007");

    assert.equal($(OnsiteAppointmentObject.errorlbl).getText(), appointmentdata.errortimeslot)

    $(OnsiteAppointmentObject.onsiteappointmentSlottimeTxt).setValue(5);
    browser.keys("\uE007");

    assert.equal($("//button[contains(@class,'btn-primary') and contains(text(),'5')]").isExisting(), true);
    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})

/* CL011 */
When('User create Onsite Appointment and add room', () => {
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
})
Then('User can select time slot with room', () => {
    //User Select Employee
    $(OnsiteAppointmentObject.employeeDetails).click();
    $(OnsiteAppointmentObject.emailSelector).click();
    $(OnsiteAppointmentObject.emailInput).setValue(appointmentdata.employeeEmail);
    browser.pause(timeout)
    $(OnsiteAppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();
    assert.equal($(OnsiteAppointmentObject.timeslotSelector).isExisting(), true);
    $(OnsiteAppointmentObject.timeslotSelector).click();
    $(OnsiteAppointmentObject.selectTimeSlot(appointmentdata.timeslot, DataBizUI.room2)).click();
    $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
    browser.pause(timeout)

    assert.equal($(OnsiteAppointmentObject.timeslotSlected(appointmentdata.timeslot)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifyName(appointmentdata.employeefirstname, appointmentdata.employeelastname)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifyPhone(appointmentdata.employeephone)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifyemail(appointmentdata.employeeEmail)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifytimeslot(appointmentdata.timeslot, DataBizUI.room2)).isExisting(), true);

    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})

/* CL012 */
When('User create Onsite Appointment and remove room', () => {
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

    //User Select Employee
    $(OnsiteAppointmentObject.employeeDetails).click();
    $(OnsiteAppointmentObject.emailSelector).click();
    $(OnsiteAppointmentObject.emailInput).setValue(appointmentdata.employeeEmail);
    browser.pause(timeout)
    $(OnsiteAppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();
    assert.equal($(OnsiteAppointmentObject.timeslotSelector).isExisting(), true);
    $(OnsiteAppointmentObject.timeslotSelector).click();
    $(OnsiteAppointmentObject.selectTimeSlot(appointmentdata.timeslot, DataBizUI.room2)).click();
    $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
    browser.pause(timeout)

    assert.equal($(OnsiteAppointmentObject.timeslotSlected(appointmentdata.timeslot)).isExisting(), true);

    assert.equal($(OnsiteAppointmentObject.verifyName(appointmentdata.employeefirstname, appointmentdata.employeelastname)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifyPhone(appointmentdata.employeephone)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifyemail(appointmentdata.employeeEmail)).isExisting(), true);
    // assert.equal($(OnsiteAppointmentObject.verifyaddress(appointmentdata.)).isExisting(), true);
    assert.equal($(OnsiteAppointmentObject.verifytimeslot(appointmentdata.timeslot, DataBizUI.room2)).isExisting(), true);

    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})
Then('User can not select room removed', () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    OnsiteAppointmentObject.findApMonth({ employer: appointmentdata.apemployer, location: appointmentdata.onsitelocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        assert.equal($(OnsiteAppointmentObject.removeRoom(DataBizUI.room2)).isExisting(), false)
        $(OnsiteAppointmentObject.employeeDropdown(appointmentdata.timeslot, DataBizUI.room2)).click();
        browser.pause(timeout)
        $(OnsiteAppointmentObject.dropdownAction('Remove')).click();
        browser.pause(timeout)
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout);
        $(CalendarObject.appointmentUpdateBtn).click();
        browser.pause(timeout);
    })

    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    OnsiteAppointmentObject.findApMonth({ employer: appointmentdata.apemployer, location: appointmentdata.onsitelocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        assert.equal($(OnsiteAppointmentObject.removeRoom(DataBizUI.room2)).isExisting(), true)
        $(OnsiteAppointmentObject.removeRoom(DataBizUI.room2)).click();
        browser.pause(timeout)

        //User Select Employee
        $(OnsiteAppointmentObject.employeeDetails).click();
        $(OnsiteAppointmentObject.emailSelector).click();
        $(OnsiteAppointmentObject.emailInput).setValue(appointmentdata.employeeEmail);
        browser.pause(timeout)
        $(OnsiteAppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();
        assert.equal($(OnsiteAppointmentObject.timeslotSelector).isExisting(), true);
        $(OnsiteAppointmentObject.timeslotSelector).click();
        assert.equal($(OnsiteAppointmentObject.selectTimeSlot(appointmentdata.timeslot, DataBizUI.room2)).isExisting(), false);
        $(OnsiteAppointmentObject.selectTimeSlot(appointmentdata.timeslot, DataBizUI.room1)).click();
        $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
        browser.pause(timeout)

        assert.equal($(OnsiteAppointmentObject.timeslotSlected(appointmentdata.timeslot)).isExisting(), true);

        assert.equal($(OnsiteAppointmentObject.verifyName(appointmentdata.employeefirstname, appointmentdata.employeelastname)).isExisting(), true);
        assert.equal($(OnsiteAppointmentObject.verifyPhone(appointmentdata.employeephone)).isExisting(), true);
        assert.equal($(OnsiteAppointmentObject.verifyemail(appointmentdata.employeeEmail)).isExisting(), true);
        // assert.equal($(OnsiteAppointmentObject.verifyaddress(appointmentdata.)).isExisting(), true);
        assert.equal($(OnsiteAppointmentObject.verifytimeslot(appointmentdata.timeslot, DataBizUI.room1)).isExisting(), true);
        $(CalendarObject.appointmentUpdateBtn).click();
        browser.pause(timeout);
    })
})

/* CL013 */
When('User open Onsite Appointment have Employee', () => {
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

    //User Select Employee
    $(OnsiteAppointmentObject.employeeDetails).click();
    $(OnsiteAppointmentObject.emailSelector).click();
    $(OnsiteAppointmentObject.emailInput).setValue(appointmentdata.employeeEmail);
    browser.pause(timeout)
    $(OnsiteAppointmentObject.selectEmail(appointmentdata.employeeEmail)).click();
    $(OnsiteAppointmentObject.timeslotSelector).click();
    $(OnsiteAppointmentObject.selectTimeSlot(appointmentdata.timeslot, DataBizUI.room1)).click();
    $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
    browser.pause(timeout)

    //Save Appointment
    $(CalendarObject.appointmentSaveBtn).click();
    browser.pause(timeout)
    $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
    browser.pause(timeout)
})
Then('User can view Question form of Employee', () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    OnsiteAppointmentObject.findApMonth({ employer: appointmentdata.apemployer, location: appointmentdata.onsitelocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        $(OnsiteAppointmentObject.employeeDropdown(appointmentdata.timeslot, DataBizUI.room1)).click();
        browser.pause(timeout)
        $(OnsiteAppointmentObject.dropdownAction('Medical Questionnare form')).click();
        browser.pause(timeout)

        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion1, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion2, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion3, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion4, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion5, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion6, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion7, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion8, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion9, DataBizUI.answerno)).isExisting(), true);

        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion1, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion2, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion3, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion4, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion5, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion6, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion7, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion8, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion9, DataBizUI.answeryes)).isExisting(), true);

        browser.keys('Escape');
        browser.pause(timeout);
        browser.keys('Escape');
    })
})
/* CL014 */
Then('User can view Assessment form of Employee', () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    OnsiteAppointmentObject.findApMonth({ employer: appointmentdata.apemployer, location: appointmentdata.onsitelocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        $(OnsiteAppointmentObject.employeeDropdown(appointmentdata.timeslot, DataBizUI.room1)).click();
        browser.pause(timeout)
        $(OnsiteAppointmentObject.dropdownAction('Assessment form')).click();
        browser.pause(timeout)

        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion1, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion2, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion3, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion4, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion5, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion6, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion7, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion8, DataBizUI.answerno)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion9, DataBizUI.answerno)).isExisting(), true);

        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion1, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion2, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion3, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion4, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion5, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion6, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion7, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion8, DataBizUI.answeryes)).isExisting(), true);
        assert.equal($(BizUIObject.selectbizuiQuestion(DataBizUI.fluquestion9, DataBizUI.answeryes)).isExisting(), true);

        browser.keys('Escape');
        browser.pause(timeout);
        browser.keys('Escape');
    })
})

/* CL015 */
Then('User can reschedule of Employee', () => {

})

/* CL016 */
Then('User can remove Employee in Onsite Appointment Successfully', () => {
    $(MenuObject.calendar).scrollIntoView()
    $(MenuObject.calendar).click()
    $(CalendarObject.calendarMonthBtn).click();
    $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
    browser.pause(timeout);
    // Find all appoinments which contain sample medical type. After that, removing it 
    OnsiteAppointmentObject.findApMonth({ employer: appointmentdata.apemployer, location: appointmentdata.onsitelocation }).forEach(elmth => {
        elmth.click();
        browser.pause(timeout);
        $(OnsiteAppointmentObject.employeeDropdown(appointmentdata.timeslot, DataBizUI.room1)).click();
        browser.pause(timeout)
        $(OnsiteAppointmentObject.dropdownAction('Remove')).click();
        browser.pause(timeout)
        $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
        $(MedicalTypeObject.yesButtonOfConfirmation).click()
        browser.pause(timeout);
        $(CalendarObject.appointmentUpdateBtn).click();
        browser.pause(timeout);
    })
})
import { When, Then } from "cucumber";
import { expect, assert } from "chai";
import { MenuObject } from "../page-object/shared/Menu.po";
import { EmployerData } from "../data/Data.Employer";
import { EmployerObject } from "../page-object/Employers.po.js";
import { appointmentdata } from "../data/Data.Calendar";
import { AppointmentObject, CalendarObject, CalendarVerify, OnsiteAppointmentObject } from "../page-object/Calendar.po";
import { LocationData } from "../data/Data.Location";
import { MedicalTypeObject } from "../page-object/MedicalType.po";

function waitingLoad(name) {
  browser.waitUntil(() => {
    return expect($(name).isExisting()).to.be.true
  }, 20000)
}

When('Employer - Choose Employer {string}', (num) => {
  browser.pause(1000)
  $(MenuObject.employer).scrollIntoView()
  $(MenuObject.employer).click()
  if (num == 1) {
    var employer = EmployerData.employer1
  } else {
    var employer = EmployerData.employer2
  }
  browser.pause(2000)
  $(EmployerObject.searchBox).click()
  browser.pause(1000)
  $(EmployerObject.searchBox).setValue(employer.name);
  browser.keys("\uE007");
  browser.pause(2000)
  waitingLoad(EmployerObject.find(employer.name))
  $(EmployerObject.find(employer.name)).scrollIntoView();
  $(EmployerObject.find(employer.name)).click()
  browser.pause(3000)
})

const timeout = 1000;
/* ELs001 */
When('User input all valid information of Employer', () => {
  browser.pause(timeout)
  $(MenuObject.employer).scrollIntoView();
  $(MenuObject.employer).click();

  $(EmployerObject.newEmployerBtn).click();
  browser.pause(timeout);

  //Create new Employer
  $(EmployerObject.employerName).setValue(EmployerData.employername);
  $(EmployerObject.employerPhone).setValue(EmployerData.employerphone);
  $(EmployerObject.employerEmail).setValue(EmployerData.employeremail);
  $(EmployerObject.employerStrLn1).setValue(EmployerData.employerStrLn1);
  $(EmployerObject.employerStrLn2).setValue(EmployerData.employerStrLn2);
  $(EmployerObject.employerSuburb).setValue(EmployerData.employerSuburb);
  $(EmployerObject.employerState).click();
  $(EmployerObject.stateSelector(EmployerData.employerState)).click();
  $(EmployerObject.employerPostCode).setValue(EmployerData.employerPostCode);
  $(EmployerObject.employerSecrect).setValue(EmployerData.employerSecrect);
  $(EmployerObject.employerOnsitePassword).setValue(EmployerData.onsitepassword);
  $(EmployerObject.saveBtn).click();
})
Then('User can create Employeer Scuccessful', () => {
  assert.equal($(EmployerObject.employerPopup).getText(), EmployerData.employersuccessmessage);
  $(EmployerObject.searchBox).click();
  $(EmployerObject.searchBox).setValue(EmployerData.employername);
  browser.keys('Enter');
  $(EmployerObject.find(EmployerData.employername)).click()
  browser.pause(2000)
  assert.equal($(EmployerObject.employerName).getValue(), EmployerData.employername);
  assert.equal($(EmployerObject.employerPhone).getValue(), EmployerData.employerphone);
  assert.equal($(EmployerObject.employerEmail).getValue(), EmployerData.employeremail);
  assert.equal($(EmployerObject.employerStrLn1).getValue(), EmployerData.employerStrLn1);
  assert.equal($(EmployerObject.employerStrLn2).getValue(), EmployerData.employerStrLn2);
  assert.equal($(EmployerObject.employerSuburb).getValue(), EmployerData.employerSuburb);
  assert.equal($(EmployerObject.employerState).getText(), EmployerData.employerState);
  assert.equal($(EmployerObject.employerPostCode).getValue(), EmployerData.employerPostCode);
  assert.equal($(EmployerObject.employerSecrect).getValue(), EmployerData.employerSecrect);
  assert.equal($(EmployerObject.employerOnsitePassword).getValue(), EmployerData.onsitepassword);
})

/* ELs004 */
When('User select access Location tab in Employer', () => {
  browser.pause(timeout)
  $(EmployerObject.locationTab).click();
  $(EmployerObject.findLocation(appointmentdata.aplocation)).click();
})
Then('User can select Location existing in System', () => {
  browser.pause(timeout);
  assert.equal($(EmployerObject.verify).isExisting(), true)
})

/* ELs005 */
When('User create new Onsite Location and blank all field', () => {
  $(EmployerObject.onsiteLocationTab).click();
})
Then('User can not create new Onsite Location', () => {
  $(EmployerObject.newOnsiteLocationBtn).click();
  $(EmployerObject.saveBtn).click();
  browser.pause(timeout);
  assert.equal($(EmployerObject.allerRequired).getText().slice(5, 37), EmployerData.required)
  $(EmployerObject.onsiteLocation.titleInput).setValue(LocationData.sampleOnsiteLocation.title);
  $(EmployerObject.saveBtn).click();
  browser.pause(timeout);
  assert.equal($(EmployerObject.allerRequired).getText().slice(5, 37), EmployerData.required)
  $(EmployerObject.onsiteLocation.streetLine1Input).setValue(LocationData.sampleOnsiteLocation.streetLine1);
  $(EmployerObject.saveBtn).click();
  browser.pause(timeout);
  assert.equal($(EmployerObject.allerRequired).getText().slice(5, 37), EmployerData.required)
  $(EmployerObject.onsiteLocation.suburbInput).setValue(LocationData.sampleOnsiteLocation.suburb);
  $(EmployerObject.saveBtn).click();
  browser.pause(timeout);
  assert.equal($(EmployerObject.allerRequired).getText().slice(5, 37), EmployerData.required)
  $(EmployerObject.onsiteLocation.stateSelector).click();
  $(EmployerObject.onsiteLocation.defaultState).click();
  $(EmployerObject.saveBtn).click();
  browser.pause(timeout);
  assert.equal($(EmployerObject.allerRequired).getText().slice(5, 37), EmployerData.required)

  browser.keys('Escape');
  browser.pause(timeout);
})

/*  */
When('User input all valid information of Onsite Location', () => {
  $(EmployerObject.newOnsiteLocationBtn).click();
  $(EmployerObject.onsiteLocation.titleInput).setValue(LocationData.sampleOnsiteLocation.title);
  $(EmployerObject.onsiteLocation.streetLine1Input).setValue(LocationData.sampleOnsiteLocation.streetLine1);
  $(EmployerObject.onsiteLocation.suburbInput).setValue(LocationData.sampleOnsiteLocation.suburb);
  $(EmployerObject.onsiteLocation.stateSelector).click();
  $(EmployerObject.onsiteLocation.defaultState).click();
  $(EmployerObject.onsiteLocation.postCodeInput).setValue(LocationData.sampleOnsiteLocation.postCode);
  $(EmployerObject.onsiteLocation.saveBtn).click();
})
Then('User create new Onsite Location in new Employer Successfully', () => {
  assert.equal($(EmployerObject.employerPopup).getText(), EmployerData.onsitesuccessmessage);
})

/*  */
When('User select access Medical Type tab in Employer', () => {
  $(EmployerObject.medicalTypeTab).click();
  browser.pause(timeout);
  $(EmployerObject.findMedicalType(appointmentdata.apmedtype)).click();
})
Then('User can select Medical Type existing in System', () => {
  browser.pause(timeout);
  assert.equal($(EmployerObject.verify).isExisting(), true)
})

/*  */
When('User select access Role tab in Employer', () => {
  $(EmployerObject.roleTab).click();
  browser.pause(timeout);
  $(EmployerObject.findRole(appointmentdata.employeerole)).click();
})
Then('User can select Role existing in System', () => {
  browser.pause(timeout)
  assert.equal($(EmployerObject.verify).isExisting(), true)
})

/* ELs002 */
When('User input all valid information of Employee', () => {
  $(EmployerObject.employeeTab).click();
  $(EmployerObject.employeeNewBtn).click();
  browser.pause(timeout);

  $(EmployerObject.employeeEmail).setValue(appointmentdata.newemployeeemail);
  $(EmployerObject.employeeFirstName).setValue(appointmentdata.employeefirstname);
  $(EmployerObject.employeeLastName).setValue(appointmentdata.employeelastname);
  $(AppointmentObject.genderSelector).click();
  $(AppointmentObject.selectGender(appointmentdata.employeegender)).click();
  $(EmployerObject.employeeDob).setValue(appointmentdata.employeedob);
  $(EmployerObject.employeeIdType).click();
  $(EmployerObject.selectIdType(EmployerData.employeeIdType)).click();
  $(EmployerObject.employeedTypeValue).setValue(EmployerData.employeePassport);
  $(EmployerObject.employeePhone).setValue(appointmentdata.employeephone);
  $(EmployerObject.employeeStrLn1).setValue(appointmentdata.employeestrline);
  $(EmployerObject.employeeStrLn2).setValue(appointmentdata.employeestrline2);
  $(EmployerObject.employeeSurb).setValue(appointmentdata.employeesuburb);
  $(EmployerObject.employeeState).click();
  $(AppointmentObject.selectState(appointmentdata.employeestate)).click();
  $(EmployerObject.employeePostCode).setValue(appointmentdata.employeepostalcode);
  $(AppointmentObject.masterRoleSelector).click();
  browser.pause(timeout);
  $(AppointmentObject.selectRole(appointmentdata.employeerole)).click();
  $(EmployerObject.employeeIsManager).click();
  $(EmployerObject.employeeIsMainContact).click();

  $(EmployerObject.saveBtn).click();
  browser.pause(timeout);
})
Then('User can creat new Employee Successfully', () => {
  $(EmployerObject.searchBox).click();
  $(EmployerObject.searchBox).setValue();
  browser.keys('Enter');
  $(EmployerObject.EditEmployeeBtn).click()
  browser.pause(timeout)

  assert.equal($(EmployerObject.verifyemployeeEmail).getValue(), appointmentdata.newemployeeemail);
  assert.equal($(EmployerObject.employeeFirstName).getValue(), appointmentdata.employeefirstname);
  assert.equal($(EmployerObject.employeeLastName).getValue(), appointmentdata.employeelastname);
  assert.equal($(EmployerObject.employeeGender).getText(), appointmentdata.employeegender);
  assert.equal($(EmployerObject.employeeDob).getValue(), appointmentdata.employeedob);
  assert.equal($(EmployerObject.employeeIdType).getText(), EmployerData.employeeIdType);
  assert.equal($(EmployerObject.employeedTypeValue).getValue(), EmployerData.employeePassport);
  assert.equal($(EmployerObject.verifyemployeePhone).getValue(), appointmentdata.employeephone);
  assert.equal($(EmployerObject.verifyemployeeStrLn1).getValue(), appointmentdata.employeestrline);
  assert.equal($(EmployerObject.verifyemployeeStrLn2).getValue(), appointmentdata.employeestrline2);
  assert.equal($(EmployerObject.verifyemployeeSurb).getValue(), appointmentdata.employeesuburb);
  assert.equal($(EmployerObject.verifyemployeeState).getText(), appointmentdata.employeestate);
  assert.equal($(EmployerObject.verifyemployeePostCode).getValue(), appointmentdata.employeepostalcode);
  assert.equal($(EmployerObject.employeeMasterRoleID).getText(), appointmentdata.employeerole);
})

/* ELs003 */
When('User create new Appointment with new Employer', () => {
  $(MenuObject.calendar).click();
  browser.pause(timeout);
  $(AppointmentObject.appointmentNewBtn).click();

  //User Select Employer
  browser.pause(timeout);
  $(AppointmentObject.employerSelector).click();
  $(AppointmentObject.selectEmployer(EmployerData.employername)).click();

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
  $(AppointmentObject.emailInput).setValue(appointmentdata.newemployeeemail);
  browser.pause(timeout);
  $(AppointmentObject.selectEmail(appointmentdata.newemployeeemail)).click();

  //Save Appointment
  $(CalendarObject.appointmentSaveBtn).click();
  $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
  browser.pause(timeout)
})

Then('User can create Appointment with new Employer Successfully', () => {
  $(MenuObject.calendar).scrollIntoView()
  $(MenuObject.calendar).click()
  $(CalendarObject.calendarMonthBtn).click();
  $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
  browser.pause(timeout);
  // Find all appoinments which contain sample medical type.
  AppointmentObject.findApMonth({ employer: EmployerData.employername, employee: appointmentdata.newemployeeemail, location: appointmentdata.aplocation }).forEach(elmth => {
    elmth.click();
    browser.pause(timeout);
    assert.equal($(AppointmentObject.employerSelector).getText(), EmployerData.employername)
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

When('User create new Onsite Appointment with new Employer', () => {
  $(MenuObject.calendar).scrollIntoView()
  $(MenuObject.calendar).click()
  browser.pause(timeout);

  //Create New Onsite Appointment
  $(OnsiteAppointmentObject.appointmentNewOnsiteBtn).click()

  //User Select Employer
  browser.pause(timeout);
  $(OnsiteAppointmentObject.employerSelect).click();
  $(OnsiteAppointmentObject.selectEmployer(EmployerData.employername)).click();

  //User Select Location
  $(OnsiteAppointmentObject.locationSelect).click();
  $(OnsiteAppointmentObject.selectLocation(LocationData.sampleOnsiteLocation.title)).click();

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
  $(OnsiteAppointmentObject.onsiteappointmentAddEmployeeListBtn).click();
  browser.pause(timeout)

  //Save Appointment
  $(CalendarObject.appointmentSaveBtn).click();
  browser.pause(timeout)
  $(CalendarVerify.createdSuccessfully).waitForExist(timeout)
  browser.pause(timeout)
})
Then('User create new Onsite Appoinment with new Employer Successfully', () => {
  $(MenuObject.calendar).scrollIntoView()
  $(MenuObject.calendar).click()
  $(CalendarObject.calendarMonthBtn).click();
  $(CalendarObject.selectCalendar(appointmentdata.calendarday, appointmentdata.calendardate)).click();
  browser.pause(timeout);
  // Find all appoinments which contain sample medical type. After that, removing it 
  OnsiteAppointmentObject.findApMonth({ employer: EmployerData.employername, location: LocationData.sampleOnsiteLocation.title }).forEach(elmth => {
    elmth.click();
    browser.pause(timeout);
    assert.equal($(OnsiteAppointmentObject.employerSelect).getText(), EmployerData.employername)
    assert.equal($(OnsiteAppointmentObject.locationSelect).getText().slice(0, 28), LocationData.sampleOnsiteLocation.title);
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

When('User delete Employer have Employee', () => {
  browser.pause(timeout)
  $(MenuObject.employer).scrollIntoView();
  $(MenuObject.employer).click();

  $(EmployerObject.searchBox).click();
  $(EmployerObject.searchBox).setValue(EmployerData.employername);
  browser.keys('Enter');
  $(EmployerObject.deleteBtn).click();
  browser.pause(timeout)
  $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
  $(MedicalTypeObject.yesButtonOfConfirmation).click()
  browser.pause(timeout)
})
Then('User can not delete Employer', () => {
  assert.equal($(EmployerObject.employerPopup).getText(), EmployerData.cannotdeleteemployer);
})
When('User delete Employer do not have Employee', () => {
  browser.pause(timeout)
  $(MenuObject.employer).scrollIntoView();
  $(MenuObject.employer).click();

  $(EmployerObject.searchBox).click();
  $(EmployerObject.searchBox).setValue(EmployerData.employername);
  browser.keys('Enter');
  $(EmployerObject.find(EmployerData.employername)).click();
  $(EmployerObject.employeeTab).click();
  $(EmployerObject.deleteBtn).click();
  browser.pause(timeout)
  $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
  $(MedicalTypeObject.yesButtonOfConfirmation).click()
  browser.pause(timeout)
})
Then('User can delete Employer', () => {
  browser.pause(timeout)
  $(MenuObject.employer).scrollIntoView();
  $(MenuObject.employer).click();

  $(EmployerObject.searchBox).click();
  $(EmployerObject.searchBox).setValue(EmployerData.employername);
  browser.keys('Enter');
  $(EmployerObject.deleteBtn).click();
  browser.pause(timeout)
  $(MedicalTypeObject.yesButtonOfConfirmation).scrollIntoView();
  $(MedicalTypeObject.yesButtonOfConfirmation).click()
  browser.pause(timeout)

  // assert.equal($(EmployerObject.employerPopup).getText(), EmployerData.onsitesuccessmessage);  
})
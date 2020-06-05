import { When, Then } from "cucumber";
import { expect, assert } from "chai";
import { MenuObject } from "../page-object/shared/Menu.po";
import { EmployerData } from "../data/Data.Employer";
import { EmployerObject } from "../page-object/Employers.po.js";
import { appointmentdata } from "../data/Data.Calendar";
import { AppointmentObject } from "../page-object/Calendar.po";

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
  assert.equal($(EmployerObject.employerPopup).getText(), EmployerData.successmessage);
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

/* ELs002 */
When('User input all valid information of Employee', () => {
  $(EmployerObject.employeeTab).click();
  $(EmployerObject.employeeNewBtn).click();
  browser.pause(2000);

  $(EmployerObject.employeeEmail).setValue(appointmentdata.newemployeeemail());
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
  $(AppointmentObject.selectRole(appointmentdata.employeerole));
  $(EmployerObject.employeeIsManager).click();
  $(EmployerObject.employeeIsMainContact).click();

  // $(EmployerObject.saveBtn).click();
})
Then('User can creat new Employee Successfully', () => {
  // $(EmployerObject.searchBox).click();
  // $(EmployerObject.searchBox).setValue();
  // browser.keys('Enter');

  // assert.equal($(EmployerObject.employeeFirstName).getValue());
  // assert.equal($(EmployerObject.employeeLastName).getValue());
  // assert.equal($(EmployerObject.employeeGender).getValue());
  // assert.equal($(EmployerObject.employeeDob).getValue());
  // assert.equal($(EmployerObject.employeeIdType).getValue());
  // assert.equal($(EmployerObject.employeedTypeValue).getValue());
  // assert.equal($(EmployerObject.employeePhone).getValue());
  // assert.equal($(EmployerObject.employeeEmail).getValue());
  // assert.equal($(EmployerObject.employeeStrLn1).getValue());
  // assert.equal($(EmployerObject.employeeStrLn2).getValue());
  // assert.equal($(EmployerObject.employeeSurb).getValue());
  // assert.equal($(EmployerObject.employeeState).getValue());
  // assert.equal($(EmployerObject.employeePostCode).getValue());
  // assert.equal($(EmployerObject.employeeMasterRoleID).getValue());
})

/* ELs003 */
When('User create new Appointment with new Employer', () => {
  $(MenuObject.calendar).click();
  browser.pause(timeout);

})

/* ELs004 */
When('User select access Location tab in Employer', () => {
  $(MenuObject.employer).click();
  browser.pause(timeout);

  $(EmployerObject.searchBox).click();
  $(EmployerObject.searchBox).setValue();
  browser.keys('Enter');

  $(EmployerObject.locationTab).click();
})
Then('User can select location existing in System', () => {

})

/* ELs005 */
When('User create new Onsite Location and blank all field', () => {
  $(MenuObject.employer).click();
  browser.pause(timeout);

  $(EmployerObject.searchBox).click();
  $(EmployerObject.searchBox).setValue();
  browser.keys('Enter');
  $(EmployerObject.onsiteLocationTab).click();
})
Then('User can not create new Onsite Location', () => {
  $(EmployerObject.newOnsiteLocationBtn).click();
  $(EmployerObject.saveBtn).click();
  assert.equal($(EmployerObject.allerRequired).getText())
  $(EmployerObject.onsiteLocation.titleInput).setValue();
  $(EmployerObject.saveBtn).click();
  assert.equal($(EmployerObject.allerRequired).getText())
  $(EmployerObject.onsiteLocation.streetLine1Input).setValue();
  $(EmployerObject.saveBtn).click();
  assert.equal($(EmployerObject.allerRequired).getText())
  $(EmployerObject.onsiteLocation.suburbInput).setValue();
  $(EmployerObject.saveBtn).click();
  assert.equal($(EmployerObject.allerRequired).getText())
  $(EmployerObject.onsiteLocation.stateSelector).setValue();
  $(EmployerObject.saveBtn).click();
  assert.equal($(EmployerObject.allerRequired).getText())
  $(EmployerObject.onsiteLocation.defaultState).setValue();
  $(EmployerObject.saveBtn).click();
  assert.equal($(EmployerObject.allerRequired).getText())
  $(EmployerObject.onsiteLocation.postCodeInput).setValue();
  $(EmployerObject.saveBtn).click();
  assert.equal($(EmployerObject.allerRequired).getText())
})

/* ELs007 */
When('User create new Onsite Appointment with new Onsite Location', () => {

})
Then('User create new Onsite Appoinment Successfully', () => {

})

/* ELs008 */
When('User create New Employee and blank all field', () => {

})
Then('User can not create new Employee', () => {

})

/* ELs009 */
When('User create New Employee and input all valid information', () => {

})
Then('User create New Employee Successfully', () => {

})

/* ELs009 */
When('User create new Appointment with new Employee', () => {

})

/* ELs010 */
When('User create new Onsite Appointment with new Employee', () => {

})
Then('User create new Onsite Appoinment Successfully', () => {

})

/* ELs011 */
When('User select access Medical Type tab in Employer', () => {

})
Then('User can select Medical Type existing in System', () => {

})

/* ELs012 */
When('User select access Role tab in Employer', () => {

})
Then('User can select Role existing in System', () => {

})

/* ELs013 */
When('User select access Supervisor tab in Employer', () => {

})
Then('User can select Supervisor existing in System', () => {

})
Then('User can assign Supervisor to Employee', () => {

})
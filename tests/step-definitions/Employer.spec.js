import { When, Then } from "cucumber";
import { expect } from "chai";
import { MenuObject } from "../page-object/shared/Menu.po";
import { EmployerData } from "../data/Data.Employer";
import { EmployerObject } from "../page-object/Employers.po.js";

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
  $(EmployerObject.searchboxEmployer).click()
  browser.pause(1000)
  $(EmployerObject.searchboxEmployer).setValue(employer.name);
  browser.keys("\uE007");
  browser.pause(2000)
  waitingLoad(EmployerObject.find(employer.name))
  $(EmployerObject.find(employer.name)).scrollIntoView();
  $(EmployerObject.find(employer.name)).click()
  browser.pause(3000)
})

/* ELs001 */
When('User input all valid information of Employer', () => {

})
Then('User can create Employee Scuccessful', () => {

})

/* ELs002 */
When('User input all valid information of Employee', () => {

})
Then('User can creat new Employee Successfully', () => {

})

/* ELs003 */
When('User create new Appointment with new Employer', () => {

})

/* ELs004 */
When('User select access Location tab in Employer', () => {

})
Then('User can select location existing in System', () => {

})

/* ELs005 */
When('User create new Onsite Location and blank all field', () => {

})
Then('User can not create new Onsite Location', () => {

})

/* ELs006 */
When('User create new Onsite Location and input all valid information', () => {

})
Then('User create new Onsite Location Successfully', () => {

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
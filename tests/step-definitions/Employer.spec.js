import { When } from "cucumber";
import { expect } from "chai";
import { MenuObject } from "../page-object/shared/Menu.po";
import { EmployerData } from "../data/Data.Employer";
import { EmployerObject } from "../page-object/Employers.po.js";

function waitingLoad(name) {
  browser.waitUntil(() => {
    return expect($(name).isExisting()).to.be.true
  }, 20000)
}

When('Employer - Choose employer {string}', (num) => {
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

// When('User input all valid information of Employer', () => {
//   browser.pause(1000)
//   $(MenuObject.employer).scrollIntoView()
//   $(MenuObject.employer).click()


// })

// Then('User can create Employee Scuccessfull', () => {

// })

// When('User input all valid information of Employee', () => {

// })
// Then('User can creat new Employee Successfull', () => {

// })
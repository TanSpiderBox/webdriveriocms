import { DataCal } from '../data/Data.Calendar'
const CalObject = {
    menu_Cal: '//*[contains(text(),"Calendar")]',

    //Filter
    drop_CalEyers: '//ng-select[@formcontrolname="employers"]',

    drop_CalLc: '//ng-select[@formcontrolname="locations"]',

    btn_CalAlFt: '//button[contains(text()," Apply Filter ")]',

    btn_CalClFt: '//button[contains(text()," Clear Filter ")]',

    txt_CalEyeeFt: '//input[@formcontrolname="employeeFilter"]',

    //Calendar
    btn_CalPreVw: 'button[mwlcalendarpreviousview]',

    btn_CalNtVw: 'button[mwlcalendarnextview]',

    btn_CalCalTd: 'button[mwlcalendartoday]',

    btn_CalMth: '//button[contains(text(),"MONTH")]',

    btn_CalWk: '//button[contains(text(),"WEEK")]',

    btn_CalDay: '//button[contains(text(),"DAY")]',

    //Create New Appointment Preset 

    btn_CalNwAp: '//button[contains(text()," New Appointment ")]',

    //Employer
    drop_CalNewApEyer: 'ng-select[formcontrolname=employerId]',

    value_Ap_Employer: '//span[text()="Rochell Maffetti"]',

    //Location
    drop_CalNewApLocation: 'ng-select[formcontrolname=locationId]',

    value_Ap_Location: '//span[text()="LocationVVT"]',

    //Medical Type
    drop_CalNewApMedType: 'ng-select[formcontrolname=medicalTypeId]',

    value_Ap_MedType: '//span[text()="TestMedical"]',

    //Role
    drop_CalNewApRole: 'ng-select[formcontrolname=masterRoleId]',

    value_Ap_Role: '//span[text()="New Role"]',

    //Date Time
    txt_CalNewApDate: 'input[formcontrolname=date]',

    drop_CalNewApStartTime: 'ng-select[formcontrolname=startTime]',

    value_Ap_StarTime: '//span[text()="04:00 PM"]',

    drop_CalNewApEndTime: 'ng-select[formcontrolname=endTime]',

    value_Ap_EndTime: '//span[text()="11:00 AM"]',

    //Employee
    drop_CalNewApEyee: 'ng-select[formcontrolname="email"]',

    value_Ap_Employee: '//span[text()="tan+4@spiderbox.design"]',

    //New Employee

    txt_CalNewApEyee: '//ng-select[@formcontrolname="email"]//input',
    
    lbl_AddNew: '//*[@role="option"]//*[text()="Add item"]',

    txt_CalNewApFirstName: 'input[formcontrolname=firstName]',

    txt_CalNewApLastName: 'input[formcontrolname=lastName]',

    drop_CalNewApGender: 'ng-select[formcontrolname=gender]',

    value_CalNewApGender: '//*[text()="Male"]',

    txt_CalNewApDob: 'input[formcontrolname=dob]',

    txt_CalNewAphone: 'input[formcontrolname=phone]',

    txt_CalNewApEmail: 'input[formcontrolname=email]',

    txt_CalNewApStrLn1: 'input[formcontrolname=streetLine1]',

    txt_CalNewApSuburb: 'input[formcontrolname=suburb]',

    txt_CalNewApState: 'ng-select[formcontrolname=state]',

    value_Ap_State: '//*[text()="VIC"]',

    drop_CalNewApPostCode: 'input[formcontrolname=postCode]',

    //Position Department Job Catrgory
    txt_CalNewApPosition: 'input[formcontrolname=position]',

    txt_CalNewApDepartment: 'input[formcontrolname=department]',

    drop_CalNewApJobClass: 'ng-select[formcontrolname=jobCategory]',

    txt_CalNewApNote: 'textarea[formcontrolname=notes]',

    // lbl_CalDay: '(//*[text()="28"])[2]',

    form_ApDetails: '//*[contains(@aria-label,"123456789, from 11:00 AM")]',
    // '//*[text()="Employer_Test - TEST 10 Employee - 0123456789"]',
    // div[role="application"]>div:last-child>mwl-calendar-event-title'

    btn_CalNewApSave: '//button[text()="Save"]',
    btn_CalNewApCancel: '//*[text()="Cancel"]',
}   

const CalVerify = {
    pop_CalSuccess: '//*[contains(@class,"cdk-live-announcer-element")]',
    drop_MedVerify: '//ng-select[@formcontrolname="medicalTypeId"]//span[contains(@class,"ng-value-label")]',

    lbl_ElyerMailVerify: 'tbody[role="rowgroup"]>tr:last-child>td:nth-child(2)',

    lblEmail: '//*[text()="tan+12@spiderbox.design"]',
    lblFirstName: '//*[text()="First Name"]',
    lblLastName: '//*[text()="Last Name"]',
    
}

const OnsiteAppointmentObject = {
  newBtn: "//button[contains(text(), 'New On-site Appointment')]",
  modal: "//modal-container[.//*[contains(text(), 'New On-Site Appointment')] ]",
  employerSelect: "//ng-select[contains(@formcontrolname, 'employerId')]",
  selectEmployer: (name) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + name + "'" + ")] ]"
  },
  locationSelect: "//ng-select[contains(@formcontrolname, 'locationId')]",
  defaultLocation: "//*[contains(@role, 'option')]",
  selectLocation: (title) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + title + "'" + ")] ]"
  },
  medicalTypeSelect: "//ng-select[contains(@formcontrolname, 'medicalTypeId')]",
  selectMedicalType: function(name) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + name + "'" + ")] ]"
  },
  staffSelector: "//ng-select[contains(@formcontrolname, 'staffs')]",
  staffInput: "//ng-select[contains(@formcontrolname, 'staffs')]//input[@role='combobox']",
  selectStaff: function(email) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] and not(.//*[(contains(text(), 'Add item'))]) ]"
  },
  saveBtn: "//app-appointment-onsite-form//button[contains(text(), 'Save')]",
  createdSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been confirmed successfully')]",
  find: (opts = {}) => {
    let appointments = $$("//mwl-calendar-week-view-event//*[contains(@data-calendar-clickable, true) and contains(@style, 'background-color: rgb(23, 162, 184)') and contains(@aria-label, " + "'- " + opts.employer + " -'" + ")]")
    let results = [];
    appointments.forEach(el => {
      el.click()
      browser.pause(3000)
      if (opts.type != undefined) {
        var isType = $("//app-appointment-onsite-form//ng-select[contains(@formcontrolname, 'medicalTypeId')]//*[contains(@class, 'ng-value-label')]").getText() == opts.type
      } else { var isType = true }

      if (opts.employer != undefined) {
        var isEmployer = $("//app-appointment-onsite-form//ng-select[contains(@formcontrolname, 'employerId')]//*[contains(@class, 'ng-value-label')]").getText() == opts.employer
      } else { var isEmployer = true }
      
      if (opts.staff != undefined) {
        var isStaff = $("//app-appointment-onsite-form//ng-select[contains(@formcontrolname, 'staffs')]//*[contains(@class, 'ng-value-label') and text()=" + "'" + opts.staff + "'" + "]")
        .isExisting()
      } else { var isStaff = true }

      if (opts.location != undefined) {
        var isLocation = $("//app-appointment-onsite-form//ng-select[contains(@formcontrolname, 'locationId')]//*[contains(@class, 'ng-value-label') and text()=" + "'" + opts.location + "'" + "]")
        .isExisting()
      } else { var isLocation = true }

      if (isType && isEmployer && isStaff && isLocation) {
        results.push(el)
      }
      $("//app-appointment-onsite-form//button[contains(@aria-label, 'Close')]").click()
      browser.pause(2000)
    })
    return results
  },
  removeBtn: "//app-appointment-onsite-form//button[contains(text(), 'Delete')]",
  successfullyDeleted: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been deleted successfully')]",
}

const AppointmentObject = {
  newBtn: "//button[contains(text(), 'New Appointment')]",
  modal: "//modal-container[.//*[contains(text(), 'New Appointment')] ]",
  employerSelector: "//ng-select[contains(@formcontrolname, 'employerId')]",
  selectEmployer: (name) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + name + "'" + ")] ]"
  },
  locationSelector: "//ng-select[contains(@formcontrolname, 'locationId')]",
  defaultLocation: "//*[contains(@role, 'option')]",
  selectLocation: (title) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + title + "'" + ")] ]"
  },
  medicalTypeSelector: "//ng-select[contains(@formcontrolname, 'medicalTypeId')]",
  selectMedicalType: (name) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + name + "'" + ")] ]"
  },
  emailSelector: "//ng-select[contains(@formcontrolname, 'email')]",
  selectEmail: (email) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
  },
  startTimeSelector: "//ng-select[contains(@formcontrolname, 'startTime')]",
  selectStartTime: (startTime) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + startTime + "'" + ")] ]"
  },
  // firstname: "//*[contains(@formcontrolname, 'firstName')]",
  // lastname: "//*[contains(@formcontrolname, 'lastName')]",
  // genderSelector: "//ng-select[contains(@formcontrolname, 'gender')]",
  // defaultGender: "//*[contains(@role, 'option')]",
  // dob: "//*[contains(@formcontrolname, 'dob')]",
  // defaultDob: "//bs-datepicker-container//*[contains(@role, 'gridcell') and .//*[not(contains(@class, 'is-other-month'))] ]",
  // phone: "//*[contains(@formcontrolname, 'phone')]",
  // streetLine1: "//*[contains(@formcontrolname, 'streetLine1')]",
  // suburb: "//*[contains(@formcontrolname, 'Suburb')]",
  // streetLine1: "//*[contains(@formcontrolname, 'streetLine1')]",
  // stateSelector: "//ng-select[contains(@formcontrolname, 'state')]",
  // defaultState: "//*[contains(@role, 'option')]",
  // postCode: "//*[contains(@formcontrolname, 'postCode')]",
  // roleSelector: "//ng-select[contains(@formcontrolname, 'masterRoleId')]",
  // selectrole: (role) => {
  //   return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + role + "'" + ")] ]"
  // },
  supervisorSelector: "//ng-select[contains(@formcontrolname, 'supervisorId')]",
  selectSupervisor: (email) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
  },
  saveBtn: "//app-appointment-form//button[contains(text(), 'Save')]",
  createdSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been confirmed successfully')]",
  removeBtn: "//app-appointment-form//button[contains(text(), 'Delete')]",
  successfullyDeleted: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been deleted successfully')]",
  find: (opts = {}) => {
    let appointments = $$("//mwl-calendar-week-view-event//*[contains(@data-calendar-clickable, true) and contains(@style, 'background-color: rgb(26, 179, 148)') and contains(@aria-label, " + "'- " + opts.employer + " -'" + ")]")
    let results = [];
    appointments.forEach(el => {
      el.click()
      browser.pause(3000)
      if (opts.supervisor != undefined) {
        var isSupervisor = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'supervisorId')]//*[contains(@class, 'ng-value-label')]").getText() == opts.supervisor
      } else { var isSupervisor = true }

      if (opts.employer != undefined) {
        var isEmployer = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'employerId')]//*[contains(@class, 'ng-value-label')]").getText() == opts.employer
      } else { var isEmployer = true }

      if (opts.location != undefined) {
        var isLocation = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'locationId')]//*[contains(@class, 'ng-value-label')]").getText() == opts.location
      } else { var isLocation = true }

      if (isEmployer && isSupervisor && isLocation) {
        results.push(el)
      }
      $("//app-appointment-form//button[contains(@aria-label, 'Close')]").click()
      browser.pause(2000)
    })
    return results
  },
  updateBtn: "//app-appointment-form//button[contains(text(), 'Update')]",
  removeBtn: "//app-appointment-form//button[contains(text(), 'Delete')]",
  successfullyDeleted: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been deleted successfully')]",
}

export { CalObject, CalVerify, OnsiteAppointmentObject, AppointmentObject }

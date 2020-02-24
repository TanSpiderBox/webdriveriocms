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

  //Location
  drop_CalNewApLocation: 'ng-select[formcontrolname=locationId]',

  //Medical Type
  drop_CalNewApMedType: 'ng-select[formcontrolname=medicalTypeId]',

  //Role
  drop_CalNewApRole: 'ng-select[formcontrolname=masterRoleId]',

  //Date Time
  txt_CalNewApDate: 'input[formcontrolname=date]',

  drop_CalNewApStartTime: 'ng-select[formcontrolname=startTime]',

  drop_CalNewApEndTime: 'ng-select[formcontrolname=endTime]',

  //Employee
  drop_CalNewApEyee: 'ng-select[formcontrolname="email"]',

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

  drop_CalNewApPostCode: 'input[formcontrolname=postCode]',

  //Position Department Job Catrgory
  txt_CalNewApPosition: 'input[formcontrolname=position]',

  txt_CalNewApDepartment: 'input[formcontrolname=department]',

  drop_CalNewApJobClass: 'ng-select[formcontrolname=jobCategory]',

  txt_CalNewApNote: 'textarea[formcontrolname=notes]',

  btn_CalNewApSave: '//button[contains(text(),"Save")]',

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
  selectMedicalType: function (name) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + name + "'" + ")] ]"
  },
  staffSelector: "//ng-select[contains(@formcontrolname, 'staffs')]",
  staffInput: "//ng-select[contains(@formcontrolname, 'staffs')]//input[@role='combobox']",
  selectStaff: function (email) {
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
  publicBtn: "//*[@formcontrolname='timeslotEnable']/label/div",
  addroomBtn: "//*[text()='Add Room']",
  slottimeTxt: '//details//input[@name="slotTime"]',
  timeslotBtn: "//*[contains(@class,'timeslot-grid ng-star-inserted')]/div",
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
  selectLocation: (location) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + location + "'" + ")] ]"
  },
  medicalTypeSelector: "//ng-select[contains(@formcontrolname, 'medicalTypeId')]",
  selectMedicalType: (medicaltype) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + medicaltype + "'" + ")] ]"
  },
  emailSelector: "//ng-select[contains(@formcontrolname, 'email')]",
  selectEmail: (email) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
  },
  startTimeSelector: "//ng-select[contains(@formcontrolname, 'startTime')]",
  selectStartTime: (startTime) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + startTime + "'" + ")] ]"
  },
  selectState: function (state) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + state + "'" + ")] ]"
  },
  selectRole: function (role) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + role + "'" + ")] ]"
  },
  selectGender: function (gender) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + gender + "'" + ")] ]"
  },

  supervisorSelector: "//ng-select[contains(@formcontrolname, 'supervisorId')]",
  selectSupervisor: (email) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
  },
  saveBtn: "//app-appointment-form//button[contains(text(), 'Save')]",
  createdSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been confirmed successfully')]",
  removeBtn: "//app-appointment-form//button[contains(text(), 'Delete')]",
  successfullyDeleted: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been deleted successfully')]",

  findConf: (optsConf = {}) => {
    let appointmentConf = $$("//mwl-calendar-week-view-event//*[contains(@data-calendar-clickable, true) and contains(@style, 'background-color: rgb(220, 53, 69)') and contains(@aria-label, " + "'- " + optsConf.employer + " -'" + ")]")
    let resultsConf = [];
    appointmentConf.forEach(elConf => {
      elConf.click()
      browser.pause(3000)
      if (optsConf.type != undefined) {
        var isType = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'medicalTypeId')]//*[contains(@class, 'ng-value-label')]").getText() == optsConf.type
      } else { var isType = true }

      if (optsConf.employer != undefined) {
        var isEmployer = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'employerId')]//*[contains(@class, 'ng-value-label')]").getText() == optsConf.employer
      } else { var isEmployer = true }

      if (optsConf.staff != undefined) {
        var isStaff = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'staffs')]//*[contains(@class, 'ng-value-label') and text()=" + "'" + optsConf.staff + "'" + "]")
          .isExisting()
      } else { var isStaff = true }

      if (optsConf.location != undefined) {
        var isLocation = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'locationId')]//*[contains(@class, 'ng-value-label') and text()=" + "'" + optsConf.location + "'" + "]")
          .isExisting()
      } else { var isLocation = true }

      if (isType && isEmployer && isStaff && isLocation) {
        resultsConf.push(elConf)
      }
      $("//app-appointment-form//button[contains(@aria-label, 'Close')]").click()
      browser.pause(2000)
    })
    return resultsConf
  },

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

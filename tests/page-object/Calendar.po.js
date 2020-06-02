const CalendarObject = {
  //Filter
  calendarApplyFilterBtn: '//button[contains(text()," Apply Filter ")]',
  calendarClearFileterBtn: '//button[contains(text()," Clear Filter ")]',
  calendarEmployeeInput: '//input[@formcontrolname="employeeFilter"]',

  //Calendar
  calendarPreviousBtn: 'button[mwlcalendarpreviousview]',
  calendarNextBtn: 'button[mwlcalendarnextview]',
  calendarTodayBtn: 'button[mwlcalendartoday]',
  calendarMonthBtn: '//button[contains(text(),"MONTH")]',
  calendarWeekBtn: '//button[contains(text(),"WEEK")]',
  calendarDayBtn: '//button[contains(text(),"DAY")]',
  selectCalendar: (calendarday, calendardate) => {
    return "//*[contains(@aria-label," + "'" + calendardate + "'" + ")]//*[contains(text()," + "'" + calendarday + "'" + ")]"
  },

  //Employee
  ememployeeSelect: '//ng-select[@formcontrolname="email"]//span[@class="ng-star-inserted"]',
  employeeFirstNameInput: 'input[formcontrolname=firstName]',
  employeeLastNameInput: 'input[formcontrolname=lastName]',
  employeeDoBInput: 'input[formcontrolname=dob]',
  employeePhoneInput: 'input[formcontrolname=phone]',
  employeeStrLn1Input: 'input[formcontrolname=streetLine1]',
  employeeSuburbInput: 'input[formcontrolname=suburb]',
  employeePostCodeInput: 'input[formcontrolname=postCode]',
  employeePositionInput: 'input[formcontrolname=position]',
  employeeDepartmentInput: 'input[formcontrolname=department]',
  employeeNoteInput: 'textarea[formcontrolname=notes]',

  //Appointment
  appointmentDateInput: 'input[formcontrolname=date]',
  appointmentSaveBtn: '//button[contains(@class,"btn-primary") and (text()=" Save ")]',
  appointmentSaveAddBtn: "//button[contains(@aria-controls, 'add-to-calendar')]",
  appointmentCancelBtn: '//*[text()="Cancel"]',
  appointmentUpdateBtn: "//app-appointment-form//button[contains(text(), 'Update')]",
  appointmentRemoveBtn: "//button[contains(text(), 'Delete')]",
}

const CalendarVerify = {
  createdSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been confirmed successfully')]",
  deletedSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been deleted successfully')]",
  updateSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Appointment has been updated successfully')]",
}

const OnsiteAppointmentObject = {
  appointmentNewOnsiteBtn: "//button[contains(text(), 'New On-site Appointment')]",
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

  employeeDetails: "//*[contains(text(),'Employee details')]",
  emailSelector: "//*[contains(@formcontrolname, 'email')]",
  selectEmail: (email) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
  },
  emailInput: "//ng-select[@formcontrolname='email']//input",

  startTimeSelector: "//ng-select[contains(@formcontrolname, 'startTime')]",
  selectStartTime: (startTime) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + startTime + "'" + ")] ]"
  },

  endTimeSelector: "ng-select[formcontrolname=endTime]",
  selectEndTime: (endTime) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + endTime + "'" + ")] ]"
  },

  stateSelector: "ng-select[formcontrolname=state]",
  selectState: function (state) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + state + "'" + ")] ]"
  },

  masterRoleSelector: 'ng-select[formcontrolname=masterRoleId]',
  selectRole: function (role) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + role + "'" + ")] ]"
  },

  genderSelector: "ng-select[formcontrolname=gender]",
  selectGender: function (gender) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + gender + "'" + ")] ]"
  },

  supervisorSelector: "//ng-select[contains(@formcontrolname, 'supervisorId')]",
  selectSupervisor: (email) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
  },
  timeslotSelector: '//ng-select[@formcontrolname="slotId"]',
  selectTimSlot: (timeslot) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + timeslot + "'" + ")] ]"
  },
  selectRoom: (room) => {
    return "//label[@for='slotTime']//*[contains(text()," + "'" + room + "'" + ")]"
  },
  verifyName: (firstname, lastname) => {
    return "//*[contains(@class,'list-group')]//*[contains(text()," + "'" + firstname + ' ' + lastname + "'" + ")]"
  },
  verifyPhone: (phone) => {
    return "//*[contains(@class,'list-group')]//*[contains(text()," + "'" + phone + "'" + ")]"
  },
  verifyemail: (email) => {
    return "//*[contains(@class,'list-group')]//*[contains(text()," + "'" + email + "'" + ")]"
  },

  verifyaddress: (address) => {
    return "//*[contains(@class,'list-group')]//*[contains(text()," + "'" + address + "'" + ")]"
  },

  verifytimeslot: (timeslot, room) => {
    return "//*[contains(@class,'list-group')]//*[contains(text()," + "'" + timeslot + ' ' + '(' + room + ')' + "'" + ")]"
  },

  findApMonth: (Mnthopts = {}) => {
    let monthappointments = $$("//mwl-calendar-open-day-events//*[contains(@data-calendar-clickable, true) and contains(@style, 'background-color: rgb(23, 162, 184)')]/following-sibling::mwl-calendar-event-title[contains(@aria-label," + "'- " + Mnthopts.employer + " -'" + ")]");
    let results = [];
    monthappointments.forEach(elmth => {
      elmth.click()
      browser.pause(3000)
      if (Mnthopts.type != undefined) {
        var isType = $("//app-appointment-onsite-form//ng-select[contains(@formcontrolname, 'medicalTypeId')]//*[contains(@class, 'ng-value-label')]").getText() == Mnthopts.type
      } else { var isType = true }

      if (Mnthopts.employer != undefined) {
        var isEmployer = $("//app-appointment-onsite-form//ng-select[contains(@formcontrolname, 'employerId')]//*[contains(@class, 'ng-value-label')]").getText() == Mnthopts.employer
      } else { var isEmployer = true }

      if (Mnthopts.staff != undefined) {
        var isStaff = $("//app-appointment-onsite-form//ng-select[contains(@formcontrolname, 'staffs')]//*[contains(@class, 'ng-value-label') and text()=" + "'" + Mnthopts.staff + "'" + "]")
          .isExisting()
      } else { var isStaff = true }

      if (Mnthopts.location != undefined) {
        var isLocation = $("//app-appointment-onsite-form//ng-select[contains(@formcontrolname, 'locationId')]//*[contains(@class, 'ng-value-label') and text()=" + "'" + Mnthopts.location + "'" + "]")
          .isExisting()
      } else { var isLocation = true }

      if (isType && isEmployer && isStaff && isLocation) {
        results.push(elmth)
      }
      $("//app-appointment-onsite-form//button[contains(@aria-label, 'Close')]").click()
      browser.pause(2000)
    })
    return results
  },

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
  onsiteappointmentEnableBtn: "//*[@formcontrolname='timeslotEnable']/label/div",
  onsiteappointmentPublicBtn: "//*[@formcontrolname='publicAvailability']/label/div",
  onsiteappointmentAddRoomBtn: "//*[text()=' Add Room ']",
  onsiteappointmentSlottimeTxt: '//details//input[@name="slotTime"]',
  onsiteappointmentSlottimBtn: "//*[contains(@class,'timeslot-grid ng-star-inserted')]/div",
  onsiteappointmentAddEmployeeListBtn: "//button[contains(text(),' Add to Employee List ')]",
  timeslotslected: "//*[contains(@class,'timeslot-grid')]//*[contains(@class,'slot btn-success')]",
  errorlbl: '//*[@class="form-group"]//*[contains(@class,"text-danger")]',
}

const AppointmentObject = {
  appointmentNewBtn: "//button[contains(text(), 'New Appointment')]",
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

  staffSelector: "//ng-select[contains(@formcontrolname, 'staffs')]",
  staffInput: "//ng-select[contains(@formcontrolname, 'staffs')]//input[@role='combobox']",
  selectStaff: function (email) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] and not(.//*[(contains(text(), 'Add item'))]) ]"
  },

  emailSelector: "//*[contains(@formcontrolname, 'email')]",
  selectEmail: (email) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
  },
  emailInput: "//ng-select[@formcontrolname='email']//input",

  startTimeSelector: "//ng-select[contains(@formcontrolname, 'startTime')]",
  selectStartTime: (startTime) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + startTime + "'" + ")] ]"
  },

  endTimeSelector: "ng-select[formcontrolname=endTime]",
  selectEndTime: (endTime) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + endTime + "'" + ")] ]"
  },

  stateSelector: "ng-select[formcontrolname=state]",
  selectState: function (state) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + state + "'" + ")] ]"
  },

  masterRoleSelector: 'ng-select[formcontrolname=masterRoleId]',
  selectRole: function (role) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + role + "'" + ")] ]"
  },

  genderSelector: "ng-select[formcontrolname=gender]",
  selectGender: function (gender) {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + gender + "'" + ")] ]"
  },

  supervisorSelector: "//ng-select[contains(@formcontrolname, 'supervisorId')]",
  selectSupervisor: (email) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
  },
  findApMonth: (Mnthopts = {}) => {
    let monthappointments = $$("//mwl-calendar-open-day-events//*[contains(@data-calendar-clickable, true) and contains(@style, 'background-color: rgb(26, 179, 148)')]/following-sibling::mwl-calendar-event-title[contains(@aria-label," + "'- " + Mnthopts.employer + " -'" + ")]");
    let results = [];
    monthappointments.forEach(elmth => {
      elmth.click()
      browser.pause(3000)
      if (Mnthopts.supervisor != undefined) {
        var isSupervisor = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'supervisorId')]//*[contains(@class, 'ng-value-label')]").getText() == Mnthopts.supervisor
      } else { var isSupervisor = true }

      if (Mnthopts.employer != undefined) {
        var isEmployer = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'employerId')]//*[contains(@class, 'ng-value-label')]").getText() == Mnthopts.employer
      } else { var isEmployer = true }

      if (Mnthopts.location != undefined) {
        var isLocation = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'locationId')]//*[contains(@class, 'ng-value-label')]").getText() == Mnthopts.location
      } else { var isLocation = true }

      if (Mnthopts.employee != undefined) {
        var isEmployee = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'email')]//*[contains(@class, 'ng-value-label') and text()=" + "'" + Mnthopts.employee + "'" + "]")
      } else { var isEmployee = true }

      if (isEmployer && isSupervisor && isLocation && isEmployee) {
        results.push(elmth)
      }
      $("//app-appointment-form//button[contains(@aria-label, 'Close')]").click()
      browser.pause(2000)
    })
    return results
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

      if (opts.employee != undefined) {
        var isEmployee = $("//app-appointment-form//ng-select[contains(@formcontrolname, 'email')]//*[contains(@class, 'ng-value-label') and text()=" + "'" + opts.employee + "'" + "]")
      } else { var isEmployee = true }

      if (isEmployer && isSupervisor && isLocation && isEmployee) {
        results.push(el)
      }
      $("//app-appointment-form//button[contains(@aria-label, 'Close')]").click()
      browser.pause(2000)
    })

    return results
  },
}

export { CalendarObject, CalendarVerify, OnsiteAppointmentObject, AppointmentObject }
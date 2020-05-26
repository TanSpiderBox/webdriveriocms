const StaffObject = {
  newButton: "//button[contains(text(), 'New Staff')]",
  firstNameInput: "//app-staff-form//input[@formcontrolname='firstName']",
  lastNameInput: "//app-staff-form//input[@formcontrolname='lastName']",
  genderSelector: "//app-staff-form//ng-select[contains(@formcontrolname, 'gender')]",
  selectGender: (gender) => {
    return "//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + gender + "'" + ")] ]"
  },
  dob: "//app-staff-form//*[contains(@formcontrolname, 'dob')]",
  defaultDob: "//bs-datepicker-container//*[contains(@role, 'gridcell') and .//*[not(contains(@class, 'is-other-month'))] ]",
  phone: "//app-staff-form//*[contains(@formcontrolname, 'phone')]",
  email: "//app-staff-form//*[contains(@formcontrolname, 'email')]",
  saveBtn: "//modal-container//button[contains(text(), 'Save')]",
  successfullyCreated: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Staff has been saved successfully')]",
  successfullyDeleted: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Staff has been deleted successfuly')]",
  failedDelete: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Cannot delete staff with existing appointments')]",
  searchInput: "//app-search-box//input",
  find: (email) => {
    return "//table//tr[.//td[contains(@class, 'mat-column-email') and contains(text() , " + "'" + email + "'" + ")] ]"
  },
  removeBtn: "//button/i[contains(text(), 'clear')]",
  yesButtonOfConfirmation: "//app-confirmation//button[contains(text(), 'Yes')]",

  selectCalendar: (date) => {
    return "//*[contains(@class,'day-of-week')]//*[contains(text()," + "'" + date + "'" + ")]"
  },
  selectAppointment: (time) => {
    return "//*[contains(@class,'appt-item-header')]//*[contains(text()," + "'" + time + "'" + ")]/following-sibling::div"
  },
  selectForm: (form) => {
    return "//*[contains(@class,'btn')]//*[contains(text()," + "'" + form + "'" + ")]"
  },
  backBtn: "//*[contains(text(),'BACK')]",
  acceptBtn: "//*[contains(text(),'ACCEPT')]",
  absentBTN: "//app-medical-staff-appt-employee-item//*[contains(text(),' ABSENT ')]",
  startsessionBtn: "//app-medical-staff-appt-employee-item//*[contains(text(),' START SESSION ')]",
  selectEmployee: (employee) => {
    return "//app-medical-staff-appt-employee-item//*[contains(@class,'fa fa-user')]/parent::span[contains(text()," + "'" + employee + "'" + ")]"
  },
  medicalform: "//*[contains(@class,'medical-forms')]",
  presentBtn: "//app-medical-staff-appt-employee-item//*[contains(text(),'PRESENT')]",
  newwalkinBtn: "//app-medical-staff-layout//*[contains(@class,'fas fa-plus walk-in')]",
  staffusername: '//*[@formcontrolname="email"]',
  staffpassword: '//*[@formcontrolname="password"]',
  staffloginBtn : '//*[@type="submit"]',
  stafflogoutBtn: "//*[contains(@class,'fa fa-sign-out log-out')]",
}

export { StaffObject }

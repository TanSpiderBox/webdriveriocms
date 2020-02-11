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
}

export { StaffObject }

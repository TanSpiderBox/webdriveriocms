const EyersObj = {
  menu_Eyers: '//*[text()="Employers"]',

  btn_NwEyers: '//button[text()=" New Employer "]',

  txt_EyersName: 'input[formcontrolname="name"]',

  txt_EyersPhone: 'input[formcontrolname="phone"]',

  txt_EyersEmail: 'input[formcontrolname="email"]',

  txt_EyersStrLn1: 'input[formcontrolname="streetLine1"]',

  txt_EyersStrLn2: 'input[formcontrolname="streetLine2"]',

  txt_EyersSuburb: 'input[formcontrolname="suburb"]',

  txt_EyersState: 'ng-select[formcontrolname="state"]',

  txt_EyersPostCode: 'input[formcontrolname="postCode"]',

  txt_EyersSecrect: 'input[formcontrolname="secret"]',

  lbl_EyersURL: '//label[text()="Register Url"]/following-sibling::input',

  btn_EyersClose: 'button[aria-label="Close"]',

  btn_EyersCancel: '//button[text()="Cancel"]',

  btn_EyersSave: '//button[text()="Save"]',



  tab_EyersLc: '//a[text()="Locations"]',

  tab_EloyerOSL: '//a[text()="On-Site Locations"]',

  btn_EloyerNOSL: '//button[text()=" New On-Site Location "]',

  txt_NOSLTitile: 'input[formcontrolname="title"]',

  txt_NOSLStrLn1: '//div[@class="modal-content"]//input[@formcontrolname="streetLine1"]',

  txt_NOSLStrLn2: '//div[@class="modal-content"]//input[@formcontrolname="streetLine2"]',

  txt_NOSLSuburb: '//div[@class="modal-content"]//input[@formcontrolname="Suburb"]',

  txt_NOSLState: '//div[@class="modal-content"]//ng-select[@formcontrolname="state"]',

  txt_NOSLPostCode: '//div[@class="modal-content"]//input[@formcontrolname="postCode"]',

  lbl_NOSLAlert: '//div[@role="alert"]',

  lbl_NOSLInvdFb: '//div[@class="invalid-feedback ng-star-inserted"]',

  lbl_NOSLInvdFbStrLn1: '//div[@class="modal-content"]//input[@formcontrolname="streetLine1"]/following-sibling::div',

  lbl_NOSLInvdFbStrLn2: '//div[@class="modal-content"]//input[@formcontrolname="streetLine2"]/following-sibling::div',

  lbl_NOSLInvdFbSuburb: '//div[@class="modal-content"]//input[@formcontrolname="Suburb"]/following-sibling::div',

  tabmenu_EyerEyees: '//a[text()="Employees"]',

  btn_NwEyee: '//button[text()=" New Employee "]',

  txt_EyeeFirstName: 'input[formcontrolname=firstName]',

  txt_EyeeLastName: 'input[formcontrolname=lastName]',

  txt_EyeeGender: 'ng-select[formcontrolname=gender]',

  txt_EyeeDob: 'input[formcontrolname=dob]',

  txt_EyeeIdType: 'ng-select[formcontrolname=idType]',

  txt_EyeeIdTypeValue: 'input[formcontrolname=idTypeValue]',

  txt_EyeePhone: '//div[@class="modal-content"]//input[@formcontrolname="phone"]',

  txt_EyeeEmail: '//div[@class="modal-content"]//input[@formcontrolname="email"]',

  txt_EyeeStrLn1: '//div[@class="modal-content"]//input[@formcontrolname="streetLine1"]',

  txt_EyeeStrLn2: '//div[@class="modal-content"]//input[@formcontrolname="streetLine2"]',

  txt_EyeeSurb: '//div[@class="modal-content"]//input[@formcontrolname="Suburb"]',

  txt_EyeeState: '//div[@class="modal-content"]//ng-select[@formcontrolname="state"]',

  txt_EyeePostCode: '//div[@class="modal-content"]//input[@formcontrolname="postCode"]',

  txt_EyeeMasterRoleID: '//ng-select[@formcontrolname="masterRoleId"]',

  txt_EyeeIsManager: '//div[@class="modal-content"]//mat-checkbox[@formcontrolname="isManager"]',

  txt_EyeeIsMainContact: '//div[@class="modal-content"]//mat-checkbox[@formcontrolname="isMainContact"]',

  txt_EyeeMedicalTypes: '//a[text()="Medical Types"]',

  tab_EyerRoles: '//a[text()="Roles"]',

  btn_EloyerFrist: '//a[text()="First"]',

  btn_EloyerPrevious: '//a[text()="Previous"]',

  btn_EloyerNext: '//a[text()="Next"]',

  btn_EloyerLast: '//a[text()="Last"]',

  btn_ElEdit: '//*[text()="create"]',
}

const EmployerObject = {
  find: (name) => {
    return "//tr/td[contains(@class, 'cdk-column-name')]//*[contains(text(), " + "'" + name + "'" + ")]"
  },
  updatedSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Updated successfully')]",

  // Employee
  employeeTab: "//app-employer-details//a[contains(text(), 'Employee') and contains(@class, 'nav-link')]",
  employeesSection: "//app-employee-list",
  findEmployee: (email) => {
    return "//app-employee-list//tr[.//*[contains(@class, 'mat-column-email') and contains(text(), " + "'" + email + "'" + ")] ]//td[contains(@class, 'mat-column-name')]"
  },
  findEmployeeVerify: (opts = {}) => {
    return "//app-employee-list//tr[.//*[contains(@class, 'mat-column-email') and contains(text(), " + "'" + opts.email + "'" + ")] and .//*[contains(@class, 'mat-column-name') and .//*[contains(text(), " + "'" + opts.name + "'" + ")] ] and .//*[contains(@class, 'mat-column-phone') and contains(text(), " + "'" + opts.phone + "'" + ") ] ]"
  },
  // Employee show
  employee: {
    editBtn: "//app-employee-details//button[contains(text(), 'Edit')]",
    supervisorSelector: "//app-employee-details//ng-select[contains(@formcontrolname, 'supervisorId')]",
    findSupervisor: (email) => {
      return "//ng-select[contains(@formcontrolname, 'supervisorId')]//*[contains(@role, 'option') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
    },
    saveBtn: "//*[contains(text(),'Save')]",
    clearSupervisor: "//app-employee-details//ng-select[contains(@formcontrolname, 'supervisorId')]//*[contains(@title, 'Clear all')]",
  },

  // Medical Type
  medicalTypeTab: "//app-employer-details//a[contains(text(), 'Medical Types') and contains(@class, 'nav-link')]",
  medicalTypesSection: "//app-employer-medical-types",
  findMedicalType: (name) => {
    return "//app-employer-medical-types//*[contains(@class, 'employer-medical-type-item') and .//*[contains(text(), " + "'" + name + "'" + ")] ]"
  },

  // Supervisor
  supervisorTab: "//app-employer-details//a[contains(text(), 'Supervisor') and contains(@class, 'nav-link')]",
  supervisorSection: "//app-employer-supervisor",
  findSupervisor: (email) => {
    return "//app-employer-supervisor//*[contains(@class, 'assignable-item') and .//*[contains(text(), " + "'" + email + "'" + ")] ]"
  },
  failedUnAssign: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Supervisor is already assigned to an employee')]",

  // Onsite location
  onsiteLocationTab: "//app-employer-details//a[contains(text(), 'On-Site Locations') and contains(@class, 'nav-link')]",
  onsiteLocationSection: "//app-onsite-locations-list",
  newOnsiteLocationBtn: "//app-onsite-locations-list//button[contains(text(), 'New On-Site Location')]",
  findOnsiteLocation: (title) => {
    return "//app-onsite-locations-list//tr[.//button[contains(text()," + "'" + title + "'" + ")] ]//button[*[text()='clear']]"
  },
  nextOnsiteLocation: "//app-onsite-locations-list//li[contains(@class, 'pagination-next') and not(contains(@class, 'disabled'))]//a[contains(@class, 'page-link')]",
  onsiteLocation: {
    titleInput: "//app-onsite-location-form//input[@formcontrolname='title']",
    streetLine1Input: "//app-onsite-location-form//input[@formcontrolname='streetLine1']",
    suburbInput: "//app-onsite-location-form//input[@formcontrolname='suburb']",
    stateSelector: "//app-onsite-location-form//ng-select[@formcontrolname='state']",
    defaultState: "//*[contains(@role, 'option')]",
    postCodeInput: "//app-onsite-location-form//input[@formcontrolname='postCode']",
    saveBtn: "//*[contains(text(),'Save')]",
    createSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Updated successfully')]",
    failedDelete: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'This onsite location has appointments')]",
  },
  // Location
  locationTab: "//app-employer-details//a[contains(text(), 'Locations') and contains(@class, 'nav-link')]",
  findLocation: (title) => {
    return "//app-employer-locations//*[contains(@class, 'employer-location-item') and h4[text()=" + "'" + title + "'" + "] ]"
  },
  roleSelector: "//ng-select[@formcontrolname='masterRoleId']",
  roleInput: "//ng-select[@formcontrolname='masterRoleId']//input",
  EditEmployeeBtn: '//*[text()="create"]',
  searchboxEmployer: '//div[contains(@class, "searchbox-container")]/input',
  locationFailedUnassign: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'This onsite location has appointments')]",
  deleteBtn: "//button[*[text()='clear']]",
  yesButtonOfConfirmation: "//app-confirmation//button[contains(text(), 'Yes')]",
  nextPage: "//li[contains(@class, 'pagination-next') and not(contains(@class, 'disabled'))]//a[contains(@class, 'page-link')]",
}

export { EyersObj, EmployerObject }
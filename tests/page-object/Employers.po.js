const EmployerObject = {
  find: (name) => {
    return "//tr/td[contains(@class, 'cdk-column-name')]//*[contains(text(), " + "'" + name + "'" + ")]"
  },
  updatedSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Updated successfully')]",

  //Create new Employer
  newEmployerBtn: '//button[text()=" New Employer "]',
  employerName: 'input[formcontrolname="name"]',
  employerPhone: 'input[formcontrolname="phone"]',
  employerEmail: 'input[formcontrolname="email"]',
  employerStrLn1: 'input[formcontrolname="streetLine1"]',
  employerStrLn2: 'input[formcontrolname="streetLine2"]',
  employerSuburb: 'input[formcontrolname="suburb"]',
  employerState: 'ng-select[formcontrolname="state"]',
  stateSelector: (state) => {
    return "//ng-select[@formcontrolname='state']//*[contains(text()," + "'" + state + "'" + ")]"
  },
  employerPostCode: 'input[formcontrolname="postCode"]',
  employerSecrect: 'input[formcontrolname="secret"]',
  employerOnsitePassword: 'input[formcontrolname="onsitePassword"]',
  employersURL: '//label[text()="Register Url"]/following-sibling::input',

  closeBtn: '//button[contains(@aria-label,"Close")]',
  cancelBtn: '//button[contains(text(),"Cancel")]',
  saveBtn: '//button[contains(text(),"Save")]',

  employerPopup: '//snack-bar-container/simple-snack-bar/span',

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

  //Create new Employee
  employeeNewBtn: '//button[text()=" New Employee "]',
  employeeFirstName: 'input[formcontrolname=firstName]',
  employeeLastName: 'input[formcontrolname=lastName]',
  employeeGender: 'ng-select[formcontrolname=gender]',
  employeeDob: 'input[formcontrolname=dob]',
  employeeIdType: 'ng-select[formcontrolname=idType]',
  selectIdType: (IdType) => {
    return "//ng-select[@formcontrolname='idType']//*[contains(text()," + "'" + IdType + "'" + ")]"
  },
  employeedTypeValue: 'input[formcontrolname=idTypeValue]',
  employeePhone: '//div[@class="modal-content"]//input[@formcontrolname="phone"]',
  employeeEmail: '//div[@class="modal-content"]//input[@formcontrolname="email"]',
  employeeStrLn1: '//div[@class="modal-content"]//input[@formcontrolname="streetLine1"]',
  employeeStrLn2: '//div[@class="modal-content"]//input[@formcontrolname="streetLine2"]',
  employeeSurb: '//div[@class="modal-content"]//input[@formcontrolname="suburb"]',
  employeeState: '//div[@class="modal-content"]//ng-select[@formcontrolname="state"]',
  employeePostCode: '//div[@class="modal-content"]//input[@formcontrolname="postCode"]',
  employeeMasterRoleID: '//ng-select[@formcontrolname="masterRoleId"]',
  employeeIsManager: '//mat-checkbox[@formcontrolname="isManager"]//div[contains(@class,"mat-checkbox-inner")]',
  employeeIsMainContact: '//mat-checkbox[@formcontrolname="isMainContact"]//div[contains(@class,"mat-checkbox-inner")]',

  verifyemployeePhone: '//input[@formcontrolname="phone"]',
  verifyemployeeEmail: '//input[@formcontrolname="email"]',
  verifyemployeeStrLn1: '//input[@formcontrolname="streetLine1"]',
  verifyemployeeStrLn2: '//input[@formcontrolname="streetLine2"]',
  verifyemployeeSurb: '//input[@formcontrolname="suburb"]',
  verifyemployeeState: '//ng-select[@formcontrolname="state"]',
  verifyemployeePostCode: '//input[@formcontrolname="postCode"]',
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
  findOnsiteLocation: (onsiteLocation) => {
    return "//app-onsite-locations-list//tr[.//button[contains(text()," + "'" + onsiteLocation + "'" + ")] ]//button[*[text()='clear']]"
  },
  nextOnsiteLocation: "//app-onsite-locations-list//li[contains(@class, 'pagination-next') and not(contains(@class, 'disabled'))]//a[contains(@class, 'page-link')]",
  onsiteLocation: {
    titleInput: "//app-onsite-location-form//input[@formcontrolname='title']",
    streetLine1Input: "//app-onsite-location-form//input[@formcontrolname='streetLine1']",
    streetLine2Input: "//app-onsite-location-form//input[@formcontrolname='streetLine2']",
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
  findLocation: (location) => {
    return "//app-employer-locations//*[contains(@class, 'employer-location-item') and h4[contains(text()," + "'" + location + "'" + ")]]"
  },

  //Role
  roleTab: "//app-employer-details//a[contains(text(), 'Role') and contains(@class, 'nav-link')]",
  findRole: (role) => {
    return "//app-employer-roles//*[contains(@class, 'employer-master-role-item') and div[text()=" + "'" + role + "'" + "] ]"
  },
  roleInput: "//ng-select[@formcontrolname='masterRoleId']//input",

  verify: "//*[contains(@class, 'bg-primary')]",
  allerRequired: "//*[contains(text(),'Please review required fields!')]",

  EditEmployeeBtn: '//*[text()="create"]',
  searchBox: '//div[contains(@class, "searchbox-container")]/input',
  locationFailedUnassign: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'This onsite location has appointments')]",
  deleteBtn: "//button[*[text()='clear']]",
  yesButtonOfConfirmation: "//app-confirmation//button[contains(text(), 'Yes')]",
  nextPage: "//li[contains(@class, 'pagination-next') and not(contains(@class, 'disabled'))]//a[contains(@class, 'page-link')]",
  employerEditBtn: "//button[contains(text(),'Edit')]",
}

export { EmployerObject }
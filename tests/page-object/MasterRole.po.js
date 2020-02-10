const MasterRoleObject = {
  title: 'h2=Master Roles',
  newButton: "//button[contains(text(), 'New Master Role')]",
  saveButton: "//modal-container//button[contains(text(), 'Save')]",
  errorNewMasterRole: "//modal-container//*[contains(@class, 'alert-danger')]",
  nameInput: "//modal-container//input[@formcontrolname='name']",
  successfullySaved: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Successfully saved')]",
  successfullyDeleted: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Successfully deleted')]",
  FailedDelete: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Cannot delete master role assigned to employers')]",
  searchInput: "//app-search-box//input",
  editModal: "//modal-container[.//h4[contains(text(), 'Edit Master Role')]]",
  confirmAlert: "//app-confirmation",
  yesButtonOfConfirmation: "//app-confirmation//button[contains(text(), 'Yes')]",
  nameTableHeader: "//th[@role='columnheader' and //*[contains(text(), 'Name')]]",
  trRoles: "//table//tbody//tr[.//button/i[contains(text(), 'clear')]]",
  masterRoleMenu: "//a[contains(@class, 'menu__link') and .//*[contains(text(), 'Master Roles')]]",
  employerMenu: "//a[contains(@class, 'menu__link') and .//*[contains(text(), 'Employers')]]",
  employeeOnEmployer: "//app-employer-details//a[contains(text(), 'Employees') and contains(@class, 'nav-link')]",
  roleOnEmployer: "//app-employer-details//a[contains(text(), 'Roles') and contains(@class, 'nav-link')]",

};
export { MasterRoleObject }

const SupervisorObject = {
  newButton: "//button[contains(text(), 'New Supervisor')]",
  emailInput: "//modal-container//input[@formcontrolname='email']",
  saveButton: "//modal-container//button[contains(text(), 'Save')]",
  find: (email) => {
    return "//table//tr[.//td[contains(@class, 'mat-column-email') and .//*[contains(text() , " + "'" + email + "'" + ")] ]]"
  },
  searchInput: '//input[@placeholder="Enter to search"]',
  removeBtn: "//button/i[contains(text(), 'clear')]",
  yesButtonOfConfirmation: "//app-confirmation//button[contains(text(), 'Yes')]",
  FailedDelete: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Supervisor is already assigned to an employer')]",
  successfullyDeleted: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Supervisor has been deleted successfully')]",
}

export { SupervisorObject }

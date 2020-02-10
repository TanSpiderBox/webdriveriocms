const MedicalTypeObject = {
  newButton: "//button[contains(text(), 'New Medical Type')]",
  nameInput: "//modal-container//input[@formcontrolname='name']",
  saveButton: "//modal-container//button[contains(text(), 'Save')]",
  searchInput: "//app-search-box//input",
  findMt: (name) => {
    return "//table//tr[.//td[contains(@class, 'mat-column-name') and .//*[contains(text() , " + "'" + name + "'" + ")] ]]"
  },
  removeBtn: "//button/i[contains(text(), 'clear')]",
  yesButtonOfConfirmation: "//app-confirmation//button[contains(text(), 'Yes')]",
  FailedDelete: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Cannot delete medical type with existing medical records')]",
  successfullyDeleted: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Successfully deleted')]",
}

export { MedicalTypeObject }

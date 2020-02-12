const LocationObject = {
  newButton: "//button[contains(text(), 'New Location')]",
  titleInput: "//app-location-form//input[@formcontrolname='title']",
  streetLine1Input: "//app-location-form//input[@formcontrolname='streetLine1']",
  suburbInput: "//app-location-form//input[@formcontrolname='suburb']",
  stateSelector: "//app-location-form//ng-select[@formcontrolname='state']",
  defaultState: "//*[contains(@role, 'option')]",
  postCodeInput: "//app-location-form//input[@formcontrolname='postCode']",
  saveBtn: "//modal-container[.//*[text()='New Location']]//button[text()='Save']",
  createSuccessfully: "//*[contains(@class, 'cdk-overlay-container')]//*[contains(text(), 'Saved successfully')]",
  saveButton: "//modal-container//button[contains(text(), 'Save')]",

  find: (title) => {
    return "//table//tr[.//td[contains(@class, 'mat-column-title') and .//*[contains(text() , " + "'" + title + "'" + ")] ]]"
  },
  nextPage: "//app-location//li[contains(@class, 'pagination-next') and not(contains(@class, 'disabled'))]//a[contains(@class, 'page-link')]",
  yesButtonOfConfirmation: "//app-confirmation//button[contains(text(), 'Yes')]",
}

export { LocationObject }

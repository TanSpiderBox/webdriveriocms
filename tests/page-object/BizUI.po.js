const BizUIObject = {
    bizuiNewUserBtn: '//div[@class="biz-inner biz-form"]/button[text()=" NEW USER "]',
    bizuiReturnUserBtn: '//div[@class="biz-inner biz-form"]/button[text()=" RETURNING USER "]',
    bizuiPasswordInput: '//app-biz-auth//input[@type="password"]',
    selectbizuiMedicalType: (medicalType) => {
        return "//*[contains(@type, 'button') and contains(text()," + "'" + medicalType + "'" + ")]"
    },
    bizuiNextBtn: '//*[contains(@type, "button") and contains(text()," NEXT ")]',
    bizuiCancelBtn: '//*[contains(@type, "button") and contains(text()," CANCEL BOOKING ")]',
    selectbizuiDateTime: (dateTime) => {
        return "//button[contains(@class, 'btn-biz-option') and contains(text(), " + "'" + dateTime + "'" + ") ]"
    },
    selectbizuiRoom: (Room, Time) => {
        return "//div[contains(text(), " + "'" + Room + "'" + ")]/following-sibling::div//button[contains(text(), " + "'" + Time + "'" + ")]"
    },
    bizuiEmailInput: '//input[@formcontrolname="email"]',
    bizuiNextBnt: '//button[@type="button"]//*[contains(text(),"arrow_forward")]',
    selectbizuiQuestion: (Question, Answer) => {
        return "//label[contains(text()," + "'" + Question + "'" + ")]/following-sibling::div//input/following-sibling::span[contains(text()," + "'" + Answer + "'" + ")]"
    },
    bizuiDeclarationCk: '//input[contains(@name,"data[DeclarationAndConsent]")]',
    bizuiPrintNameInput: '//input[contains(@name,"data[printName")]',
    bizuiDateInput: '//input[contains(@class,"form-control input") and contains(@placeholder,"dd-MM-yyyy")]',
    selectbizuiAddBtn: (CalendarType) => {
        return "//*[@id='add - to - calendar']//*[contains(text()," + "'" + CalendarType + "'" + ")]"
    },
    bizuiLoginLink: '//*[contains(text()," Click here to login")]',
    selectbizuiAction: (Time, Action) => {
        return "//*[contains(@class,'nopadding')]//div[contains(text()," + "'" + Time + "'" + ")]/../../../..//button[contains(text()," + "'" + Action + "'" + ")]"
    },
    bizuiNewApBtn: '//button[contains(@class,"btn btn-responsive")]//*',
    bizuiHomePageBtn: '//button[contains(text()," Go to home page ")]',
}

export { BizUIObject }
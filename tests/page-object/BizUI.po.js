const BizUIObject = {
    bizuiNewUserBtn: '//div[@class="biz-inner biz-form"]/button[text()=" NEW USER "]',
    bizuiReturnUserBtn: '//div[@class="biz-inner biz-form"]/button[text()=" RETURNING USER "]',
    bizuiUsername: '//*[@formcontrolname="email"]',
    bizuiPassword: '//*[@formcontrolname="password"]',
    bizuiLogOutBtn: '//*[contains(text()," Logout ")]',
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
    bizuiDeclarationCk: '//input[contains(@name,"data[theFlu")]',
    bizuiPrintNameInput: '//input[contains(@name,"data[printName")]',
    bizuiDateInput: '//input[contains(@class,"form-control form-control input")]',
    selectbizuiAddBtn: (CalendarType) => {
        return "//*[@id='add - to - calendar']//*[contains(text()," + "'" + CalendarType + "'" + ")]"
    },
    bizuiLoginLink: '//*[contains(text()," Click here to login")]',
    selectbizuiAction: (Time, Action) => {
        return "//*[contains(@class,'nopadding')]//div[contains(text()," + "'" + Time + "'" + ")]/../../../..//button[contains(text()," + "'" + Action + "'" + ")]"
    },
    verifydate: (date, month) => {
        return "//div[contains(text()," + "'" + date + "'" + ")]/following-sibling::span[contains(text()," + "'" + month + "'" + ")]/parent::div"
    },
    verifytimeslot: (timeslot, room) => {
        return "//div[contains(text()," + "'" + timeslot + "'" + ")]/following-sibling::span[contains(text()," + "'" + room + "'" + ")]/parent::div"
    },

    verifyaddress: (timeslot, room, address) =>{
        return  "//div[contains(text()," + "'" + timeslot + "'" + ")]/following-sibling::span[contains(text()," + "'" + room + "'" + ")]/parent::div/parent::div/parent::div//*[contains(text()," + "'" + address + "'" + ")]"
    },

    verifymedicaltype: (timeslot, room, medicaltype) =>{
        return  "//div[contains(text()," + "'" + timeslot + "'" + ")]/following-sibling::span[contains(text()," + "'" + room + "'" + ")]/parent::div/parent::div/parent::div//*[contains(text()," + "'" + medicaltype + "'" + ")]"
    },

    bizuiNewApBtn: '//button[contains(@class,"btn btn-responsive")]//*',
    bizuiHomePageBtn: '//button[contains(text()," Go to home page ")]',

    bizuiConfirmYesBtn: "//div[@mat-dialog-actions]//button[contains(text(),'Yes')]",
    bizuiConfirmNoBtn: "//div[@mat-dialog-actions]//button[contains(text(),'No')]",

    bizuiPopUp: '//simple-snack-bar[contains(@class,"mat-simple")]',
    bizuiForm: '//*[contains(@class,"biz-form")]',
    bizuiAlert: '//*[contains(@class,"alert alert-danger")]',
    bizuiDate: '//*[contains(@class,"appt-detail")]//div[@class="date"]',
    bizuiTime: '//*[contains(@class,"appt-detail")]//div[@class="time"]',
    bizuiMedical: '//*[contains(@class,"appt-detail")]//div[@class="text-center"]'
}

export { BizUIObject }
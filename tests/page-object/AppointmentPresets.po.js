const ApPrObject = {
    menu_ApPr = '//span[text()="Appointment Presets"]',

    btn_NwApPr = '//button[text()=" New Appointment Preset "]',

    txt_NameApPr = 'input[formcontrolname="name"]',

    btn_SaveApPr = '//button[text()="Save"]',

    btn_CancelApPr = '//button[text()="Cancel"]',

    //Create New Appointment Preset 
    drop_NewApEyer = 'ng-select[formcontrolname=employerId]',

    drop_NewApLocation = 'ng-select[formcontrolname=locationId]',

    drop_NewApMedType = 'ng-select[formcontrolname=medicalTypeId]',

    drop_NewApRole = 'ng-select[formcontrolname=masterRoleId]',

    txt_NewApDate = 'input[formcontrolname=date]',

    drop_NewApStartTime = 'ng-select[formcontrolname=startTime]',

    drop_NewApEndTime = 'ng-select[formcontrolname=endTime]',

    drop_NewApEyee = 'ng-select[formcontrolname=employeeId]',

    txt_NewApFirstName ='input[formcontrolname=firstName]',

    txt_NewApLastName = 'input[formcontrolname=lastName]',

    txt_NewApGender = 'ng-select[formcontrolname=gender]',

    txt_NewApDob = 'input[formcontrolname=dob]',

    txt_NewAphone = 'input[formcontrolname=phone]',

    txt_NewApEmail = 'input[formcontrolname=email]',

    txt_NewApStrLn1 = 'input[formcontrolname=streetLine1]',

    txt_NewApSuburb = 'input[formcontrolname=suburb]',

    drop_NewApState = 'ng-select[formcontrolname=state]',

    drop_NewApPostCode = 'input[formcontrolname=postCode]',

    txt_NewApPotion = 'input[formcontrolname=position]',

    txt_NewApDepartment = 'input[formcontrolname=department]',

    drop_NewApJobClass = 'ng-select[formcontrolname=jobCategory]',

    txt_NewApNote = 'textarea[formcontrolname=notes]'
}

const ApPrVerify = {
    pop_ApPrSuccess = '//*[contains(@class,"cdk-live-announcer-element")]',
}
export { ApPrObject, ApPrVerify }
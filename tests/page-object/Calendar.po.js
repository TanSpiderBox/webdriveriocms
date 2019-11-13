import { DataCal } from '../data/Data.Calendar'
const CalObject = {
    menu_Cal: '//*[contains(text(),"Calendar")]',

    //Filter
    drop_CalEyers: '//ng-select[@formcontrolname="employers"]',

    drop_CalLc: '//ng-select[@formcontrolname="locations"]',

    btn_CalAlFt: '//button[contains(text()," Apply Filter ")]',

    btn_CalClFt: '//button[contains(text()," Clear Filter ")]',

    txt_CalEyeeFt: '//input[@formcontrolname="employeeFilter"]',

    //Calendar
    btn_CalPreVw: 'button[mwlcalendarpreviousview]',

    btn_CalNtVw: 'button[mwlcalendarnextview]',

    btn_CalCalTd: 'button[mwlcalendartoday]',

    btn_CalMth: '//button[contains(text(),"MONTH")]',

    btn_CalWk: '//button[contains(text(),"WEEK")]',

    btn_CalDay: '//button[contains(text(),"DAY")]',

    //Create New Appointment Preset 

    btn_CalNwAp: '//button[contains(text()," New Appointment ")]',

    //Employer
    drop_CalNewApEyer: 'ng-select[formcontrolname=employerId]',

    value_Ap_Employer: '//span[text()="Employer_Test"]',

    //Location
    drop_CalNewApLocation: 'ng-select[formcontrolname=locationId]',

    value_Ap_Location: '//span[text()="LocationVVT"]',

    //Medical Type
    drop_CalNewApMedType: 'ng-select[formcontrolname=medicalTypeId]',

    value_Ap_MedType: '//span[text()="TestMedical"]',

    //Role
    drop_CalNewApRole: 'ng-select[formcontrolname=masterRoleId]',

    value_Ap_Role: '//span[text()="New Role"]',

    //Date Time
    txt_CalNewApDate: 'input[formcontrolname=date]',

    drop_CalNewApStartTime: 'ng-select[formcontrolname=startTime]',

    value_Ap_StarTime: '//span[text()="03:30 PM"]',

    drop_CalNewApEndTime: 'ng-select[formcontrolname=endTime]',

    value_Ap_EndTime: '//span[text()="04:00 PM"]',

    //Employee
    drop_CalNewApEyee: 'ng-select[formcontrolname=employeeId]',

    value_Ap_Employee: '//span[text()="Employee Test"]',

    //New Employee
    txt_CalNewApFirstName: 'input[formcontrolname=firstName]',

    txt_CalNewApLastName: 'input[formcontrolname=lastName]',

    txt_CalNewApGender: 'ng-select[formcontrolname=gender]',

    txt_CalNewApDob: 'input[formcontrolname=dob]',

    txt_CalNewAphone: 'input[formcontrolname=phone]',

    txt_CalNewApEmail: 'input[formcontrolname=email]',

    txt_CalNewApStrLn1: 'input[formcontrolname=streetLine1]',

    txt_CalNewApSuburb: 'input[formcontrolname=suburb]',

    drop_CalNewApState: 'ng-select[formcontrolname=state]',

    drop_CalNewApPostCode: 'input[formcontrolname=postCode]',

    //Position Department Job Catrgory
    txt_CalNewApPosition: 'input[formcontrolname=position]',

    txt_CalNewApDepartment: 'input[formcontrolname=department]',

    drop_CalNewApJobClass: 'ng-select[formcontrolname=jobCategory]',

    txt_CalNewApNote: 'textarea[formcontrolname=notes]',

    lbl_CalDay: '//div[contains(@aria-label," Wednesday November 13")]',

    btn_CalNewApSave: '//button[text()="Save"]',
}

const CalVerify = {
    pop_CalSuccess: '//*[contains(@class,"cdk-live-announcer-element")]',
}

export { CalObject, CalVerify }

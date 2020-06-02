import moment from "moment";
const DataBizUI = {
    urlBizUI: '/onsiteregistration/rochell-maffetti',
    incorrectPasscode: '11111',
    Passcode: '0007',
    username: 'tan+3@spiderbox.design',
    password: '123456',

    medicalType: 'Flu Shot',
    room1: 'Room 1',
    room2: 'Room 2',

    fluquestion1: 'Have you ever received a flu vaccine?',
    fluquestion2: 'Have you ever experienced any problems after receiving a flu vaccine or any vaccine in the past?',
    fluquestion3: 'Are you allergic to eggs or egg products',
    fluquestion4: 'Have you had any allergies (to anything) in the past?',
    fluquestion5: 'Do you have a high fever or are you currently unwell?',
    fluquestion6: 'Do you have a history of Guillain Barre Syndrome? (severe muscle weakness)',
    fluquestion7: 'Are allergic to Meomycin or Polymyxin?',
    fluquestion8: 'Do you have any medical conditions that the medical staff should be aware of prior to you receiving a vaccination (such as, a chronic illness, bleeding disorder, do not have a functioning spleen)',
    fluquestion9: 'Woman Only: Are you planning a pregnancy, currently pregnant or breast feeding?',

    answeryes: 'Yes',
    answerno: 'No',

    printName: 'Tan Nguyen',

    appointmentverifyfulldate: `${moment().add(2, 'day').format('DD')}\n${moment().format('MMM')}`,
    appointmentverifydate: moment().add(2, 'day').format('DD'),
    appointmentverifymonth: moment().format('MMM'),

    reschdule: 'Reschedule Appointment',
    editquestion: 'Edit Questionnaire',
    cancel: 'Cancel Appointment',

    deletesuccessfull: 'Appointment has been cancelled successfully',
    errorcodeBlankRequiredField: 'Please review required fields!',
    errorcodeIncorrect: 'Invalid password',
    firstPage: 'Please select medical type from options below'
}

export { DataBizUI }
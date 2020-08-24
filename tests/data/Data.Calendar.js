import moment from "moment";
var faker = require('faker');
faker.locale = "az";
const appointmentdata = {

    apemployer: 'Rochell Maffetti',
    aplocation: 'LocationVVT',
    onsitelocation: 'Stevena Deane',
    apmedtype: 'TestMedical',
    fulldate: moment().add(2, 'day').format('DD/MM/YYYY'),
    apstartime: moment().format('HH:00'),
    apendtime: moment().add(1, 'hours').format('HH:00'),
    fulltime: `${moment().format('HH:00')} ─ ${moment().add(1, 'hours').format('HH:00')}`,
    timeslot: `${moment().format('HH:00')} - ${moment().format('HH:05')}`,
    calendardate: `${moment().add(2, 'day').format('dddd MMMM D')}`,

    employeeEmail: 'tan+3@spiderbox.design',
    employeefirstname: 'Tan',
    employeelastname: 'NGUYEN',
    employeegender: 'Male',
    employeedob: '16/06/1994',
    employeephone: '+8476 984 7942',
    employeestrline: '364',
    employeestrline2: 'District 3',
    employeesuburb: 'Hcm',
    employeestate: 'VIC',
    employeepostalcode: '700000',
    employeerole: 'Community Care Personnel',
    employeeposition: 'Position',
    employeedepartment: 'Department',

    // newemployeeemail: "6pku9." + Date.now() + "@inbox.testmail.app",
    newemployeeemail: "78zi8.tan4@inbox.testmail.app",
    employeemanageremail: 'tan+4@spiderbox.design',
    emailmedicalstaff: 'tan+6@spiderbox.design',
    staffname: 'Amitie HAW',

    // Verify Data
    errortimeslot: "Slot time cannot greater than appointment duration."
    ,
}

export { appointmentdata }
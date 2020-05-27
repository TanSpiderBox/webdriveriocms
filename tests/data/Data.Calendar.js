function convertTime(number) {
    return number < 10 ? `0${number}` : number;
}
const appointmentdata = {
    apemployer: 'Rochell Maffetti',
    aplocation: 'LocationVVT',
    onsitelocation: 'Stevena Deane',
    apmedtype: 'TestMedical',
    date: new Date().getDate() + 2,
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    fulldate: `${convertTime(new Date().getDate() + 2)}/${convertTime(new Date().getMonth() + 1)}/${new Date().getFullYear()}`,
    apstartime: new Date().getHours(),
    apendtime: new Date().getHours() + 1,

    employeeEmail: 'tan+3@spiderbox.design',
    employeefirstname: 'Tan',
    employeelastname: 'NGUYEN',
    employeegender: 'Male',
    employeedob: '16/06/1994',
    employeephone: '+84769847942',
    employeestrline: '364',
    employeesuburb: 'hcm',
    employeestate: 'VIC',
    employeepostalcode: '700000',
    employeerole: 'Community Care Personnel',
    employeeposition: 'Position',
    employeedepartment: 'Department',

    newemployeeemail: "tan+" + Date.now() + "@spiderbox.design",

    employeemanageremail: 'tan+3@spiderbox.design',
    emailmedicalstaff: 'tan+6@spiderbox.design',
    staffname: 'Amitie Haw',
}

export { appointmentdata }
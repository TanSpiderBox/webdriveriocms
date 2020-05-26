const appointmentdata = {
    //Verify Data
    apemployer: { name: 'Rochell Maffetti' },
    aplocation: { location: 'LocationVVT' },
    onsitelocation: { onsitelocation: 'Stevena Deane' },
    apmedtype: { medicaltype: 'TestMedical' },
    date: new Date().getDate() + 2,
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    apstartime: { starttime: '08:00' },
    apendtime: { endtime: '09:00' },
    apemail: { email: 'tan+3@spiderbox.design' },
}

const employeedata = {
    employeeEmail: { employeeemail: 'tan+3@spiderbox.design' },
    employeefirstname: 'Tan',
    employeelastname: 'NGUYEN',
    employeegender: { gender: 'Male' },
    employeedob: '16/06/1994',
    employeephone: '0123456789',
    employeestrline: '364',
    employeesuburb: 'hcm',
    employeestate: { state: 'VIC' },
    employeepostalcode: '700000',
    employeerole: { role: 'Community Care Personnel' },
    employeeposition: { position: 'Position' },
    employeedepartment: { deparment: 'Department' },
    newemployeeemail: "tan+" + Date.now() + "@spiderbox.design",
    employeemanageremail: { manageremail: 'tan+3@spiderbox.design' },
    emailmedicalstaff: { medicalstaff: 'tan+6@spiderbox.design' },
}

export { appointmentdata, employeedata }
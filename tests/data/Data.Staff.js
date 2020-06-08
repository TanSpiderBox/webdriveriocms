import moment from "moment";
const StaffData = {
  stafurl: '/medical-staff/auth/login',
  stafdateurl: '/medical-staff/appointments?date='+`${moment().add(2, 'day').format('MM-DD-YYYY')}`,
  staffasseessment: 'Assessment',
  sampleStaff: {
    firstName: 'Sample',
    lastName: Date.now(),
    phone: '0999999',
    email: 'hoang+' + Date.now() + '@spiderbox.design',
  }
}

export { StaffData }

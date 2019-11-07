const LoginObject = {
    txt_Username: 'input[formcontrolname="username"]',
    txt_Password: 'input[formcontrolname="password"]',
    btn_Login: '//button[contains(text(),"Login")]',
    btn_ForgotPwd: '//a[@routerlink="/auth/forgot-password"]',
    txt_EmailAddress: 'input[formcontrolname="email"]',
    btn_Submit: '//button[contains(text(),"Submit")]',
    
}

const LoginVerify = {
    lbl_Alert: '//*[contains(@class,"alert")]',
    lbl_ErrorFeedback: '//*[contains(@class,"invalid-feedback")]'
}

export { LoginObject, LoginVerify}
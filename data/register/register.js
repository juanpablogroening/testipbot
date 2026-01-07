export const register = {
    registered: [
        {path: '_hcms/mem/register?redirect_url=/&hsLang=en-us%20page', inputuser:'//*[@name="email"]' , inputpassword:'//*[@name="password"]' , confirminputpassword:'//*[@name="password_confirm"]', uservalue:'juanpablobodyboard@gmail.com', passwordvalue:'Asd#45ui', confirmpasswordvalue: 'Asd#45ui',check:'//*[@name="explicit_consent"]', button: '#hs-register-widget-submit',text: 'TX9', elementexpected:'span#hs_cos_wrapper_verify_registration_heading_ > h1' /*'h1=Verify your email address'*/},
        {path: '_hcms/mem/register?redirect_url=/&hsLang=en-us%20page', inputuser:'//*[@name="email"]' , inputpassword:'//*[@name="password"]' , confirminputpassword:'//*[@name="password_confirm"]', uservalue:'jgroeningyahoo.com', passwordvalue:'Asd#45ui', confirmpasswordvalue: 'Asd#45ui',check:'//*[@name="explicit_consent"]', button: '#hs-register-widget-submit',text: 'TX10', elementexpected: 'body > com-1password-button'},
        {path: '_hcms/mem/register?redirect_url=/&hsLang=en-us%20page', inputuser:'//*[@name="email"]' , inputpassword:'//*[@name="password"]' , confirminputpassword:'//*[@name="password_confirm"]', uservalue:'jgroening@yahoo.com', passwordvalue:"Asd", confirmpasswordvalue: "Asd",check:'//*[@name="explicit_consent"]', button: '#hs-register-widget-submit',text: 'TX11', elementexpected: '.form-input-validation-message-password-sticky .hs-error-msg'},
        {path: '_hcms/mem/register?redirect_url=/&hsLang=en-us%20page', inputuser:'//*[@name="email"]' , inputpassword:'//*[@name="password"]' , confirminputpassword:'//*[@name="password_confirm"]', uservalue:'juan.groening@islandpitch.com', passwordvalue:"Asd#45ui", confirmPasswordValue: "Asd#45ui",check:'//*[@name="explicit_consent"]', button: '#hs-register-widget-submit',text: 'TX12', elementexpected: '.form-input-validation-message-password-sticky .hs-error-msg'}
        
       
    ]
};

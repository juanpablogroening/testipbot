export const login = {
    login: [
        {path: '_hcms/mem/login?hsLang=en-us', inputuser:'//*[@name="email"]' , inputpassword:'//*[@name="password"]' , uservalue:'juan.groening@islandpitch.com', passwordvalue:'RFN4qyg*rga5kap3fky', button: "input[value='Sign in']",text: 'TX13', elementexpected: 'body.hs-content-id-80089806424'},
        {path: '_hcms/mem/login?hsLang=en-us', inputuser:'//*[@name="email"]' , inputpassword:'//*[@name="password"]' , uservalue:'	juan.groeningislandpitch.com', passwordvalue:'RFN4qyg*rga5kap3fky',  button: "input[value='Sign in']",text: 'TX14', elementexpected: 'input.form-input-error'},
        {path: '_hcms/mem/login?hsLang=en-us', inputuser:'//*[@name="email"]' , inputpassword:'//*[@name="password"]' , uservalue:'	juan.groening@islandpitch.com', passwordvalue:'RFN4qyg*rga5kap3fk',  button: "input[value='Sign in']",text: 'TX15', elementexpected: 'input.form-input-error'}
    ]
};
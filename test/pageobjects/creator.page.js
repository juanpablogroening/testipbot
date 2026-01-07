//https://en.wikipedia.org/wiki/Factory_method_pattern

import elementPage from './element.page.js';
import registerPage from './register.page.js';
import loginPage from './login.page.js';
import forgotPage from './forgot.page.js';


export default class creatorPage{
//https://community.smartbear.com/discussions/testcomplete-questions/how-to-import-a-javascript-class/149161	

create(son, val) {
    switch (son) {
      case 'element exist':
        return new elementPage(val);
      case 'register':
        return new registerPage(val);
      case 'login': 
        return new loginPage(val);
      case 'forgot': 
        return new forgotPage(val);
      default:
        // Handle other cases or throw an error
        break;
    }
  }
}




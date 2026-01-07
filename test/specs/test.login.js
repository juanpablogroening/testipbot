
import DynamicLoadingPage from '../pageobjects/dynamic_loading.page.js'

import creatorPage from '../pageobjects/creator.page.js';

import concreteAggregateLoginPage from '../pageobjects/concreteAggregateLogin.page.js'
import {login} from '../../data/login/login.js';


let elements = [];

const creator = new creatorPage(); // Create an instance of creatorPage

for (let i = 0; i < login.login.length; i++) {
  const elementData = login.login[i];
  console.log(elementData);
  const newElement = creator.create('login', elementData);
  elements.push(newElement);

  console.log("Created element:", newElement); // Log the created element for debugging
}
console.log(elements);

    concreteAggregateLoginPage.setValues(elements);
 
   var IteratorLogin=concreteAggregateLoginPage.createIterator();
 
    
    
    
    
    
    
    
    
    describe('Login succesfully', () => {
        before(() => {
            console.log("Testing the login.");
            browser.maximizeWindow();
        });
        after(() => {
          console.log("The test was finish");
      });
    
        while (IteratorLogin.hasNext()) {
           
            DynamicLoadingPage.login(IteratorLogin.next());
        }
              
    });
    


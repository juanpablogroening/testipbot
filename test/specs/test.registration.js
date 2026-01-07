
import DynamicLoadingPage from '../pageobjects/dynamic_loading.page.js'

import creatorPage from '../pageobjects/creator.page.js';

import concreteAggregateRegisterPage from '../pageobjects/concreteAggregateRegister.page.js'
import {register} from '../../data/register/register.js';


let elements = [];

const creator = new creatorPage(); // Create an instance of creatorPage

for (let i = 0; i < register.registered.length; i++) {
  const elementData = register.registered[i];
  const newElement = creator.create('register', elementData);
  elements.push(newElement);

  console.log("Created element:", newElement); // Log the created element for debugging
}

    concreteAggregateRegisterPage.setValues(elements);
   var IteratorRegister=concreteAggregateRegisterPage.createIterator();
   
    
    
    
    
    describe('Registration', () => {
     
        before(() => {
            console.log("Testing the registration.");
            browser.maximizeWindow();
        });
        after(() => {
          console.log("The test was finish");
      });
        while (IteratorRegister.hasNext()) {
           
            DynamicLoadingPage.register(IteratorRegister.next());
        }
              
    });


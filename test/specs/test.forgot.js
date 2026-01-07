
import DynamicLoadingPage from '../pageobjects/dynamic_loading.page.js'

import creatorPage from '../pageobjects/creator.page.js';

import concreteAggregateForgotPage from '../pageobjects/concreteAggregateForgot.page.js'
import {forgot} from '../../data/forgot/forgot.js';


let elements = [];

const creator = new creatorPage(); // Create an instance of creatorPage

for (let i = 0; i < forgot.forgot.length; i++) {
  const elementData = forgot.forgot[i];
  console.log(elementData);
  const newElement = creator.create('forgot', elementData);
  elements.push(newElement);

  console.log("Created element:", newElement); // Log the created element for debugging
}
console.log(elements);

    concreteAggregateForgotPage.setValues(elements);
 
   var IteratorForgot=concreteAggregateForgotPage.createIterator();
 
   

    
    
    
    
    
    
    
    describe('Forgot succesfully', () => {
     
      //DynamicLoadingPage.register(elements[3])
      before(() => {
        console.log("Testing the forgot password.");
        browser.maximizeWindow();
    });
    after(() => {
      console.log("The test was finish");
  });
        while (IteratorForgot.hasNext()) {
           
            DynamicLoadingPage.forgot(IteratorForgot.next());
        }
              
    });
   
import { expect } from '@wdio/globals'
import DynamicLoadingPage from '../pageobjects/dynamic_loading.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import creatorPage from '../pageobjects/creator.page.js';
import {exist} from '../../data/exist/existfave.js';
import concreteAggregateElementsPage from '../pageobjects/concreteAggregateElements.page.js'



let elements = [];

const creator = new creatorPage(); // Create an instance of creatorPage

for (let i = 0; i < exist.element_exist.length; i++) {
  const elementData = exist.element_exist[i];
  const newElement = creator.create('element exist', elementData);
  elements.push(newElement);

  console.log("Created element:", newElement); // Log the created element for debugging
}

// Now you can access and use the elements in the `elements` array
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  console.log("Element Path:", element.getPath());
  console.log("Element Selector:", element.getElement());
  console.log("Element Text:", element.getText());
  // ... other operations with the element instance
}

// Now you can access and use the elements in the `elements` array

    
   function printelement(value, index, array){console.log("Element "+value.getElement())}
    
    concreteAggregateElementsPage.setValues(elements);

    var IteratorElement=concreteAggregateElementsPage.createIterator()
 

    
    
    
    
    
    
    
    
    describe('Elements exist', async () => {
     
      before(() => {
        console.log("Testing each element exist.");
        browser.maximizeWindow();
    });
    after(() => {
      console.log("The test was finish");
  });
        while (IteratorElement.hasNext()) {
           
            DynamicLoadingPage.exist(IteratorElement.next());
        }
       
              
    });
    
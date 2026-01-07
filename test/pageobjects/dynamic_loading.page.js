import { $ } from '@wdio/globals';
import Page from './page.js';
import puppeteer from 'puppeteer';
import fs from 'fs/promises';  // You can keep this if needed for other parts of your code.
import path, { dirname } from 'path'; // You can keep this if needed for other parts of your code.
import { fileURLToPath } from 'url'; // You can keep this if needed for other parts of your code.
import { remote } from "webdriverio";
import { browser } from '@wdio/globals';
import VisualService from "@wdio/visual-service";
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

// Import fs.promises and dirname with aliases for THIS SPECIFIC FILE
import { promises as fsp } from 'fs'; // Alias fs.promises as fsp (for this file)
import { dirname as pathDirname } from 'path'; // Alias dirname as pathDirname (for this file)


//... rest of your code...


//const VisualRegressionService = require('@wdio/visual-service').default;




class DynamicLoadingPage extends Page {
    /**
     * define selectors using getter methods
     */

    async compare(imagePath1, imagePath2, diffOutputPath) {
     /* const img1 = PNG.sync.read(fs.readFileSync(imagePath1));
    const img2 = PNG.sync.read(fs.readFileSync(imagePath2));
    const { width, height } = img1;

    if (width !== img2.width || height !== img2.height) {
        throw new Error("Images must have the same dimensions");
    }

    const diff = new PNG({ width, height });
    const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

    fs.writeFileSync(diffOutputPath, PNG.sync.write(diff));

    return numDiffPixels;*/
    console.log("Hi");
    }
    
   



     async compare_images(){
     
      
      it('should save some screenshots', async () => {
        browser.url('https://webdriver.io/');
        browser.pause(7000);
        // Save a screenshot of the entire page
        browser.saveScreenshot('./screenshots/examplePage.png');

        // Save a screenshot of a specific element (make sure the selector is correct)
        const element = await $('#some-element-id');
        await element.saveScreenshot('./screenshots/someElement.png');
        // Save a screen
    });
   
    
     }

    async register(test) {
      beforeEach(async() => {
        console.log("Testing the registration number "+test.getText());
        
    });
    it(test.getText(), async () => {
 const browser = await remote({
    logLevel: "silent",
    capabilities: {
        browserName: "chrome",
    },
});
        await browser.maximizeWindow();
        await browser.url(test.getPath());   
        await $(test.getinputUser()).setValue(test.getUserValue());
        await $(test.getinputPassword()).setValue(test.getPasswordValue());
        await $(test.getConfirmPassword()).setValue(test.getPasswordValue());
        await $(test.getCheck()).click();
        await $(test.getButton()).click();
        await browser.pause(5000);
        await browser.saveScreenshot('./screenshot/'+test.getText()+'.png');
        await expect($(test.getelementexpected())).toBeExisting();

    });
  
   }

   async login(test) { beforeEach(async() => {
    console.log("Testing number "+ test.getText());
    
    
});

    it(test.getText(), async () => {
      await browser.maximizeWindow();
      await browser.url(test.getPath());
      await $(test.getinputUser()).setValue(test.getUserValue());
      await $(test.getinputPassword()).setValue(test.getPasswordValue());
      await $(test.getButton()).click();
      await browser.pause(5000);
      await browser.saveScreenshot('./screenshot/'+test.getText()+'.png');
      await expect($(test.getelementexpected())).toBeExisting();


             
  });

 }

   async Click(path,element) {
     await this.open(path);

      await $(element).click();
      //await $(element).waitForDisplayed({ timeout: 5000, reverse : true });
  }

async existdashboard(testing) {
        
        it(testing.text, async () => {
        
       
        await expect($(testing.element)).toBeExisting();
        
    });
  }

  async checkinglogin(test) {
    it(test.text, async () => {

      await this.open(test.path,test.element)
      
      
      await $(test.inputus).setValue(test.username);
    
    await $(test.inputpass).setValue(test.password);
    
      await $(test.element).click();
      
      await browser.saveScreenshot('./screenshot/'+test.text+'.png');
      await expect($(test.element)).toBeChecked()
             
  });

 }
async checkingloginsign(test) {
    it(test.text, async () => {

      
      await $(test.inputus).setValue(test.username);
    
    await $(test.inputpass).setValue(test.password);
    
     
      await $(test.but).click();
    
    await browser.saveScreenshot('./screenshot/'+test.text+'.png');
    await expect($(test.elementexpected)).toBeExisting();
             
  });

 }
async attribute(testing) {
        it(testing.text, async () => {
        await this.open(testing.path);
        //await browser.pause(500)
        await expect($(testing.element)).toHaveAttr(testing.attr, testing.value)
        await browser.saveScreenshot('./screenshot/'+testing.text+'.png');
        
    });
  } 


  async forgotfull(testing){
      it(testing.text, async () => {
        await this.open(testing.path);
        await $(testing.inputus).setValue(testing.username);
        await browser.saveScreenshot('./screenshot/'+testing.text+'1.png');
        //await browser.pause(500)
        await $(testing.element).click();
        await browser.pause(200)
        await browser.saveScreenshot('./screenshot/'+test.text+'2.png');
        await expect($(testing.elementexpected)).toBeExisting();
        //await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });

  }
  async forgot(test){
    beforeEach(async() => {
      console.log("Testing number" +test.getText());
      
  });
        it(test.text, async () => {
        
          await browser.maximizeWindow();
          await browser.url(test.getPath());
    await $(test.getLink()).click();  
    await $(test.getinputUser()).setValue(test.getUserValue());
    await $(test.getButton()).click();
    await browser.pause(5000); 
    await browser.saveScreenshot('./screenshot/'+test.getText()+'.png');
    await expect($(test.getelementexpected())).toBeExisting();
    
    });
  } 
async golink(testing){
    it(testing.text, async () => {
      if(testing.path!='N/A')
            await this.open(testing.path);
      await browser.saveScreenshot('./screenshot/'+testing.text+'1.png');
      $(testing.element).moveTo(0,0)
      await $(testing.element).click();
     
      await browser.saveScreenshot('./screenshot/'+testing.text+'2.png');
      await expect($(testing.elementexpected)).toBeExisting();});

}

async hastext(test){
  it(test.text, async () => {
      this.open(test.path)
      await expect(test.element).toHaveText(test.textinside)
    
   });

}

  

async logout (test) {
    it(test.text, async () => {
      if(test.path!='N/A'){
        this.open(test.path)
        browser.pause(20000)
      }
      //if(await $('').isExisting){}
      await browser.saveScreenshot('./screenshot/'+test.text+'1.png');
      
      await $(test.inputus).setValue(test.username);
      
      await $(test.inputpass).setValue(test.password);
      
      await $(test.but[0]).click();

      
      await browser.saveScreenshot('./screenshot/'+test.text+'2.png');
      await $(test.but[1]).click();
      
      await browser.saveScreenshot('./screenshot/'+test.text+'3.png');
      await expect($(test.elementexpected)).toBeExisting();});
    
  
  }


  async logoutclick (test) {
    it(test.text, async () => {
      
     
   await browser.saveScreenshot('./screenshot/'+test.text+'1.png');
    await $(test.but).click();
     
    await browser.saveScreenshot('./screenshot/'+test.text+'2.png');
    await expect($(test.elementexpected)).toBeExisting();
  });
    
  
  }

  async exist(testing) {
    beforeEach(async () => {
      await browser.maximizeWindow(); // Maximize window before each test
    });
    
    it(testing.getText(), async () => {
      // Go to the URL for the element
      await browser.url(testing.getPath());
    
      // Use wait for the element to be visible instead of a long pause
      await $(testing.getElement()).waitForExist({ timeout: 5000 }); // waits up to 5 seconds for the element to appear
      
      // Capture the full-page screenshot before or after the test steps
      const windowSize = await browser.getWindowRect(); // Get window size
      const pageHeight = await browser.execute(() => document.documentElement.scrollHeight); // Get full page height
    
      // Set the viewport to the full page height
      await browser.setWindowRect(0, 1000, windowSize.width, pageHeight);
      const currentDate = new Date();
      
const formattedDate = currentDate.toISOString().replace(/T/, '_').replace(/:/g, '-').split('.')[0];  // ISO format like "2025-02-13_14-45-30"
    
      // Take the full-page screenshot
     // await browser.saveScreenshot('./screenshot/fullpage_' + testing.getText() + '.png');
    
      // You can take an additional screenshot of the element if needed
      await $(testing.getElement()).saveScreenshot('./screenshot/element_' + testing.getText()/*+formattedDate*/+'.png');
      
      // Assert that the element exists
      await expect($(testing.getElement())).toBeExisting();
    });
    
  }

  async screenshot(testing) {
    beforeEach(async () => {
      await browser.maximizeWindow(); // Maximize window before each test
    });
    
    it(testing.getText(), async () => {
      // Go to the URL for the element
      await browser.url(testing.getPath());
      const bodyHTML = await browser.execute('return document.body.innerHTML;');
      console.log('HTML code: ' + bodyHTML);
      // Use wait for the element to be visible instead of a long pause
      await $(testing.getElement()).waitForExist({ timeout: 5000 }); // waits up to 5 seconds for the element to appear
      
      // Capture the full-page screenshot before or after the test steps
      const windowSize = await browser.getWindowRect(); // Get window size
      const pageHeight = await browser.execute(() => document.documentElement.scrollHeight); // Get full page height
    
      // Set the viewport to the full page height
      await browser.setWindowRect(0, 1000000, windowSize.width, pageHeight);
      const currentDate = new Date();
      
const formattedDate = currentDate.toISOString().replace(/T/, '_').replace(/:/g, '-').split('.')[0];  // ISO format like "2025-02-13_14-45-30"
    
      // Take the full-page screenshot
   //  await browser.saveScreenshot('./screenshot/' + testing.getText() + '.png');
    
      // You can take an additional screenshot of the element if needed
      await $(testing.getElement()).saveScreenshot('./screenshot/' + testing.getText()+formattedDate+'.png');
      
      // Assert that the element exists
      await expect($(testing.getElement())).toBeExisting();
    });

    
    
  }
  
  async htmlfile(testing) {
    
    beforeEach(async () => {
      await browser.maximizeWindow(); // Maximize window before each test
    });
    
    it(testing.getText(), async () => {
      // Go to the URL for the element
      await browser.url(testing.getPath());
     // const bodyHTML = await browser.execute('return document.body.innerHTML;');
    // const bodyHTML = await browser.execute(() => document.body.innerHTML);
   // const bodyHTML = await browser.execute(() => document.body.innerHTML);
   const bodyHTML=await browser.execute(() => document.body.innerHTML);;
      
      
      
      const currentDate = new Date();
      
      const formattedDate = currentDate.toISOString().replace(/T/, '_').replace(/:/g, '-').split('.')[0];  // ISO format like "2025-02-13_14-45-30"
    
     
      async function writeHTMLToFile(htmlContent, filePath) {
        
          try {
              //await fsp.mkdir(dirname(filePath), { recursive: true }); // Use fsp here
              await fsp.writeFile(filePath, htmlContent, 'utf8');
              //...
          } catch (err) {
            console.error(`Error writing to file: ${err}`);
          }
        }
      
     var filename=testing.getPath();
     console.log(filename);
      if(filename=='/'){
        filename='index';}
      
      const filePath = './htmlfiles/'+filename+formattedDate+'.html';
      
       // Choose your file path
      await writeHTMLToFile(bodyHTML, filePath); // or write outerHTML*/
      
      // Assert that the element exists
      //await expect($(testing.getElement())).toBeExisting();
    });

    
    
  }
  
  
  
  get htest(){
      return $('#finish h4');
  }
  open(path) {
      return super.open(path);
  }
}

export default new DynamicLoadingPage();
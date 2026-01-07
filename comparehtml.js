import path from 'path';
import fs from 'fs';
import {exist} from './data/exist/existfave.js';
import resemble from 'resemblejs';


const [,, arg1, arg2] = process.argv;
const file1 = path.resolve("./htmlfiles/"+arg1+'.html');
const file2 = path.resolve('./htmlfiles/'+arg2+'.html');

async function readFiles() {
    try {
      const filedata = await Promise.all([
        fs.promises.readFile(file1, 'utf8'),
        fs.promises.readFile(file2, 'utf8')
      ]);
  
      console.log(filedata); // Now filedata will have the value
      if(filedata[0]==filedata[1])
        return 'no changes';
      return 'The page was changed';
      
    } catch (err) {
      console.error('Error reading files:', err);
    }
  }
  
  readFiles().then(result => console.log(result));
 
import path from 'path';
import fs from 'fs';
import {exist} from './data/exist/existfave.js';
import resemble from 'resemblejs';


const [,, arg1, arg2] = process.argv;
const imagePath1 = path.resolve("./screenshot/"+arg1+'.png');
const imagePath2 = path.resolve('./screenshot/'+arg2+'.png');

console.log('Absolute path:', imagePath1);

fs.readFile(imagePath1, (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File read successfully');
  }
});
console.log('Absolute path:', imagePath2);
fs.readFile(imagePath2, (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      console.log('File read successfully');
    }
  });
  
  resemble(imagePath1).compareTo(imagePath2).onComplete(function(data) {
    console.log(`Different score: ${data.misMatchPercentage}%`);
    
  });
//



export default class iteratorPage{
//https://community.smartbear.com/discussions/testcomplete-questions/how-to-import-a-javascript-class/149161	
    constructor() {
        
        console.log('Created');
    }

    setValues(collection){this.collection = collection;
        this.currentIndex = 0;
        console.log('Created');}
    hasNext() {
        return this.currentIndex < this.collection.length;
    }
    next() {
        if (!this.hasNext()) {
            throw new Error('No such element');
        }
        return this.collection[this.currentIndex++];
    }
    current(){
        return this.collection[this.currentIndex];
    }

   
/*	get_r(){
	  return this.r;
	}*/
}

//module.exports.Iterator = Iterator;
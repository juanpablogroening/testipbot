import aggregatePage from './aggregate.page.js';
import IteratorForgotPage  from './iteratorforgot.page.js';





class concreteAggregateForgotPage extends aggregatePage{
//https://community.smartbear.com/discussions/testcomplete-questions/how-to-import-a-javascript-class/149161	
    constructor() {
        super();
        
    }

    setValues(collection){
        super.setValues(collection)
        
    }

    getCollection(){return this.collection;}

    createIterator() {
        
        IteratorForgotPage.setValues(this.collection)
        return IteratorForgotPage;
    }
	
}

export default new concreteAggregateForgotPage();
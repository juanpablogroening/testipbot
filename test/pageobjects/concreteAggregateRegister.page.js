import aggregatePage from './aggregate.page.js';
import IteratorRegisterPage  from './iteratorregister.page.js';





class concreteAggregateRegisterPage extends aggregatePage{
//https://community.smartbear.com/discussions/testcomplete-questions/how-to-import-a-javascript-class/149161	
    constructor() {
        super();
        
    }

    setValues(collection){
        super.setValues(collection)
        
    }

    getCollection(){return this.collection;}

    createIterator() {
        
        IteratorRegisterPage.setValues(this.collection)
        return IteratorRegisterPage;
    }
	
}

export default new concreteAggregateRegisterPage();
import aggregatePage from './aggregate.page.js';
import IteratorElementPage  from './iteratorelement.page.js';





class concreteAggregateElementsPage extends aggregatePage{
//https://community.smartbear.com/discussions/testcomplete-questions/how-to-import-a-javascript-class/149161	
    constructor() {
        super();
        
    }

    setValues(collection){
        super.setValues(collection)
        
    }

    getCollection(){return this.collection;}

    createIterator() {
        
        IteratorElementPage.setValues(this.collection)
        return IteratorElementPage;
    }
	
}

export default new concreteAggregateElementsPage();
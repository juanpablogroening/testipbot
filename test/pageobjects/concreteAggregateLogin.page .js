import aggregatePage from './aggregate.page.js';
import IteratorLoginPage  from './iteratorlogin.page.js';





class concreteAggregateLoginPage extends aggregatePage{
//https://community.smartbear.com/discussions/testcomplete-questions/how-to-import-a-javascript-class/149161	
    constructor() {
        super();
        
    }

    setValues(collection){
        super.setValues(collection)
        
    }

    getCollection(){return this.collection;}

    createIterator() {
        
        IteratorLoginPage.setValues(this.collection)
        return IteratorLoginPage;
    }
	
}

export default new concreteAggregateLoginPage();
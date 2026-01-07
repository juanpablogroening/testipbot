
import productPage from './product.page.js';





export default class elementPage extends productPage{
//https://community.smartbear.com/discussions/testcomplete-questions/how-to-import-a-javascript-class/149161	
//https://www.geeksforgeeks.org/iterator-pattern/
    constructor(val){
    	super(val);
		this.path=val.path;
    	this.element=val.element;
		this.text=val.text+browser.capabilities.browserName;
    	
	}

	setValues(val){
		super.setValues(val);
		
	}

	getPath(){
		return this.path;
	}

	getElement(){
		return this.element;
	}

	getText(){
		return this.text;
	}

	

	print(){
		
		console.log("Element created");
		
	}


	
}




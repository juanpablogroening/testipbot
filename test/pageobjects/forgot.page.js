
import productPage from './product.page.js';





export default class forgotPage extends productPage{
//https://community.smartbear.com/discussions/testcomplete-questions/how-to-import-a-javascript-class/149161	
//https://www.geeksforgeeks.org/iterator-pattern/
    constructor(val){
    	super(val);
		this.path=val.path;
        this.inputuser=val.inputuser;
    	
        this.uservalue=val.uservalue;
        this.link=val.link;
        this.button=val.button;
        this.elementexpected=val.elementexpected;

		this.text=val.text+' '+browser.capabilities.browserName;
    	
	}

	setValues(val){
		super.setValues(val);
		
	}

	getPath(){
		return this.path;
	}

    getinputUser(){
		return this.inputuser;
	}

   

   
    getUserValue(){
        return this.uservalue;
    }
    
    getLink()
    {
        return this.link;
    }

    
getText(){
		return this.text;
	}

    getButton(){
        return this.button;
    }

    getelementexpected(){
        return this.elementexpected;
    }

	

	print(){
		
		console.log("Forgot created");
		
	}


	
}




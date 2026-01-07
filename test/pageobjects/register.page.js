
import productPage from './product.page.js';





export default class registerPage extends productPage{
//https://community.smartbear.com/discussions/testcomplete-questions/how-to-import-a-javascript-class/149161	
//https://www.geeksforgeeks.org/iterator-pattern/
    constructor(val){
    	super(val);
		this.path=val.path;
        this.inputuser=val.inputuser;
    	this.inputpassword=val.inputpassword;
        this.confirminputpassword=val.confirminputpassword;
        this.uservalue=val.uservalue;
        this.passwordvalue=val.passwordvalue;
        this.confirminputpassword=val.confirminputpassword;
        this.confirmPasswordValue=val.confirmPasswordValue
        this.check=val.check;
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

    getinputPassword(){
        return this.inputpassword;
    }

    getConfirmPassword(){
		return this.confirminputpassword;
	}

    getUserValue(){
        return this.uservalue;
    }
    getPasswordValue()
    {
        return this.passwordvalue;
    }

    getConfirmPasswordValue(){
        return this.confirmPasswordValue
    }

    getCheck(){
        return this.check;
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

	/*get_JSON(){
		var obje=new obj.OBJECT(['name', 'salary'],[this.name,this.salary]);

		return obje.get_JSON(); 


		//return '{'+'id: '+this.id+', data: '+this.data+'}';
	}*/

	print(){
		
		console.log("Element created");
		
	}


	
}




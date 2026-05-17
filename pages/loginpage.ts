import { Locator, Page } from "@playwright/test";
import { BrowserInteractionImp } from "../utilities/BrowserImplementation.ts";


export class LoginPage extends BrowserInteractionImp{
    page:Page;
    userName:Locator;
    password:Locator;
    submit:Locator;

    constructor(page:Page){
        super(page);
        this.page=page;
        this.userName=page.locator("#username");
        this.password=page.locator("#password");
        this.submit=page.locator("#submit");
    }

    async enterUserName(data:string):Promise<void>{
        await this.fill(this.userName,data);
        
    }
    
    
    
    async enterPassowrd(data:string):Promise<void>{
        await this.fill(this.password,data);
    }
    async viewSubmit():Promise<void>{
        await this.click(this.submit);
    }
}

import test, { Locator,Page } from "@playwright/test";
import { BrowserInteraction } from "./BrowserInteraction";


export class BrowserInteractionImp  implements BrowserInteraction{
    page :Page;

    constructor(page:Page){
        this.page=page;
    }
  async  fill(locator: Locator, data: string):Promise<void> {
    await test.step(`enter the correct ${data} `,async()=>{
        
    await locator.fill(data);;

    });
}
        
     async  click(locator:Locator):Promise<void> {
await test.step(`entere the click`,async()=>{
    await locator.click();

});
       }
    


    }
    
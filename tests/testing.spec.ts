import test from "@playwright/test";
import { LoginPage } from "../pages/loginpage";


test("Add page",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    const loginPage=new LoginPage(page);
    
await loginPage.enterUserName("student");
await loginPage.enterPassowrd("Password123");
await loginPage.viewSubmit();


});
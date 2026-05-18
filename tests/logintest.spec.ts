
import {expect, test} from "@playwright/test";
import { LoginPage} from "../pages/loginpage";
import { LoginData } from "../testdata/logindata";
import { config } from "../config/config";


test.describe("login tests",()=>{

    test(" positive -validlogin",async({page})=>{

        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
      await   loginPage.enterUserName(LoginData.validUser.username);
      await loginPage.enterPassowrd(LoginData.validUser.password);
      await loginPage.viewSubmit();
      await expect(page).toHaveURL(config.dashboardUrl)

    })
    test("negative -loginpage",async({page})=>{
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
      await   loginPage.enterUserName(LoginData.invaliduser.username);
      await loginPage.enterPassowrd(LoginData.invaliduser.password);
      await loginPage.viewSubmit();
      await expect(page.locator("#error")).toBeVisible();
    })
})




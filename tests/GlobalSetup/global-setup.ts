import { Browser, chromium, expect, Page } from "@playwright/test";
import LoginPage from "../../pages/Login/LoginPage";
import { defaultConfig } from "../../config-data";

async function globalSetup() {
    const browser : Browser = await chromium.launch({headless : true});
    const context = await browser.newContext();
    const page : Page = await context.newPage();

    const loginObj = new LoginPage(page);
    await loginObj.goto(defaultConfig.baseurl);
    await loginObj.login(defaultConfig.username, defaultConfig.password);
    await expect(page.locator(".title")).toHaveText("Products");

    await page.context().storageState({path : "./LoginAuth.json"});

    await browser.close();
    
}



export default globalSetup;

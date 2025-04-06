import test, { expect } from "@playwright/test";
import { defaultConfig } from "../../config-data";
import LoginPage from "../../pages/Login/LoginPage";

test("Login test", async({page}) => {
    const loginObj = new LoginPage(page);
    await loginObj.goto(defaultConfig.baseurl);
    await loginObj.login(defaultConfig.username, defaultConfig.password);
});

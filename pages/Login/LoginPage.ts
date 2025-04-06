import { Page, Locator } from "@playwright/test";
import { step } from "../../utilities/step-decorator";

export default class LoginPage {
    page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = this.page.locator("#user-name");
        this.passwordInput = this.page.locator("#password");
        this.loginButton = this.page.locator("#login-button");
    }

    async goto(url:string): Promise<void> {
        await this.page.goto(url);
    }

    async login(username:string, password:string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
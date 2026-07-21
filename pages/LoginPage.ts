import { Page, Locator } from '@playwright/test';

// defining a class for login page
export class LoginPage {
    // locator variables
    private readonly page: Page;
    private readonly email_input: Locator;
    private readonly password_input: Locator;
    private readonly login_button: Locator;
    //private readonly searchButton: Locator;

    // constructor
    constructor(page: Page) {
        this.page = page;
        this.email_input = page.locator('#input-email');
        this.password_input = page.locator('#input-password');
        this.login_button = page.locator('input[value="Login"]');

    }
    //Action methods

    async enterusername(username: string) {
        await this.email_input.clear();
        await this.email_input.fill(username);
    }
    async enterpassword(password: string) {
        await this.password_input.clear();
        await this.password_input.fill(password);
    }
    async clickOnloginButton() {
        await this.login_button.click();
    }
    async login(username: string, password: string) {
        await this.enterusername(username);
        await this.enterpassword(password);
        await this.clickOnloginButton();
    }
}
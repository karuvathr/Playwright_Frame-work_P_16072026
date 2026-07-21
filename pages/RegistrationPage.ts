import { Page, Locator } from '@playwright/test';

// Class for Registration Page
export class RegistrationPage {
    // locator variables
    private readonly page: Page;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly emailInput: Locator;
    private readonly telephoneInput: Locator;
    private readonly passwordInput: Locator;
    private readonly confirmPasswordInput: Locator;
    //private readonly subscribeYesRadio: Locator;
    //private readonly subscribeNoRadio: Locator;
    private readonly privacyPolicyCheckbox: Locator;
    private readonly continueButton: Locator;
    //constructor for registration page
    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('#input-firstname');
        this.lastNameInput = page.getByLabel("Last Name");
        this.emailInput = page.getByLabel("E-Mail");
        this.telephoneInput = page.getByLabel("Telephone");
        this.passwordInput = page.locator('#input-password');
        this.confirmPasswordInput = page.locator('#input-confirm');

        //this.subscribeYesRadio = page.getByRole('radio', { name: 'Yes' });
        //this.subscribeNoRadio = page.getByRole('radio', { name: 'No' });
        this.privacyPolicyCheckbox = page.locator('input[name="agree"]');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    //action methods for registration page
    async enterFirstName(firstName: string): Promise<void> {
        //await this.firstNameInput.clear();
        await this.firstNameInput.fill(firstName);
    }
    async enterLastName(lastName: string):Promise<void> {
        //await this.lastNameInput.clear();
        await this.lastNameInput.fill(lastName);
    }
    async enterEmail(email: string) :Promise<void> {
        //await this.emailInput.clear();
        await this.emailInput.fill(email);
    }
    async enterTelephone(telephone: string):Promise<void> {
        //  await this.telephoneInput.clear();
        await this.telephoneInput.fill(telephone);
    }
    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }
    async enterConfirmPassword(confirmPassword: string): Promise<void>  {
        await this.confirmPasswordInput.clear();
        await this.confirmPasswordInput.fill(confirmPassword);
    }
    async clickoncontinueButton() : Promise<void> {
        await this.continueButton.click();
    }

    async registerUser(firstName: string, lastName: string, email: string, telephone: string, password: string, confirmPassword: string) : Promise<void> 
    {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterTelephone(telephone);
        await this.enterPassword(password);
        await this.enterConfirmPassword(confirmPassword);
        await this.clickoncontinueButton();
    }
}

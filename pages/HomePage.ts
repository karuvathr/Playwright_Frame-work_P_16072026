import { Page, Locator } from '@playwright/test';

// defining a class for home page
export class HomePage {
    // locator variables
    private readonly page: Page;
    private readonly myAccountlink: Locator;
    private readonly login_link: Locator;
    private readonly register_link: Locator;
    private readonly search_txt: Locator;
    private readonly searchButton: Locator;

    // constructor
    constructor(page: Page) {
        this.page = page;
        this.myAccountlink = page.locator('span:has-text("My Account")');
        this.login_link = page.locator('a:has-text("Login")');
        this.register_link =  page.locator('a:has-text("Register")');   
        this .search_txt = page.locator('input[placeholder="Search"]');
        this.searchButton = page.locator('#search button[type="button"]');
        
                
    }
    //Action methods
    async clickOnmyaccount() {
        await this.myAccountlink.click();
    }
    async clickOnregister() {
        await this.register_link.click();
    }
    async clickOnlogin() {
        await this.login_link.click();
    }
    
        async clickOnsearchButton() {
        await this.searchButton.click();
    }
    async entersearchtext(searchtext: string) {
        await this.search_txt.clear(); 
        await this.search_txt.fill(searchtext);
    }   

}



import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';

let homePage: HomePage;
let loginPage: LoginPage;
let config: TestConfig;

//hooks
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    await page.goto(config.appUrl);//open the application URL
})
test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
   // await page.close();

})
test('login test Test @master @sanity @regression', async ({ }) => {
    await homePage.clickOnmyaccount(); //navigate to home page and click on My Account
    await homePage.clickOnlogin();

    await loginPage.enterusername(config.email);
    await loginPage.enterpassword(config.password);
    await loginPage.clickOnloginButton();
})
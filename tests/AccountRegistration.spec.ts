import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';
import { LoginPage } from '../pages/LoginPage';

let homePage: HomePage;
let registrationPage: RegistrationPage;
let config: TestConfig;

//hooks
test.beforeEach(async ({ page }) => {
    config = new TestConfig();
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);
     await page.goto(config.appUrl);//open the application URL
})
test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();

})

test('Account Registration Test  @master @sanity @regression', async ({ }) => {

    await homePage.clickOnmyaccount(); //navigate to home page and click on My Account
    await homePage.clickOnregister(); //click on register link

    await registrationPage.enterFirstName(RandomDataUtil.getFirstName());
    await registrationPage.enterLastName(RandomDataUtil.getLastName());
    await registrationPage.enterEmail(RandomDataUtil.getEmail());
    registrationPage.enterTelephone(RandomDataUtil.getPhoneNumber());
    const password = RandomDataUtil.getPassword();
    await registrationPage.enterPassword(password);
    await registrationPage.enterConfirmPassword(password);
    await registrationPage.clickoncontinueButton();

})
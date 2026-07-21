# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Account Registration Test
- Location: tests\AccountRegistration.spec.ts:7:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { HomePage } from '../pages/HomePage';
  3  | import { RegistrationPage } from '../pages/RegistrationPage';
  4  | import { RandomDataUtil } from '../utils/randomDataGenerator';
  5  | import { TestConfig } from '../test.config';
  6  | 
  7  | test('Account Registration Test', async ({ page }) => {
  8  | 
  9  |     const config = new TestConfig();
> 10 |     await page.goto(config.appUrl);//open the application URL
     |                ^ Error: page.goto: Target page, context or browser has been closed
  11 | 
  12 |     
  13 |     const homePage = new HomePage(page);
  14 |     
  15 |     homePage.clickOnmyaccount //navigate to home page and click on My Account
  16 |  //navigate to home page and click on My Account
  17 |     homePage.clickOnregister;   //navigate to home page and click on Register
  18 |     
  19 | 
  20 |     const registrationPage = new RegistrationPage(page);
  21 |     registrationPage.enterFirstName(RandomDataUtil.getFirstName());
  22 |     registrationPage.enterLastName(RandomDataUtil.getLastName());
  23 |     registrationPage.enterEmail(RandomDataUtil.getEmail());
  24 |     registrationPage.enterTelephone(RandomDataUtil.getPhoneNumber());
  25 |     const password = RandomDataUtil.getPassword();
  26 |     registrationPage.enterPassword(password);
  27 |     registrationPage.enterConfirmPassword(password);
  28 |     await registrationPage.clickoncontinueButton();
  29 | })
```
import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Login', { tag: ["@login"] }, async ({ page }, testInfo) => {

    
await allure.step("Navigate to https://www.saucedemo.com/v1/ : https://www.saucedemo.com/v1/", async() =>{ await page.goto('https://www.saucedemo.com/v1/');});

await allure.step('Enter standard_user in Username : standard_user', async() =>{ await page.locator('//*[@placeholder="Username"]').waitFor({state:"visible"}); await page.locator('//*[@placeholder="Username"]').click(); await page.locator('//*[@placeholder="Username"]').fill('standard_user');});

await allure.step('Enter secret_sauce in Password : secret_sauce', async() =>{ await page.locator('//*[@placeholder="Password"]').waitFor({state:"visible"}); await page.locator('//*[@placeholder="Password"]').click(); await page.locator('//*[@placeholder="Password"]').fill('secret_sauce');});


});
import { Page, Locator, test, expect, } from '@playwright/test';
import * as allure from "allure-js-commons";
import '../../hooks/test.setup';


test('Get Quote', { tag: ["@regressionTest"] }, async ({ page }, testInfo) => {

    

    
await allure.step("Navigate to https://aksharsoftsolutions.com/ : https://aksharsoftsolutions.com/", async() =>{ await page.goto('https://aksharsoftsolutions.com/');});

await allure.step("Click CONTACT US : ", async() =>{ await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[5]/a[1]').waitFor({state:"visible"}); await page.locator('xpath=/html[1]/body[1]/header[1]/div[1]/div[1]/nav[1]/div[1]/div[1]/ul[1]/li[5]/a[1]').click();});


});
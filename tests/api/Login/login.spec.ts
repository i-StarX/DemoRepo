import { test, expect, } from '@playwright/test';

test('Login', { tag: ["@api"] }, async ({ request }) => {

    await request.fetch(`https://console.vahanacloud.com/backend/api/v1/login?strategy=PASSWORD&sessionType=COOKIES`, {
        method: "POST",
        headers: {
  "Requestid": "1733265093156null",
  "Authorization": "Basic dmFoYW5hOkRlY2ltYWxAMTIz",
  "Content-Type": "application/json"
},
        data: {"username": "rallen.estrella@istar-x.com", "password": "testpassword", "sessionExist": true},
    }).then((apiResponse) => {
        expect(apiResponse.ok()).toBeTruthy();
        expect(apiResponse.status().toString()).toBe('200');
        
    });

});
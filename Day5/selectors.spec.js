import {test,expect} from '@playwright/test'

test.only("Learning Selectors",async({page}) => {
    //Navigate to webpage
    await page.goto('http://127.0.0.1:5500/Build/clickme.html');

    //selecting the elements by ID
    await page.locator('#clickButton').click();
    await page.pause();

    //Selecting by Class
    await page.locator('.button-style').click();
    await page.pause();

    //Selecting by Tag and Class Name
    await page.locator('button.button-style').click();
    await page.pause();

    //Selecting by Attribute Name and Value
    await page.locator('[data-action="increment"]').click();
    await page.locator('[id="clickButton"]').click();
    await page.locator('[class="button-style"]').click();
    await page.locator('[role="button"]').click();

    await page.pause();

})
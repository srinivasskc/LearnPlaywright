import { test, expect } from '@playwright/test';

test.only('This is a codegen generated testc', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('Super');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('SuperSecret');
  await page.getByLabel('Password').press('CapsLock');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await page.getByText('You logged into a secure area').click();
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
  await page.getByRole('heading', { name: 'Welcome to the Secure Area.' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  await page.pause();
  
});
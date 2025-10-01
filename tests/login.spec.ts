import { test, expect } from '@playwright/test';

test('login', async ({ page }) => { 
   await page.goto('https://login.microsoftonline.com')
})
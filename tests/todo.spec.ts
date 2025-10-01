import { test, expect } from '@playwright/test';
import { HomePage } from '../utils/pages/homepage.spec.ts';
import { ReactPage } from '../utils/pages/reactpage.spec.ts';

test.only('All cases', async ({ page }) => {
  const onHomePage = new HomePage(page);
  const onReactPage = new ReactPage(page);

  await page.goto('/')
  await onHomePage.clickReact();

  await onReactPage.fillTodoAndEnter('แปรงฟัน');
  await onReactPage.fillTodoAndEnter('ล้างหน้า');
  await onReactPage.fillTodoAndEnter('อาบน้ำ');
  await page.waitForTimeout(5000);
})

test('login', async ({ page }) => { 
  await page.goto('https://login.microsoftonline.com')
  await page.waitForTimeout(10000);
})
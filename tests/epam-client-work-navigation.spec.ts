import { test, expect } from '@playwright/test';

test('navigate from Services to Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services' }).nth(1).click();
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});

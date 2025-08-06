import { test, expect } from '@playwright/test';

test.describe('Playwright homepage', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev');
  });

  test('should load and contain "Get started"', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
  });

  test('should display the navigation bar', async ({ page }) => {
    const navbar = page.locator('nav');
    await expect(navbar).toBeVisible();
  });

  test('should navigate to docs page via "Get started" link', async ({ page }) => {
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page).toHaveURL(/docs\/intro/);
    await expect(page.locator('h1')).toHaveText(/Installation/); // ← fix here
  });

  test('should have visible GitHub star button', async ({ page }) => {
    const starButton = page.getByRole('link', { name: /Star microsoft\/playwright/ }); // ← fix here
    await expect(starButton).toBeVisible();
  });

  test('should not have console errors on load', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.reload();
    expect(errors).toEqual([]);
  });

});

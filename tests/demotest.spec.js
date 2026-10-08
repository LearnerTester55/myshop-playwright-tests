import { test, expect } from '@playwright/test';

test('Welcome to MyShop heading is visible', async ({ page }) => {
    await page.goto('https://learnertester55.github.io/myshop/');

    await page.waitForTimeout(3000);

    console.log(
        await page.getByRole('heading', { name: 'Welcome to MyShop' }).allTextContents()
    );

    await expect(
        page.getByRole('heading', { name: 'Welcome to MyShop' })
    ).toBeVisible();
});

test('Premium Headphones is visible', async ({ page }) => {
    await page.goto('https://learnertester55.github.io/myshop/');
    await page.waitForTimeout(3000);

    await expect(
        page.getByRole('heading', { name: 'Premium Headphones' })
    ).toBeVisible();
});

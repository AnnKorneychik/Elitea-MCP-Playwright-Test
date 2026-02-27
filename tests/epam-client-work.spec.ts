import { test, expect } from '@playwright/test';

// Test generated from user scenario: Navigate to https://www.epam.com/ -> Select "Services" -> Click "Explore Our Client Work" -> Verify "Client Work" text is visible

test('EPAM - Explore Our Client Work navigates to Client Work', async ({ page }) => {
  // Step 1: Go to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Step 2: Select "Services" from the header menu
  // Using a visible text selector to click the Services header item
  await page.click('text=Services');

  // Step 3: Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Step 4: Verify that the "Client Work" text is visible on the page
  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});

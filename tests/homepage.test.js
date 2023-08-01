const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

test('Homepage Test', async ({ page }) => {
  // Read the content of the Next.js component (pages/index.js)
  const componentPath = path.join(__dirname, '../pages/index.js');
  const componentContent = await fs.promises.readFile(componentPath, 'utf-8');

  // Render the Next.js component in a virtual page using Playwright's innerHTML function
  await page.setContent(componentContent);

  // Assert: Check the rendered content for title and h1 text
  const titleRegex = /<title>(.*?)<\/title>/;
  const h1Regex = /<h1>(.*?)<\/h1>/;

  const titleMatch = await page.innerHTML('title');
  const h1Match = await page.innerHTML('h1');

  // Ensure that the title and h1 elements are found in the rendered content
  expect(titleMatch).toBeTruthy();
  expect(h1Match).toBeTruthy();

  // Perform assertions on the extracted title and h1 text
  expect(titleMatch).toBe('Hello Professor');
  expect(h1Match).toBe('Hello Professor');
});

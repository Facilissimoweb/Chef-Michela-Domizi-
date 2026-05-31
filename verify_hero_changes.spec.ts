import { test, expect } from '@playwright/test';

test('verify hero video text and controls', async ({ page }) => {
  await page.goto('http://localhost:3001');

  // Check the collaboration text
  const collabText = await page.textContent('p.font-headline-sm:has-text("In collaborazione con")');
  expect(collabText).toContain('In collaborazione con');

  const molinosText = await page.textContent('p.font-body-md:has-text("Molinos del Duero")');
  expect(molinosText).toContain('Molinos del Duero (Spagna)');

  // Verify iframe src has controls=1 and mute=0
  const iframe = page.locator('iframe[title="Chef Michela Domizi Video"]');
  const src = await iframe.getAttribute('src');
  expect(src).toContain('controls=1');
  expect(src).toContain('mute=0');

  // Take a screenshot
  await page.screenshot({ path: '/home/jules/verification/hero_video_updated.png', fullPage: false });
});

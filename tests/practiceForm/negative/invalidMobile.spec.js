const { test, expect } = require('@playwright/test');
const { PracticeFormPage } = require('../../../pages/PracticeFormPage');
const { negativeFormInvalidMobile } = require('../../../testData/practiceFormData');

test('Negative: Invalid Mobile', async ({ page }) => {
  const formPage = new PracticeFormPage(page);

  await formPage.goto();
  await formPage.fillForm(negativeFormInvalidMobile);
  await formPage.submitForm();

  const invalidMobile = page.locator('#userNumber:invalid');
  await expect(invalidMobile).toBeVisible();
});

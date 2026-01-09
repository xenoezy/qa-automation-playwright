const { test, expect } = require('@playwright/test');
const { PracticeFormPage } = require('../../../pages/PracticeFormPage');
const { negativeFormEmptyFirstName } = require('../../../testData/practiceFormData');

test('Negative: Empty First Name', async ({ page }) => {
  const formPage = new PracticeFormPage(page);

  await formPage.goto();
  await formPage.fillForm(negativeFormEmptyFirstName);
  await formPage.submitForm();

await expect(
    page.locator('#example-modal-sizes-title-lg')
  ).toBeHidden();
});

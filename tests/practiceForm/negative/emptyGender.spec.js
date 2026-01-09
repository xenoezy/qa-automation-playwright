const { test, expect } = require('@playwright/test');
const { PracticeFormPage } = require('../../../pages/PracticeFormPage');
const { negativeFormEmptyGender } = require('../../../testData/practiceFormData');

test('Negative: Empty Gender', async ({ page }) => {
  const formPage = new PracticeFormPage(page);

  await formPage.goto();
  await formPage.fillForm(negativeFormEmptyGender);
  await formPage.submitForm();

  await expect(formPage.invalidGender()).toHaveCount(3)
});

const { test, expect } = require('@playwright/test');
const { PracticeFormPage } = require('../../../pages/PracticeFormPage');
const { positiveForm } = require('../../../testData/practiceFormData');

test('Positive: Fill and submit form successfully', async ({ page }) => {
  const formPage = new PracticeFormPage(page);

  await formPage.goto();
  await formPage.fillForm(positiveForm);
  await formPage.submitForm();

  const title = await formPage.getSubmissionTitle();
  expect(title).toBe('Thanks for submitting the form');
});

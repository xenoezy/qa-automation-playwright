const { test, expect } = require('@playwright/test');
const { PracticeFormPage } = require('../../../pages/PracticeFormPage.js');
const { positiveForm } = require('../../../testData/practiceFormData.js');

test.describe('Practice Form - End-to-End Flow', () => {
  test('Complete full form flow and verify submission details', async ({ page }) => {
    const form = new PracticeFormPage(page);

    await form.goto()
    await form.fillForm(positiveForm)
    await form.submitForm()

    
    const title = await form.getSubmissionTitle()
    expect(title).toBe('Thanks for submitting the form')

    
    const table = page.locator('.table-responsive');
    await expect(table).toContainText(positiveForm.firstName);
    await expect(table).toContainText(positiveForm.lastName);
    await expect(table).toContainText(positiveForm.gender);
    
    const mobilePattern = positiveForm.mobile.slice(0,10)
    await expect(table).toContainText(mobilePattern)
  });
});

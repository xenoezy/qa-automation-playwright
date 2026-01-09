class PracticeFormPage {
  constructor(page) {
    this.page = page
    this.firstNameInput = page.locator('#firstName')
    this.lastNameInput = page.locator('#lastName')
    this.mobileInput = page.locator('#userNumber')
    this.submitButton = page.locator('#submit')
    this.modalTitle = page.locator('#example-modal-sizes-title-lg')
  }

  async goto() {
    await this.page.goto(
      'https://demoqa.com/automation-practice-form',
      { waitUntil: 'domcontentloaded' }
    )
    await this.page.waitForSelector('#firstName')
  }

  async fillForm(data) {
    const allowedGender = ['Male', 'Female', 'Other']

    if (data.firstName !== undefined) {
      await this.firstNameInput.fill(data.firstName)
    }

    if (data.lastName !== undefined) {
      await this.lastNameInput.fill(data.lastName)
    }

    if (allowedGender.includes(data.gender)) {
      await this.genderRadioLabel(data.gender).click()
    }

    if (data.mobile !== undefined) {
      await this.mobileInput.fill(data.mobile)
    }
  }

  async submitForm() {
    await this.submitButton.click()
  }

  async getSubmissionTitle() {
    await this.modalTitle.waitFor({ state: 'visible' })
    return await this.modalTitle.textContent()
  }

  invalidGender() {
    return this.page.locator('input[name="gender"]:invalid')
  }
  genderRadioLabel(gender) {
    return this.page.locator(`label:has-text("${gender}")`)
  }
}

module.exports = { PracticeFormPage }

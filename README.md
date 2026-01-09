# QA Automation Test – DemoQA Practice Form

This repository contains an automation testing project created as part of a QA Automation Test Assignment.  
The project demonstrates how to build a clean, maintainable, and scalable automation framework using Playwright with JavaScript.

---

## Objective

Automate test scenarios for the following page:  
https://demoqa.com/automation-practice-form

The focus of this project is not on the number of test cases, but on:
- Code quality
- Project structure
- Best practices in test automation

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- Visual Studio Code
- Windows OS

---

## Project Structure

```text
QA-Automation/
├─ tests/
│   └─ practiceForm/
│        ├─ positive/
│        │     └─ fillForm.spec.js
│        ├─ negative/
│        │     ├─ emptyFirstName.spec.js
│        │     ├─ invalidMobile.spec.js
│        │     └─ emptyGender.spec.js
│        └─ e2e/
│              └─ fullFormFlow.spec.js
├─ pages/
│    └─ PracticeFormPage.js
├─ testData/
│    └─ practiceFormData.js
├─ utils/
│    └─ helpers.js
├─ playwright.config.js
└─ package.json

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Run all tests
npx playwright test

# 3. Run tests with UI
npx playwright test --ui


Notes

Make sure Node.js version LTS 20.x is installed

.gitignore already includes node_modules/ and test-results/ to avoid uploading large files

The main branch of the repository is main

All commits are saved and ready to push to GitHub
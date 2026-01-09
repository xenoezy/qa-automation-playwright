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
├─ pages/
│  └─ PracticeFormPage.js      # Page Object Model
│
├─ tests/
│  └─ practiceForm/
│     ├─ positive/
│     │  └─ fillForm.spec.js   # Positive test scenario
│     └─ negative/
│        └─ emptyFirstName.spec.js # Negative test scenario
│
├─ playwright.config.js
├─ package.json
└─ README.md

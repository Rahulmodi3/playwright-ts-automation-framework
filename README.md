# Playwright TypeScript Automation Framework

This repository is a scalable and modular test automation framework built with [Playwright](https://playwright.dev/) and TypeScript. It is designed to help you write clean, maintainable, and robust end-to-end tests for modern web applications.

## 🚀 Features

- ✅ Built with Playwright & TypeScript
- 🧩 Modular structure (page object model, helpers, configs)
- 🧪 Supports UI and API testing
- 🔍 Built-in test step logger using custom decorators
- 🗂 Organized test suite for easy scalability
- 📦 Easy to install and run


## 🛠️ Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/Rahulmodi3/playwright-ts-automation-framework.git
cd playwright-ts-automation-framework
```
2. **Install Dependencies**

```bash
npm install
```

3. **Run Tests**

```bash
npx playwright test
```

4. **Open HTML Test Report**

```bash
npx playwright show-report
```

## 🧪 Writing Tests
- All tests are written using the Playwright Test framework.
- You can add new page classes in the pages/ directory.
- Test cases can be added to the tests/ directory following the folder-based feature grouping.

## 📌 Custom Utilities
- @step decorator: Enhance step logging in test reports.
- Common helper methods for navigation, assertions, and interaction.

##  📖 Further Reading
For an in-depth guide on enhancing Playwright reports using the @step decorator in TypeScript, refer to the following article:
[Supercharge Your Playwright Reports Using @step Decorator in TypeScript](https://medium.com/@modirahul2019/supercharge-your-playwright-reports-using-step-decorator-in-typescript-9ddad4329703/).

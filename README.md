# WebDriverIO Course

Welcome to my WebDriverIO (WDIO) course project! This repository is a learning sandbox where I applied the concepts and techniques I learned while working through a WebDriverIO course. The project is still a work in progress and serves as a practical example of how to set up and run automated end-to-end tests for web applications using WebDriverIO.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Run the Tests](#run-the-tests)
- [License](#license)

## Introduction
WebDriverIO is a powerful tool for automating web applications, providing support for various testing frameworks and browsers. This project aims to give me hands-on experience with WebDriverIO, writing tests, and configuring a robust testing environment.

The tests in this project focus on the fundamentals of end-to-end testing, including:
- Basic interaction with web elements
- Browser automation
- Assertions
- Using WebDriverIO's various features (e.g., commands, hooks, reporters)

## Getting Started

### Prerequisites
To get started with this project, you'll need:
- **Node.js** (Recommended version: v16+)
- **npm** or **yarn** (npm is bundled with Node.js)

### Installing Dependencies
Clone this repository to your local machine and install the necessary dependencies using npm:

```bash
git clone https://github.com/cj61500/wdio-course-WIP.git
cd wdio-course-WIP
npm install
```

This will install the necessary libraries, including WebDriverIO and other testing dependencies.

## Project Structure

The project structure follows typical WebDriverIO setup conventions:

```
/wdio-course-WIP
  ├── /node_modules          # Installed dependencies
  ├── /test                  # Test files directory
      ├── /specs             # Contains test specifications (e.g., .js or .ts files)
      ├── /pageobjects       # Page Object Model (POM) files for element selectors
      ├── /helpers           # Custom helper functions for test automation
  ├── /wdio.conf.js          # WebDriverIO configuration file
  ├── package.json           # npm package metadata
  ├── /reports               # Test result reports
  └── /logs                  # Logs from test runs
```

### Key Files:
- **wdio.conf.js**: The WebDriverIO configuration file. This file includes the configuration for the testing environment, browser setup, reporter, and hooks.
- **/test/specs**: Contains the test scripts written using WebDriverIO commands.
- **/test/pageobjects**: Implements the Page Object Model (POM) design pattern to create reusable page objects for interacting with web elements in your tests.
- **/test/helpers**: Contains custom helper functions to extend WebDriverIO's functionality.

## Features

- **Browser Automation**: Full automation of browsers for running tests on real web applications.
- **Assertions**: Includes assertions to verify UI elements and behaviors, using WebDriverIO's built-in assertion library or external ones like Chai or Mocha.
- **Page Object Model**: Following the Page Object Model (POM) pattern to organize test code and reduce repetition.
- **Reports**: Generates test execution reports for easy tracking of test results.

## Setup and Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/cj61500/wdio-course-WIP.git
   cd wdio-course-WIP
   ```

2. Install the required dependencies using npm:

   ```bash
   npm install
   ```

3. Make sure you have a browser driver installed (e.g., ChromeDriver for Chrome). WebDriverIO supports multiple browsers, including Chrome, Firefox, and Safari.

4. Configure your WebDriverIO configuration file (`wdio.conf.js`) if necessary, to suit your environment.

## Run the Tests

You can run the tests with the following npm command:

```bash
npx wdio run wdio.conf.js
```

This will trigger WebDriverIO to start the browser and run your test suite according to the configuration in `wdio.conf.js`.

You can also specify individual test files to run, e.g.:

```bash
npx wdio wdio.conf.js --spec ./test/specs/myTest.spec.js
```

### Reporting
By default, WebDriverIO generates a simple test report that you can find in the `/reports` folder. This can be configured to use advanced reporters like Allure or Mochawesome if needed.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

This README provides an overview of the project, installation instructions, and basic usage for anyone who wants to try it out or contribute. It also introduces some of the WebDriverIO concepts you might have worked with. If you implement more advanced features later, you can update this README accordingly!

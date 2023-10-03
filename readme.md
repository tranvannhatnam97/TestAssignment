# Part 1 - Test Design

Test case stored in folder Part1_TestDesign
The test design method was noted by tag in feature file

# Part 2 - UI Automation Test

## Install

First, access folder of Part 2 in terminal (to install and run automation testscript)

```bash
cd Part2_UIAutomationTest
```

### Install Nodejs

Follow instruction in https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Install for project

```bash
npm install
```

If Playwright does not load from npm, run this command

```bash
npx install playwright
```

## Run testscript

```bash
npx ts-node .\TestManagement\testExecutor.ts
```

The project use Page Model Object, with:

- Test cases writen by gherkin syntax: src/test/features
- Test scripts (or TDD): src/test/steps
- Page object models: src/test/pom
- Glue to map testcase id, test cases and test scripts: Testmanagerment/TestSet

Report files stored in test-result folder

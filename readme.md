# Part 1 - Test Design

Test case stored in folder Part1_TestDesign.

The test design method was noted by tag in feature file

# Part 2 - UI Automation Test

## Install

First, access folder of Part 2 in terminal (to install and run automation testscript)

```bash
cd Part2_UIAutomationTest
```

### Install sample UI server

```bash
docker run --rm -d -p 8080:5000 gprestes/the-internet
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

# Part 3 - Api Automation Test

## Install

First, access folder of Part 3 in terminal (to install and run automation testscript)

```bash
cd Part3_ApiAutomation
```

### Install sample api server

Create file db.json

Run json-server using db.json as database:

```bash
docker run -p 80:80 -v ./db.json:/data/db.json clue/json-server
```

(If you run on window, should use full path of json file, Eg:C:\Users\ASUS\Documents\TestAsssignment\Part3_ApiAutomation\db.json)

### Install module for automation framework

```bash
npm install
```

## Run testscript

```bash
npm test
```

The project uses framework Jest for unit-test, and axios to send request. It has 3 main package:

- "data" contains data for data driven testing
- "src" contains request program
- "test" contains testscript

The results will be shown in terminal console (or logger). Jest has some tools for reporting (as html, json), however I did't have enough time to research on it. The configuration is quite complicated.

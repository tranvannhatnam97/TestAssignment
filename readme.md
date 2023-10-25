Thư mục Part1 - Exercise I

Thư mục Part 2 - Exercise 2 (vì API chatbot lỗi nên em tạm thay thế bằng api của json-server, nếu cần anh/chị có thể tự sửa lại api em đã viết sẵn trong file src/chat.ts, hoặc anh/chị có thể báo em và em sẽ cập nhật, còn assigment 2 em chưa rõ yêu cầu là gì nên chưa làm)

Làm theo hướng dẫn để cài đặt và chạy test

# Part 1 - UI Automation Test

## Install

First, access folder of Part 2 in terminal (to install and run automation testscript)

```bash
cd Part1_UIAutomationTest
```

### Install Nodejs

Follow instruction in https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

### Install for project

```bash
npm install
```

```bash
npx install -g playwright
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

# Part 2 - Api Automation Test

## Install

First, access folder of Part 3 in terminal (to install and run automation testscript)

```bash
cd Part2_ApiAutomation
```

### Install module for json-server and api test module

```bash
npm i
```

## Install sample api server

Run json-server using db.json as database:

```bash
json-server --watch .\db.json
```

## Run testscript

```bash
npx ts-node .\test\fullTest.ts
```

The project has 4 folder:

- data: store input data (message to chatbot for each case)
- src: store source code
- tools: excel tools
- results: store excel file
  Report files stored in test-result folder

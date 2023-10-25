import * as fs from "fs";
import { createMessage } from "../src/createMessages";
import { writeXLSXFile } from "../tools/excel";

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const INPUT_FILE = "data/messages_data.json";
const jsonString = fs.readFileSync(INPUT_FILE, "utf-8");
const jsonData = JSON.parse(jsonString);
export async function fullTest() {
  var results = [];
  for (var testSet of jsonData) {
    // var res = {};
    await createMessage(testSet.tc, testSet.message).then(async (body) => {
      console.log(body.data);
      var result = { tc: testSet.tc, result: JSON.stringify(body.data) };
      console.log(result);
      await results.push(result);
      await sleep(100);
    });
  }
  await writeXLSXFile(results);
}
fullTest();

import { createUser } from "../src/createUser";
import * as fs from "fs";
const jsonString = fs.readFileSync("data/created_user.json", "utf-8");
const jsonData = JSON.parse(jsonString);
test.each(jsonData)("Create user successfully", async (data) => {
  var response = await createUser(data);
  expect(response.status).toBe(201);
});
// test("tc-001", () => {});

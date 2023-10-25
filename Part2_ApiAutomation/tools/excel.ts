import * as XLSX from "xlsx";
import { CellObject } from "xlsx";
const RESULT_FILE = "../results/res.xlsx";
async function writeToExcel(filePath: string, sheetName: string, data: any[]) {
  // Create a new workbook
  const workbook = XLSX.utils.book_new();

  // Create a new worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Add the worksheet to the workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

  // Save the workbook to a file
  await XLSX.writeFile(workbook, filePath);
}
export async function writeXLSXFile(data) {
  // const workbook: XLSX.WorkBook = XLSX.readFile(
  //   require.resolve("../results/res.xlsx")
  // );
  const fileName = require.resolve(RESULT_FILE);
  const sheetName = "Results";
  await writeToExcel(fileName, sheetName, data);
}

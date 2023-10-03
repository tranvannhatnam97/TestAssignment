import axios, { AxiosResponse } from "axios";
export async function getCategoryIdByName(categoryName) {
  const url = `http://localhost:80/categories?name=${categoryName}`;
  try {
    const response: AxiosResponse = await axios.get(url);
    return response.data[0].id;
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// getCategoryIdByName("Electronicss").then((res) => console.log("id:" + res));

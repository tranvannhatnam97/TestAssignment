import axios, { AxiosResponse } from "axios";
export async function getProductsIdByCategoryId(categoryId) {
  const url = `http://localhost:80/products?categoryId=${categoryId}`;
  try {
    const response: AxiosResponse = await axios.get(url);
    return response.data[0].id;
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// getProductsIdByCategoryId(1).then((res) => console.log("id:" + res));

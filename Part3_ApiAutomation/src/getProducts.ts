import axios, { AxiosResponse } from "axios";
export async function getProducts() {
  const url = "http://localhost:80/products";
  try {
    const response: AxiosResponse = await axios.get(url);
    return response;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

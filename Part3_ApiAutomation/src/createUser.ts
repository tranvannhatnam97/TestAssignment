import axios, { AxiosResponse } from "axios";
export async function createUser(body) {
  const url = "http://localhost:80/users";

  try {
    const response: AxiosResponse = await axios.post(url, body);
    return response;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

import axios, { AxiosResponse } from "axios";
export async function createMessage(tc: string, message: string) {
  const url = "http://localhost:3000/messages";
  var body = {
    tc: tc,
    message: message,
  };

  var headers = {
    "Content-Type": "application/json",
    token: "",
  };

  try {
    const response: AxiosResponse = await axios.post(url, body, {
      headers: headers,
    });
    return response;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

import axios, { AxiosResponse } from "axios";
export async function createOrder(userId, productId) {
  const url = "http://localhost:80/users";
  var body = {
    userId: userId,
    status: "shipped",
    items: [
      {
        productId: productId,
        quantity: 1,
      },
    ],
  };
  try {
    const response: AxiosResponse = await axios.post(url, body);
    return response;
  } catch (error) {
    console.error("Error:", error.message);
  }
}
createOrder(1, 1).then((res) => console.log("status:" + res));

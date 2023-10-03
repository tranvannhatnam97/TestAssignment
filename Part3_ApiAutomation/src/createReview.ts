import axios, { AxiosResponse } from "axios";
export async function createReview(userId, productId) {
  const url = "http://localhost:80/reviews";
  var body = {
    userId: userId,
    productId: productId,
    rating: 4,
    comment: "Very good, but could be better.",
  };
  try {
    const response: AxiosResponse = await axios.post(url, body);
    return response;
  } catch (error) {
    console.error("Error:", error.message);
  }
}
// createReview(1, 1).then((res) => console.log("status:" + res));

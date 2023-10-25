import axios, { AxiosResponse } from "axios";
export async function chat(message: string) {
  const url =
    "https://vinbase.ai/api/v1/chatbot_gateway/agents//5fdad6a848f0bbdfb0d320a9/channels/6017759dcfa195716b48ac28/users/ChatUser/messages_for_testing";
  var body = {
    context: {},
    message: message,
    get_debug: true,
    voice_input: false,
    channel_type: "chatbox",
  };
  var headers = {
    "Content-Type": "application/json",
    token:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJleHAiOjE5Mjc1MTAxNzMsImlhdCI6MTYxMjE1MDE3MywiaXNzIjoiNjAxNzc1OWRkMjc0MDI3MDVjNDIyMzQzIiwicHVibGljX2lkIjoiNWZkYWQ2YTg0OGYwYmJkZmIwZDMyMGE5IiwibmFtZSI6ImNoYXRib3QifQ.DJ7gU0p62V2YYZuN2i1fQZw0kojzYWZqEMdC3GCa9XYNe0igEqYJtc45UtnwPd8k_D73s7k9mQ9ume2DNUvjKnctgDv78t3hyCFmtYZVCLATyLaYcqLin0lvQEQL59JKR4gBO4nmuq5D9CfpT8A0KKm48JwG0AwXi5jVq7yN85mlTrqZl6Z6qXrJcuu_KQCw3GELqCdFEEMxy90yZe7nsP4tu4Sui2PCO2_qCsNQJ9pCz_x68I6gcC88sPNmeg70Nnj9RE9Nek82A77pftOCRZxE-5pwE0hM0cda_6HQwWerqkTXsiP_ix6zyAnQzryd26fj8h885Q4Yb-gngocgxA",
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
chat("Quy đổi voucher thành tiền mặt được không?").then((res) =>
  console.log("status:" + JSON.stringify(res))
);

import * as fs from "fs";
import { createUser } from "../src/createUser";
import { createOrder } from "../src/createOrder";
import { createReview } from "../src/createReview";
import { getCategoryIdByName } from "../src/getCategoryIdByName";
import { getProductsIdByCategoryId } from "../src/getProductsIdByCategoryId";
const jsonString = fs.readFileSync("data/created_user.json", "utf-8");
const jsonData = JSON.parse(jsonString);
test.each(jsonData)("Create order and review successfully", async (data) => {
  //Create user
  var response = await createUser(data);
  expect(response.status).toBe(201);
  const newUserId = response.data.id;
  //Get categoryId by name
  const categoryId = await getCategoryIdByName("Electronics");
  expect(typeof categoryId).toBe("number");
  //Get productId by categoryId
  const productId = await getProductsIdByCategoryId(categoryId);
  expect(typeof productId).toBe("number");
  //Create order
  const order = await createOrder(newUserId, productId);
  expect(order.status).toBe(201);
  expect(typeof order.data.id).toBe("number");
  //Create review
  const review = await createReview(newUserId, productId);
  expect(review.status).toBe(201);
  expect(typeof review.data.id).toBe("number");
});

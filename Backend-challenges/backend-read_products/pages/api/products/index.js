// import { products } from "../../../lib/products";
import dbConnect from "../../../db/connect";
import Product from "../../../db/db/models/product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } else {
    response.status(400).json({ status: "Invalid request" });
  }
}

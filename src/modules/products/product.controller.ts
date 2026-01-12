import { Product } from "./product.model";
import { ok } from "../../utils/response";

export const listProducts = async (_: any, res: any) =>
  ok(res, await Product.find());

import { CustomError, get } from "@/app/common/util/fetch"
import { Product } from "../interfaces/product.interface";

export default async function getProduct(productId: number) {
    return get<Product | CustomError>(`products/${productId}`);
}
import { API_URL } from "../common/constants/api";

export const getProductImageUrl = (productId: number): string => {
    return `${API_URL}/images/products/${productId}.jpg`;
}
  

import { Typography } from "@mui/material";
import getProducts from "./actions/get-products";
import ProductsGrid from "./products-grid";

export default async function Products() {
  const products = await getProducts();

  if ('message' in products) {
    return <Typography color="error">{products.message}</Typography>;
  }

  if (!products || products.length === 0) {
    return <Typography>No products available at the moment.</Typography>;
  }

  return (
    <ProductsGrid products={products} />
  );
}

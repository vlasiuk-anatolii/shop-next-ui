import { Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import getProduct from "./get-product";
import Image from "next/image";
import { getProductImageUrl } from "../product-image";
import Checkout from "@/app/checkout/checkout";

interface SingleProductProps {
	params: Record<string, string>;
}

export default async function SingleProduct({ params }: SingleProductProps) {
	const productId = params?.productId;
	const product = await getProduct(Number(productId));

	return (
		<Grid container marginBottom={"2rem"} rowGap={3}>
			{product.imageExists && (
				<Grid size={{ md: 6, xs: 12 }}>
					<Image
						src={getProductImageUrl(product.id)}
						width={0}
						height={0}
						className="w-full sm:w-3/4 h-auto"
						sizes="100vw"
						alt="Picture of the product"
					/>
				</Grid>
			)}
			<Grid size={{ md: 6, xs: 12 }}>
				<Stack gap={3}>
					<Typography variant="h2">{product.name}</Typography>
					<Typography>{product.description}</Typography>
					<Typography>${product.price}</Typography>
					<Checkout productId={product.id} />
				</Stack>
			</Grid>
		</Grid>
	);
}

"use client";

import { Card, CardActionArea, Stack, Typography } from "@mui/material";
import { Product as IProduct } from "./interfaces/product.interface";
import Image from "next/image";
import { getProductImageUrl } from "./product-image";
import { useRouter } from "next/navigation";

interface ProductProps {
	product: IProduct;
}
export default function Product({ product }: ProductProps) {
	const router = useRouter();
	return (
		<CardActionArea onClick={() => router.push(`/products/${product.id}`)}>
			<Card className="p-4">
				<Stack gap={3}>
					<Typography variant="h4">{product.name}</Typography>
					{product.imageExists && (
						<Image
							src={getProductImageUrl(product.id)}
							width={0}
							height={0}
							className="w-auto md:w-1/2 h-auto"
							sizes="100vw"
							alt="Picture of the product"
						/>
					)}
					<Typography>{product.description}</Typography>
					<Typography variant="h4">${product.price}</Typography>
				</Stack>
			</Card>
		</CardActionArea>
	);
}

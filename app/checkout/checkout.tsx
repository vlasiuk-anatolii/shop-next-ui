"use client";

import { Button } from "@mui/material";
import checkout from "./actions/checkout";
import getStripe from "./stripe";

interface CheckoutProps {
	productId: number;
}

export default function Checkout({ productId }: CheckoutProps) {
	const handleCheckout = async () => {
		const session = await checkout(productId);
		console.log("🚀 ~ handleCheckout ~ session:", session)
		const stripe = await getStripe();
		console.log("🚀 ~ handleCheckout ~ stripe:", stripe)
		await stripe?.redirectToCheckout({
			sessionId: session.data.id,
		});
	};
	return (
		<Button
			variant="contained"
			className="max-w-[25%]"
			onClick={handleCheckout}
		>
			Buy Now
		</Button>
	);
}

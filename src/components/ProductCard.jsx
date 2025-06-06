import React from "react";
import styles from "../styles/ProductCard.module.css";
import Button from "@mui/material/Button"

const ProductCard = ({ product, addToCart }) => {
	const itemName = product.name;
	return (
		<div
			className={`${styles.card} ${
				!product.inStock ? styles.outOfStock : ""
			}`}
		>
			<h3>{product.name}</h3>
			<p>Price: {product.price}</p>
			<p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>

			{/*Implement Add to Cart button functionality */}
			<Button variant="contained"
				onClick={() => {
					addToCart(itemName);
				}}
			>
				Add to Cart
			</Button>
		</div>
	);
};

export default ProductCard;

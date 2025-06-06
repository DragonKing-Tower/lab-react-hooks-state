import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ productArray, addToCart }) => {
	if (productArray.length === 0) {
		return <p>Error, no item found</p>;
	}
	return (
		<div>
			<h2>Available Products</h2>

			{/* Replace sample data with dynamic product list */}
			{productArray.map((product) => (
				<ProductCard key={product.id} product={product} addToCart={addToCart}/>
			))}
		</div>
	);
};

export default ProductList;

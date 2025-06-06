import React from "react";
import Button from "@mui/material/Button";

const Cart = ({ cartList, removeFromCart }) => {
	return (
		<div>
			<h2>Shopping Cart</h2>
			{/*  Display cart items dynamically */}
			<p>{cartList.toString()}</p>
			{/*  Remove items from cart */}
			<Button
				variant="contained"
				onClick={() => {
					removeFromCart();
				}}
			>
				Remove Latest from Cart
			</Button>
		</div>
	);
};

export default Cart;

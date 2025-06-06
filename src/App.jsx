import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import { useEffect } from "react";
import styles from "./styles/DarkMode.module.css";

const App = () => {
	// Implement state for dark mode toggle

	const [isDarkMode, setIsDarkMode] = useState(false);

	function toggleDarkMode() {
		setIsDarkMode((prev) => !prev); //why I used boolean
	}

	// Sample product data (for display purposes only)
	const sampleProducts = [
		{ id: 1, name: "Apple", price: "$1.00", inStock: true },
		{ id: 2, name: "Milk", price: "$2.50", inStock: false },
	];

	// TODO: Implement state for category filtering

	const [filteredList, setFilteredList] = useState(sampleProducts);

	function filterList(type) {
		setFilteredList(() => {
			if (type === "all") {
				return sampleProducts;
			} else
				return sampleProducts.filter((product) => {
					return product.inStock.toString() === type;
				});
		});
	}

	// TODO: Implement state for cart management

	const [inCart, setInCart] = useState([]);

	function addToCart(itemName) {
		setInCart([...inCart, itemName]);
	}

	function removeFromCart() {
		setInCart((prev) => prev.slice(0, -1));
	}

	return (
		<div className={isDarkMode ? styles.dark : styles.light}>
			{/*Couldn't find a good way to make it affect global page while using the .module */}
			<h1>🛒 Shopping App</h1>
			<p>
				Welcome! Your task is to implement filtering, cart management,
				and dark mode.
			</p>
			{/* TODO: Render DarkModeToggle and implement dark mode functionality */}
			<DarkModeToggle toggler={toggleDarkMode} currentMode={isDarkMode} />
			{/* TODO: Implement category filter dropdown */}
			<label>Filter by Category: </label>
			<select
				onChange={(e) => {
					filterList(e.target.value);
				}}
			>
				<option value="all">All</option>
				<option value="true">In Stock</option>
				<option value="false">Out of Stock</option>
			</select>
			{/* Display initial sample products */}
			<ProductList productArray={filteredList} addToCart={addToCart} />
			{/* Implement and render Cart component */}
			<Cart cartList={inCart} removeFromCart={removeFromCart} />
		</div>
	);
};

export default App;

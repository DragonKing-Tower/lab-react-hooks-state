import React from "react";
import Button from "@mui/material/Button";

const DarkModeToggle = ({ toggler, currentMode }) => {
	return (
		<Button variant="contained" onClick={toggler}>
			{currentMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
		</Button>
	);
};

export default DarkModeToggle;

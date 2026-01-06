import React from "react";
import { Routes, Route } from "react-router-dom";
import BlueScreen404 from "../containers/blueScreen404.container";
import Home from "../containers/home.container";
import Selection from "../containers/selection.container";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Selection />} />
			<Route path="/home" element={<Home />} />
			<Route path="/windows" element={<Home />} />
			<Route path="/404" element={<BlueScreen404 />} />
			<Route path="*" element={<BlueScreen404 />} />
		</Routes>
	);
}

export default AppRoutes;

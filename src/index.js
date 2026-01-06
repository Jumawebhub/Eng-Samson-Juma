import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./theme/style.scss";
import "./theme/selection.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import "uikit/dist/js/uikit.min.js";
import "uikit/dist/js/uikit-icons.min";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import * as serviceWorker from "./serviceWorker";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error("ErrorBoundary caught an error", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ padding: "20px", color: "red", background: "white" }}>
					<h1>Something went wrong.</h1>
					<pre>{this.state.error && this.state.error.toString()}</pre>
					<pre>{this.state.error && this.state.error.stack}</pre>
				</div>
			);
		}

		return this.props.children;
	}
}

initializeIcons();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);

serviceWorker.register();
reportWebVitals();

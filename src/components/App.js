import React from "react";
import { View, Text, Platform } from "react-native";
import { Default, Mobile, Tablet, Desktop } from "./Responsive";

function App() {
	return (
		<React.Fragment>
			<Desktop>
				<View
					style={{
						...(Platform.OS === "web"
							? {
									width: "100vw",
									height: "100vh"
							  }
							: {
									flex: 1
							  }),
						backgroundColor: "orange"
					}}
				/>
			</Desktop>
			<Tablet>
				<View
					style={{
						...(Platform.OS === "web"
							? {
									width: "100vw",
									height: "100vh"
							  }
							: {
									flex: 1
							  }),
						backgroundColor: "yellow"
					}}
				/>
			</Tablet>
			<Mobile>
				<View
					style={{
						...(Platform.OS === "web"
							? {
									width: "100vw",
									height: "100vh"
							  }
							: {
									flex: 1
							  }),
						backgroundColor: "blue"
					}}
				/>
			</Mobile>
		</React.Fragment>
	);
}

const _d = {
	id: Date.now(),
	ref: "_main_app",
	uuid: "null"
};

const getWebParams = () => {
	const array = Object.keys(_d).map((key, i) => {
		return `${key}=${_d[key]}`;
	});

	const query = array.join("&");

	return {
		query,
		toUrl: () => `${window.location}?${query}`
	};
};

export default App;

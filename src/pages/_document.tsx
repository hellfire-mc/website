import { Head, Html, Main, NextScript } from "next/document";

import { ColorModeScript } from "@chakra-ui/react";

import { theme } from "../theme";

export default function Document() {
	return (
		// force background color to avoid flashing issues
		<Html lang="en" style={{ backgroundColor: "#1d111d" }}>
			<Head />
			<body>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}

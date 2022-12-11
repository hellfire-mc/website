import { ChakraProvider, DarkMode } from "@chakra-ui/react";

import { theme } from "../theme";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<DarkMode>
				<Component {...pageProps} />
			</DarkMode>
		</ChakraProvider>
	);
}

export default App;

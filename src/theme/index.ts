import { extendTheme, ThemeComponentProps } from "@chakra-ui/react";

const styles = {
	global: (props: ThemeComponentProps) => ({
		body: {
			background: "#1d111d",
		},
	}),
};

const config = {
	initialColorMode: "dark",
	useSystemColor: false,
};

export const theme = extendTheme({ config, styles });

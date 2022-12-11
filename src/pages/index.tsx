import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Box, Center, Container, HStack, VStack } from "@chakra-ui/react";

import brand from "../assets/brand.png";

import type { NextPage } from "next";
const Home: NextPage = () => {
	return (
		<Container height="100vh" width="100vw" maxW={800}>
			<Center width="100%" height="100%">
				<VStack>
					<Box padding={8}>
						<motion.div
							initial={{ opacity: 0, translateY: -30 }}
							animate={{ opacity: 1, translateY: 0 }}
							transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
						>
							<Image src={brand} alt="brand"></Image>
						</motion.div>
					</Box>
					<HStack>
						<Link href="https://github.com/hellfire-mc">GitHub</Link>
						<Link href="https://github.com/hellfire-mc">Discord</Link>
						<Link href="https://github.com/hellfire-mc">Twitter</Link>
					</HStack>
				</VStack>
			</Center>
		</Container>
	);
};

export default Home;

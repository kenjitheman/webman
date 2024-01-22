import React from "react";
import {
    Box,
    Container,
    Stack,
    Text
} from "@chakra-ui/react";
import LanguageSwitcher from "./language_switcher.js";
import { FaDiscord, FaTelegram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <Box as="footer" fontFamily={"'Etna', sans-serif"} fontWeight={"medium"} fontSize="lg" zIndex={2} mx="auto">
            <Container maxW={"10xl"} py={5}>
                <Stack
                    direction={{ base: "column", md: "row-reverse" }}
                    justify={{ base: "center", md: "space-between" }}
                    align={{ base: "center", md: "center" }}
                >
                    <Stack direction={"row"} spacing={5}>
                        <LanguageSwitcher width={"auto"} id={"language-switcher-footer"} />
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <FaDiscord size={35} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                            <FaTelegram size={35} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter size={35} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <FaGithub size={35} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                            <FaYoutube size={35} />
                        </a>
                    </Stack>

                    <Text pt={6} fontSize={"md"} textAlign={"center"}>
                        &copy; {new Date().getFullYear()} Alt Corporation | All rights reserved
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;

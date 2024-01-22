import React from "react";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import LanguageSwitcher from "./language_switcher.js";
import { FaDiscord, FaTelegram, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <Box as="footer" fontFamily={"'Etna', sans-serif"} fontWeight={"medium"} fontSize="lg" zIndex={2} mx="auto">
            <Container maxW={"10xl"} py={5}>
                <Stack
                    direction={{ base: "column", md: "row-reverse" }}
                    justify={{ base: "center", md: "space-between" }}
                    align="center"
                >
                    <Stack
                        direction={{ base: "column-reverse", md: "row" }}
                        spacing={{ base: 3, md: 5 }}
                        align="center"
                        wrap="wrap"
                        justify="center"
                    >
                        <LanguageSwitcher id={"language-switcher-footer"} />
                        <Stack
                            direction={"row"}
                            spacing={{ base: 4, md: 5 }}
                            align="center" wrap="nowrap"
                            justify="center"
                            pb={{ base: 4, md: 0 }}
                        >
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
                    </Stack>

                    <Text pt={{ base: 5, md: 0 }} fontSize={"md"} textAlign={{ base: "center", md: "left" }}>
                        &copy; {new Date().getFullYear()} Alt Corporation | All rights reserved
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;

import React from "react";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import LanguageSwitcher from "./language_switcher.js";
import { FaDiscord, FaTelegram, FaInstagram } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { IoMail } from "react-icons/io5";
import Link from "next/link.js";

const Footer = () => {
    const { t } = useTranslation("common");
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
                            <Link
                                href="https://discord.gg/XY2rMVUFhR"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Discord"
                            >
                                <FaDiscord size={35} />
                            </Link>
                            <Link
                                href="https://t.me/alt_portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                            >
                                <FaTelegram size={35} />
                            </Link>
                            <Link
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram size={35} />
                            </Link>
                            <Link
                                href="mailto:"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Email"
                            >
                                <IoMail size={35} />
                            </Link>
                        </Stack>
                    </Stack>

                    <Text pt={{ base: 5, md: 0 }} fontSize={"md"} textAlign={{ base: "center", md: "left" }}>
                        &copy; {new Date().getFullYear()} Alt Corporation. {t("footer.copyright")}
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"]))
    }
});

export default Footer;

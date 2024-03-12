import React from "react";
import { Box, Container, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import LanguageSwitcher from "./language_switcher.js";
import { FaDiscord } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link.js";
import links from "./vars.js";

const Footer = () => {
    const { t } = useTranslation("common");
    return (
        <Box
            as="footer"
            fontWeight={"medium"}
            fontSize="lg"
            zIndex={2}
            mx="auto"
        >
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
                                href={links.socials.discord}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Discord"
                            >
                                <FaDiscord size={40} color={useColorModeValue("black", "white")} />
                            </Link>
                            <Link
                                href={links.socials.telegram.alt_corporation}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                            >
                                <FaTelegram size={35} color={useColorModeValue("black", "white")} />
                            </Link>
                            <Link
                                href={links.socials.telegram.owner}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                            >
                                <RiTelegramLine size={42} color={useColorModeValue("black", "white")} />
                            </Link>
                            <Link
                                href={links.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <PiInstagramLogoBold size={40} color={useColorModeValue("black", "white")} />
                            </Link>
                        </Stack>
                    </Stack>

                    <Text
                        pt={{ base: 5, md: 0 }}
                        fontSize={"md"}
                        textAlign={{ base: "center", md: "left" }}
                        color={useColorModeValue("black", "white")}
                        fontWeight={"regular"}
                    >
                        &copy; {new Date().getFullYear()} Alt Corporation. {t("footer.copyright") + ": "}
                        <Link
                            href="mailto:info@altcorp.org"
                            isExternal
                            aria-label="Email"
                        >
                            info@altcorp.org
                        </Link>
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

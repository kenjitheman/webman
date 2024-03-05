import { Box, Flex, HStack, IconButton, useDisclosure, useColorModeValue, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../components/logo.js";
import { useRouter } from "next/router";
import ThemeToggleButton from "../components/theme-toggle-button.js";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import LanguageSwitcher from "./language_switcher.js";
import Scroll from "react-scroll";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link.js";

const ScrollLink = Scroll.Link;

const NavLink = ({ href, children }) => {
    const isScrollLink = href.startsWith("#");
    const isExternalLink = href.startsWith("http");

    if (isExternalLink) {
        return (
            <Box
                as="a"
                px={2}
                py={2}
                fontSize={{ lg: "1rem", xl: "1.1rem", "2xl": "1.4rem" }}
                textDecoration="none"
                color={useColorModeValue("gray.900", "white")}
                _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("white_yellow", "dark_yellow")
                }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </Box>
        );
    }

    if (isScrollLink) {
        return (
            <ScrollLink
                activeClass="active"
                to={href.slice(1)}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                color={useColorModeValue("gray.900", "white")}
                style={{
                    textDecoration: "none",
                    _hover: {
                        cursor: "pointer",
                        color: useColorModeValue("white_yellow", "dark_yellow")
                    }
                }}
            >
                <Box
                    px={2}
                    py={2}
                    rounded="2xl"
                    fontSize={{ lg: "1rem", xl: "1.1rem", "2xl": "1.4rem" }}
                    color={useColorModeValue("gray.900", "white")}
                    _hover={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: useColorModeValue("white_yellow", "dark_yellow")
                    }}
                >
                    {children}
                </Box>
            </ScrollLink>
        );
    }

    return (
        <Box
            as="a"
            px={{ lg: 2, xl: 3, "2xl": 5 }}
            py={2}
            fontSize={{ lg: "1rem", xl: "1.1rem", "2xl": "1.4rem" }}
            rounded="2xl"
            textDecoration="none"
            _hover={{
                textDecoration: "none",
                color: useColorModeValue("white_yellow", "dark_yellow")
            }}
            href={href}
            target="_self"
            rel="noopener noreferrer"
        >
            {children}
        </Box>
    );

};

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const currentPath = router.asPath;
    const { t } = useTranslation("common");

    const get_current_locale_from_local_storage = () => {
        return typeof window !== "undefined" ?
            localStorage.getItem("preferredLanguage") || router.locale :
            router.locale;
    };

    const Links = {
        home: `/${get_current_locale_from_local_storage()}/`,
        services: `/${get_current_locale_from_local_storage()}/services`,
        community: `/${get_current_locale_from_local_storage()}/community`,
        education: `/${get_current_locale_from_local_storage()}/education`,
        invest: `/${get_current_locale_from_local_storage()}/invest-fund`
    };

    const linksArray = Object.entries(Links);

    return (
        <>
            <Box
                pos="fixed"
                w="100%"
                bg={useColorModeValue("#ffffff40", "#20202300")}
                css={{ backdropFilter: "blur(10px)" }}
                px={4} py={2}
                zIndex={2}
                onScroll={onClose}
            >
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <HStack w={"100%"} spacing={2} alignItems={"center"} justifyContent={"flex-start"}>
                        <Box>
                            <Logo />
                        </Box>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            fontFamily={"'Etna', sans-serif"}
                            fontSize={{ lg: "lg", xl: "xl" }}
                            fontWeight={"medium"}
                            display={{ base: "none", xl: "flex" }}
                        >
                            {linksArray.map(([label, link]) => (
                                <NavLink key={label} href={link} currentPath={currentPath}>
                                    {t(`navbar.${label}`)}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <HStack
                        display={{ base: "none", xl: "flex" }}
                        alignItems={"center"}
                        justifyContent={"flex-end"}
                    >
                        <LanguageSwitcher id={"language-switcher-nav"} />
                        <ThemeToggleButton />
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
                            aria-label="Telegram-main"
                        >
                            <FaTelegram size={30} />
                        </Link>
                        <Link
                            href="https://t.me/+Y1wM__EfbHtjZGU0"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Telegram-main"
                        >
                            <RiTelegramLine size={36} />
                        </Link>
                        <Link
                            href="https://www.instagram.com/artem.san_"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <PiInstagramLogoBold size={35} />
                        </Link>
                    </HStack>
                    <IconButton
                        size={"lg"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ xl: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box
                        p={3}
                        display={{ xl: "none" }}
                        maxH={"100vh"}
                        w={"100%"}
                        zIndex={2}
                    >
                        <Stack
                            as={"nav"}
                            spacing={6}
                            fontFamily={"'Etna', sans-serif"}
                            fontSize={"lg"}
                            fontWeight={"medium"}
                            alignItems={"center"}
                        >
                            {linksArray.map(([label, link]) => (
                                <NavLink key={label} href={link} currentPath={currentPath}>
                                    {t(`navbar.${label}`)}
                                </NavLink>
                            ))}
                            <Box justifyContent={"space-between"} display={"flex"} w={"100%"} alignItems={"center"}>
                                <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"flex-end"}>
                                    <Link
                                        href="https://discord.gg/XY2rMVUFhR"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Discord"
                                    >
                                        <FaDiscord size={34} />
                                    </Link>
                                    <Link
                                        href="https://t.me/alt_portfolio"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Telegram"
                                    >
                                        <FaTelegram size={30} />
                                    </Link>
                                    <Link
                                        href="https://t.me/+Y1wM__EfbHtjZGU0"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Telegram"
                                    >
                                        <RiTelegramLine size={36} />
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/artem.san_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                    >
                                        <PiInstagramLogoBold size={33} />
                                    </Link>
                                </Stack>
                                <ThemeToggleButton />
                            </Box>
                        </Stack>
                    </Box >
                ) : null
                }
            </Box >
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common"]))
        }
    };
}

export default Navbar;

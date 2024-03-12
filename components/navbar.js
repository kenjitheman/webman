import Link from "next/link.js";
import { useRouter } from "next/router";
import {
    Box, Flex, HStack, IconButton,
    useDisclosure, useColorModeValue, Stack
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Logo from "../components/logo.js";
import ThemeToggleButton from "../components/theme-toggle-button.js";
import LanguageSwitcher from "./language_switcher.js";
import links from "./vars.js";

import { PiInstagramLogoBold } from "react-icons/pi";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";

const NavLink = ({ href, children }) => {
    const isExternalLink = href.startsWith("http");

    if (isExternalLink) {
        return (
            <Box
                as="a"
                px={2}
                py={2}
                fontSize={{ lg: "1.1rem", xl: "1.2rem", "2xl": "1.45rem" }}
                textDecoration="none"
                color={useColorModeValue("black", "white")}
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

    return (
        <Box
            as="a"
            px={{ lg: 2, xl: 3, "2xl": 5 }}
            py={2}
            fontSize={{ lg: "1.1rem", xl: "1.2rem", "2xl": "1.45rem" }}
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
                            href={links.socials.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="discord"
                        >
                            <FaDiscord size={35} color={useColorModeValue("black", "white")} />
                        </Link>
                        <Link
                            href={links.socials.telegram.alt_corporation}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="telegram"
                        >
                            <FaTelegram size={30} color={useColorModeValue("black", "white")} />
                        </Link>
                        <Link
                            href={links.socials.telegram.owner}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="telegram"
                        >
                            <RiTelegramLine size={36} color={useColorModeValue("black", "white")} />
                        </Link>
                        <Link
                            href={links.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="instagram"
                        >
                            <PiInstagramLogoBold size={35} color={useColorModeValue("black", "white")} />
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
                            fontSize={"lg"}
                            fontWeight={"medium"}
                            alignItems={"center"}
                        >
                            {linksArray.map(([label, link]) => (
                                <NavLink key={label} href={link} currentPath={currentPath}>
                                    {t(`navbar.${label}`)}
                                </NavLink>
                            ))}
                            <Box
                                justifyContent={"space-between"}
                                display={"flex"}
                                w={"100%"}
                                alignItems={"center"}
                            >
                                <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"flex-end"}>
                                    <Link
                                        href={links.socials.discord}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="discord"
                                    >
                                        <FaDiscord size={34} color={useColorModeValue("black", "white")} />
                                    </Link>
                                    <Link
                                        href={links.socials.telegram.alt_corporation}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="telegram"
                                    >
                                        <FaTelegram size={30} color={useColorModeValue("black", "white")} />
                                    </Link>
                                    <Link
                                        href={links.socials.telegram.owner}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="telegram"
                                    >
                                        <RiTelegramLine size={36} />
                                    </Link>
                                    <Link
                                        href={links.socials.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="instagram"
                                    >
                                        <PiInstagramLogoBold size={33} color={useColorModeValue("black", "white")} />
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

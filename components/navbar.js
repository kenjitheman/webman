import { Box, Flex, HStack, IconButton, useDisclosure, useColorModeValue, Stack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Logo from "../components/logo.js";
import { useRouter } from "next/router";
import ThemeToggleButton from "../components/theme-toggle-button.js";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";
import LanguageSwitcher from "./language_switcher.js";
import dynamic from "next/dynamic";

const ScrollLink = dynamic(() => import("react-scroll").then((module) => module.Link), {
    ssr: false,
    loading: () => null
});

const Links = {
    "About": "#about-us",
    "Reviews": "https://t.me/alt_portfolio",
    "Services": "#services"
};


const NavLink = ({ children, href, currentPath }) => {
    const isActive = href === currentPath;
    const isScrollLink = href.startsWith("#");
    const isExternalLink = href.startsWith("http");

    if (isExternalLink) {
        return (
            <Box
                as="a"
                px={5}
                py={2}
                rounded="2xl"
                textDecoration="none"
                _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("white_yellow", "dark_yellow")
                }}
                bg={isActive ? useColorModeValue("white_yellow", "dark_yellow") : useColorModeValue("gray.200", "gray.900")}
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
                style={{
                    textDecoration: "none",
                    color: useColorModeValue("gray.900", "gray.300"),
                    _hover: {
                        cursor: "pointer"
                    }
                }}
            >
                <Box
                    px={5}
                    py={2}
                    rounded="2xl"
                    _hover={{
                        textDecoration: "none",
                        bg: useColorModeValue("white_yellow", "dark_yellow"),
                        cursor: "pointer"
                    }}
                    bg={isActive ? useColorModeValue("white_yellow", "dark_yellow") : useColorModeValue("gray.200", "gray.900")}
                >
                    {children}
                </Box>
            </ScrollLink>
        );
    }

    return (
        <Box
            as="a"
            px={5}
            py={2}
            rounded="2xl"
            textDecoration="none"
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("white_yellow", "dark_yellow")
            }}
            bg={isActive ? useColorModeValue("white_yellow", "dark_yellow") : useColorModeValue("gray.200", "gray.900")}
            href={href}
            target="_self"
            rel="noopener noreferrer"
        >
            {children}
        </Box>
    );


};

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const currentPath = router.asPath;
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
                borderBottom="0.1px solid"
                borderColor={useColorModeValue("gray.300", "gray.900")}
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
                            display={{ base: "none", lg: "flex" }}
                        >
                            {linksArray.map(([label, link]) => (
                                <NavLink key={label} href={link} currentPath={currentPath}>
                                    {label}
                                </NavLink>
                            ))}

                        </HStack>
                    </HStack>
                    <HStack
                        display={{ base: "none", lg: "flex" }}
                        alignItems={"center"}
                        justifyContent={"flex-end"}
                    >
                        <LanguageSwitcher id={"language-switcher-nav"} />
                        <ThemeToggleButton />
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                            <FaDiscord size={30} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter size={30} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Github">
                            <FaGithub size={30} />
                        </a>
                    </HStack>
                    <IconButton
                        size={"lg"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ lg: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                </Flex>

                {isOpen ? (
                    <Box p={6} display={{ lg: "none" }}>
                        <Stack as={"nav"} spacing={7}>
                            {linksArray.map(([label, link]) => (
                                <NavLink key={label} href={link} currentPath={currentPath}>
                                    {label}
                                </NavLink>
                            ))}
                            <Box justifyContent={"space-between"} display={"flex"} alignItems={"center"} >
                                <Stack direction={"row"} spacing={3}>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaDiscord size={30} />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter size={30} />
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={30} />
                                    </a>
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
}

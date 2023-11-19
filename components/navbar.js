import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Logo from '../components/logo.js';
import { useRouter } from 'next/router';
import ThemeToggleButton from '../components/theme-toggle-button.js';

const Links = {
    'Home': '/',
    'About': '/about',
    'Reviews': '/reviews',
    'Contact': '/contact-us',
    'Our Team': '/our-team',
};


const NavLink = ({ children, href, currentPath }) => {
    const isActive = href === currentPath;
    return (
        <Box
            as="a"
            px={{ base: 2, md: 4, lg: 3.5, xl: 6 }}
            py={2.5}
            rounded="2xl"
            textDecoration="none"
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('yellow.500', 'yellow.700'),
            }}
            bg={isActive ? useColorModeValue('yellow.500', 'yellow.700') : useColorModeValue('gray.200', 'gray.900')}
            href={href}
        >
            {children}
        </Box >
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
                px={4}
                py={2}
                zIndex={2}
                onScroll={onClose}
                borderBottom="0.1px solid"
                borderColor={useColorModeValue('gray.300', 'gray.900')}
            >
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <IconButton
                        size={'lg'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ lg: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack
                        w={"100%"}
                        spacing={9}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                    >
                        <Box><Logo /></Box>
                        <HStack
                            as={'nav'}
                            spacing={{ lg: 3, xl: 5 }}
                            fontFamily={'"Etna", sans-serif'}
                            fontSize={{ lg: 'lg', xl: 'xl' }} nav
                            fontWeight={"medium"}
                            display={{ base: 'none', lg: 'flex' }}
                        >
                            {linksArray.map(([label, link]) => (
                                <NavLink key={label} href={link} currentPath={currentPath}>
                                    {label}
                                </NavLink>
                            ))}

                        </HStack>
                    </HStack>
                    <ThemeToggleButton />
                </Flex>

                {isOpen ? (
                    <Box p={6} display={{ lg: 'none' }}>
                        <Stack as={'nav'} spacing={6}>
                            {linksArray.map(([label, link]) => (
                                <NavLink key={label} href={link} currentPath={currentPath}>
                                    {label}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

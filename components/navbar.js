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
    'Info': '/info',
    'Contact': '/contact-us',
    'Our Team': '/our-team',
};

const NavLink = ({ children, href, currentPath }) => {
    const isActive = href === currentPath;
    return (
        <Box
            as="a"
            px={4}
            py={2}
            rounded="lg"
            textDecoration="none"
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.400'),
            }}
            bg={isActive ? useColorModeValue('gray.400', 'gray.500') : useColorModeValue('gray.200', 'gray.800')}
            href={href}
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
                px={4}
                zIndex={2}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack w={"100%"} spacing={9} alignItems={'center'} justifyContent={'space-between'}>
                        <Box><Logo /></Box>
                        <HStack as={'nav'} spacing={5} fontFamily={'"Rajdhani", sans-serif'} fontSize={"xl"} fontWeight={"medium"} display={{ base: 'none', md: 'flex' }}>
                            {linksArray.map(([label, link]) => (
                                <NavLink key={label} href={link} currentPath={currentPath}>
                                    {label}
                                </NavLink>
                            ))}

                            <ThemeToggleButton />
                        </HStack>
                    </HStack>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
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

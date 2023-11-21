import React from 'react';
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react';
import Logo from '../components/logo.js';
import LanguageSwitcher from './language_switcher.js';
import { FaDiscord, FaTelegram, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <Box
            as="footer"
            fontFamily={"'Etna', sans-serif"}
            fontWeight={"medium"}
            fontSize="lg"
            zIndex={2}
            mx="auto"
        >
            <Container
                maxW={'10xl'}
                py={5}
            >
                <Stack
                    direction={{ base: 'column', md: 'row-reverse' }}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}
                >
                    <Stack direction={'row'} spacing={5}>
                        <LanguageSwitcher />
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaDiscord size={35} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaTelegram size={35} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={35} />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={35} />
                        </a>
                    </Stack>

                    <Text pt={6} fontSize={'md'} textAlign={'center'}>
                        &copy; {new Date().getFullYear()} Alt Corporation | All Rights Reserved
                    </Text>
                </Stack>
            </Container>
        </Box>
    );
}

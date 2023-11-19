import {
    Box,
    Heading,
    Container,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { GetStartedButton, LearnMoreButton } from '../components/buttons';

export default function Hero() {
    return (
        <Box
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'flex-end'}
            w={'100%'}
            h={{ base: 'xl', sm: '2xl', md: '850px' }}
            mx={'auto'}
            mt={10}
            rounded={'3xl'}
            border={'0.1px solid'}
            borderColor={useColorModeValue('gray.300', 'gray.900')}
            style={{
                backgroundImage: `url(/images/background.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container
                maxW={'10xl'}
                fontFamily={"'Etna', sans-serif"}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
                wrap={'wrap'}
            >
                <Box
                    py={5}
                    px={{ base: 0, sm: 5 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}
                        color={'gray.50'}
                    >
                        Welcome to the future of DeFi
                    </Heading>
                    <Text
                        fontSize={{ base: 'md', lg: 'xl' }}
                        color={'gray.300'}
                    >
                        NewLife™ is a decentralized finance (DeFi) platform that aims to provide a complete solution for the agricultural industry.
                    </Text>
                    <Flex
                        justifyContent="flex-start"
                        py={5}
                        wrap={'wrap'}
                    >
                        <Box mb={{ base: 2, sm: 0 }}>
                            <GetStartedButton />
                        </Box>
                        <Box px={4}></Box>
                        <LearnMoreButton />
                    </Flex>
                </Box>
            </Container >
        </Box >
    );
}

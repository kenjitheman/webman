import {
    Box,
    Heading,
    Container,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import { GetStartedButton, LearnMoreButton } from '../components/buttons';

export default function Hero() {
    return (
        <Box
            display={{ md: 'flex', justifyContent: 'center', alignItems: 'center' }}
            w={'100%'}
            h={{ base: 'xl', sm: '2xl', md: '850px' }}
            mx={'auto'}
            mt={10}
            rounded={'3xl'}
            border={'0.1px solid'}
            borderColor={useColorModeValue('', 'gray.900')}
            style={{
                backgroundImage: `url(/images/background.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container maxW={'5xl'}>
                <Stack
                    as={Box}
                    textAlign={'center'}
                    spacing={{ base: 8, md: 14 }}
                    py={{ base: 20, md: 36 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '5xl', md: '7xl' }}
                        color={'gray.50'}
                    >
                        Make money from <br />
                        your audience
                </Heading>
                <Text
                    fontSize={{ base: 'md', lg: 'xl' }}
                    color={'gray.300'}
                >
                    Monetize your content by charging your most loyal readers and reward them
                    loyalty points. Give back to your loyal readers by granting them access to
                    your pre-releases and sneak-peeks.
                </Text>
                <Stack
                    direction={{ base: 'column', sm: 'row', md: 'row' }}
                    spacing={{ base: 7, sm: 5, md: 7 }}
                    align={'center'}
                    alignSelf={'center'}
                    position={'relative'}
                >
                    <GetStartedButton />
                    <LearnMoreButton />
                </Stack>
            </Stack>
        </Container>
        </Box >
    );
}

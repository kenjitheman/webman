import {
    Box,
    Heading,
    Container,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { GetStartedButton, LearnMoreButton } from '../components/buttons';

const Hero = (props) => {
    const { title, text } = props;
    return (
        <Box
            display={'flex'}
            justifyContent={'flex-start'}
            alignItems={'flex-end'}
            w={'100%'}
            h={{ base: 'xl', sm: '2xl', md: '850px' }}
            bgImage={useColorModeValue('url(/images/background_white.jpg)', 'url(/images/background.jpg)')}
            bgSize={'cover'}
            bgPosition={'center'}
            bgRepeat={'no-repeat'}
            bgAttachment={'fixed'}
            mt={10}
            rounded={'3xl'}
        >
            <Container
                maxW={'full'}
                fontFamily={"'Etna', sans-serif"}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'flex-start'}
                wrap={'wrap'}
                p={5}
            >
                <Box
                    py={5}
                    px={{ base: 0, sm: 5 }}
                    rounded={'3xl'}
                    backdropFilter={'blur(5px)'}
                    border={'1px solid'}
                    borderColor={useColorModeValue('gray.300', 'gray.700')}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '5xl', md: '6xl' }}
                        color={useColorModeValue('gray.900', 'white')}
                        p={3}
                    >
                        {title}
                    </Heading>
                    <Text
                        fontSize={{ base: 'md', lg: 'xl' }}
                        color={useColorModeValue('gray.500', 'gray.300')}
                        p={3}
                    >
                        {text}
                    </Text>
                    <Flex
                        justifyContent="flex-start"
                        py={5}
                        wrap={'wrap'}
                        p={3}
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

export { Hero };

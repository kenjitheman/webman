import {
    Box,
    Heading,
    Image,
    Text,
    Stack,
    Container,
    useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = (props) => {
    const { children } = props;
    return <Box>{children}</Box>;
};

const TestimonialContent = (props) => {
    const { children } = props;
    return (
        <Stack
            fontSize={"xl"}
            fontWeight={"regular"}
            fontFamily={"'Etna', sans-serif"}
            p={8}
            rounded={'3xl'}
            bg={useColorModeValue('white', 'gray.900')}
            align={'center'}
            mb={5}
            pos={'relative'}
        >
            {children}
        </Stack>
    );
};

const TestimonialHeading = (props) => {
    const { children } = props;
    return (
        <Heading as={'h3'} fontSize={'xl'} fontFamily={"'Etna', sans-serif"}>
            {children}
        </Heading>
    );
};

const TestimonialText = (props) => {
    const { children } = props;
    return (
        <Text
            textAlign={'center'}
            fontFamily={"'Etna', sans-serif"}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}
        >
            {children}
        </Text>
    );
};

export default function WithSpeechBubbles() {
    return (
        <Box
            bg={useColorModeValue("#ffffff40", "#20202380")}
            css={{ backdropFilter: "blur(10px)" }}
            fontFamily={"'Etna', sans-serif"}
            rounded={'3xl'}
        >
            <Container
                maxW={'10xl'}
                as={Stack}
                spacing={12}
                p={{ base: 7, md: 10}}
            >
                <Stack spacing={0} align={'center'}>
                    <Heading fontFamily={"'Etna', sans-serif"}>Our Clients Speak</Heading>
                    <Text>We have been working with clients around the world</Text>
                </Stack>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                >
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                            <TestimonialText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                imperdiet nibh lectus feugiat nunc sem.
                            </TestimonialText>
                        </TestimonialContent>
                        <Image
                            rounded={'3xl'}
                            alt={'feature image'}
                            src={
                                '/images/gold.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Intuitive Design</TestimonialHeading>
                            <TestimonialText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                imperdiet nibh lectus feugiat nunc sem.
                            </TestimonialText>
                        </TestimonialContent>
                        <Image
                            rounded={'3xl'}
                            alt={'feature image'}
                            src={
                                '/images/gold.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                            <TestimonialText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                imperdiet nibh lectus feugiat nunc sem.
                            </TestimonialText>
                        </TestimonialContent>
                        <Image
                            rounded={'3xl'}
                            alt={'feature image'}
                            src={
                                '/images/gold.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Testimonial>
                </Stack>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                >
                    <Testimonial>
                        <Image
                            rounded={'3xl'}
                            alt={'feature image'}
                            src={
                                '/images/gold.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <Image
                            rounded={'3xl'}
                            alt={'feature image'}
                            src={
                                '/images/gold.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <Image
                            rounded={'3xl'}
                            alt={'feature image'}
                            src={
                                '/images/gold.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Testimonial>
                </Stack>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                >
                    <Testimonial>
                        <Image
                            rounded={'3xl'}
                            alt={'feature image'}
                            src={
                                '/images/gold.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <Image
                            rounded={'3xl'}
                            alt={'feature image'}
                            src={
                                '/images/gold.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <Image
                            rounded={'3xl'}
                            alt={'feature image'}
                            src={
                                '/images/gold.jpg'
                            }
                            objectFit={'cover'}
                        />
                    </Testimonial>
                </Stack>
            </Container>
        </Box>
    );
}

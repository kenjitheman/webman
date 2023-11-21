import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image,
} from "@chakra-ui/react";
import { ScaleImage } from "../components/custom_animations";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Testimonial, TestimonialContent, TestimonialHeading, TestimonialText } from "../components/reviews.js";

const AllReviews = () => {
    return (
        <Layout
            title="Reviews | Alt Corporation"
            description="Alt Corporation reviews page. Here you can find out what people think about us."
        >
            <Flex flexDirection={'column'}>
                <Container maxW="8xl" py={12}>
                    <Section delay={0.2}>
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
                                p={{ base: 7, md: 10 }}
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
                                        <ScaleImage>
                                            <Image
                                                rounded={'3xl'}
                                                alt={'feature image'}
                                                src={
                                                    '/images/yellow_logo_with_background.jpg'
                                                }
                                                objectFit={'cover'}
                                            />
                                        </ScaleImage>
                                    </Testimonial>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Intuitive Design</TestimonialHeading>
                                            <TestimonialText>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                                imperdiet nibh lectus feugiat nunc sem.
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <ScaleImage>
                                            <Image
                                                rounded={'3xl'}
                                                alt={'feature image'}
                                                src={
                                                    '/images/yellow_logo_with_background.jpg'
                                                }
                                                objectFit={'cover'}
                                            />
                                        </ScaleImage>
                                    </Testimonial>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                                            <TestimonialText>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                                imperdiet nibh lectus feugiat nunc sem.
                                            </TestimonialText>
                                        </TestimonialContent>
                                        <ScaleImage>
                                            <Image
                                                rounded={'3xl'}
                                                alt={'feature image'}
                                                src={
                                                    '/images/yellow_logo_with_background.jpg'
                                                }
                                                objectFit={'cover'}
                                            />
                                        </ScaleImage>
                                    </Testimonial>
                                </Stack>

                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}
                                >
                                    <Testimonial>
                                        <ScaleImage>
                                            <Image
                                                rounded={'3xl'}
                                                alt={'feature image'}
                                                src={
                                                    '/images/yellow_logo_with_background.jpg'
                                                }
                                                objectFit={'cover'}
                                            />
                                        </ScaleImage>
                                    </Testimonial>
                                    <Testimonial>
                                        <ScaleImage>
                                            <Image
                                                rounded={'3xl'}
                                                alt={'feature image'}
                                                src={
                                                    '/images/yellow_logo_with_background.jpg'
                                                }
                                                objectFit={'cover'}
                                            />
                                        </ScaleImage>
                                    </Testimonial>
                                    <Testimonial>
                                        <ScaleImage>
                                            <Image
                                                rounded={'3xl'}
                                                alt={'feature image'}
                                                src={
                                                    '/images/yellow_logo_with_background.jpg'
                                                }
                                                objectFit={'cover'}
                                            />
                                        </ScaleImage>
                                    </Testimonial>
                                </Stack>

                                <Stack
                                    direction={{ base: 'column', md: 'row' }}
                                    spacing={{ base: 10, md: 4, lg: 10 }}
                                >
                                    <Testimonial>
                                        <ScaleImage>
                                            <Image
                                                rounded={'3xl'}
                                                alt={'feature image'}
                                                src={
                                                    '/images/yellow_logo_with_background.jpg'
                                                }
                                                objectFit={'cover'}
                                            />
                                        </ScaleImage>
                                    </Testimonial>
                                    <Testimonial>
                                        <ScaleImage>
                                            <Image
                                                rounded={'3xl'}
                                                alt={'feature image'}
                                                src={
                                                    '/images/yellow_logo_with_background.jpg'
                                                }
                                                objectFit={'cover'}
                                            />
                                        </ScaleImage>
                                    </Testimonial>
                                    <Testimonial>
                                        <ScaleImage>
                                            <Image
                                                rounded={'3xl'}
                                                alt={'feature image'}
                                                src={
                                                    '/images/yellow_logo_with_background.jpg'
                                                }
                                                objectFit={'cover'}

                                            />
                                        </ScaleImage>
                                    </Testimonial>
                                </Stack>
                            </Container>
                        </Box>
                    </Section>
                </Container>
            </Flex>
        </Layout>
    );
};

export default AllReviews;

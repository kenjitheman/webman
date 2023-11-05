import {
    Box,
    Button,
    chakra,
    Container,
    Flex,
    Heading,
    Link,
    List,
    ListItem,
    useColorModeValue,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Hero from "../components/hero.js";
import Stats from "../components/stats.js";
import Stories from "../components/stories.js";
import Features from "../components/features.js";
import SimpleAccordion from "../components/accordion.js";
import Testimonials from "../components/testimonials.js";

const Home = () => {
    return (
        <Layout>
            <Flex flexDirection={'column'}>
                <Box>
                    <Container maxW="6xl">
                        <Section delay={0.2}>
                            <Hero />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="6xl">
                        <Section delay={0.3}>
                            <Stats />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="6xl">
                        <Section delay={0.4}>
                            <Stories />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="6xl">
                        <Section delay={0.5}>
                            <Features />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="6xl">
                        <Section delay={0.6}>
                            <Testimonials />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="6xl">
                        <Section delay={0.7}>
                            <SimpleAccordion />
                        </Section>
                    </Container>
                </Box>
            </Flex>
        </Layout>
    );
};

export default Home;
export { getServerSideProps } from "../components/chakra";

import {
    Box,
    Container,
    Flex,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Hero from "../components/hero.js";
import Statistics from "../components/statistics.js";
import Superpowers from "../components/superpowers.js";
import Community from "../components/community.js";
import Features from "../components/features.js";
import Feature_3 from "../components/feature_3.js";


const Home = () => {
    return (
        <Layout>
            <Flex flexDirection={'column'}>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.2}>
                            <Hero />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.4}>
                            <Statistics />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="8xl">
                        <Section delay={0.3}>
                            <Community />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="8xl">
                        <Section delay={1}>
                            <Superpowers />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="8xl">
                        <Section delay={0.5}>
                            <Features />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="8xl">
                        <Section delay={0.9}>
                            <Feature_3 />
                        </Section>
                    </Container>
                </Box>
            </Flex>
        </Layout>
    );
};

export default Home;
export { getServerSideProps } from "../components/chakra";

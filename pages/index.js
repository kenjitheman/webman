import {
    Box,
    Container,
    Flex,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Hero from "../components/hero.js";
import Community from "../components/community.js";
import Features from "../components/features.js";
import WelcomeStats from "../components/welcome_stats.js";
import StatsFullyGrid from "../components/stats_fully_grid.js";
import StatsWithGrid from "../components/stats_with_grid.js";

const Home = () => {
    return (
        <Layout
            title="Home | Alt Corporation"
            description="Welcome to Alt Corporation home page."
        >
            <Flex flexDirection={'column'}>
                <Box>
                    <Container maxW="full">
                        <Section delay={0.5}>
                            <Hero />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.8}>
                            <WelcomeStats />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.9}>
                            <StatsFullyGrid />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={1}>
                            <Features />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={1.2}>
                            <StatsWithGrid />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={1.4}>
                            <Community />
                        </Section>
                    </Container>
                </Box>
            </Flex>
        </Layout>
    );
};

export default Home;

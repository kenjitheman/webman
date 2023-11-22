import React from "react";
import { Box, Container, Icon, useColorModeValue, Flex, Heading, SimpleGrid, Text, Image, } from "@chakra-ui/react";
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp, } from "react-icons/io5";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Hero } from "../components/hero.js";
import { Feature } from "../components/features.js";
import { WelcomeStat, StatFullyGrid, StatsCard } from "../components/stats.js";

const Home = () => {
    return (
        <Layout
            title="Home | Alt Corporation"
            description="Welcome to Alt Corporation home page."
        >
            <Flex flexDirection={"column"}>
                <Box>
                    <Container maxW="full">
                        <Section delay={0.5}>
                            <Hero
                                title={'Welcome to the future of DeFi'}
                                text={`
         NewLife™ is a decentralized finance (DeFi) platform that aims to 
        provide a complete solution for the agricultural industry.`}
                            />
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.8}>
                            <Box maxW="10x" pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                                <Flex
                                    flexDirection={{ base: "column", md: "row" }}
                                    justifyContent={"space-between"}
                                >
                                    <SimpleGrid
                                        w={'full'}
                                        columns={{ base: 1, md: 3 }}
                                        spacing={6}
                                    >
                                        <WelcomeStat
                                            title={"Users"}
                                            stat={"5,000+"}
                                            icon={<IoSearchSharp size={"4rem"} />}
                                        />
                                        <WelcomeStat
                                            title={"All Time Trades"}
                                            stat={"1,000+"}
                                            icon={<IoLogoBitcoin size={"4rem"} />}
                                        />
                                        <WelcomeStat
                                            title={"Integrations"}
                                            stat={"7+"}
                                            icon={<IoAnalyticsSharp size={"4rem"} />}
                                        />
                                    </SimpleGrid>
                                </Flex>
                            </Box>
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.9}>
                            <Box
                                fontFamily={"'Etna', sans-serif"}
                                rounded={'3xl'}
                                maxW={'10xl'}
                                py={10}
                            >
                                <Heading
                                    fontFamily={"'Etna', sans-serif"}
                                    py={3}
                                    textAlign={'left'}
                                    fontSize={'4xl'}
                                >
                                    A digital Product design agency</Heading>
                                <Text color={'gray.500'} fontSize={'2xl'}>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                    eirmod tempor invidunt ut labore
                                </Text>
                                <Flex
                                    maxW={'10xl'}
                                    justifyContent={'space-between'}
                                    flexDirection={{ base: 'column', md: 'row' }}
                                    alignItems={'center'}
                                >
                                    <SimpleGrid
                                        w={'full'}
                                        columns={{ base: 1, md: 2 }}
                                        spacing={6}
                                    >
                                        <StatFullyGrid
                                            icon={
                                                <Icon as={IoAnalyticsSharp}
                                                    color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                                            text={'Business Planning'}
                                        />
                                        <StatFullyGrid
                                            icon={
                                                <Icon as={IoLogoBitcoin}
                                                    color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                                            text={'Financial Planning'}
                                        />
                                        <StatFullyGrid
                                            icon={
                                                <Icon as={IoSearchSharp}
                                                    color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                                            text={'Market Analysis'}
                                        />
                                        <StatFullyGrid
                                            icon={<Icon as={IoSearchSharp}
                                                color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                                            text={'Market Analysis'}
                                        />
                                    </SimpleGrid>
                                </Flex>
                            </Box>
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={1}>
                            <Box
                                p={4}
                                fontFamily={"'Etna', sans-serif"}
                                fontSize={"2xl"}
                                fontWeight={"regular"}
                            >
                                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                                    <Feature
                                        icon={<Icon as={IoAnalyticsSharp} w={10} h={10} />}
                                        title={'Lifetime Support'}
                                        text={
                                            `Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...`
                                        }
                                    />
                                    <Feature
                                        icon={<Icon as={IoLogoBitcoin} w={10} h={10} />}
                                        title={'Unlimited Donations'}
                                        text={
                                            `Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...`
                                        }
                                    />
                                    <Feature
                                        icon={<Icon as={IoSearchSharp} w={10} h={10} color={""} />}
                                        title={'Instant Delivery'}
                                        text={
                                            `Lorem ipsum dolor sit amet,
                                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...`
                                        }
                                    />
                                </SimpleGrid>
                            </Box>
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={1.4}>
                            <Box
                                fontFamily={"'Etna', sans-serif"}
                                py={12}
                                rounded={'3xl'}
                                w={'100%'}
                            >
                                <Text
                                    as="a"
                                    href="/"
                                    color={useColorModeValue('yellow.500', 'yellow.700')}
                                    fontWeight={'medium'}
                                    fontSize={'md'}
                                    border={'1px solid'}
                                    borderColor={useColorModeValue('gray.300', 'gray.700')}
                                    px={5}
                                    py={3}
                                    alignSelf={'flex-start'}
                                    rounded={'2xl'}
                                    w={'fit-content'}
                                >
                                    OUR ECOSYSTEM →
                                </Text>
                                <Heading
                                    py={5}
                                    textAlign={'left'}
                                    fontSize={'4xl'}
                                    fontWeight={'medium'}
                                    color={useColorModeValue('black', 'gray.300')}
                                >
                                    What is our company doing?
                                </Heading>
                                <Flex
                                    w={'100%'}
                                    justifyContent={'space-between'}
                                    flexDirection={{ base: 'column', md: 'row' }}
                                    alignItems={'center'}
                                >
                                    <Box
                                        w={{ base: '100%', md: '50%' }}
                                        pb={{ base: 12, md: 0 }}
                                    >
                                        <Image
                                            src="/images/background.jpg"
                                            rounded={'3xl'}
                                            alt={'stats image'}
                                            border={'1px solid'}
                                            borderColor={useColorModeValue('gray.300', 'gray.700')}
                                            objectFit={'cover'}
                                            w={'100%'}
                                            h={{ base: 80, md: 'lg' }}
                                        />
                                    </Box>
                                    <SimpleGrid
                                        w={{ base: '100%', md: '45%' }}
                                        columns={{ base: 1, md: 1 }}
                                        spacing={6}
                                    >
                                        <StatsCard title={'We serve'} stat={'50,000 people'} />
                                        <StatsCard title={'In'} stat={'30 different countries'} />
                                        <StatsCard title={'We serve'} stat={'50,000 people'} />
                                    </SimpleGrid>
                                </Flex>
                            </Box >
                        </Section>
                    </Container>
                </Box>
            </Flex>
        </Layout >
    );
};

export default Home;

import React from "react";
import { Box, Container, Icon, useColorModeValue, Flex, Heading, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from "react-icons/io5";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Hero } from "../components/hero.js";
import {
    WelcomeStat,
    StatFullyGrid,
    StatsCard,
    InfoFullyGrid,
    Feature,
    Info
} from "../components/stats.js";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FaTelegram } from "react-icons/fa";

const Home = () => {
    const { t } = useTranslation("common");
    return (
        <Layout title="Alt Corporation" description={t("website_description")}>
            <Flex flexDirection={"column"}>
                <Section delay={0.1}>
                    <Box>
                        <Container maxW="full">
                            <Hero
                                title={t("welcome.title")}
                                text={t("welcome.description")}
                            />
                        </Container>
                    </Box>
                </Section>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.2}>
                            <Box pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                                <Flex flexDirection={{ base: "column", md: "row" }} justifyContent={"space-between"}>
                                    <SimpleGrid w={"full"} columns={{ base: 1, md: 4 }} spacing={6}>
                                        <WelcomeStat
                                            title={t("stats.1.title")}
                                            text={t("stats.1.text")}
                                        // icon={<IoSearchSharp size={"4rem"} />}
                                        />
                                        <WelcomeStat
                                            title={t("stats.2.title")}
                                            text={t("stats.2.text")}
                                        // icon={<IoLogoBitcoin size={"4rem"} />}
                                        />
                                        <WelcomeStat
                                            title={t("stats.3.title")}
                                            text={t("stats.3.text")}
                                        // icon={<IoAnalyticsSharp size={"4rem"} />}
                                        />
                                        <WelcomeStat
                                            title={t("stats.3.title")}
                                            text={t("stats.3.text")}
                                        // icon={<IoAnalyticsSharp size={"4rem"} />}
                                        />
                                    </SimpleGrid>
                                </Flex>
                            </Box>
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.3}>
                            <Box
                                fontFamily={"'Etna', sans-serif"}
                                rounded={"3xl"}
                                maxW={"10xl"}
                                py={10}
                            >
                                <Heading id="services"
                                    fontFamily={"'Etna', sans-serif"}
                                    py={3}
                                    textAlign={"left"}
                                    fontSize={"4xl"}
                                    color={useColorModeValue("white_yellow", "dark_yellow")}
                                >
                                    {t("agency.title")}
                                </Heading>
                                <Text color={"gray.500"} fontSize={"2xl"}>
                                    {t("agency.description")}
                                </Text>
                                <Flex
                                    maxW={"10xl"}
                                    justifyContent={"space-between"}
                                    flexDirection={{ base: "column", md: "row" }}
                                    alignItems={"center"}
                                >
                                    <SimpleGrid
                                        w={"full"}
                                        columns={{ base: 1, md: 2 }}
                                        spacing={6}
                                    >
                                        <StatFullyGrid
                                            icon={<IoAnalyticsSharp size={{ base: "3rem", md: "4rem" }} />}
                                            text={t("services.business_planning")}
                                        />
                                        <StatFullyGrid
                                            icon={<IoLogoBitcoin size={{ base: "3rem", md: "4rem" }} />}
                                            text={t("services.financial_planning")}
                                        />
                                        <StatFullyGrid
                                            icon={<IoAnalyticsSharp size={{ base: "3rem", md: "4rem" }} />}
                                            text={t("services.market_analysis")}
                                        />
                                        <StatFullyGrid
                                            icon={<IoLogoBitcoin size={{ base: "3rem", md: "4rem" }} />}
                                            text={t("services.instant_delivery")}
                                        />
                                    </SimpleGrid>
                                </Flex>
                            </Box>
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.4}>
                            <Box
                                p={4}
                                fontFamily={"'Etna', sans-serif"}
                                fontSize={"2xl"}
                                fontWeight={"regular"}
                            >
                                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                                    <Feature
                                        icon={<Icon as={IoAnalyticsSharp} w={10} h={10} />}
                                        title={t("features.lifetime_support.title")}
                                        text={t("features.lifetime_support.text")}
                                    />
                                    <Feature
                                        icon={<Icon as={IoLogoBitcoin} w={10} h={10} />}
                                        title={t("features.unlimited_donations.title")}
                                        text={t("features.unlimited_donations.text")}
                                    />
                                    <Feature
                                        icon={<Icon as={IoSearchSharp} w={10} h={10} />}
                                        title={t("features.instant_delivery.title")}
                                        text={t("features.instant_delivery.text")}
                                    />
                                </SimpleGrid>
                            </Box>
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.5}>
                            <Box
                                p={4}
                                fontFamily={"'Etna', sans-serif"}
                                fontSize={"2xl"}
                                fontWeight={"regular"}
                            >
                                <Heading id="about-us"
                                    fontFamily={"'Etna', sans-serif"}
                                    py={3}
                                    textAlign={"left"}
                                    fontSize={"4xl"}
                                    color={useColorModeValue("white_yellow", "dark_yellow")}
                                >
                                    {t("about_us.title")}
                                </Heading>
                                <Text color={"gray.500"} fontSize={"2xl"}>
                                    {t("about_us.description")}
                                </Text>
                                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={5}>
                                    <Info
                                        title={t("about_us.1.title")}
                                        text={t("about_us.1.text")}
                                    />
                                    <Info
                                        title={t("about_us.2.title")}
                                        text={t("about_us.2.text")}
                                    />
                                    <Info
                                        title={t("about_us.3.title")}
                                        text={t("about_us.3.text")}
                                    />
                                </SimpleGrid>
                            </Box>
                        </Section>
                    </Container>
                    <Container maxW="10xl">
                        <Section delay={0.6}>
                            <Box
                                fontFamily={"'Etna', sans-serif"}
                                py={12}
                                rounded={"3xl"}
                                w={"100%"}
                            >
                                <Text
                                    as="a"
                                    href="/"
                                    color={useColorModeValue("gray.900", "gray.200")}
                                    fontWeight={"medium"}
                                    fontSize={"md"}
                                    border={"1px solid"}
                                    borderColor={useColorModeValue("gray.300", "gray.700")}
                                    p={2}
                                    alignSelf={"flex-start"}
                                    rounded={"2xl"}
                                    w={"fit-content"}
                                >
                                    {t("company.ecosystem")}
                                </Text>
                                <Heading
                                    py={5}
                                    textAlign={"left"}
                                    fontSize={"xl"}
                                    fontWeight={"medium"}
                                    color={useColorModeValue("white_yellow", "dark_yellow")}
                                >
                                    {t("company.description")}
                                </Heading>
                                <Flex
                                    w={"100%"}
                                    justifyContent={"space-between"}
                                    flexDirection={{ base: "column", md: "row" }}
                                    alignItems={"center"}
                                >
                                    <Box w={{ base: "100%", md: "50%" }} pb={{ base: 12, md: 0 }}>
                                        <Image
                                            src={useColorModeValue("images/bg_white.webp", "images/bg_dark.webp")}
                                            loading={"lazy"}
                                            rounded={"3xl"}
                                            alt={"Stats Image"}
                                            border={"1px solid"}
                                            borderColor={useColorModeValue("gray.300", "gray.700")}
                                            objectFit={"cover"}
                                            fill={true}
                                            quality={100}
                                            w={"100%"}
                                            h={{ base: 80, md: "lg" }}
                                        />
                                    </Box>
                                    <SimpleGrid w={{ base: "100%", md: "45%" }} columns={{ base: 1, md: 1 }} spacing={6}>
                                        <StatsCard
                                            title={t("company.we_serve.title")}
                                            text={t("company.we_serve.text")}
                                        />
                                        <StatsCard
                                            title={t("company.our_mission.title")}
                                            text={t("company.our_mission.text")}
                                        />
                                    </SimpleGrid>
                                </Flex>
                            </Box >
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl">
                        <Section delay={0.3}>
                            <Box
                                fontFamily={"'Etna', sans-serif"}
                                rounded={"3xl"}
                                maxW={"10xl"}
                                py={10}
                            >
                                <Heading id="contacts"
                                    fontFamily={"'Etna', sans-serif"}
                                    py={3}
                                    textAlign={"left"}
                                    fontSize={"4xl"}
                                    color={useColorModeValue("white_yellow", "dark_yellow")}
                                >
                                    {t("contacts.title")}
                                </Heading>
                                <Text color={"gray.500"} fontSize={"2xl"}>
                                    {t("contacts.description")}
                                </Text>
                                <Flex
                                    maxW={"10xl"}
                                    justifyContent={"space-between"}
                                    flexDirection={{ base: "column", md: "row" }}
                                    alignItems={"center"}
                                >
                                    <SimpleGrid
                                        w={"full"}
                                        columns={{ base: 1, md: 3 }}
                                        spacing={6}
                                    >
                                        <InfoFullyGrid
                                            icon={<FaTelegram size={"3rem"} />}
                                            text={t("contacts.owner.title")}
                                            title={t("contacts.owner.telegram")}
                                        />
                                        <InfoFullyGrid
                                            icon={<FaTelegram size={"3rem"} />}
                                            text={t("contacts.leading.title")}
                                            title={t("contacts.leading.telegram")}
                                        />
                                        <InfoFullyGrid
                                            icon={<FaTelegram size={"3rem"} />}
                                            text={t("contacts.traffic.title")}
                                            title={t("contacts.traffic.telegram")}
                                        />
                                    </SimpleGrid>
                                </Flex>
                            </Box>
                        </Section>
                    </Container>
                </Box>
            </Flex>
        </Layout >
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ["common"])
    }
});

export default Home;

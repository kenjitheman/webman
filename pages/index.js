import React, { useEffect, useState } from "react";
import { Box, Container, Icon, useColorModeValue, Flex, Heading, SimpleGrid, Text, Image, List } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
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
import { FaStar } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import Link from "next/link.js";
import {
    incrementExperience,
    incrementHappyClients,
    incrementReviews,
    incrementCapital
} from "../utils/incrementor.js";

const Home = () => {
    const { t } = useTranslation("common");

    let [lastMonth, setLastMonth] = useState(new Date().getMonth());

    useEffect(() => {
        const interval = setInterval(() => {
            setLastMonth(new Date().getMonth());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const yearOfBeginning = 2018;
    const happyClientsNow = 400;
    const reviewsNow = 200;
    const capitalNow = 200;

    const experience = incrementExperience(yearOfBeginning);
    const happyClients = incrementHappyClients(happyClientsNow, lastMonth);
    const reviews = incrementReviews(reviewsNow, lastMonth);
    const capital = incrementCapital(capitalNow, lastMonth);

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
                                            title={experience + "+"}
                                            text={t("stats.1.text")}
                                        />
                                        <WelcomeStat
                                            title={happyClients + "+"}
                                            text={t("stats.2.text")}
                                        />
                                        <WelcomeStat
                                            title={reviews + "+"}
                                            text={t("stats.3.text")}
                                        />
                                        <WelcomeStat
                                            title={capital + "k+"}
                                            text={t("stats.4.text")}
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
                                    {t("services.title")}
                                </Heading>
                                <Text color={"gray.500"} fontSize={"2xl"} pb={10}>
                                    {t("services.description")}
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
                                        <Feature
                                            icon={<Icon as={CheckIcon} w={10} h={10} />}
                                            title={t("services.1.title")}
                                            text={t("services.1.description")}
                                        />
                                        <Feature
                                            icon={<Icon as={CheckIcon} w={10} h={10} />}
                                            title={t("services.2.title")}
                                            text={t("services.2.description")}
                                        />
                                        <Feature
                                            icon={<Icon as={CheckIcon} w={10} h={10} />}
                                            title={t("services.3.title")}
                                            text={t("services.3.description")}
                                        />
                                        <Feature
                                            icon={<Icon as={CheckIcon} w={10} h={10} />}
                                            title={t("services.4.title")}
                                            text={t("services.4.description")}
                                        />
                                        <Feature
                                            icon={<Icon as={CheckIcon} w={10} h={10} />}
                                            title={t("services.5.title")}
                                            text={t("services.5.description")}
                                        />
                                        <Feature
                                            icon={<Icon as={CheckIcon} w={10} h={10} />}
                                            title={t("services.5.title")}
                                            text={t("services.5.description")}
                                        />

                                    </SimpleGrid>
                                </Flex>
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
                                        <Link
                                            href="https://t.me/bybitsignals_0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Telegram"
                                        >
                                            <InfoFullyGrid
                                                icon={<FaStar size={"3rem"} />}
                                                text={t("contacts.owner.title")}
                                                title={t("contacts.owner.telegram")}
                                            />
                                        </Link>
                                        <Link
                                            href="https://t.me/alt_corporation"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Telegram"
                                        >
                                            <InfoFullyGrid
                                                icon={<MdBusinessCenter size={"3rem"} />}
                                                text={t("contacts.leading.title")}
                                                title={t("contacts.leading.telegram")}
                                            />
                                        </Link>
                                        <Link
                                            href="https://t.me/altcorp_traffic"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Telegram"
                                        >
                                            <InfoFullyGrid
                                                icon={<IoIosPeople size={"3rem"} />}
                                                text={t("contacts.traffic.title")}
                                                title={t("contacts.traffic.telegram")}
                                            />
                                        </Link>
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

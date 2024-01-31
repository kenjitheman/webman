import React, { useEffect, useState } from "react";
import {
    Box, Container, Icon, useColorModeValue, Flex, Heading, SimpleGrid, Text, Image,
    AccordionButton, AccordionPanel, AccordionItem, Accordion
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Hero } from "../components/hero.js";
import { WelcomeStat, InfoFullyGrid, Feature, Info } from "../components/custom_components.js";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FaStar } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import Link from "next/link.js";
import { incrementExperience, incrementHappyClients, incrementReviews, incrementCapital } from "../utils/incrementor.js";
import { TiChartLineOutline } from "react-icons/ti";
import { HiOutlineKey } from "react-icons/hi";
import { GiTrafficLightsGreen } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiRingedPlanet } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import { PiHandEye } from "react-icons/pi";

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
                                            title={capital + "k$+"}
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
                                <Flex alignItems={"start"} alignContent={"start"} flexDirection={"row"}>
                                    <Icon
                                        as={IoLink}
                                        w={{ base: 7, md: 10 }} h={{ base: 7, md: 10 }} mx={2}
                                        alignSelf={"center"}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        display={{ base: "none", sm: "block" }}
                                    />
                                    <Heading id="services"
                                        fontFamily={"'Etna', sans-serif"}
                                        py={3}
                                        textAlign={"left"}
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        w={"100%"}
                                    >
                                        {t("services.title")}
                                    </Heading>
                                </Flex>
                                <Text color={"gray.500"} fontSize={{ base: "xl", md: "2xl" }} pb={10}>
                                    {t("services.description")}
                                </Text>
                                <Flex
                                    maxW={"10xl"}
                                    flexDirection={{ base: "column", md: "row" }}
                                    justifyContent={"center"}
                                >
                                    <SimpleGrid
                                        w={{ base: "100%", md: "90%" }}
                                        columns={1}
                                        spacing={7}
                                    >
                                        <Feature
                                            icon={<Icon as={TiChartLineOutline} w={10} h={10} />}
                                            title={t("services.1.title")}
                                            text={t("services.1.description")}
                                            includes={t("services.1.includes")}
                                        />
                                        <Feature
                                            icon={<Icon as={HiOutlineKey} w={10} h={10} />}
                                            title={t("services.2.title")}
                                            text={t("services.2.description")}
                                            includes={t("services.2.includes")}
                                        />
                                        <Feature
                                            icon={<Icon as={GiTrafficLightsGreen} w={10} h={10} />}
                                            title={t("services.3.title")}
                                            text={t("services.3.description")}
                                            includes={t("services.3.includes")}
                                        />
                                        <Feature
                                            icon={<Icon as={GrTransaction} w={10} h={10} />}
                                            title={t("services.4.title")}
                                            text={t("services.4.description")}
                                            includes={t("services.4.includes")}
                                        />
                                        <Feature
                                            icon={<Icon as={MdDesignServices} w={10} h={10} />}
                                            title={t("services.5.title")}
                                            text={t("services.5.description")}
                                            includes={t("services.5.includes")}
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
                                <Flex alignItems={"start"} alignContent={"start"} flexDirection={"row"}>
                                    <Icon
                                        as={IoLink}
                                        w={10} h={10} mx={2}
                                        alignSelf={"center"}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        display={{ base: "none", sm: "block" }}
                                    />
                                    <Heading id="about-us"
                                        fontFamily={"'Etna', sans-serif"}
                                        textAlign={"left"}
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        w={"100%"}
                                    >
                                        {t("about_us.title")}
                                    </Heading>
                                </Flex>
                                <Text color={"gray.500"} fontSize={{ base: "xl", md: "2xl" }}>
                                    {t("about_us.description")}
                                </Text>
                                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={5}>
                                    <Info
                                        icon={<Icon as={FaPeopleGroup} w={10} h={10} />}
                                        title={t("about_us.1.title")}
                                        text={t("about_us.1.text")}
                                    />
                                    <Info
                                        icon={<Icon as={FaRankingStar} w={10} h={10} />}
                                        title={t("about_us.2.title")}
                                        text={t("about_us.2.text")}
                                    />
                                    <Info
                                        icon={<Icon as={GiRingedPlanet} w={10} h={10} />}
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
                                py={1}
                                rounded={"3xl"}
                                w={"100%"}
                            >
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
                                        <Info
                                            icon={<Icon as={FaStarHalfAlt} w={10} h={10} />}
                                            title={t("company.1.title")}
                                            text={t("company.1.text")}
                                        />
                                        <Info
                                            icon={<Icon as={LuGoal} w={10} h={10} />}
                                            title={t("company.2.title")}
                                            text={t("company.2.text")}
                                        />
                                        <Info
                                            icon={<Icon as={PiHandEye} w={10} h={10} />}
                                            title={t("company.3.title")}
                                            text={t("company.3.text")}
                                        />
                                    </SimpleGrid>
                                </Flex>
                            </Box >
                        </Section>
                    </Container>
                </Box >
                <Box>
                    <Container maxW="10xl" pt={10}>
                        <Section delay={0.8} fontFamily={"'Etna', sans-serif"}>
                            <Flex alignItems={"start"} alignContent={"start"} flexDirection={"row"}>
                                <Icon
                                    as={IoLink}
                                    w={10} h={10} mx={2}
                                    alignSelf={"center"}
                                    color={useColorModeValue("white_yellow", "dark_yellow")}
                                    display={{ base: "none", sm: "block" }}
                                />
                                <Heading id="contacts"
                                    textAlign={"left"}
                                    fontSize={{ base: "2xl", md: "3xl" }}
                                    color={useColorModeValue("white_yellow", "dark_yellow")}
                                    w={"100%"}
                                >
                                    {t("faq.title")}
                                </Heading>
                            </Flex>
                            <Text color={"gray.500"} fontSize={{ base: "xl", md: "2xl" }} pb={4}>
                                {t("faq.description")}
                            </Text>
                            <Flex
                                align={"center"}
                                justify={"center"}
                                rounded={"3xl"}
                                mb={9}
                            >
                                <Container
                                    justifyContent={"space-between"}
                                    maxW="container.2xl"
                                    p={7}
                                    shadow={"lg"}
                                    border={"1px solid"}
                                    borderColor={useColorModeValue("gray.300", "gray.700")}
                                    css={{ backdropFilter: "blur(10px)" }}
                                    rounded={"3xl"}
                                    _hover={{
                                        cursor: "pointer"
                                    }}
                                >
                                    <Flex w={"100%"} alignItems={"start"} flexWrap={"wrap"}>
                                        <Accordion allowMultiple w="100%">
                                            <AccordionItem border={"none"} py={1}>
                                                <AccordionButton
                                                    display="flex"
                                                    alignItems="start"
                                                    justifyContent="space-between"
                                                >
                                                    <Text
                                                        fontSize={{ base: "xl", md: "2xl" }}
                                                        wordBreak={"break-word"}
                                                    >
                                                        {t("faq.1.title")}
                                                    </Text>
                                                    <ChevronDownIcon fontSize="24px" />
                                                </AccordionButton>
                                                <AccordionPanel>
                                                    <Text
                                                        color="gray.600"
                                                        fontSize={{ base: "lg", md: "xl" }}
                                                        wordBreak={"break-word"}
                                                    >
                                                        {t("faq.1.text")}
                                                    </Text>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem border={"none"} py={1}>
                                                <AccordionButton
                                                    display="flex"
                                                    alignItems="start"
                                                    justifyContent="space-between"
                                                >
                                                    <Text
                                                        fontSize={{ base: "xl", md: "2xl" }}
                                                        wordBreak={"break-word"}
                                                    >
                                                        {t("faq.2.title")}
                                                    </Text>
                                                    <ChevronDownIcon fontSize="24px" />
                                                </AccordionButton>
                                                <AccordionPanel>
                                                    <Text color="gray.600" fontSize={{ base: "lg", md: "xl" }}>
                                                        {t("faq.2.text")}
                                                    </Text>
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem border={"none"} py={1}>
                                                <AccordionButton
                                                    display="flex"
                                                    alignItems="start"
                                                    justifyContent="space-between"
                                                >
                                                    <Text
                                                        fontSize={{ base: "xl", md: "2xl" }}
                                                        wordBreak={"break-word"}
                                                    >
                                                        {t("faq.3.title")}
                                                    </Text>
                                                    <ChevronDownIcon fontSize="24px" />
                                                </AccordionButton>
                                                <AccordionPanel>
                                                    <Text color="gray.600" fontSize={{ base: "lg", md: "xl" }}>
                                                        {t("faq.3.text")}
                                                    </Text>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </Flex>
                                </Container>
                            </Flex>
                        </Section>
                    </Container >
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
                                <Flex alignItems={"start"} alignContent={"start"} flexDirection={"row"}>
                                    <Icon
                                        as={IoLink}
                                        w={10} h={10} mx={2}
                                        alignSelf={"center"}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        display={{ base: "none", sm: "block" }}
                                    />
                                    <Heading id="contacts"
                                        fontFamily={"'Etna', sans-serif"}
                                        py={3}
                                        textAlign={"left"}
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        w={"100%"}
                                    >
                                        {t("contacts.title")}
                                    </Heading>
                                </Flex>
                                <Text color={"gray.500"} fontSize={{ base: "xl", md: "2xl" }} pb={4}>
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
                                                icon={<FaStar size={"2.5rem"} />}
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
                                                icon={<MdBusinessCenter size={"2.5rem"} />}
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
                                                icon={<IoIosPeople size={"2.5rem"} />}
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
            </Flex >
        </Layout >
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ["common"])
    }
});

export default Home;

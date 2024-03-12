import React, { useEffect, useState } from "react";
import Link from "next/link.js";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
    Box, Container, Icon, useColorModeValue, Flex, Heading, SimpleGrid, Text, Image,
    AccordionButton, AccordionPanel, AccordionItem, Accordion
} from "@chakra-ui/react";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Hero } from "../components/hero.js";
import { WelcomeStat, InfoFullyGrid, Info } from "../components/custom_components.js";
import AutoplayCarousel from "../components/carousel.js";

import {
    incrementExperience, incrementHappyClients, incrementReviews, incrementCapital
} from "../utils/incrementor.js";
import { ScrollAnimation } from "../components/scroll_animation.js";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaStar } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { GiRingedPlanet } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";
import { IoLink } from "react-icons/io5";
import { FaStarHalfAlt } from "react-icons/fa";
import { LuGoal } from "react-icons/lu";
import { PiHandEye } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";

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
    const happyClientsNow = 410;
    const reviewsNow = 200;
    const capitalNow = 215;

    const experience = incrementExperience(yearOfBeginning);
    const happyClients = incrementHappyClients(happyClientsNow, lastMonth);
    const reviews = incrementReviews(reviewsNow, lastMonth);
    const capital = incrementCapital(capitalNow, lastMonth);

    return (
        <Layout
            title={t("welcome.page_title") + " | " + "Alt Corporation"}
            description={t("welcome.description")}
        >
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
                    <Container maxW="full">
                        <Section delay={0.2}>
                            <Box pt={5} px={{ base: 2, sm: 12, md: 17 }}>
                                <Flex
                                    flexDirection={{ base: "column", md: "row" }}
                                    justifyContent={"space-between"}
                                >
                                    <SimpleGrid w={"full"} columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                                        <ScrollAnimation>
                                            <WelcomeStat
                                                title={experience + "+"}
                                                text={t("stats.1.text")}
                                            />
                                        </ScrollAnimation>
                                        <ScrollAnimation>
                                            <WelcomeStat
                                                title={happyClients + "+"}
                                                text={t("stats.2.text")}
                                            />
                                        </ScrollAnimation>
                                        <ScrollAnimation>
                                            <WelcomeStat
                                                title={reviews + "+"}
                                                text={t("stats.3.text")}
                                            />
                                        </ScrollAnimation>
                                        <ScrollAnimation>
                                            <WelcomeStat
                                                title={"$" + capital + "K+"}
                                                text={t("stats.4.text")}
                                            />
                                        </ScrollAnimation>
                                    </SimpleGrid>
                                </Flex>
                            </Box>
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="full" id="about-us">
                        <Section delay={0.5}>
                            <Box
                                p={4}
                                fontFamily={"'Etna', sans-serif"}
                                fontSize={"2xl"}
                                fontWeight={"regular"}
                            >
                                <ScrollAnimation>
                                    <Flex
                                        alignContent={"start"}
                                        flexDirection={"row"}
                                        alignItems={"center"}
                                    >
                                        <Icon
                                            as={IoLink}
                                            w={10} h={10} mx={2}
                                            alignSelf={"center"}
                                            color={useColorModeValue("white_yellow", "dark_yellow")}
                                            display="block"
                                        />
                                        <Heading
                                            fontFamily={"'Etna', sans-serif"}
                                            textAlign={"left"}
                                            fontSize={{ base: "2xl", md: "3xl" }}
                                            fontWeight={"bold"}
                                            color={useColorModeValue("white_yellow", "dark_yellow")}
                                            w={"100%"}
                                        >
                                            {t("about_us.title")}
                                        </Heading>
                                    </Flex>
                                    <Text
                                        color={useColorModeValue("white_gray", "dark_gray")}
                                        fontSize={{ base: "xl", md: "2xl" }}
                                        fontWeight={"regular"}
                                    >
                                        {t("about_us.description")}
                                    </Text>
                                </ScrollAnimation>
                                <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10} mt={5} w={"100%"}>
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
                                    flexDirection={{ base: "column", lg: "row" }}
                                    alignItems={"center"}
                                >
                                    <Box w={{ base: "100%", lg: "49%" }} pb={{ base: 12, lg: 0 }}>
                                        <Image
                                            src={useColorModeValue("images/bg_white.webp", "images/bg_dark.webp")}
                                            loading={"lazy"}
                                            rounded={"3xl"}
                                            alt={"About us image"}
                                            border={"1px solid"}
                                            borderColor={useColorModeValue("white_border_color", "dark_border_color")}
                                            objectFit={"cover"}
                                            fill={true}
                                            quality={100}
                                            w={"100%"}
                                            h={{ base: 80, md: "lg" }}
                                        />
                                    </Box>
                                    <SimpleGrid
                                        w={{ base: "100%", lg: "49%" }}
                                        columns={{ base: 1, md: 1 }}
                                        spacing={6}
                                    >
                                        <Info
                                            icon={<Icon as={FaStarHalfAlt} w={10} h={10} />}
                                            title={t("about_us.4.title")}
                                            text={t("about_us.4.text")}
                                        />
                                        <Info
                                            icon={<Icon as={LuGoal} w={10} h={10} />}
                                            title={t("about_us.5.title")}
                                            text={t("about_us.5.text")}
                                        />
                                        <Info
                                            icon={<Icon as={PiHandEye} w={10} h={10} />}
                                            title={t("about_us.6.title")}
                                            text={t("about_us.6.text")}
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
                            <ScrollAnimation>
                                <Flex
                                    alignContent={"start"}
                                    flexDirection={"row"}
                                    alignItems={"center"}
                                >
                                    <Icon
                                        as={IoLink}
                                        w={10} h={10} mx={2}
                                        alignSelf={"center"}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        display="block"
                                    />
                                    <Heading
                                        textAlign={"left"}
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        fontWeight={"bold"}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        w={"100%"}
                                    >
                                        {t("faq.title")}
                                    </Heading>
                                </Flex>
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <Text
                                    color={useColorModeValue("white_gray", "dark_gray")}
                                    fontSize={{ base: "xl", md: "2xl" }} pb={4}
                                    fontWeight={"regular"}
                                >
                                    {t("faq.description")}
                                </Text>
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <Flex
                                    align={"center"}
                                    justify={"center"}
                                    rounded={"3xl"}
                                    mb={9}
                                >
                                    <Container
                                        justifyContent={"space-between"}
                                        maxW={"container.2xl"}
                                        p={7}
                                        shadow={"lg"}
                                        border={"1px solid"}
                                        borderColor={useColorModeValue("gray.300", "gray.600")}
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
                                                        rounded="2xl"
                                                        alignItems="start"
                                                        justifyContent="space-between"
                                                        _hover={{
                                                            bg: "none",
                                                            border: "1px solid",
                                                            borderColor: useColorModeValue("white_yellow", "dark_yellow")
                                                        }}
                                                    >
                                                        <Text
                                                            fontSize={{ base: "xl", md: "2xl" }}
                                                            wordBreak={"break-word"}
                                                            fontWeight={"regular"}
                                                            color={useColorModeValue("black", "white")}
                                                        >
                                                            {t("faq.1.title")}
                                                        </Text>
                                                        <ChevronDownIcon fontSize="24px" />
                                                    </AccordionButton>
                                                    <AccordionPanel>
                                                        <Text
                                                            color={useColorModeValue("white_gray", "dark_gray")}
                                                            fontSize={{ base: "lg", md: "xl" }}
                                                            fontWeight={"regular"}
                                                            wordBreak={"break-word"}
                                                        >
                                                            {t("faq.1.text")}
                                                        </Text>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                                <AccordionItem border={"none"} py={1}>
                                                    <AccordionButton
                                                        display="flex"
                                                        rounded="2xl"
                                                        alignItems="start"
                                                        justifyContent="space-between"
                                                        _hover={{
                                                            bg: "none",
                                                            border: "1px solid",
                                                            borderColor: useColorModeValue("white_yellow", "dark_yellow")
                                                        }}
                                                    >
                                                        <Text
                                                            fontSize={{ base: "xl", md: "2xl" }}
                                                            wordBreak={"break-word"}
                                                            fontWeight={"regular"}
                                                            color={useColorModeValue("black", "white")}
                                                        >
                                                            {t("faq.2.title")}
                                                        </Text>
                                                        <ChevronDownIcon fontSize="24px" />
                                                    </AccordionButton>
                                                    <AccordionPanel>
                                                        <Text
                                                            color={useColorModeValue("white_gray", "dark_gray")}
                                                            fontSize={{ base: "lg", md: "xl" }}
                                                            fontWeight={"regular"}
                                                            wordBreak={"break-word"}
                                                        >
                                                            {t("faq.2.text")}
                                                        </Text>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                                <AccordionItem border={"none"} py={1}>
                                                    <AccordionButton
                                                        display="flex"
                                                        rounded="2xl"
                                                        alignItems="start"
                                                        justifyContent="space-between"
                                                        _hover={{
                                                            bg: "none",
                                                            border: "1px solid",
                                                            borderColor: useColorModeValue("white_yellow", "dark_yellow")
                                                        }}
                                                    >
                                                        <Text
                                                            fontSize={{ base: "xl", md: "2xl" }}
                                                            wordBreak={"break-word"}
                                                            fontWeight={"regular"}
                                                            color={useColorModeValue("black", "white")}
                                                        >
                                                            {t("faq.3.title")}
                                                        </Text>
                                                        <ChevronDownIcon fontSize="24px" />
                                                    </AccordionButton>
                                                    <AccordionPanel>
                                                        <Text
                                                            color={useColorModeValue("white_gray", "dark_gray")}
                                                            fontSize={{ base: "lg", md: "xl" }}
                                                            fontWeight={"regular"}
                                                            wordBreak={"break-word"}
                                                        >
                                                            {t("faq.3.text")}
                                                        </Text>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </Flex>
                                    </Container>
                                </Flex>
                            </ScrollAnimation>
                        </Section>
                    </Container >
                </Box>
                <Box>
                    <Container maxW="100%" id="reviews">
                        <Section delay={0.3}>
                            <Box
                                fontFamily={"'Etna', sans-serif"}
                                rounded={"3xl"}
                                maxW={"10xl"}
                                py={5}
                            >
                                <ScrollAnimation>
                                    <Flex
                                        alignItems={"start"}
                                        alignContent={"center"}
                                        flexDirection={"row"}
                                    >
                                        <Icon
                                            as={IoLink}
                                            w={10} h={10}
                                            alignSelf={"center"}
                                            color={useColorModeValue("white_yellow", "dark_yellow")}
                                            display="block"
                                        />
                                        <Flex flexDirection={"row"} alignItems={"center"}>
                                            <Heading
                                                fontFamily={"'Etna', sans-serif"}
                                                py={3}
                                                px={2}
                                                textAlign={"left"}
                                                fontSize={{ base: "2xl", md: "3xl" }}
                                                fontWeight={"bold"}
                                                color={useColorModeValue("white_yellow", "dark_yellow")}
                                                w={"100%"}
                                            >
                                                {t("reviews.title")}
                                            </Heading>
                                            <Link href="https://t.me/+Y1wM__EfbHtjZGU0"
                                                isExternal
                                                aria-label="Reviews in telegram"
                                                target="_blank"
                                            >
                                                <FiArrowUpRight
                                                    size={"2rem"}
                                                    alignSelf={"center"}
                                                    color={useColorModeValue("white_yellow", "dark_yellow")}
                                                />
                                            </Link>
                                        </Flex>
                                    </Flex>
                                </ScrollAnimation>
                                <ScrollAnimation>
                                    <Text
                                        color={useColorModeValue("white_gray", "dark_gray")}
                                        fontWeight={"regular"}
                                        fontSize={{ base: "xl", md: "2xl" }}
                                        pb={7}
                                    >
                                        {t("reviews.description")}
                                    </Text>
                                </ScrollAnimation>
                                <Flex
                                    maxW={"100%"}
                                >
                                    <AutoplayCarousel />
                                </Flex>
                            </Box>
                        </Section>
                    </Container>
                </Box>
                <Box>
                    <Container maxW="10xl" id="contacts">
                        <Section delay={0.3}>
                            <Box
                                fontFamily={"'Etna', sans-serif"}
                                rounded={"3xl"}
                                maxW={"10xl"}
                                pb={5}
                            >
                                <ScrollAnimation>
                                    <Flex
                                        alignContent={"start"}
                                        flexDirection={"row"}
                                        alignItems={"center"}
                                    >
                                        <Icon
                                            as={IoLink}
                                            w={10} h={10} mx={2}
                                            alignSelf={"center"}
                                            color={useColorModeValue("white_yellow", "dark_yellow")}
                                            display="block"
                                        />
                                        <Heading
                                            fontFamily={"'Etna', sans-serif"}
                                            py={3}
                                            textAlign={"left"}
                                            fontSize={{ base: "2xl", md: "3xl" }}
                                            fontWeight={"bold"}
                                            color={useColorModeValue("white_yellow", "dark_yellow")}
                                            w={"100%"}
                                        >
                                            {t("contacts.title")}
                                        </Heading>
                                    </Flex>
                                </ScrollAnimation>
                                <ScrollAnimation>
                                    <Text
                                        color={useColorModeValue("white_gray", "dark_gray")}
                                        fontSize={{ base: "xl", md: "2xl" }} pb={7}
                                        fontWeight={"regular"}
                                    >
                                        {t("contacts.description")}
                                    </Text>
                                </ScrollAnimation>
                                <Flex
                                    maxW={"10xl"}
                                    justifyContent={"space-between"}
                                    flexDirection={{ base: "column", md: "row" }}
                                    alignItems={"center"}
                                >
                                    <SimpleGrid
                                        w={"full"}
                                        columns={{ md: 1, lg: 3 }}
                                        spacing={6}
                                    >
                                        <ScrollAnimation>
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
                                        </ScrollAnimation>
                                        <ScrollAnimation>
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
                                        </ScrollAnimation>
                                        <ScrollAnimation>
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
                                        </ScrollAnimation>
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

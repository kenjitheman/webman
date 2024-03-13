import { Box, Container, Heading } from "@chakra-ui/react";
import Link from "next/link";
import {
    Flex, Icon, SimpleGrid, Text, useColorModeValue, Button
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Section from "../components/section";
import Layout from "../components/layouts/article";
import { ScrollAnimation } from "../components/scroll_animation";
import { Service } from "../components/custom_components";
import vars from "../components/vars";

import { TiChartLineOutline } from "react-icons/ti";
import { HiOutlineKey } from "react-icons/hi";
import { GiTrafficLightsGreen } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { IoLink } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
    const { t } = useTranslation("common");
    return (
        <Layout
            title={t("services.page_title") + " | " + vars.website_name}
            description={t("services.page_description")}
        >
            <Box>
                <Container maxW={{ base: "100%", md: "95%" }}>
                    <Section delay={0.3}>
                        <Box
                            fontFamily={"'Etna', sans-serif"}
                            rounded={"3xl"}
                            py={10}
                        >
                            <ScrollAnimation>
                                <Flex alignItems={"start"} alignContent={"start"} flexDirection={"row"}>
                                    <Icon
                                        as={IoLink}
                                        w={10} h={10} mx={2}
                                        alignSelf={"center"}
                                        color={useColorModeValue("light_yellow", "dark_yellow")}
                                        display={{ base: "none", md: "block" }}
                                    />
                                    <Heading
                                        fontFamily={"'Etna', sans-serif"}
                                        py={3}
                                        textAlign={"left"}
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        color={useColorModeValue("light_yellow", "dark_yellow")}
                                        w={"100%"}
                                        wordBreak={"break-word"}
                                    >
                                        {t("services.title")}
                                    </Heading>
                                </Flex>
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <Text
                                    color={useColorModeValue("light_gray", "dark_gray")}
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    pb={10}
                                >
                                    {t("services.description")}
                                </Text>
                            </ScrollAnimation>
                            <Flex
                                maxW={"10xl"}
                                flexDirection={{ base: "column", md: "row" }}
                                justifyContent={"center"}
                                mb={7}
                            >
                                <SimpleGrid
                                    columns={{ base: 1, md: 2 }}
                                    spacing={7}
                                >
                                    <Service
                                        icon={<Icon as={TiChartLineOutline} w={10} h={10} />}
                                        title={t("services.1.title")}
                                        text={t("services.1.description")}
                                        includes={t("services.1.includes")}
                                        link={vars.contacts.content}
                                    />
                                    <Service
                                        icon={<Icon as={HiOutlineKey} w={10} h={10} />}
                                        title={t("services.2.title")}
                                        text={t("services.2.description")}
                                        includes={t("services.2.includes")}
                                        link={vars.contacts.content}
                                    />
                                    <Service
                                        icon={<Icon as={GrTransaction} w={10} h={10} />}
                                        title={t("services.3.title")}
                                        text={t("services.3.description")}
                                        includes={t("services.3.includes")}
                                        link={vars.contacts.owner}
                                    />
                                    <Service
                                        icon={<Icon as={MdDesignServices} w={10} h={10} />}
                                        title={t("services.5.title")}
                                        text={t("services.5.description")}
                                        includes={t("services.5.includes")}
                                        link={vars.contacts.owner}
                                    />
                                </SimpleGrid>
                            </Flex>
                            <Flex
                                flexDirection={{ base: "column", md: "row" }}
                                justifyContent={"center"}
                            >
                                <SimpleGrid columns={1}>
                                    <Service
                                        icon={<Icon as={GiTrafficLightsGreen} w={10} h={10} />}
                                        title={t("services.4.title")}
                                        text={t("services.4.description")}
                                        includes={t("services.4.includes")}
                                        link={vars.contacts.traffic}
                                    />
                                </SimpleGrid>
                            </Flex>
                        </Box>
                        <Flex justifyContent={"center"} mt={5} mb={10}>
                            <Link
                                href={vars.contacts.owner}
                                isExternal
                            >
                                <Button
                                    colorScheme='gray'
                                    variant='solid'
                                    size='xl'
                                    py={7}
                                    px={8}
                                    rounded={"3xl"}
                                    cursor={"pointer"}
                                    _hover={{
                                        transform: "scale(1.05)",
                                        transition: "0.3s",
                                        border: "1px solid",
                                        borderColor: useColorModeValue("light_yellow", "dark_yellow")
                                    }}
                                >
                                    <Icon
                                        as={FaHandsHelping}
                                        w={10}
                                        h={10}
                                        mx={2}
                                        alignSelf={"center"}
                                        color={useColorModeValue("light_yellow", "dark_yellow")}
                                        display="block"
                                    />
                                    <Text
                                        color={useColorModeValue("light_yellow", "dark_yellow")}
                                        fontSize={{ base: "xl", md: "2xl" }}
                                    >
                                        {t("services.ask_question")}
                                    </Text>
                                    <Icon
                                        as={FaArrowRightLong}
                                        w={7}
                                        h={7}
                                        ml={3}
                                        mr={2}
                                        alignSelf={"center"}
                                        color={useColorModeValue("light_yellow", "dark_yellow")}
                                    />
                                </Button>
                            </Link>
                        </Flex>
                    </Section>
                </Container>
            </Box>
        </Layout >
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"]))
    }
});

export default Services;

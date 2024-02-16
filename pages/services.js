import { Box, Container, Heading } from "@chakra-ui/react";
import { ScrollAnimation } from "../components/scroll_animation";
import { Service } from "../components/custom_components";
import { Flex, Icon, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { TiChartLineOutline } from "react-icons/ti";
import { HiOutlineKey } from "react-icons/hi";
import { GiTrafficLightsGreen } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";
import { MdDesignServices } from "react-icons/md";
import { IoLink } from "react-icons/io5";

const Services = () => {
    const { t } = useTranslation("common");
    return (
        <Layout
            title={t("services.page_title") + " | " + "Alt Corporation"}
            description={t("services.page_description")}
        >
            <Box>
                <Container maxW="95%">
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
                                        w={{ base: 7, md: 10 }} h={{ base: 7, md: 10 }} mx={2}
                                        alignSelf={"center"}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        display={{ base: "none", sm: "block" }}
                                    />
                                    <Heading
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
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <Text color={"gray.500"} fontSize={{ base: "xl", md: "2xl" }} pb={10}>
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
                                    />
                                    <Service
                                        icon={<Icon as={HiOutlineKey} w={10} h={10} />}
                                        title={t("services.2.title")}
                                        text={t("services.2.description")}
                                        includes={t("services.2.includes")}
                                    />
                                    <Service
                                        icon={<Icon as={GiTrafficLightsGreen} w={10} h={10} />}
                                        title={t("services.3.title")}
                                        text={t("services.3.description")}
                                        includes={t("services.3.includes")}
                                    />
                                    <Service
                                        icon={<Icon as={GrTransaction} w={10} h={10} />}
                                        title={t("services.4.title")}
                                        text={t("services.4.description")}
                                        includes={t("services.4.includes")}
                                    />
                                </SimpleGrid>
                            </Flex>
                            <Flex
                                flexDirection={{ base: "column", md: "row" }}
                                justifyContent={"center"}
                            >
                                <SimpleGrid columns={1}>
                                    <Service
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
        </Layout >
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"]))
    }
});

export default Services;

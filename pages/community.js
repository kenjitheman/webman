import { Box, Container, Heading, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Section from "../components/section";
import { ScrollAnimation } from "../components/scroll_animation.js";
import { Flex, Icon, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import { IoLink } from "react-icons/io5";
import { CommunityInfo } from "../components/custom_components";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Community = () => {
    const { t } = useTranslation("common");
    return (
        <Layout
            title={t("community.page_title") + " | " + "Alt Corporation"}
            description={t("community.page_description")}
        >
            <Box>
                <Container maxW="95%">
                    <Section delay={0.3}>
                        <Box
                            fontFamily={"'Etna', sans-serif"}
                            rounded={"3xl"}
                            maxW={"10xl"}
                            py={10}
                        >
                            <ScrollAnimation>
                                <Flex alignItems={"start"} alignContent={"start"} flexDirection={"row"}>
                                    <Icon
                                        as={IoLink}
                                        w={10} h={10} mx={2}
                                        alignSelf={"center"}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        display={{ base: "none", sm: "block" }}
                                    />
                                    <Heading
                                        fontFamily={"'Etna', sans-serif"}
                                        py={3}
                                        textAlign={"left"}
                                        fontWeight={"bold"}
                                        fontSize={{ base: "2xl", md: "3xl" }}
                                        color={useColorModeValue("white_yellow", "dark_yellow")}
                                        w={"100%"}
                                    >
                                        {t("community.title")}
                                    </Heading>
                                </Flex>
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <Text
                                    color={useColorModeValue("white_gray", "dark_gray")}
                                    fontSize={{ base: "xl", md: "2xl" }}
                                >
                                    {t("community.description")}
                                </Text>
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <Divider
                                    borderColor={useColorModeValue("white_border_color", "dark_border_color")}
                                    m={0}
                                    borderWidth={1}
                                    my={10}
                                />
                            </ScrollAnimation>
                            <ScrollAnimation>
                                <Heading
                                    fontSize={{ base: "xl", md: "2xl" }}
                                    fontWeight={"bold"}
                                    color={useColorModeValue("white_yellow", "dark_yellow")}
                                >
                                    {t("community.title")}
                                </Heading>
                                <Text
                                    color={useColorModeValue("white_gray", "dark_gray")}
                                    fontSize={{ base: "md", md: "lg" }}
                                    fontWeight={"regular"}
                                    pb={10}
                                >
                                    {t("community.description")}
                                </Text>
                            </ScrollAnimation>
                            <Flex
                                maxW={"10xl"}
                                justifyContent={"center"}
                                flexDirection={{ base: "column", md: "row" }}
                                alignItems={"center"}
                            >
                                <SimpleGrid
                                    w={"100%"}
                                    columns={{ base: 1, md: 2 }}
                                    spacing={7}
                                >
                                    <ScrollAnimation>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="#"
                                        >
                                            <CommunityInfo
                                                icon={<FaTelegram size={"2.5rem"} />}
                                                title={t("community.telegram.1.title")}
                                                text={t("community.telegram.1.text")}
                                            />
                                        </Link>
                                    </ScrollAnimation>
                                    <ScrollAnimation>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Telegram"
                                        >
                                            <CommunityInfo
                                                icon={<FaTelegram size={"2.5rem"} />}
                                                title={t("community.telegram.2.title")}
                                                text={t("community.telegram.2.text")}
                                            />
                                        </Link>
                                    </ScrollAnimation>
                                    <ScrollAnimation>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Telegram"
                                        >
                                            <CommunityInfo
                                                icon={<FaTelegram size={"2.5rem"} />}
                                                title={t("community.telegram.3.title")}
                                                text={t("community.telegram.3.text")}
                                            />
                                        </Link>
                                    </ScrollAnimation>
                                    <ScrollAnimation>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Telegram"
                                        >
                                            <CommunityInfo
                                                icon={<FaTelegram size={"2.5rem"} />}
                                                title={t("community.telegram.4.title")}
                                                text={t("community.telegram.4.text")}
                                            />
                                        </Link>
                                    </ScrollAnimation>
                                    <ScrollAnimation>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Discord"
                                        >
                                            <CommunityInfo
                                                icon={<FaDiscord size={"2.5rem"} />}
                                                title={t("community.discord.1.title")}
                                                text={t("community.discord.1.text")}
                                            />
                                        </Link>
                                    </ScrollAnimation>
                                    <ScrollAnimation>
                                        <Link
                                            href="#"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                        >
                                            <CommunityInfo
                                                icon={<FaInstagram size={"2.5rem"} />}
                                                title={t("community.instagram.1.title")}
                                                text={t("community.instagram.1.text")}
                                            />
                                        </Link>
                                    </ScrollAnimation>
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

export default Community;

import NextLink from "next/link";
import { Box, Button, Container, Divider, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import vars from "../components/vars";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const NotFound = () => {
    const { t } = useTranslation("common");
    return (
        <Layout
            title={"404" + " | " + vars.website_name}
            description={t("404.description")}
        >
            <Container my={"32vh"}>
                <Heading
                    as="h1"
                    fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
                    align="center"
                >
                    {t("404.description")}
                </Heading>
                <Divider my={5} />
                <Box my={5} align="center">
                    <Button
                        as={NextLink}
                        href="/"
                        colorScheme="gray"
                        rounded={{ base: "2xl", md: "3xl" }}
                        fontSize={{ base: "md", md: "lg", lg: "xl" }}
                        p={{ base: 5, md: 7 }}
                    >
                        {t("404.back")}
                    </Button>
                </Box>
            </Container>
        </Layout >
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["common"]))
    }
});

export default NotFound;

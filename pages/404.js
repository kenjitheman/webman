import NextLink from "next/link";
import { Box, Button, Container, Divider, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const NotFound = () => {
    return (
        <Layout
            title="404 | Alt Corporation"
            description="404 page"
        >
            <Container my={"17%"}>
                <Heading
                    as="h1"
                    my={12}
                    fontFamily={"'Etna', sans-serif"}
                    align="center"
                >
                    404 | Not Found
                </Heading>
                <Divider my={6} />
                <Box my={6} align="center">
                    <Button
                        as={NextLink}
                        href="/"
                        colorScheme="gray"
                        p={"7"}
                        rounded={"lg"}
                        fontSize={"xl"}
                        fontFamily={"'Etna', sans-serif"}
                    >
                        Home
                    </Button>
                </Box>
            </Container>
        </Layout >
    );
};

export default NotFound;

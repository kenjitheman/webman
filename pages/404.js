import NextLink from "next/link";
import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
} from "@chakra-ui/react";
import Layout from '../components/layouts/article'

const NotFound = () => {
    return (
        <Layout
            title="Not Found | 404"
            description="Page you are looking for is not found."
        >
            <Container>
                <Heading
                    as="h1"
                    my={12}
                    fontFamily={'"Etna", sans-serif'}
                    align="center"
                >
                    Not Found | 404</Heading>
                <Divider my={6} />
                <Box my={6} align="center">
                    <Button
                        as={NextLink}
                        href="/"
                        colorScheme="gray"
                        p={"7"}
                        rounded={"lg"}
                        fontSize={"xl"}
                        fontFamily={'"Etna", sans-serif'}
                    >
                        Back To Home
                    </Button>
                </Box>
            </Container>
        </Layout>
    );
};

export default NotFound;

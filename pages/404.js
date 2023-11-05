import NextLink from "next/link";
import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
} from "@chakra-ui/react";

const NotFound = () => {
    return (
        <Container>
            <Heading
                as="h1"
                mt={12}
                fontFamily={'"Rajdhani", sans-serif'}
                align="center"
            >
                page not found | 404</Heading>
            <Divider my={6} />
            <Box my={6} align="center">
                <Button
                    as={NextLink}
                    href="/"
                    colorScheme="gray"
                    p={"7"}
                    rounded={"lg"}
                    fontSize={"xl"}
                    fontFamily={'"Rajdhani", sans-serif'}
                >
                    home
                </Button>
            </Box>
        </Container>
    );
};

export default NotFound;

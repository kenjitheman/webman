import { Container, Flex } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Reviews from "../components/reviews.js";

const AllReviews = () => {
    return (
    <Layout title="Reviews | Alt Corporation">
            <Flex flexDirection={'column'}>
                <Container maxW="8xl" pt={10}>
                    <Section delay={0.1}>
                        <Reviews />
                    </Section>
                </Container>
            </Flex>
        </Layout>
    );
};

export default AllReviews;

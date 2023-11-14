import { Container, Flex } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Reviews from "../components/reviews.js";

const AllReviews = () => {
    return (
        <Layout
            title="Reviews | Alt Corporation"
            description="Alt Corporation reviews page. Here you can find out what people think about us."
        >
            <Flex flexDirection={'column'}>
                <Container maxW="8xl" py={12}>
                    <Section delay={0.2}>
                        <Reviews />
                    </Section>
                </Container>
            </Flex>
        </Layout>
    );
};

export default AllReviews;

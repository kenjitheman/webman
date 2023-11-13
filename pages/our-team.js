import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const OurTeam = () => (
    <Layout title="Our Team | Alt Corporation">
        <Container>
            <Heading as="h1" fontSize={35} mt={12} mb={12} textAlign={"center"}>
                Our Team
            </Heading>
            <Section delay={0.1} mb={7} >
                <Paragraph >
                    Welcome to our team page!
                </Paragraph>
            </Section>
            <Section delay={0.2} mb={12} >
                <Paragraph>
                    Thanks for cheking our team page, we are the biggest in Ukraine and we are proud of it! We are Alt Corporation and we are the best! We hope you will enjoy with us!
                </Paragraph>
                <br />
                <Paragraph>
                    We are a small team of developers and designers from Ukraine. We are spread all around the globe but still gathering every so often to do something cool.
                </Paragraph>
            </Section>
        </Container>
    </Layout>
)

export default OurTeam;
export { getServerSideProps } from '../components/chakra';

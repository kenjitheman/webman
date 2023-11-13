import { Container, Box, Heading, Flex } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import SimpleAccordion from '../components/accordion.js'

const About = () => (
    <Layout title="About | Alt Corporation">
        <Container maxW="7xl">
            <Heading as="h1" fontSize={35} mt={12} mb={12} textAlign={"center"}>
                About Us
            </Heading>
            <Section delay={0.1} mb={7} >
                <Paragraph >
                    Welcome to our little project!
                </Paragraph>
            </Section>
            <Section delay={0.3} mb={12} >
                <Paragraph>
                    Thanks for chenking us out. We are Next Space Lab! A small startup and hackaton team from Ukraine. We are spread all around the globe but still gathering every so often to do something cool.
                </Paragraph>
                <br />
                <Section delay={0.6}>
                    <Flex
                        flexDirection={{ base: 'column', md: 'row' }}
                    >
                        <Box w={{ base: '100%', md: '50%' }}>
                            <SimpleAccordion />
                        </Box>
                        <Box w={{ base: '100%', md: '50%' }}>
                            <SimpleAccordion />
                        </Box>
                    </Flex>
                </Section>
            </Section>
        </Container>
    </Layout>
)

export default About
export { getServerSideProps } from '../components/chakra'

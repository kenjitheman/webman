import { Container, Box, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import CallToAction from '../components/call_to_action.js'

const ContactUs = () => (
    <Layout
        title="Contact Us | Alt Corporation"
        description="Alt Corporation contact page. Here you can find all the information about ways to contact us."
    >
        <Container maxW="7xl">
            <Heading as="h1" fontSize={35} mt={12} mb={12} textAlign={"center"}>
                Contact Us
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
                <Container maxW="8xl">
                    <Section delay={0.7}>
                        <Box>
                            <CallToAction />
                        </Box>
                    </Section>
                </Container>
            </Section>
        </Container>
    </Layout >
)

export default ContactUs

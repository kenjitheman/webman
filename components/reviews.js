import {
    Box,
    Heading,
    Text,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = (props) => {
    const { children } = props;
    return <Box>{children}</Box>;
};

const TestimonialContent = (props) => {
    const { children } = props;
    return (
        <Stack
            fontSize={"xl"}
            fontWeight={"regular"}
            fontFamily={"'Etna', sans-serif"}
            p={8}
            rounded={'3xl'}
            bg={useColorModeValue('white', 'gray.900')}
            align={'center'}
            mb={{ base: 5, md: 10 }}
        >
            {children}
        </Stack>
    );
};

const TestimonialHeading = (props) => {
    const { children } = props;
    return (
        <Heading as={'h3'} fontSize={'xl'} fontFamily={"'Etna', sans-serif"}>
            {children}
        </Heading>
    );
};

const TestimonialText = (props) => {
    const { children } = props;
    return (
        <Text
            textAlign={'center'}
            fontFamily={"'Etna', sans-serif"}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}
        >
            {children}
        </Text>
    );
};

export { Testimonial, TestimonialContent, TestimonialHeading, TestimonialText };

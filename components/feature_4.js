import {
    Box,
    Grid,
    GridItem,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp
} from 'react-icons/io5';

const Card = ({ heading, description, icon, href }) => {
    return (
        <Box
            maxW={{ base: 'full', md: '275px' }}
            borderWidth="1px"
            borderRadius="3xl"
            overflow="hidden"
            p={10}
        >
            <Stack align={'start'} spacing={2}>
                <Flex
                    w={16}
                    h={16}
                    align={'center'}
                    justify={'center'}
                    color={useColorModeValue('yellow.300', 'yellow.600')}
                    bg={useColorModeValue('yellow.600', 'yellow.900')}
                    rounded={'3xl'}
                >
                    {icon}
                </Flex>
                <Box mt={2}>
                    <Heading size="md">{heading}</Heading>
                    <Text mt={1} fontSize={'sm'}>
                        {description}
                    </Text>
                </Box>
                <Button
                    variant={'link'}
                    colorScheme={'blue'}
                    size={'sm'}
                    color={useColorModeValue('yellow.600', 'yellow.900')}
                >
                    Learn more
                </Button>
            </Stack>
        </Box>
    );
};

export default function gridListWith() {
    return (
        <Container maxW={'8xl'}>
            <Flex
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={'center'}
            >
                <Grid
                    borderRadius={'5xl'}
                    gap={4}
                    columns={1}
                >

                    <Card
                        heading={'Heading'}
                        icon={<Icon as={IoAnalyticsSharp} w={10} h={10} />}
                        description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={IoLogoBitcoin} w={10} h={10} />}
                        description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={IoSearchSharp} w={10} h={10} />}
                        description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={IoAnalyticsSharp} w={10} h={10} />}
                        description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={IoLogoBitcoin} w={10} h={10} />}
                        description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={IoAnalyticsSharp} w={10} h={10} />}
                        description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
                        href={'#'}
                    />
                    <Card
                        heading={'Heading'}
                        icon={<Icon as={IoLogoBitcoin} w={10} h={10} />}
                        description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
                        href={'#'}
                    />
                </Grid>
            </Flex>
        </Container>
    );
}

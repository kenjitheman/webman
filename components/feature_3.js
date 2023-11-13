import { Stack, Container, Box, Flex, Text, Heading, SimpleGrid } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';

export default function StatsGridWithImage() {
    return (
        <Box>
            <Flex
                display={{ base: 'none', lg: 'flex' }}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Container
                    rounded={'3xl'}
                    backgroundSize={'cover'}
                    bg={useColorModeValue("#ffffffa40", "#20202380")}
                    css={{ backdropFilter: "blur(10px)" }}
                    border="0.1px solid"
                    borderColor={useColorModeValue('gray.300', 'black')}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    maxW={'7xl'}
                    w={'100%'}
                    p={20}
                >
                    <Stack direction={{ base: 'column', lg: 'row' }}>
                        <Stack
                            justify={{ lg: 'center' }}>
                            <Box>
                                <Text
                                    fontFamily={'heading'}
                                    fontWeight={700}
                                    textTransform={'uppercase'}
                                    mb={3}
                                    fontSize={'xl'}
                                    color={useColorModeValue('yellow.500', 'yellow.700')}
                                >
                                    Technology
                                </Text>
                                <Heading
                                    color={useColorModeValue('yellow.500', 'yellow.700')}
                                    mb={5}
                                    fontSize={{
                                        base: '3xl',
                                        md: '5xl'
                                    }}
        >
                                    21st-century agriculture
                                </Heading>
                                <Text fontSize={'xl'} color={'gray.400'}>
                                    The NewLife™ technology allows you to monitor your crops and get complete
                                    insights at real time. The proprietary software/hardware ecosystem
                                    prevents your plants from getting neglected.
                                </Text>
                            </Box>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                {stats.map((stat) => (
                                    <Box key={stat.title}>
                                        <Text fontFamily={'heading'} fontSize={'3xl'} color={'white'} mb={3}>
                                            {stat.title}
                                        </Text>
                                        <Text fontSize={'xl'} color={'gray.400'}>
                                            {stat.content}
                                        </Text>
                                    </Box>
                                ))}
                            </SimpleGrid>
                        </Stack>
                        <Flex flex={1} />
                    </Stack>
                </Container>
            </Flex >
        </Box>
    );
}

const StatsText = ({ children }) => (
    <Text as={'span'} fontWeight={700} color={useColorModeValue('yellow.500', 'yellow.700')}>
        {children}
    </Text>
);

const stats = [
    {
        title: '10+',
        content: (
            <>
                <StatsText>Software modules</StatsText> for detailed monitoring and real-time
                analytics
            </>
        ),
    },
    {
        title: '24/7',
        content: (
            <>
                <StatsText>Analytics</StatsText> enabled right in your dashboard without history
                limitations
            </>
        ),
    },
    {
        title: '13%',
        content: (
            <>
                <StatsText>Farms</StatsText> in North America have chosen NewLife™ as their
                management solution
            </>
        ),
    },
    {
        title: '250M+',
        content: (
            <>
                <StatsText>Plants</StatsText> currently connected and monitored by the NewLife™
                software
            </>
        ),
    },
];

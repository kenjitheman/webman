import React from 'react';
import {
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { AnimateOnHover } from '../components/custom_animations';

// welcome_stats.js
const WelcomeStat = (props) => {
    const { title, stat, icon } = props;
    return (
        <AnimateOnHover>
            <Stat
                px={{ base: 2, md: 12 }}
                py={8}
                shadow={'xl'}
                border={'1px solid'}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                css={{ backdropFilter: 'blur(10px)' }}
                rounded={'3xl'}
                _hover={{
                    cursor: 'pointer',
                }}
            >
                <Flex justifyContent={'space-evenly'}>
                    <Box pl={{ base: 2, md: 4 }}>
                        <StatNumber fontSize={{ base: '2xl', xl: '3xl' }} fontWeight={'bold'}>
                            {stat}
                        </StatNumber>
                        <StatLabel fontSize={{ base: 'xl', md: 'xl', xl: '2xl' }} fontWeight={'regular'} isTruncated>
                            {title}
                        </StatLabel>
                    </Box>
                    <Box my={'auto'} color={useColorModeValue('yellow.500', 'yellow.700')} alignContent={'center'}>
                        {icon}
                    </Box>
                </Flex>
            </Stat>
        </AnimateOnHover>
    );
};

// stats_fully_grid.js
const StatFullyGrid = ({ text, icon }) => {
    return (
        <AnimateOnHover>
            <Flex
                flexDirection="row"
                alignItems="center"
                px={{ base: 4, md: 15 }}
                my={5}
                py={10}
                shadow={'lg'}
                border={'1px solid'}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                rounded={'3xl'}
                _hover={{
                    cursor: 'pointer',
                }}
            >
                <Flex
                    w={12}
                    h={12}
                    p={12}
                    align={'center'}
                    justify={'space-evenly'}
                >
                    {icon}
                </Flex>
                <Text fontSize={'2xl'} fontWeight={'medium'}>
                    {text}
                </Text>
            </Flex>
        </AnimateOnHover>
    );
};

// community.js
const StatsCard = (props) => {
    const { title, stat } = props;
    return (
        <AnimateOnHover>
            <Stat
                px={{ base: 4, md: 15 }}
                py={10}
                shadow={'lg'}
                border={'1px solid'}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                rounded={'3xl'}
                _hover={{
                    cursor: 'pointer',
                }}
            >
                <StatLabel
                    fontSize={'2xl'}
                    fontWeight={'medium'}
                    isTruncated
                    color={useColorModeValue('yellow.500', 'yellow.700')}
                >
                    {title}
                </StatLabel>
                <StatNumber
                    fontSize={'3xl'}
                    fontWeight={'regular'}
                >
                    {stat}
                </StatNumber>
            </Stat>
        </AnimateOnHover>
    );
};

// stats_with_grid.js
const StatsWithGrid = (pre_title, title, description) => {
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
                    boxShadow={'lg'}
                    css={{ backdropFilter: "blur(10px)" }}
                    border="0.1px solid"
                    borderColor={useColorModeValue('gray.300', 'black')}
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    maxW={'10xl'}
                    w={'100%'}
                    p={20}
                >
                    <Stack direction={{ base: 'column', lg: 'row' }}>
                        <Stack
                            justify={{ lg: 'center' }}>
                            <Box>
                                <Text
                                    fontFamily={'heading'}
                                    fontWeight={'medium'}
                                    textTransform={'uppercase'}
                                    mb={3}
                                    fontSize={'2xl'}
                                    color={useColorModeValue('yellow.500', 'yellow.700')}
                                >
                                    {pre_title}
                                </Text>
                                <Heading
                                    color={useColorModeValue('yellow.500', 'yellow.700')}
                                    mb={5}
                                    fontSize={{
                                        base: '3xl',
                                        md: '5xl'
                                    }}
                                >
                                    {title}
                                </Heading>
                                <Text fontSize={'2xl'} color={'gray.600'}>
                                    {description}
                                </Text>
                            </Box>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                                {stats.map((stat) => (
                                    <Box key={stat.title}>
                                        <Text fontFamily={'heading'} fontSize={'5xl'} color={'white'} mb={3}>
                                            {stat.title}
                                        </Text>
                                        <Text fontSize={'2xl'} color={'gray.600'}>
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

export { WelcomeStat, StatFullyGrid, StatsCard, StatsWithGrid, StatsText };

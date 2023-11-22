import React from 'react';
import {
    Box,
    Flex,
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
const StatFullyGrid = (props) => {
    const { text, icon } = props;
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

export { WelcomeStat, StatFullyGrid, StatsCard };

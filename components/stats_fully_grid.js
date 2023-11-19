import {
    GridItem,
    Box,
    Grid,
    Flex,
    Heading,
    Text,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { React } from 'react';
import { AnimateOnHover } from '../components/custom_animations';

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

export default function StatsFullyGrid() {
    return (
        <Box
            fontFamily={"'Etna', sans-serif"}
            rounded={'3xl'}
            maxW={'10xl'}
            py={10}
        >
            <Heading
                fontFamily={"'Etna', sans-serif"}
                py={3}
                textAlign={'left'}
                fontSize={'4xl'}
            >
                A digital Product design agency</Heading>
            <Text color={'gray.500'} fontSize={'2xl'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
            </Text>
            <Flex
                maxW={'10xl'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={'center'}
            >
                <Grid
                    rounded={'3xl'}
                    gap={4}
                    w={'100%'}
                    columns={1}
                >
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 4 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoAnalyticsSharp} color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                            text={'Business Planning'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoLogoBitcoin} color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                            text={'Financial Planning'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 1 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 3 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 3 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 1 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.500', 'yellow.700')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    );
};


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
                borderColor={useColorModeValue('gray.300', 'gray.900')}
                rounded={'3xl'}
                style={{
                    backgroundImage: `url(/images/background.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
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
                <Text
                    fontSize={'2xl'}
                    fontWeight={'medium'}
                    color={useColorModeValue('gray.300', 'gray.300')}
                >
                    {text}
                </Text>
            </Flex>
        </AnimateOnHover >
    );
};

export default function StatsFullyGrid() {
    return (
        <Box
            fontFamily={"'Etna', sans-serif"}
            rounded={'3xl'}
            w={'100%'}
            py={10}
        >
            <Heading
                fontFamily={"'Etna', sans-serif"}
                py={3}
                textAlign={'left'}
                fontSize={'4xl'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.300', 'gray.300')}
            >
                A digital Product design agency</Heading>
            <Text color={'gray.500'} fontSize={'2xl'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
            </Text>
            <Flex
                w={'100%'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={'center'}
            >
                <Grid
                    borderRadius={'10xl'}
                    gap={4}
                    w={'100%'}
                    columns={1}
                >
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 4 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoAnalyticsSharp} color={useColorModeValue('gray.300', 'gray.300')} w={12} h={12} />}
                            text={'Business Planning'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoLogoBitcoin} color={useColorModeValue('gray.300', 'gray.300')} w={12} h={12} />}
                            text={'Financial Planning'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('gray.300', 'gray.300')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 1 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('gray.300', 'gray.300')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 3 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('gray.300', 'gray.300')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 3 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('gray.300', 'gray.300')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 1 }} >
                        <StatFullyGrid
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('gray.300', 'gray.300')} w={12} h={12} />}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    );
};


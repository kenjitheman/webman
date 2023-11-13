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

const Superpower = ({ text, icon, iconBg }) => {
    return (
        <Flex
            flexDirection="row"
            alignItems="center"
            px={{ base: 4, md: 15 }}
            my={5}
            py={10}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.300', 'gray.900')}
            rounded={'3xl'}
            borderRadius={'3xl'}
        >
            <Flex
                w={12}
                h={12}
                align={'center'}
                justify={'space-evenly'}
                rounded={'xl'}
                bg={iconBg}
            >
                {icon}
            </Flex>
            <Text fontWeight={600} marginLeft={4}>
                {text}
            </Text>
        </Flex>
    );
};

export default function Superpowers() {
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
            >
                A digital Product design agency</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
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
                    borderRadius={'5xl'}
                    gap={4}
                    w={'100%'}
                    columns={1}
                >
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 5 }} >
                        <Superpower
                            icon={<Icon as={IoAnalyticsSharp} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Business Planning'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 1 }} >
                        <Superpower
                            icon={<Icon as={IoLogoBitcoin} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Financial Planning'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <Superpower
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <Superpower
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <Superpower
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 1 }} >
                        <Superpower
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <Superpower
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <Superpower
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 2 }} >
                        <Superpower
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                    <GridItem rowSpan={4} colSpan={{ base: 0, md: 1 }} >
                        <Superpower
                            icon={<Icon as={IoSearchSharp} color={useColorModeValue('yellow.300', 'yellow.600')} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.500', 'yellow.900')}
                            text={'Market Analysis'}
                        />
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    );
};


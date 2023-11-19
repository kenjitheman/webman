import {
    Box,
    Grid,
    chakra,
    Text,
    Image,
    Flex,
    GridItem,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { AnimateOnHover } from './custom_animations';

function StatsCard(props) {
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
}

export default function Stats() {
    return (
        <Box
            fontFamily={"'Etna', sans-serif"}
            py={12}
            rounded={'3xl'}
            w={'100%'}
        >
            <Text
                as="a"
                href="/"
                color={useColorModeValue('yellow.500', 'yellow.700')}
                fontWeight={'medium'}
                fontSize={'md'}
                border={'1px solid'}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                px={5}
                py={3}
                alignSelf={'flex-start'}
                rounded={'2xl'}
                w={'fit-content'}
            >
                OUR ECOSYSTEM →
            </Text>
            <chakra.h1
                py={5}
                textAlign={'left'}
                fontSize={'4xl'}
                fontWeight={'medium'}
                color={useColorModeValue('black', 'gray.300')}
            >
                What is our company doing?
            </chakra.h1>
            <Flex
                w={'100%'}
                justifyContent={'space-between'}
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={'center'}
            >
                <Box
                    w={{ base: '100%', md: '45%' }}
                    pb={{ base: 12, md: 0 }}
                >
                    <Image
                        src="/images/background.jpg"
                        rounded={'3xl'}
                        alt={'stats image'}
                        border={'1px solid'}
                        borderColor={useColorModeValue('gray.300', 'gray.700')}
                        objectFit={'cover'}
                        w={'100%'}
                        h={{ base: 80, md: 'lg' }}
                    />
                </Box>

                <Grid
                    borderRadius={'5xl'}
                    gap={4}
                    w={{ base: '100%', md: '50%' }}
                    columns={1}
                >
                    <GridItem p={3} rowSpan={4} colSpan={{ base: 0, md: 4 }} >
                        <StatsCard p={3} title={'We serve'} stat={'50,000 people'} />
                    </GridItem>
                    <GridItem p={3} rowSpan={4} colSpan={{ base: 0, md: 4 }}>
                        <StatsCard title={'In'} stat={'30 different countries'} />
                    </GridItem>
                    <GridItem p={3} rowSpan={4} colSpan={{ base: 0, md: 4 }} >
                        <StatsCard title={'We serve'} stat={'50,000 people'} />
                    </GridItem>
                </Grid>
            </Flex>
        </Box >
    );
};



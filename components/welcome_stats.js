import {
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { AnimateOnHover } from '../components/custom_animations';

function WelcomeStat(props) {
    const { title, stat, icon } = props;
    return (
        <AnimateOnHover>
            <Stat
                px={{ base: 2, md: 12 }}
                py={8}
                shadow={'xl'}
                border={'1px solid'}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                css={{ backdropFilter: "blur(10px)" }}
                rounded={'3xl'}
                _hover={{
                    cursor: 'pointer',
                }}
            >
                <Flex justifyContent={'space-evenly'}>
                    <Box pl={{ base: 2, md: 4 }} >
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
}

export default function WelcomeStats() {
    return (
        <Box maxW="10xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <WelcomeStat title={'Users'} stat={'5,000+'} icon={<IoSearchSharp size={'4rem'} />} />
                <WelcomeStat title={'All Time Trades'} stat={'1,000+'} icon={<IoLogoBitcoin size={'4rem'} />} />
                <WelcomeStat title={'Integrations'} stat={'7+'} icon={<IoAnalyticsSharp size={'4rem'} />} />
            </SimpleGrid>
        </Box>
    );
}

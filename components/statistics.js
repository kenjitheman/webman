import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';

function CommunityCard(props) {
    const { title, stat, icon } = props;
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            rounded={'3xl'}
        >
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box my={'auto'} color={useColorModeValue('yellow.500', 'yellow.700')} alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
}

export default function Community() {
    return (
        <Box maxW="8xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <CommunityCard title={'Users'} stat={'5,000'} icon={<IoSearchSharp size={'3em'} />} />
                <CommunityCard title={'Servers'} stat={'1,000'} icon={<IoLogoBitcoin size={'3em'} />} />
                <CommunityCard title={'Datacenters'} stat={'7'} icon={<IoAnalyticsSharp size={'3em'} />} />
            </SimpleGrid>
        </Box>
    );
}

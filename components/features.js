import { Box, SimpleGrid, Icon, Text, Stack, Flex, useColorModeValue } from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';

const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={useColorModeValue('yellow.500', 'yellow.700')}
                bg={useColorModeValue('yellow.700', 'yellow.900')}
                rounded={'3xl'}
                mb={1}
            >
                {icon}
            </Flex>
            <Text fontWeight={"medium"}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export default function ThreeColumns() {
    return (
        <Box
            p={4}
            fontFamily={"'Etna', sans-serif"}
            fontSize={"2xl"}
            fontWeight={"me"}
        >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                    icon={<Icon as={IoAnalyticsSharp} w={10} h={10} />}
                    title={'Lifetime Support'}
                    text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
                />
                <Feature
                    icon={<Icon as={IoLogoBitcoin} w={10} h={10} />}
                    title={'Unlimited Donations'}
                    text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporinvidunt ut labore...'}
                />
                <Feature
                    icon={<Icon as={IoSearchSharp} w={10} h={10} color={""} />}
                    title={'Instant Delivery'}
                    text={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'}
                />
            </SimpleGrid>
        </Box>
    );
}

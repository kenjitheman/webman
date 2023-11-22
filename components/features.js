import { Text, Stack, Flex, useColorModeValue, Box } from '@chakra-ui/react';
import { AnimateOnHover } from '../components/custom_animations';

const Feature = (props) => {
    const { title, text, icon } = props;
    return (
        <AnimateOnHover>
            <Box
                w="100%"
                border={'1px solid'}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                shadow={'lg'}
                _hover={{
                    cursor: 'pointer',
                }}
                rounded={'3xl'}
                p={4}
            >
                <Stack>
                    <Flex
                        w={16}
                        h={16}
                        align={'center'}
                        justify={'center'}
                        color={useColorModeValue('yellow.500', 'yellow.700')}
                        border={'1px solid'}
                        borderColor={useColorModeValue('gray.300', 'gray.700')}
                        rounded={'3xl'}
                    >
                        {icon}
                    </Flex>
                    <Text fontWeight={"medium"}>{title}</Text>
                    <Text color={'gray.600'}>{text}</Text>
                </Stack >
            </Box >
        </AnimateOnHover>
    );
};

export { Feature };

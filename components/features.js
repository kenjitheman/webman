import { Text, Stack, Flex, useColorModeValue, Box } from "@chakra-ui/react";
import { AnimateOnHover } from "../components/custom_animations";

const Feature = (props) => {
    const { title, text, icon } = props;
    return (
        <AnimateOnHover>
            <Box
                w="100%"
                border={"1px solid"}
                minHeight={"100%"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                shadow={"lg"}
                _hover={{
                    cursor: "pointer",
                }}
                rounded={"3xl"}
                p={4}
            >
                <Stack>
                    <Flex
                        w={16}
                        h={16}
                        align={"center"}
                        justify={"center"}
                        color={useColorModeValue("white_yellow", "dark_yellow")}
                        border={"1px solid"}
                        borderColor={useColorModeValue("gray.300", "gray.700")}
                        rounded={"3xl"}
                    >
                        {icon}
                    </Flex>
                    <Text fontWeight={"medium"}>{title}</Text>
                    <Text color={"gray.500"}>{text}</Text>
                </Stack >
            </Box >
        </AnimateOnHover>
    );
};


const Info = (props) => {
    const { title, text } = props;
    return (
        <AnimateOnHover>
            <Box
                w="100%"
                h="100%"
                minHeight={"100%"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                shadow={"lg"}
                _hover={{
                    cursor: "pointer",
                }}
                rounded={"3xl"}
                p={4}
            >
                <Stack>
                    <Text
                        fontWeight={"medium"}
                        color={useColorModeValue("white_yellow", "dark_yellow")}
                    >
                        {title}
                    </Text>
                    <Text color={"gray.500"}>{text}</Text>
                </Stack >
            </Box >
        </AnimateOnHover>
    );
};

export { Feature, Info };

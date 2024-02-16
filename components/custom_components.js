import React from "react";
import { Box, Flex, Stack, Stat, StatLabel, StatNumber, Text, useColorModeValue, List, ListItem, Icon } from "@chakra-ui/react";
import { AnimateOnHover } from "../components/custom_animations";
import { FiArrowUpRight } from "react-icons/fi";
import { CheckIcon } from "@chakra-ui/icons";

const WelcomeStat = (props) => {
    const { title, text } = props;
    return (
        <AnimateOnHover>
            <Stat
                p={10}
                minH={"100%"}
                shadow={"lg"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                css={{ backdropFilter: "blur(10px)" }}
                rounded={"3xl"}
                _hover={{
                    cursor: "pointer",
                    borderColor: useColorModeValue("white_yellow", "dark_yellow")
                }}
                justifyContent={"center"}
                alignItems={"center"}
                alignContent={"center"}
            >
                <Flex justifyContent={"space-evenly"}>
                    <Box>
                        <StatNumber
                            fontSize={{ base: "3xl", xl: "4xl" }}
                            fontWeight={"bold"}
                            color={useColorModeValue("white_yellow", "dark_yellow")}
                            textAlign={"center"}
                        >
                            {title}
                        </StatNumber>
                        <StatLabel
                            fontSize={{ base: "xl", xl: "2xl" }}
                            fontWeight={"regular"}
                            color={"gray.500"}
                            textAlign={"center"}
                        >
                            {text}
                        </StatLabel>
                    </Box>
                </Flex>
            </Stat>
        </AnimateOnHover >
    );
};

const CommunityInfo = (props) => {
    const { title, text, icon } = props;
    return (
        <AnimateOnHover>
            <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                p={8}
                shadow={"lg"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                rounded={"3xl"}
                _hover={{
                    cursor: "pointer",
                    borderColor: useColorModeValue("white_yellow", "dark_yellow")
                }}
            >
                <Flex align={"center"} flexDirection="row">
                    <Stack direction={"column"} spacing={2}>
                        <Flex>
                            <Box color={useColorModeValue("white_yellow", "dark_yellow")} alignContent={"start"}>
                                {icon}
                            </Box>
                            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"medium"} px={{ base: 2, md: 4 }}>
                                {title}
                            </Text>
                        </Flex>
                        <Text
                            fontSize={{ base: "lg", md: "xl" }}
                            fontWeight={"regular"}
                            color={useColorModeValue("gray.500", "gray.400")}
                        >
                            {text}
                        </Text>
                    </Stack>
                </Flex>
                <FiArrowUpRight size={34} />
            </Flex>
        </AnimateOnHover>
    );
};

const InfoFullyGrid = (props) => {
    const { title, text, icon } = props;
    return (
        <AnimateOnHover>
            <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                minH={"100%"}
                p={8}
                shadow={"lg"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                rounded={"3xl"}
                _hover={{
                    cursor: "pointer",
                    borderColor: useColorModeValue("white_yellow", "dark_yellow")
                }}
            >
                <Flex align={"center"}>
                    <Box color={useColorModeValue("white_yellow", "dark_yellow")} alignContent={"start"}>
                        {icon}
                    </Box>
                    <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight={"medium"} px={{ base: 3, md: 5 }}>
                        {text}: {title}
                    </Text>
                </Flex>
                <FiArrowUpRight size={34} />
            </Flex>
        </AnimateOnHover>
    );
};

const Service = (props) => {
    const { title, text, icon, includes } = props;
    return (
        <AnimateOnHover>
            <Flex
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
                alignContent="center"
                minH={"100%"}
                shadow={"lg"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                rounded={"3xl"}
                _hover={{
                    cursor: "pointer",
                    borderColor: useColorModeValue("white_yellow", "dark_yellow")
                }}
                p={7}
            >
                <Flex flexDirection="row" alignItems="flex-start">
                    <Flex
                        w={16}
                        h={16}
                        align={"center"}
                        justify={"center"}
                        color={useColorModeValue("white_yellow", "dark_yellow")}
                        border={"1px solid"}
                        borderColor={useColorModeValue("gray.300", "gray.700")}
                        rounded={"3xl"}
                        p={2}
                    >
                        {icon}
                    </Flex>
                    <Text
                        fontSize={"2xl"}
                        fontWeight={"medium"}
                        p={3}
                        wordBreak={"break-word"}
                    >
                        {title}
                    </Text>
                </Flex>
                <Text
                    fontSize={"xl"}
                    fontWeight={"regular"}
                    color={"gray.500"}
                    p={2}
                    justify={"center"}
                    wordBreak={"break-word"}
                >
                    {text}
                </Text>
                {includes && typeof includes === "object" && Object.keys(includes).length > 0 && (
                    <List spacing={3}>
                        {Object.keys(includes).map((key, index) => (
                            <ListItem key={index} fontSize={"xl"} fontWeight={"regular"}>
                                <Icon
                                    as={CheckIcon}
                                    color={useColorModeValue("white_yellow", "dark_yellow")}
                                    pr={2} w={7} h={7}
                                />
                                {includes[key]}
                            </ListItem>
                        ))}
                    </List>
                )}
            </Flex>
        </AnimateOnHover >
    );
};

const Info = (props) => {
    const { title, text, icon } = props;
    return (
        <AnimateOnHover>
            <Box
                p={5}
                minH={"full"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                shadow={"lg"}
                _hover={{
                    cursor: "pointer",
                    borderColor: useColorModeValue("white_yellow", "dark_yellow")
                }}
                rounded={"3xl"}
                css={{ backdropFilter: "blur(10px)" }}
            >
                <Stack>
                    <Flex
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="start"
                        color={useColorModeValue("white_yellow", "dark_yellow")}
                    >
                        {icon}
                        <Text
                            fontWeight={"medium"}
                            color={useColorModeValue("white_yellow", "dark_yellow")}
                            pl={{ base: 3, md: 4 }}
                            fontSize={{ base: "lg", md: "2xl" }}
                            wordBreak={"break-word"}
                            w={"100%"}
                        >
                            {title}
                        </Text>
                    </Flex>
                    <Text color={"gray.500"}
                        fontSize={{ base: "lg", md: "xl" }}
                        fontWeight={"regular"}
                        wordBreak={"break-word"}
                    >
                        {text}
                    </Text>
                </Stack>
            </Box>
        </AnimateOnHover >
    );
};

export { WelcomeStat, InfoFullyGrid, Info, Service, CommunityInfo };

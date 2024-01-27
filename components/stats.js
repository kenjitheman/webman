import React from "react";
import { Box, Flex, Stack, Stat, StatLabel, StatNumber, Text, useColorModeValue, List, ListItem } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { AnimateOnHover } from "../components/custom_animations";
import { FiArrowUpRight } from "react-icons/fi";

// welcome_stats.js
const WelcomeStat = (props) => {
    const { title, text } = props;
    return (
        <AnimateOnHover>
            <Stat
                p={10}
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
                            fontSize={{ base: "2xl", xl: "4xl" }}
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

// stats_fully_grid.js
const StatFullyGrid = (props) => {
    const { title, text, icon } = props;
    return (
        <AnimateOnHover>
            <Flex
                flexDirection="row"
                alignItems="center"
                px={{ base: 4, md: 15 }}
                position={"relative"}
                my={5}
                py={8}
                shadow={"lg"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                rounded={"3xl"}
                _hover={{
                    cursor: "pointer",
                    borderColor: useColorModeValue("white_yellow", "dark_yellow")
                }}
            >
                <Flex align={"center"} justify={"space-evenly"}>
                    <Box
                        m={4}
                        color={useColorModeValue("white_yellow", "dark_yellow")}
                        alignContent={"start"}
                        w={16}
                        h={16}
                    >
                        {icon}
                    </Box>
                    <Text
                        fontSize={"3xl"}
                        fontWeight={"medium"}
                        color={useColorModeValue("white_yellow", "dark_yellow")}
                    >
                        {title}
                    </Text>
                    <Text fontSize={{ base: "xl", xl: "2xl" }} fontWeight={"medium"}>
                        {text}
                    </Text>
                    <FiArrowUpRight size={40} position={"absolute"} right={0} />
                </Flex>
            </Flex>
        </AnimateOnHover>
    );
};

// community.js
const StatsCard = (props) => {
    const { title, text } = props;
    return (
        <AnimateOnHover>
            <Flex flexDirection="column" alignItems="center" justifyContent="center">
                <Stat
                    px={{ base: 4, md: 15 }}
                    py={10}
                    shadow={"lg"}
                    border={"1px solid"}
                    minHeight={"100%"}
                    borderColor={useColorModeValue("gray.300", "gray.700")}
                    rounded={"3xl"}
                    _hover={{
                        cursor: "pointer",
                        borderColor: useColorModeValue("white_yellow", "dark_yellow")
                    }}
                >
                    <StatNumber
                        fontSize={"3xl"}
                        fontWeight={"regular"}
                        color={useColorModeValue("white_yellow", "dark_yellow")}
                    >
                        {title}
                    </StatNumber>
                    <StatLabel fontSize={"2xl"} fontWeight={"medium"} color={"gray.500"}>
                        {text}
                    </StatLabel>
                </Stat>
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
                justifyContent="center"
                px={{ base: 4, md: 15 }}
                my={5}
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
                <Flex align={"center"} justify={"space-evenly"}>
                    <Box m={2} color={useColorModeValue("white_yellow", "dark_yellow")} alignContent={"start"}>
                        {icon}
                    </Box>
                </Flex>
                <Text fontSize={"2xl"} fontWeight={"medium"} p={3}>
                    {text}{": "}{title}
                </Text>
                <FiArrowUpRight size={35} />
            </Flex>
        </AnimateOnHover>
    );
};

const Feature = (props) => {
    const { title, text, icon, ...included } = props;

    return (
        <AnimateOnHover>
            <Flex
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
                w={"100%"}
                position={"relative"}
                shadow={"lg"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                rounded={"3xl"}
                _hover={{
                    cursor: "pointer",
                    borderColor: useColorModeValue("white_yellow", "dark_yellow")
                }}
                p={5}
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
                    >
                        {icon}
                    </Flex>
                    <Text fontSize={"2xl"} fontWeight={"medium"} p={3}>
                        {title}
                    </Text>
                </Flex>
                <Text fontSize={"xl"} fontWeight={"regular"} p={3} color={"gray.500"}>
                    {text}
                </Text>
            </Flex>
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
                    borderColor: useColorModeValue("white_yellow", "dark_yellow")
                }}
                rounded={"3xl"}
                p={5}
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

export { WelcomeStat, StatFullyGrid, StatsCard, InfoFullyGrid, Info, Feature };

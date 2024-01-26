import React from "react";
import { Box, Flex, Stack, Stat, StatLabel, StatNumber, Text, useColorModeValue } from "@chakra-ui/react";
import { AnimateOnHover } from "../components/custom_animations";
import { FiArrowUpRight } from "react-icons/fi";

// welcome_stats.js
const WelcomeStat = (props) => {
    const { title, text, icon } = props;
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
            >
                <Flex justifyContent={"space-evenly"}>
                    <Box>
                        <StatNumber
                            fontSize={{ base: "2xl", xl: "4xl" }}
                            fontWeight={"bold"}
                            color={useColorModeValue("white_yellow", "dark_yellow")}
                            alignContent={"start"}
                        >
                            {title}
                        </StatNumber>
                        <StatLabel fontSize={{ base: "xl", xl: "2xl" }} fontWeight={"regular"} color={"gray.500"}>
                            {text}
                        </StatLabel>
                    </Box>
                    <Box
                        my={"auto"}
                        color={useColorModeValue("white_yellow", "dark_yellow")}
                        alignContent={"center"}
                    >
                        {icon}
                    </Box>
                </Flex>
            </Stat>
        </AnimateOnHover >
    );
};

// stats_fully_grid.js
const StatFullyGrid = (props) => {
    const { text, icon } = props;
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
                </Flex>
                <Text fontSize={{ base: "xl", xl: "2xl" }} fontWeight={"medium"}>
                    {text}
                </Text>
                <FiArrowUpRight size={40} position={"absolute"} right={0} />
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
                    <FiArrowUpRight size={40} position={"absolute"} right={0} />
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
                    <Box m={4} color={useColorModeValue("white_yellow", "dark_yellow")} alignContent={"start"}>
                        {icon}
                    </Box>
                </Flex>
                <Text fontSize={"2xl"} fontWeight={"medium"}>
                    {text}{": "}{title}
                </Text>
                <FiArrowUpRight size={40} position={"absolute"} right={0} top={0} />
            </Flex>
        </AnimateOnHover>
    );
};

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
                    borderColor: useColorModeValue("white_yellow", "dark_yellow")
                }}
                rounded={"3xl"}
                position={"relative"}
                p={4}
            >
                <Stack>
                    <FiArrowUpRight size={40} position={"absolute"} right={0} top={0} />
                    <Flex
                        w={16}
                        h={16}
                        align={"center"}
                        justify={"center"}
                        color={useColorModeValue("white_yellow", "dark_yellow")}
                        border={"1px solid"}
                        borderColor={useColorModeValue("gray.300", "gray.700")}
                        rounded={"3xl"}
                        mb={4}
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

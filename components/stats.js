import React from "react";
import { Box, Flex, Stat, StatLabel, StatNumber, Text, useColorModeValue } from "@chakra-ui/react";
import { AnimateOnHover } from "../components/custom_animations";

// welcome_stats.js
const WelcomeStat = (props) => {
    const { title, text, icon } = props;
    return (
        <AnimateOnHover>
            <Stat
                p={10}
                shadow={"lg"}
                border={"1px solid"}
                minHeight={"100%"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                css={{ backdropFilter: "blur(10px)" }}
                rounded={"3xl"}
                _hover={{
                    cursor: "pointer"
                }}
            >
                <Flex justifyContent={"space-evenly"}>
                    <Box>
                        <StatNumber
                            fontSize={{ base: "2xl", xl: "3xl" }}
                            fontWeight={"bold"}
                            color={useColorModeValue("white_yellow", "dark_yellow")}
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
        </AnimateOnHover>
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
                my={5}
                py={10}
                shadow={"lg"}
                border={"1px solid"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                rounded={"3xl"}
                _hover={{
                    cursor: "pointer"
                }}
            >
                <Flex align={"center"} justify={"space-evenly"}>
                    <Box m={4} color={useColorModeValue("white_yellow", "dark_yellow")} alignContent={"start"}>
                        {icon}
                    </Box>
                </Flex>
                <Text fontSize={"2xl"} fontWeight={"medium"}>
                    {text}
                </Text>
            </Flex>
        </AnimateOnHover>
    );
};

// community.js
const StatsCard = (props) => {
    const { title, text } = props;
    return (
        <AnimateOnHover>
            <Stat
                px={{ base: 4, md: 15 }}
                py={10}
                shadow={"lg"}
                border={"1px solid"}
                minHeight={"100%"}
                borderColor={useColorModeValue("gray.300", "gray.700")}
                rounded={"3xl"}
                _hover={{
                    cursor: "pointer"
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
        </AnimateOnHover>
    );
};

export { WelcomeStat, StatFullyGrid, StatsCard };

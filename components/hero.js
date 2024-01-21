import Image from "next/image";
import { Box, Heading, Container, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { CustomButton } from "./buttons.js";

const Hero = (props) => {
    const { title, text, button_1_text, button_2_text } = props;

    return (
        <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-end"}
            w={"100%"}
            h={{ base: "xl", sm: "2xl", md: "850px" }}
            position="relative"
            mt={10}
            rounded={"3xl"}
            overflow={"hidden"}
        >
            <Image
                src={useColorModeValue("/images/bg_white.webp", "/images/bg_dark.webp")}
                alt="Background Image"
                objectFit="cover"
                fill={true}
                priority={true}
                quality={100}
            />
            <Container
                maxW={"full"}
                fontFamily={"'Etna', sans-serif"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                wrap={"wrap"}
                p={5}
            >
                <Box
                    py={4}
                    px={{ base: 0, sm: 5 }}
                    rounded={"3xl"}
                    backdropFilter={"blur(5px)"}
                    border={"1px solid"}
                    borderColor={useColorModeValue("gray.300", "gray.700")}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "3xl", sm: "5xl", md: "6xl" }}
                        color={useColorModeValue("gray.900", "white")}
                        p={3}
                    >
                        {title}
                    </Heading>
                    <Text
                        fontSize={{ base: "md", lg: "xl" }}
                        color={useColorModeValue("gray.500", "gray.300")}
                        p={3}
                    >
                        {text}
                    </Text>
                    <Flex
                        justifyContent="flex-start"
                        py={5}
                        wrap={"wrap"}
                        p={3}
                    >
                        <Box mb={{ base: 2, sm: 0 }}>
                            <CustomButton
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            >
                                {button_1_text}
                            </CustomButton>
                        </Box>
                        <Box px={4}></Box>
                        <CustomButton
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        >
                            {button_2_text}
                        </CustomButton>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

export { Hero };

import Image from "next/image";
import { Box, Heading, Container, Text, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = (props) => {
    const { title, text } = props;
    const { colorMode } = useColorMode();

    return (
        <Box
            display={"flex"}
            justifyContent={"flex-start"}
            alignItems={"flex-end"}
            w={"100%"}
            h={{ base: "xl", sm: "2xl", md: "850px" }}
            position="relative"
            rounded={"3xl"}
            overflow={"hidden"}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={colorMode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                >
                    <Image
                        src={useColorModeValue("/images/bg_white.webp", "/images/bg_dark.webp")}
                        alt="Background Image"
                        objectFit="cover"
                        fill={true}
                        priority={true}
                        quality={100}
                    />
                </motion.div>
            </AnimatePresence>

            <Container
                maxW={"full"}
                fontFamily={"'Etna', sans-serif"}
                display={"flex"}
                w={"100%"}
                wordBreak={"break-word"}
                justifyContent={"space-between"}
                alignItems={"flex-start"}
                wrap={"wrap"}
                p={10}
            >
                <Box
                    py={10}
                    px={{ base: 2, sm: 10 }}
                    rounded={"3xl"}
                    backdropFilter={"blur(10px)"}
                    border={"1px solid"}
                    borderColor={useColorModeValue("gray.300", "gray.700")}
                >
                    <Heading
                        fontWeight={"bold"}
                        fontSize={{ base: "3xl", sm: "5xl", md: "6xl" }}
                        color={useColorModeValue("gray.900", "white")}
                        p={2}
                    >
                        {title}
                    </Heading>
                    <Text
                        fontSize={{ base: "md", lg: "xl" }}
                        color={useColorModeValue("gray.800", "white")}
                        fontWeight={"medium"}
                        p={1}
                    >
                        {text}
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export { Hero };

import { useColorMode, useColorModeValue, Switch, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div style={{ display: "block" }} key={useColorModeValue("light", "dark")}>
                <Flex
                    borderRadius="2xl"
                    aria-label="Toggle Theme"
                    cursor="pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    justifyContent="space-between"
                    alignItems="center"
                    px={1}
                >
                    <FaSun size="1.1rem" />
                    <Switch
                        size="sm"
                        isChecked={useColorModeValue(false, true)}
                        onChange={toggleColorMode}
                        colorScheme={useColorModeValue("blackAlpha", "whiteAlpha")}
                        px={2}
                    />
                    <BsMoonStarsFill size="1.1rem" />
                </Flex >
            </motion.div>
        </AnimatePresence >
    );
};

export default ThemeToggleButton;

import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaSun } from 'react-icons/fa';

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: "inline-block" }}
                key={useColorModeValue("light", "dark")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <IconButton
                    mx={3}
                    aria-label="Toggle theme"
                    colorScheme={useColorModeValue("gray", "gray")}
                    icon={useColorModeValue(<BsMoonStarsFill />, <FaSun />)}
                    onClick={toggleColorMode}
                    p={5}
                    size="xl"
                    rounded="2xl"
                >
                </IconButton>
            </motion.div>
        </AnimatePresence >
    );
};

export default ThemeToggleButton;

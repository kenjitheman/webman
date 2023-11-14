import { useColorMode, useColorModeValue, Switch, Flex } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

const ThemeToggleButton = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                style={{ display: 'inline-block' }}
                key={useColorModeValue('light', 'dark')}
            >
                <Flex
                    borderRadius="2xl"
                    cursor="pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    justifyContent="space-between"
                    alignItems="center"
                    ml={4}
                >
                    <FaSun size="24px" />
                    <Switch
                        size="lg"
                        isChecked={useColorModeValue(false, true)}
                        onChange={toggleColorMode}
                        colorScheme={useColorModeValue('blackAlpha', 'whiteAlpha')}
                        px={2}
                    />
                    <BsMoonStarsFill size="24px" />
                </Flex >
            </motion.div>
        </AnimatePresence >
    );
};

export default ThemeToggleButton;

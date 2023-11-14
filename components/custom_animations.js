import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => {
        return shouldForwardProp(prop) || prop === "transition";
    },
});

const AnimateOnHover = ({ children }) => (
    <StyledDiv
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </StyledDiv>
);

const ScaleImage = ({ children }) => (
    <StyledDiv
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.6 }}
        transition={{ duration: 0.2 }}
    >
        {children}
    </StyledDiv>
);

export { AnimateOnHover, ScaleImage };

import React from "react";
import ScrollProgressBar from "react-scroll-progress-bar";
import { useColorModeValue } from "@chakra-ui/react";

// white_yellow: "#f09301",
// dark_yellow: "#c2781b"

const ProgressBar = () => {
    return (
        <ScrollProgressBar
            bgcolor={useColorModeValue("#f09301", "#c2781b")}
            height={useColorModeValue("3px", "2px")}
            duration="0.2"
        />
    );
};

export default ProgressBar;

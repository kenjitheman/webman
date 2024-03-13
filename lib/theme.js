import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            bg: mode("white", "#191b1f")(props),
            color: mode("black", "white")(props)
        }
    })
};

const fonts = {
    heading: "'Titillium Web', sans-serif",
    body: "'Titillium Web', sans-serif"
};

const colors = {
    light_yellow: "#f09301",
    dark_yellow: "#c2781b",
    light_gray: "#718096",
    dark_gray: "#a0aec0",
    light_border_color: "#cbd5e0",
    dark_border_color: "#4a5568"
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
};

const theme = extendTheme({ config, styles, fonts, colors });
export default theme;

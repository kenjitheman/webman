import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: (props) => ({
        body: {
            bg: mode("white", "black")(props)
        }
    })
};

const components = {
    Heading: {
        variants: {
            "section-title": {
                textDecoration: "underline",
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: "#a8ebfe",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: (props) => ({
            color: mode("#a8ebfe", "#a8ebfe")(props),
            textUnderlineOffset: 3
        })
    }
};

const fonts = {
    heading: "'Etna', sans-serif",
    body: "'Etna', sans-serif"
};

const colors = {
    white_yellow: "#f09301",
    dark_yellow: "#c2781b"
};

const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;

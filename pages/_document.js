import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import theme from "../lib/theme";
import Cursor from "../components/cursor";

export default class Document extends NextDocument {
    render() {
        return (
            <Html lang="{process.env.NEXT_PUBLIC_LOCALE}">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html >
        );
    }
}

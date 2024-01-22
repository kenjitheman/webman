import React from "react";
import { appWithTranslation } from "next-i18next";
import Chakra from "../components/chakra";
import Fonts from "../components/fonts";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "../lib/theme";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <ChakraProvider theme={theme}>
                <Layout router={router}>
                    <AnimatePresence
                        mode="wait"
                        initial={true}
                        onExitComplete={() => {
                            if (typeof window !== "undefined") {
                                window.scrollTo({ top: 0 });
                            }
                        }}
                    >
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </Layout>
                <Analytics />
                <SpeedInsights />
            </ChakraProvider>
        </Chakra>
    );
}

export default appWithTranslation(Website);

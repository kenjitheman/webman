import React from 'react';
import { appWithTranslation } from 'next-i18next';
import Chakra from "../components/chakra";
import Fonts from "../components/fonts";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

if (typeof window !== "undefined") {
    window.history.scrollRestoration = "manual";
}

function Website({ Component, pageProps, router }) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    exitBeforeEnter
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
        </Chakra>
    );
}

export default appWithTranslation(Website);

import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import ProgressBar from "../progress_bar";
import Footer from "../footer";
import { useEffect, useState } from "react";

const Main = ({ children, router }) => {
    const ogTitle = "Alt Corporation";
    const ogDescription = "A dedicated team of 42 professionals crafting unparalleled user experiences, driving success for businesses.";
    const ogImage = "/images/android-chrome-512x512.png";

    const [structuredData, setStructuredData] = useState(null);

    useEffect(() => {
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Alt Corporation",
            "url": "https://www.altcorp.org",
            "logo": "/images/logo.png",
            "description": ogDescription,
            "foundingDate": "2021-01-01",
            "employeeCount": 42,
            "sameAs": [
                "https://t.me/alt-portfolio"
            ]
        };
        setStructuredData(schemaData);
    }, []);

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content={ogDescription} />
                <meta name="author" content="Alt Corporation" />

                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="icon" type="image/png" href="/android-chrome-512x512.png" />
                <link rel="icon" type="image/png" href="/android-chrome-192x192.png" />
                <link rel="icon" type="image/png" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" href="/favicon-16x16.png" />

                <meta property="og:site_name" content={ogTitle} />
                <meta name="og:title" content={ogTitle} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />

                <title>{ogTitle}</title>

                {structuredData && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                    />
                )}
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW={"100%"} pt={20}>
                <AnimatePresence initial={true} mode="wait">
                    {children}
                </AnimatePresence>
                <Footer />
            </Container>

            <ProgressBar />
        </Box>
    );
};

export default Main;

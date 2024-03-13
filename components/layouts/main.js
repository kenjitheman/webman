import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar";
import ProgressBar from "../progress_bar";
import Footer from "../footer";
import { AnimatePresence } from "framer-motion";

const Main = ({ children }) => {
    const router = useRouter();

    const ogTitle = "Alt Corporation";
    const ogDescription = "A dedicated team of professionals crafting unparalleled user experiences, driving success for businesses.";
    const ogImage = "/images/android-chrome-512x512.png";
    const siteUrl = "https://www.altcorp.org";

    const [structuredData, setStructuredData] = useState(null);
    useEffect(() => {
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Alt Corporation",
            "url": siteUrl,
            "logo": `${siteUrl}/images/logo.png`,
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
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={ogDescription} />
                <meta name="author" content="Alt Corporation" />
                <link rel="canonical" href={siteUrl + router.asPath} />

                <meta property="og:site_name" content={ogTitle} />
                <meta property="og:title" content={ogTitle} />
                <meta property="og:description" content={ogDescription} />
                <meta property="og:image" content={ogImage} />
                <meta property="og:url" content={siteUrl + router.asPath} />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={ogTitle} />
                <meta name="twitter:description" content={ogDescription} />
                <meta name="twitter:image" content={ogImage} />
                <meta name="twitter:url" content={siteUrl + router.asPath} />

                <title>{ogTitle}</title>

                {structuredData && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
                )}
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="100%" pt={20}>
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

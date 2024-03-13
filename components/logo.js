import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { animateScroll } from "react-scroll";

const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 800 });
};

const Logo = () => {
    return (
        <Link
            href="/"
            passHref
            scroll={true}
            aria-label="Home"
            label="Home"
            onClick={scrollToTop}
        >
            <Box p={2}>
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    quality={100}
                    priority={true}
                />
            </Box>
        </Link >
    );
};

export default Logo;

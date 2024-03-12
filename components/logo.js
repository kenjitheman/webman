import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" passHref scroll={false} aria-label="Home" label="Home">
            <Box p={2}>
                <Image
                    src="/images/logo_2d.png"
                    alt="Logo"
                    width={60}
                    height={60}
                />
            </Box>
        </Link >
    );
};

export default Logo;

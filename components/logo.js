import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Logo = ({ href }) => {
    return (
        <Link href={href} passHref scroll={false} aria-label="Home" label="Home">
            <Box p={2}>
                <Image
                    src="/images/logo.png"
                    alt="Alt Corporation Logo"
                    width={60}
                    height={60}
                />
            </Box>
        </Link >
    );
};

export default Logo;

import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href={"/#home"} passHref scroll={false} aria-label="Home" label="Home">
            <Box p={2}>
                <Image
                    src="/images/logo_2d.png"
                    alt="Alt Corporation Logo"
                    width={65}
                    height={65}
                />
            </Box>
        </Link >
    );
};

export default Logo;

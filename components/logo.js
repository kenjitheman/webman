import Link from "next/link";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" scroll={false}>
            <Box p={2}>
                <Image
                    src="/images/logo.png"
                    width={60}
                    height={60}
                />
            </Box>
        </Link >
    );
};

export default Logo;

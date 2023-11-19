import dynamic from 'next/dynamic';
import { Button, useColorModeValue } from '@chakra-ui/react';

const MotionButton = dynamic(() => import('framer-motion').then((mod) => mod.motion.button), {
    ssr: false,
});

const CustomButton = ({ textColor, children, whileHover, transition }) => {
    return (
        <MotionButton whileHover={whileHover} transition={transition}>
            <Button
                borderRadius={'3xl'}
                py={{ base: 6, md: 7 }}
                px={{ base: 5, md: 12 }}
                fontSize={{ base: 'lg', md: 'xl' }}
                color={textColor}
                rounded="2xl"
                fontFamily={"'Etna', sans-serif"}
                fontWeight={"medium"}
                bg="gray.900"
                css={{ backdropFilter: "blur(0px)" }}
                border="0.1px solid"
                borderColor={useColorModeValue('gray.700', 'gray.700')}
                _hover={{
                    rounded: '3xl',
                }}
            >
                {children}
            </Button>
        </MotionButton>
    );
};

const GetStartedButton = () => {
    return (
        <CustomButton
            textColor={'white'}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
        >
            Get Started →
        </CustomButton>
    );
};

const LearnMoreButton = () => {
    return (
        <CustomButton
            textColor={'white'}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
        >
            Learn More →
        </CustomButton>
    );
};

export { GetStartedButton, LearnMoreButton };

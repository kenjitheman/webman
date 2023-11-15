import dynamic from 'next/dynamic';
import { Button, useColorModeValue } from '@chakra-ui/react';
import { AnimateOnHover } from '../components/custom_animations';

const MotionButton = dynamic(() => import('framer-motion').then((mod) => mod.motion.button), {
    ssr: false,
});

const CustomButton = ({ textColor, children, whileHover, transition }) => {
    return (
        <MotionButton whileHover={whileHover} transition={transition}>
            <Button
                colorScheme={'none'}
                borderRadius={'3xl'}
                py={7}
                px={9}
                fontSize={'xl'}
                color={textColor}
                rounded="2xl"
                fontFamily={"'Etna', sans-serif"}
                fontWeight={"medium"}
                shadow="lg"
                bg={useColorModeValue("#ffffffa40", "#20202380")}
                css={{ backdropFilter: "blur(1px)" }}
                border="0.1px solid"
                borderColor={useColorModeValue('gray.900', 'gray.900')}
            >
                {children}
            </Button>
        </MotionButton>
    );
};

const GetStartedButton = () => {
    return (
        <CustomButton
            textColor={'gray.300'}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
        >
            Get Started →
        </CustomButton>
    );
};

const LearnMoreButton = () => {
    return (
        <CustomButton
            textColor={'gray.300'}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
        >
            Learn More →
        </CustomButton>
    );
};

export { GetStartedButton, LearnMoreButton };

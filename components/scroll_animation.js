import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 1
    });

    const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(60px)"
    });

    return (
        <animated.div ref={ref} style={fadeIn}>
            {children}
        </animated.div>
    );
};

export { ScrollAnimation };

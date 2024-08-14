import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const ScrollAnimation = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.125
    });

    const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(122px)",
        config: { duration: 450 }
    });

    return (
        <animated.div ref={ref} style={fadeIn}>
            {children}
        </animated.div>
    );
};

export { ScrollAnimation };

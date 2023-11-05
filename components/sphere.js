import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import anime from 'animejs';

const Sphere = () => {
    useEffect(() => {
        function fitElementToParent(el, padding) {
            let timeout = null;
            function resize() {
                if (timeout) clearTimeout(timeout);
                anime.set(el, { scale: 1 });
                let pad = padding || 0;
                let parentEl = el.parentNode;
                let elOffsetWidth = el.offsetWidth - pad;
                let parentOffsetWidth = parentEl.offsetWidth;
                let ratio = parentOffsetWidth / elOffsetWidth;
                timeout = setTimeout(() => anime.set(el, { scale: ratio }), 10);
            }
            resize();
            window.addEventListener('resize', resize);
        }

        let sphereAnimation = (function() {
            let sphereEl = document.querySelector('.sphere-animation');
            let spherePathEls = sphereEl.querySelectorAll('.sphere path');
            let pathLength = spherePathEls.length;
            let hasStarted = false;
            let animations = [];

            fitElementToParent(sphereEl);

            let breathAnimation = anime({
                begin: function() {
                    for (let i = 0; i < pathLength; i++) {
                        animations.push(
                            anime({
                                targets: spherePathEls[i],
                                stroke: { value: ['rgba(255,75,75,1)', 'rgba(80,80,80,.35)'], duration: 500 },
                                translateX: [2, -4],
                                translateY: [2, -4],
                                easing: 'easeOutQuad',
                                autoplay: false,
                            })
                        );
                    }
                },
                update: function(ins) {
                    animations.forEach(function(animation, i) {
                        let percent = (1 - Math.sin(i * 0.35 + 0.0022 * ins.currentTime)) / 2;
                        animation.seek(animation.duration * percent);
                    });
                },
                duration: Infinity,
                autoplay: false,
            });

            let introAnimation = anime.timeline({
                autoplay: false,
            }).add({
                targets: spherePathEls,
                strokeDashoffset: {
                    value: [anime.setDashoffset, 0],
                    duration: 3900,
                    easing: 'easeInOutCirc',
                    delay: anime.stagger(190, { direction: 'reverse' }),
                },
                duration: 2000,
                delay: anime.stagger(60, { direction: 'reverse' }),
                easing: 'linear',
            }, 0);

            let shadowAnimation = anime({
                targets: '#sphereGradient',
                x1: '25%',
                x2: '25%',
                y1: '0%',
                y2: '75%',
                duration: 30000,
                easing: 'easeOutQuint',
                autoplay: false,
            }, 0);

            function init() {
                introAnimation.play();
                breathAnimation.play();
                shadowAnimation.play();
            }

            init();
        })();
    }, []);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            width="100%"
            height="100vh"
        >
            <Box className="animation-wrapper" width="50%" paddingBottom="50%">
                <Box className="sphere-animation" position="absolute" top="50%" left="50%" width="580px" height="580px" margin="-290px 0 0 -290px">
                </Box>
            </Box>
        </Box>
    );
};

export default Sphere;

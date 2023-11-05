import { useState } from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import FootprintIcon from './icons/footprint';
import styled from '@emotion/styled';

const SphereBox = styled(Box)`
font-weight: bold;
font-size: 25px;
display: inline-flex;
align-items: center;
height: 40px;
line-height: 20px;
padding: 10px;
cursor: pointer;

&:hover > svg {
    transform: rotate(360deg);
    transition: transform 200ms ease;
}
`;

const Sphere = () => {
    const [scale, setScale] = useState(1);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleMouseMove = (e) => {
        const d = e.currentTarget.getBoundingClientRect();
        let mouseX = e.clientX - (d.left + Math.floor(d.width / 2));
        let mouseY = e.clientY - (d.top + Math.floor(d.height / 2));
        mouseX = mouseX - mouseX * 2;
        mouseY = mouseY - mouseY * 2;
        setScale(1.6);
        setX(mouseX / 2);
        setY(mouseY / 2);
    };

    const handleMouseLeave = () => {
        setScale(1);
        setX(0);
        setY(0);
    };

    return (
        <SphereBox
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            bg={useColorModeValue('gray.100', 'gray.700')}
            width="100vw"
            height="100vh"
        >
            <img
                src="https://images.unsplash.com/photo-1539035104074-dee66086b5e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=2550&q=80"
                alt="background"
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: 'cover',
                    transform: `translateX(${x}px) translateY(${y}px) scale(${scale})`,
                    transition: 'transform 0.7s ease-out',
                }}
            />
            <Box display="none">
                <FootprintIcon />
            </Box>
        </SphereBox>
    );
};

export default Sphere;

import React from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";

function Carousel({ items, initialSlideToShow = 3 }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: initialSlideToShow,
        speed: 6000,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
        centerMode: true,
        pauseOnHover: false,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <Box
            className="slider-container"
            w="100%"
            h="100%"
            overflow="hidden"
            margin="auto"
            padding="0px"
            position="relative"
        >
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </Slider>
        </Box>
    );
}

export default Carousel;

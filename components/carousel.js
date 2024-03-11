import React from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";

function Carousel({ items, initialSlideToShow = 3 }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: initialSlideToShow,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 0,
        initialSlide: 0,
        cssEase: "linear",
        centerMode: true,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.6
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 0.9
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 0.7
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

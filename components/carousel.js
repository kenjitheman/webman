import React from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel({ items }) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        speed: 6000,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear",
        centerMode: true,
        pauseOnHover: false,
        arrows: false,
        initialSlide: 0
    };

    return (
        <Box
            className="slider-container" w={"100%"}
            h={"100%"} align={"center"} justify={"space-evenly"}
        >
            <Slider {...settings}>
                {items.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </Slider>
        </Box >
    );
}

export default Carousel;

import React from "react";
import { Image, useColorModeValue } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay]);
import "swiper/css";
import "swiper/css/autoplay";

const AutoplayCarousel = () => {

    const slides = [
        {
            id: 1,
            content: <Image
                src={
                    useColorModeValue(
                        "images/bg_white.webp",
                        "images/bg_dark.webp"
                    )
                }
                loading={"lazy"}
                rounded={{ base: "xl", md: "3xl" }}
                alt={"About us image"}
                border={"1px solid"}
                objectFit={"cover"}
                fill={true}
                borderColor={useColorModeValue("gray.300", "gray.600")}
                quality={100}
                h={"sm"}
            />
        },
        {
            id: 2,
            content: <Image
                src={
                    useColorModeValue(
                        "images/bg_white.webp",
                        "images/bg_dark.webp"
                    )
                }
                loading={"lazy"}
                rounded={{ base: "xl", md: "3xl" }}
                alt={"About us image"}
                border={"1px solid"}
                objectFit={"cover"}
                fill={true}
                borderColor={useColorModeValue("gray.300", "gray.600")}
                quality={100}
                h={"sm"}
            />
        },
        {
            id: 3,
            content: <Image
                src={
                    useColorModeValue(
                        "images/bg_white.webp",
                        "images/bg_dark.webp"
                    )
                }
                loading={"lazy"}
                rounded={{ base: "xl", md: "3xl" }}
                alt={"About us image"}
                border={"1px solid"}
                objectFit={"cover"}
                fill={true}
                borderColor={useColorModeValue("gray.300", "gray.600")}
                quality={100}
                h={"sm"}
            />
        },
        {
            id: 4,
            content: <Image
                src={
                    useColorModeValue(
                        "images/bg_white.webp",
                        "images/bg_dark.webp"
                    )
                }
                loading={"lazy"}
                rounded={{ base: "xl", md: "3xl" }}
                alt={"About us image"}
                border={"1px solid"}
                objectFit={"cover"}
                fill={true}
                borderColor={useColorModeValue("gray.300", "gray.600")}
                quality={100}
                h={"sm"}
            />
        },
        {
            id: 5,
            content: <Image
                src={
                    useColorModeValue(
                        "images/bg_white.webp",
                        "images/bg_dark.webp"
                    )
                }
                loading={"lazy"}
                rounded={{ base: "xl", md: "3xl" }}
                alt={"About us image"}
                border={"1px solid"}
                objectFit={"cover"}
                fill={true}
                borderColor={useColorModeValue("gray.300", "gray.600")}
                quality={100}
                h={"sm"}
            />
        }
    ];

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: true
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    {slide.content}
                </SwiperSlide>
            ))
            }
        </Swiper >
    );
};

export default AutoplayCarousel;

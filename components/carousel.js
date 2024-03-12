import React from "react";
import { Image, useColorModeValue } from "@chakra-ui/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AutoplayCarousel = () => {
    SwiperCore.use([Autoplay]);

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
                rounded={{ base: "2xl", md: "3xl" }}
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
                rounded={{ base: "2xl", md: "3xl" }}
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
                rounded={{ base: "2xl", md: "3xl" }}
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
                rounded={{ base: "2xl", md: "3xl" }}
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
                rounded={{ base: "2xl", md: "3xl" }}
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
            autoplay={{
                delay: 0,
                disableOnInteraction: false
            }}
            loop={true}
            modules={[Autoplay]}
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
            speed={3500}
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

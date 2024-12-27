import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const GallerySlider = () => {
    const images = [
        "src/components/sections/1.jpeg",
        "src/components/sections/2.jpg",
        "src/components/sections/3.jpeg",
        "src/components/sections/4.jpeg",
        "src/components/sections/5.jpeg",
        "src/components/sections/6.jpeg",
        "src/components/sections/7.jpeg",
        "src/components/sections/8.jpeg",
        "src/components/sections/9.jpeg",
        "src/components/sections/10.jpeg",
        "src/components/sections/11.jpeg",
        "src/components/sections/12.jpeg",
        "src/components/sections/13.jpeg",
        "src/components/sections/14.jpeg",
        "src/components/sections/15.jpeg",
        "src/components/sections/16.jpeg",
        "src/components/sections/17.jpeg",
        "src/components/sections/18.jpeg",
        "src/components/sections/19.jpeg",
        "src/components/sections/20.jpeg",
        "src/components/sections/21.jpeg",
        "src/components/sections/22.jpeg",
        "src/components/sections/23.jpeg",
        "src/components/sections/24.jpeg",
        "src/components/sections/25.jpeg",
        "src/components/sections/26.jpeg",
        "src/components/sections/27.jpg",
    ];

    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Show one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed (ms)
        arrows: true, // Show next/previous arrows
    };

    return (
        <motion.div style={{ maxWidth: "800px", margin: "auto", marginTop: "20px", padding: "20px", height: "70vh" }}>
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ textAlign: "center" }}
            >Gallery - Dhritvan Space Lab
            </motion.h2>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            style={{
                                width: "100%",
                                height: "500px", // Set your desired height here
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat", // Ensures the image covers the area without distortion
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            }}

                        />
                    </div>
                ))}
            </Slider>
        </motion.div >
    );
};

export default GallerySlider;

"use client";
import React, { useEffect, useState } from "react";
import image from "../../../public/image1.jpg";
import image2 from "../../../public/image2.jpg";
import image3 from "../../../public/image3.jpg";
import image4 from "../../../public/image4.jpg";
import Image from "next/image";
const images = [
  { id: 1, image: image },
  { id: 2, image: image2 },
  { id: 3, image: image3 },
  { id: 4, image: image4 },
];
const Carousel = () => {
  const [imageIndex, setimageIndex] = useState(0);
  const dotHandler = (index) => {
    if (imageIndex === index) {
      return;
    } else {
      setimageIndex(index);
    }
  };

  const goToNextSlide = () => {
    const nextIndex = (imageIndex + 1) % images.length;
    setimageIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (imageIndex - 1 + images.length) % images.length;
    setimageIndex(prevIndex);
  };

  useEffect(() => {
    // Auto slide to the next testimonial every 4 seconds
    const interval = setInterval(() => {
      const nextIndex = (imageIndex + 1) % images.length;
      setimageIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [imageIndex]);
  return (
    <div className="max-w-[1320px] mx-auto py-24 border border-black relative ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        onClick={goToPrevSlide}
        stroke="currentColor"
        className="w-6 h-6 absolute top-[50%] bg-white cursor-pointer mx-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
        />
      </svg>

      <div className={`transition-all  duration-500 ease-in-out  `}>
        <Image
          src={images[imageIndex]?.image}
          className="w-full max-h-[500px] object-cover"
          alt="testimonial"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        onClick={goToPrevSlide}
        stroke="currentColor"
        className="w-6 h-6 absolute top-[50%] right-0 bg-white cursor-pointer mx-2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>

      <div className="flex gap-3 justify-center mt-5 ">
        {images.map((image, Index) => (
          <div
            key={Index}
            onClick={() => dotHandler(Index)}
            className={` h-[4px] cursor-pointer  ${
              imageIndex === Index
                ? "bg-[#3266B3] w-[64px] lg:w-[80px] transition-all duration-500"
                : "bg-black w-[40px]  lg:w-[45px]"
            } `}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app/globals.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export const Carousel = ({ setCurrentBranch }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const handleSlideChange = (swiper) => {
    switch (swiper.activeIndex) {
      case 1:
        setCurrentBranch(1);
        break;
      case 2:
        setCurrentBranch(2);
        break;
      case 3:
        setCurrentBranch(3);
        break;
      case 4:
        setCurrentBranch(4);
        break;
      case 5:
        setCurrentBranch(5);
        break;
      case 6:
        setCurrentBranch(6);
        break;
      case 7:
        setCurrentBranch(7);
        break;
      default:
        setCurrentBranch(0);
        break;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        onSlideChange={handleSlideChange}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            width={500}
            height={500}
            src="/bombom.jpg"
            quality={100}
            alt="Picture of GTC Don Carlos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={500}
            height={500}
            src="/bombom.jpg"
            quality={100}
            alt="Picture of GTC Don Carlos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={500}
            height={500}
            src="/bombom.jpg"
            quality={100}
            alt="Picture of GTC Don Carlos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={500}
            height={500}
            src="/bombom.jpg"
            quality={100}
            alt="Picture of GTC Don Carlos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={500}
            height={500}
            src="/bombom.jpg"
            quality={100}
            alt="Picture of GTC Don Carlos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={500}
            height={500}
            src="/bombom.jpg"
            quality={100}
            alt="Picture of GTC Don Carlos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={500}
            height={500}
            src="/bombom.jpg"
            quality={100}
            alt="Picture of GTC Don Carlos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={500}
            height={500}
            src="/bombom.jpg"
            quality={100}
            alt="Picture of GTC Don Carlos"
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

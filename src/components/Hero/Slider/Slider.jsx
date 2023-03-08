import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import theme from 'theme';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

import image1 from 'images/1.jpg';
import image2 from 'images/2.jpg';
import image3 from 'images/3.jpg';
import image4 from 'images/4.jpg';
import image5 from 'images/5.jpg';

import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Slider() {
  return (
    <>
      <Swiper
        style={{
          borderRadius: theme.radii.high,
        }}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          // disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Phone" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Phone" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Phone" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="Phone" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="Phone" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

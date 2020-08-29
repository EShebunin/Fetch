import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';

import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';

import sliderImg from "../../assets/img/main_slide_img_1.png";
import sliderImg2 from "../../assets/img/main_slide_img_2.png";
import sliderImg3 from "../../assets/img/main_slide_img_3.webp";
import sliderImg4 from "../../assets/img/main_slide_img_4.png";

SwiperCore.use([Navigation]);

function Slider() {
  return (
    <Swiper className="main__slider" navigation>
      <SwiperSlide className="slider__item" data-theme="white">
        <img src={sliderImg} className="slider__img" alt="Main slider" />
        <div className="container">
          <h1 className="slider__text" data-color-text="black">
            Reebok Aztrek Double
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" data-theme="white">
        <img src={sliderImg2} className="slider__img" alt="Main slider" />
        <div className="container">
          <h1 className="slider__text" data-color-text="black">
            Reebok Aztrek Double
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" data-theme="white">
        <img src={sliderImg3} className="slider__img" alt="Main slider" />
        <div className="container">
          <h1 className="slider__text" data-color-text="white">
            Nike ACG: навстречу новым открытиям
          </h1>
        </div>
      </SwiperSlide>
      <SwiperSlide className="slider__item" data-theme="white">
        <img src={sliderImg4} className="slider__img" alt="Main slider" />
        <div className="container">
          <h1 className="slider__text" data-color-text="white">
            Распродажа до −15%
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;

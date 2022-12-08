import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import { Navigation,Autoplay } from "swiper";

import styles from "./Patterns.module.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import PatternsItem from './PatternsItem';
const PatternsSlide = () => {
  return (
    <div className={styles.patterSlideWrapper}>
      <Swiper slidesPerView={1}
      modules={[Navigation,Autoplay]}
      
      navigation={true}
      
      >
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
        <SwiperSlide>
          <PatternsItem />
        </SwiperSlide>
      </Swiper>

    </div>
  )
}

export default PatternsSlide
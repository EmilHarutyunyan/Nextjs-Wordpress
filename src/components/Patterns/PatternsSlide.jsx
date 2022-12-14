import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import styles from "./Patterns.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import PatternsItem from "./PatternsItem";
const PatternsSlide = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={styles.patterSlideWrapper}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        <div className={styles.patternNav}>
          <div ref={navigationPrevRef} className={styles.patternArrow}>
            <MdArrowBackIosNew />
          </div>
          <div ref={navigationNextRef} className={styles.patternArrow}>
            <MdArrowForwardIos />
          </div>

        </div>
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
  );
};

export default PatternsSlide;

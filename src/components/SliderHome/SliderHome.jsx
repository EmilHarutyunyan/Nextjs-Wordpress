import React, { useRef } from 'react'
import { Swiper, SwiperSlide} from "swiper/react";
import Image from 'next/image';
import styles from "./SliderHome.module.scss"
// Images
import bmwZ3 from "../../../public/images/bmwz3.png"
// import required modules
import { Navigation,Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
const SliderHome = () => {

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Swiper
    slidesPerView={5}
    modules={[Navigation,Autoplay]}
    loop={true}
    className={styles.swiper}
    autoplay={{
          delay: 2500,
          disableOnInteraction: false,

    }}
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
    {[0,1,2,3,4,5,5,6,4,1,1,1,1,1,1,1,1,1,].map((_,idx) => {
      return (
      <SwiperSlide className={styles.swiperSlide} key={idx}>
        <Image src={bmwZ3} alt="car" width={160} height={130} />
      </SwiperSlide>
      )
    })
    }
    <div ref={navigationPrevRef} className={`${styles.customNav} swiper-button-prev`} />
    <div ref={navigationNextRef} className={`${styles.customNav} swiper-button-next`} />
    </Swiper>
  )
}

export default SliderHome
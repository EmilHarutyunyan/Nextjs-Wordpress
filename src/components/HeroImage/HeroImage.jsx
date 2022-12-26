import React, { useRef } from "react";
import styles from "./HeroImage.module.scss";
// Image
import bmwWrap from "../../../public/images/bmwWrap.png";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import xaliImg from "../../../public/images/xali.png"

import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HeroImage = ({ children }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div
      className={`${styles.heroImageWrap}`}
      style={{
        backgroundImage: ` linear-gradient(180deg, rgba(0, 0, 0, 0.3294117647) 64%, #0b0e16 98%), url(${bmwWrap.src})`,
        animation: "grow 4s linear forwards",
        opacity: 1,
      }}
    >
      <div>
        <Swiper
          slidesPerView={3}
          modules={[Navigation]}

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
          {[0, 1, 2, 3, 4, 5, 5, 6, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (_, idx) => {
              return (
                <SwiperSlide className={styles.swiperSlide} key={idx}>
                    <Image src={xaliImg}/>
                  
                </SwiperSlide>
              );
            }
          )}
          <div
            ref={navigationPrevRef}
            className={`${styles.customNav} swiper-button-prev`}
          />
          <div
            ref={navigationNextRef}
            className={`${styles.customNav} swiper-button-next`}
          />
        </Swiper>
      </div>
      {/* {children} */}
    </div>
  );
};

export default HeroImage;

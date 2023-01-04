import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// images
import customize1 from "../../../public/images/customize/customize1.png";
import customizeCarpet from "../../../public/images/customize/customize-carpet.png";

import styles from "./VerticalProduct.module.scss";

// import required modules
// import {  } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const VerticalProduct = () => {
  const [selectImgIdx, setSelectImgIdx] = useState(0);
  
  return (
    <div className={styles.verticalWrap}>
      <Swiper
        slidesPerView={5}
        // modules={[Virtual]}
        className={styles.galleryThumbs}
        direction="vertical"
        loop={true}
      >
        {[1,2,5,6,8,9].map((_, idx) => {
          return (
            <SwiperSlide
              className={
                selectImgIdx === idx
                  ? `${styles.swiperSlide} ${styles.swiperSlideActive}`
                  : `${styles.swiperSlide}`
              }
              key={idx}
              onClick={() => setSelectImgIdx(idx)}
            >
              <Image src={customize1} alt="car" width={173} height={146} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div>
        <div>
          <Image src={customizeCarpet} />
        </div>
      </div>
    </div>
  );
};

export default VerticalProduct;

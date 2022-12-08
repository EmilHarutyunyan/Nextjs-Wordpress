import React, { useEffect, useRef, useState } from "react";

import styles from "./SliderZoom.module.scss"
import mainBg1 from "../../../public/images/main-bg-1-1.jpg"
import mainBg2 from "../../../public/images/main-bg-2-1.jpg"
const dataSlider = [
  {
    url: mainBg1,
  },
  {
    url: mainBg2,
  }
];

const SliderZoom = ({children}) => {
  const [slideState, setSlideState] = useState({
    activeSlide: 0,
    prevActive: 0,
  });
 
  const slideRef = useRef(null);

  function changeSlides() {}
  useEffect(() => {
    let timer1 = setTimeout(() => {
      if (slideState.prevActive + 1 >= dataSlider.length) {
        setSlideState({ prevActive: 0 });
      } else {
        setSlideState({
          prevActive: ++slideState.prevActive,
        });
      }
    }, 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, [slideState.prevActive]);
  return (
    <div>
      <div className={`${styles.sliderWrapper} slider-container`}  ref={slideRef}>
        
        <div className={`${styles.childrenWrapper} main-container`}>{children}</div>
        {dataSlider.map((slider, idx) => {
          if (idx === slideState.prevActive) {
            return (
              <div
              key={idx}
              className={styles.slide}
                style={{
                  backgroundImage: `url(${dataSlider[idx].url.src})`,
                  animation: "grow 4s linear forwards",
                  opacity: 1,
                }}
              ></div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SliderZoom;


import React, { useRef } from "react";
import styles from "./HeroImage.module.scss";
// Image
import bmwWrap from "../../../public/images/bmwWrap.png";


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
      
      {children}
    </div>
  );
};

export default HeroImage;

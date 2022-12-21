import React from 'react'
import styles from "./HeroImage.module.scss"
// Image
import bmwWrap from "../../../public/images/bmwWrap.png"
const HeroImage = ({children}) => {
  return (
    <div className={`${styles.heroImageWrap}`}  style={{
      backgroundImage: `url(${bmwWrap.src})`,
      animation: "grow 4s linear forwards",
      opacity: 1,
    }}>
      {children}
    </div>
  )
}

export default HeroImage
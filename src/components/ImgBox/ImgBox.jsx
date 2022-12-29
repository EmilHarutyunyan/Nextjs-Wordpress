import Image from 'next/image'
import React from 'react'
import styles from "./ImgBox.module.scss"
const ImgBox = ({imgSrc="", title="",desc="",position=""}) => {
  return (
    <div className={`${styles.imgBoxWrap} ${styles[position]}`} >
      <div className={styles.imgWrap}>
          <Image src={imgSrc}
            layout="fill" className={styles.image}
          />
      </div>
      <div className={styles.imgBoxDesc} >
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default ImgBox
import Image from 'next/image'
import React from 'react'
// styles
import styles from "./ImgBoxSelect.module.scss"
const ImgBoxSelect = ({imgSrc,title, handleClick}) => {
console.log('handleClick :', handleClick);
  return (
    <div className={styles.imgBoxSelectWrap} onClick={() => handleClick(title)}>
      <Image src={imgSrc} alt={title}/>
      <p>{title}</p>
    </div>
  )
}

export default ImgBoxSelect
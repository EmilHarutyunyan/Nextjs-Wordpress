import React from 'react'
import styles from './IconText.module.scss'
const IconText = ({iconSvg,img, text="", desc=""}) => {
  return (
    <div className={styles.iconTextWrapper}>
      {img && <img src={img} className={styles.topBarIcon} alt='icon'/>}
      {iconSvg && <img src={iconSvg} className="icon-top" alt='icon'/>}
      {text && <span className={styles.topBarText}>{text}</span>}
      {desc && <span className={styles.topBarDesc}>{desc}</span>}
    </div>
  )
}

export default IconText
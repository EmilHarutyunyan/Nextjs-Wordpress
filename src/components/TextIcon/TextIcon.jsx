import React from 'react'

// Styles
import styles from "./TextIcon.module.scss"
const TextIcon = ({icon,text}) => {
  return (
    <div className={styles.textIconWrap}>
      {icon}
      {text}
    </div>
  )
}

export default TextIcon
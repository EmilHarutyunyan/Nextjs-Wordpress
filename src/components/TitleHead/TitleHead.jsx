import React from 'react'
import styles from "./TitleHead.module.scss"
const TitleHead = ({title, desc,alignText}) => {
  return (
    <div className={styles.titleHeadWrap} style={{textAlign:alignText}}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default TitleHead
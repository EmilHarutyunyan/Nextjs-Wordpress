import React from 'react'
// Styles
import styles from "./BorderText.module.scss"
const BorderText = ({text}) => {
  return (
    <div className={styles.textDivider}>
        {text}
    </div>
  )
}

export default BorderText
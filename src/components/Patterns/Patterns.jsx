import React from 'react'
import PatternsSlide from './PatternsSlide'
// Styles
import styles from "./Patterns.module.scss"
const Patterns = () => {
  return (
    <div className={styles.patternWrap} style={{backgroundImage: `url(${'./images/pattern/patterns_bckg.png'})`}}>
      <h2>PATTERNS</h2>
      <PatternsSlide />
    </div>
  )
}

export default Patterns
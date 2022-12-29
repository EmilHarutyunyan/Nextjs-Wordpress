import Image from 'next/future/image'
import React from 'react'
import IconBlock from '../IconBlock/IconBlock'
import PatternsSlide from './PatternsSlide'
import styles from "./Patterns.module.scss"
// Images
import waterImg from "../../../public/images/pattern/water.png"
import prodImg from "../../../public/images/pattern/vanderhall.png"
const PatternsItem = () => {
  return (
    <div className={styles.patternItem}>
      <div className={styles.patternProd}>
        <div className={styles.imgWrap}>
          <Image src={prodImg} alt={'production'}/>
        </div>
        <div className={styles.patterCol}>
          <p>Single Layer</p>
          <h2>Diamond Pattern</h2>
          <div className={styles.patternPrice}>
            <h4>From</h4>
            <p>$289</p>
            <h5>2 YEAR Wrranty</h5>
          </div>
        </div>
      </div>
      <div className={styles.patterOptions}>
        <p>Order To Make Unique Mats;</p>
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 32 17.9" style={{enableBackground: 'new 0 0 32 17.9'}} xmlSpace="preserve"><style type="text/css" dangerouslySetInnerHTML={{__html: "" }} />
        <polygon className="st0" points="5.2,0.5 14.1,9 5.6,17.3 8.9,17.5 17.3,9 8.6,0.5 " fill='#FF0000'/>
        <polygon className="st1" points="0.4,0.5 9.3,9 0.8,17.3 4.1,17.5 12.5,9 3.8,0.5 " fill='#FFA200' />
        <polygon className="st2" points="10.2,0.5 19.1,9 10.6,17.3 13.9,17.5 22.4,9 13.6,0.5 " fill='#1B940A'/>
        <polygon className="st3" points="15.3,0.5 24.1,9 15.7,17.3 19,17.5 27.4,9 18.6,0.5 " fill='#0366D5'/>
        <polygon className="st4" points="19.9,0.5 28.7,9 20.3,17.3 23.6,17.5 32,9 23.2,0.5 " fill='#FEFEFE'/></svg>

          <span>Customice Your Mat</span>
        </button>
        <div className={styles.patternIconBlock}>
          <IconBlock icon={waterImg} width={50} height={50} link={'/'} text={'Waterproof'}/>
          <IconBlock icon={waterImg} width={50} height={50} link={'/'} text={'Waterproof'}/>
          <IconBlock icon={waterImg} width={50} height={50} link={'/'} text={'Waterproof'}/>
          <IconBlock icon={waterImg} width={50} height={50} link={'/'} text={'Waterproof'}/>

        </div>
      </div>
    </div>
  )
}

export default PatternsItem
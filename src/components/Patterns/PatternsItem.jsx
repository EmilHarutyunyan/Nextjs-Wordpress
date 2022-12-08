import Image from 'next/image'
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
      <div className='patternProd'>
        <div className="imgWrap">
          <Image src={prodImg} alt={'production'}/>
        </div>
        <div className="patterCol">
          <div className="patternLayer">Single Layer</div>
          <div className="patternMod">Diamond Pattern</div>
          <div className="patternPrice">
            <h4>From</h4>
            <p>$289</p>
            <h5>2 YEAR Wrranty</h5>
          </div>
        </div>
      </div>
      <div className="patternOption">
        <div className="patternInfo"></div>
        <button>
          {/* <Image /> */}
          <span>Customice Your Mat</span>
        </button>
          <IconBlock icon={waterImg} width={50} height={50} link={'/'} text={'Waterproof'}/>
          <IconBlock icon={waterImg} width={50} height={50} link={'/'} text={'Waterproof'}/>
          <IconBlock icon={waterImg} width={50} height={50} link={'/'} text={'Waterproof'}/>
          <IconBlock icon={waterImg} width={50} height={50} link={'/'} text={'Waterproof'}/>
      </div>
    </div>
  )
}

export default PatternsItem
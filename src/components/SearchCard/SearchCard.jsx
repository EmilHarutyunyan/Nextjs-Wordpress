import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import productImg from "../../../public/images/lime-green.jpg"
// import productImgHover from "../../../public/images"
// Styles
import styles from "./SearchCard.module.scss"
const SearchCard = () => {
  return (
    <div className={styles.resultCardWrap}>
      <div className={styles.resultCardContent}>
          <Link href="" >
              <Image width={338} height={338} src={productImg} />
          
          <div className={styles.resultCardHead}>
            <h3>
              F1Hybrid Diamond & Stripe Pattern Car/SUV Mats
            </h3>
            <div className={styles.resultCardCategory}>
              <span>Customize</span>
              <div className={styles.resultCardCategoryColor}>
                <span style={{backgroundColor:'black'}}></span>
                <span style={{backgroundColor:'red'}}></span>
                <span style={{backgroundColor:'orange'}}></span>
              </div>
              <span>+15 More</span>
            </div>
            <span className={styles.resutlCardWarranty}>
                2 Year Warranty
            </span>
            <div className="resultCardStar"></div>
            <div className={styles.resultCardPrice}>
              <del>€ 489</del>
              <span>€ 391</span>
            </div>
          </div>
          </Link>
      </div>
    </div>
  )
}

export default SearchCard
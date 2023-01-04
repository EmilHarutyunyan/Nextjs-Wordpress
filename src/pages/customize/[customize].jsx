import React from 'react'
import StarRating from '../../components/StarRating/StarRating';
import VerticalProduct from '../../components/VerticalProduct/VerticalProduct'
import styles from "./Customize.module.scss"
const CustomizeModel = () => {
  return (
    <div className={styles.customizeModelWrap}>
      <div className={styles.customizeModelProduct}>
        <h1>
          Handcrafted Diamond Pattern Premium Leather Floor Mats for BMW 7
          Series
        </h1>
        <StarRating />
        <VerticalProduct />
        
      </div>
      <div className={styles.customizeModelSettings}>4</div>
    </div>
  );
}

export default CustomizeModel
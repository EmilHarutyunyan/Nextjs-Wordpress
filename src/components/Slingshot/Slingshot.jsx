import Image from "next/image";
import React from "react";
// img
import wrapImg from "../../../public/images/slingshot.png"
import v1 from "../../../public/images/v1.png"
import v2 from "../../../public/images/v2.png"
// Styles
import styles from "./Slingshot.module.scss"

const Slingshot = () => {
  return (
    <div className={styles.slingshotWrap}>
      <div className="imageWrap">
        <Image src={wrapImg}/>
      </div>
      <div className={styles.slingsotCont}>
        <div className={styles.slingsotBlock}>
          <div className={styles.slingsotTitle}>
            <p>Slingshot</p>
            <h3>Back Cover</h3>
          </div>
          <div className={styles.slingsotLogo}>
            <p>With Logo Options</p>
            <div>
            <Image src={v1}/>
            <Image src={v2}/>
              <p>Custom LOGO</p>
              <p>No LOGO</p>
            </div>
          </div>
          <div  className={styles.slingsotBuy}>
            <p>From</p>
            <span>$99</span>
            <div>
              <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#e4c500" width="32px"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

                Buy Now
              </button>
            </div>
          </div>
        </div>
        <p>ADD-ON</p>
      </div>
    </div>
  );
};

export default Slingshot;

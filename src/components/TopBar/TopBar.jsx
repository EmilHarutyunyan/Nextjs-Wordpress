
import React from "react";
import IconText from "../IconText/IconText";
import Select from "../Select/Select";
// Styles
import styles from "./TopBar.module.scss"
const TopBar = () => {

  return (
    <div className={styles.topBarWrapper}>
    
      <div className={`${styles.topBarContent} main-container`}>
      <div className={styles.topBarInfoBlock}>
        <Select />
        <IconText
          img={"/icons/deliver-icon.png"}
          text={"FREE DELIVERY"}
          desc={"in USA for all orders above $250"}
        />

      </div>
      
      <div className={styles.topBarInfoBlock} >
        <IconText img={"/icons/chat-icon.png"} text={"Live Chat"} />
        <IconText
          img={"/icons/phone-icon.png"}
          text={"USA +1 302 246 8008 | EU +44 330 818 6607"}
        />
        <IconText
          img={"/icons/time-icon.png"}
          text={"Mon-Sat | 9:00AM -6:00PM EST."}
        />
      </div>
      </div>
    </div>
  );
};

export default TopBar;

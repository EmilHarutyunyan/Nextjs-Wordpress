import Image from "next/image";
import Link from "next/link";
import React from "react";
// Styles
import styles from "./IconBlock.module.scss";
const IconBlock = ({ icon, text, link,width,height }) => {
  return (
    <div className={styles.iconBlockWrapper}>
    
      <Link href={link}>
      <a >
        <Image
          src={icon}
          alt={text}
          width={width}
          height={height}
          placeholder="blur"
        />
        <span>{text}</span>

      </a>
      </Link>
    </div>
  );
};

export default IconBlock;

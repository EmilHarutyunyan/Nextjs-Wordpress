import React from 'react'
import Link from "next/link";
import Navbar from '../NavBar/Navbar'
import TopBar from '../TopBar/TopBar'
import Image from 'next/image'
// Styles
import styles from './Header.module.scss'
// Images
import logoImage from '../../../public/images/logo.png'
import { CartSvg } from '../Icons/Icons'
const Header = () => {
  return (
    <>
      <TopBar/>
      <div className={styles.headerContainer}>
        <div className={`${styles.headerCenter} main-container`}>
          <Link href="/">
          <a >
            <Image src={logoImage} placeholder='blur'  alt='logo' width={163} height={38} />

          </a>
          </Link>
          <Navbar />
          <div className={styles.headerCart}>
            <p>
              <span>{'$'}{'0'}</span>
            </p>
            <CartSvg stroke={'#e4c500'} width={'20px'}/>

          </div>

        </div>
      </div>
    </>
  )
}

export default Header
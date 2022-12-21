import { useRouter } from 'next/router'
import React from 'react'
import HeroImage from '../../components/HeroImage/HeroImage';
import ImgBox from '../../components/ImgBox/ImgBox';
// import SearchCard from '../../components/SearchCard/SearchCard';
import styles from "./Search.module.scss"

import res1 from "../../../public/images/result/1.png"
import res2 from "../../../public/images/result/2.png"
import res3 from "../../../public/images/result/3.png"
import res4 from "../../../public/images/result/4.png"
const Search = () => {
  const router = useRouter();
  console.log(router.query)
  return (
    <div className={styles.searchWrap}>
      <HeroImage >
        
      </HeroImage> 
      {/* <div className={styles.searchTitle} >Search results: "{`${router.query.make} ${router.query.model} ${router.query.year}`}"</div>
      <div>
        <SearchCard />
      </div> */}
      <p>F1Mats, The only Company In The World Manufacturing & Selling Leather Floor Mats</p>
      <h3>Upgrade Your BMW Interior with Premium Leather Floor Mats</h3>

      <ImgBox imgSrc={res1} title={'Comfirt & Quality'} position="right" desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'}/>


      <ImgBox imgSrc={res2} title={'Comfirt & Quality'} position="left" desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'}/>

      <ImgBox imgSrc={res3} title={'Comfirt & Quality'} position="right" desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'}/>


      <ImgBox imgSrc={res4} title={'Comfirt & Quality'} position="left" desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.'}/>
    </div>

  )
}

export default Search
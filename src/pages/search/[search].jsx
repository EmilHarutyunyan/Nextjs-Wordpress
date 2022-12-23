import { useRouter } from "next/router";
import React, { useState } from "react";
// Componets
import TitleHead from "../../components/TitleHead/TitleHead";
import HeroImage from "../../components/HeroImage/HeroImage";
import ImgBox from "../../components/ImgBox/ImgBox";
import Image from "next/legacy/image";
import TextIcon from "../../components/TextIcon/TextIcon";
import ReactPlayer from "react-player/youtube";
import useModal from "../../hooks/useModal";
// import SearchCard from '../../components/SearchCard/SearchCard';

// Images
import res1 from "../../../public/images/result/1.png";
import res2 from "../../../public/images/result/2.png";
import res3 from "../../../public/images/result/3.png";
import res4 from "../../../public/images/result/4.png";
import s1 from "../../../public/images/result/s-1.png";
import s2 from "../../../public/images/result/s-2.png";
import s3 from "../../../public/images/result/s-3.png";
import check from "../../../public/icons/check.png";

// Styles
import styles from "./Search.module.scss";


const Search = () => {
  const router = useRouter();
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal();
  const { isShowing: isRegistrationFormShowed,toggle: toggleRegistrationForm} = useModal();
  const [bodyShape,setBodyShape] = useState(false);
  const [selectSeating,setSelectSeating] = useState(false);
  const [selectStorage,setSelectStorage] = useState(false);
  const [selectDrive,setSelectDrive] = useState();
  // const [select]


  return (
    <div className={styles.searchWrap}>
      <div>
        <HeroImage />
        <Modal
          isShowing={isLoginFormShowed}
          hide={toggleLoginForm}
          title="Select Body Shape"
        >
          
        </Modal>
      </div>
      <p>
        F1Mats, The only Company In The World Manufacturing & Selling Leather
        Floor Mats
      </p>
      <h3>Upgrade Your BMW Interior with Premium Leather Floor Mats</h3>

      <ImgBox
        imgSrc={res1}
        title={"Comfirt & Quality"}
        position="right"
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        }
      />

      <ImgBox
        imgSrc={res2}
        title={"Comfirt & Quality"}
        position="left"
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        }
      />

      <ImgBox
        imgSrc={res3}
        title={"Comfirt & Quality"}
        position="right"
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        }
      />

      <ImgBox
        imgSrc={res4}
        title={"Comfirt & Quality"}
        position="left"
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
        }
      />

      <div>
        <TitleHead
          title={"Cutomize with No Limits"}
          desc={
            "Over 20+ Premium Colors with 4 Different patters you can Mix and match. Make More Unique By Adding Your Logo"
          }
          alignText="center"
        />
        <div className={styles.imgsBox}>
          <Image src={s1}/>
          <Image src={s2} />
        </div>
      </div>
      <div className={styles.layerMatsWrap}>
        <TitleHead
          title={"Why F1Mats"}
          desc={"Perfectly Crafted To Be Armed Against All Weather Conditions"}
          alignText="center"
        />

        <div className={styles.layerMats}>
          <Image src={s3} />
          <div className={styles.textIconWrap}>
            <TextIcon
              icon={<Image src={check} />}
              text={"Three Times Thicker & Heavier Than Our Competitors"}
            />
            <TextIcon
              icon={<Image src={check} />}
              text={"5 Layer Technology Assure Premium Comfort"}
            />
            <TextIcon
              icon={<Image src={check} />}
              text={"Pets & Kids Friendly - Easier To Clean"}
            />
            <TextIcon
              icon={<Image src={check} />}
              text={"Three Times Thicker & Heavier Than Our Competitors"}
            />
            <TextIcon
              icon={<Image src={check} />}
              text={"5 Layer Technology Assure Premium Comfort"}
            />
            <TextIcon
              icon={<Image src={check} />}
              text={"Pets & Kids Friendly - Easier To Clean"}
            />
          </div>
        </div>
      </div>
      <div className={styles.easyWrap}>
        <TitleHead
          title={"Easy Installatio"}
          desc={"Perfectly Crafted To Be Armed Against All Weather Conditions"}
          alignText="center"
        />
      </div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=RzlAiBI0fUo"
        height={"787px"}
        width={"1400px"}
        style={{ margin: "0 auto" }}
      />
      <div className={styles.reviewsWrap} >
        <TitleHead
          title={"REVIEWS"}
          desc={"Customer Revies for BMW Floor Mats"}
          alignText="center"
        />
        <p>
          <span>Photos</span>
          <span>Videos</span>
        </p>
      </div>
    </div>
  );
};

export default Search;

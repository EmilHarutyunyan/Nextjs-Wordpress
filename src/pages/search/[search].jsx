import { useRouter } from "next/router";
import React, { useState } from "react";

// Components
import TitleHead from "../../components/TitleHead/TitleHead";
import HeroImage from "../../components/HeroImage/HeroImage";
import ImgBox from "../../components/ImgBox/ImgBox";
import Image from "next/image";
import TextIcon from "../../components/TextIcon/TextIcon";
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal/Modal";
import ImgBoxSelect from "../../components/ImgBoxSelect/ImgBoxSelect";
import ResultBanner from "../../components/ResultBanner/ResultBanner";

// Images
import res1 from "../../../public/images/result/1.png";
import res2 from "../../../public/images/result/2.png";
import res3 from "../../../public/images/result/3.png";
import res4 from "../../../public/images/result/4.png";
import s1 from "../../../public/images/result/s-1.png";
import s2 from "../../../public/images/result/s-2.png";
import s3 from "../../../public/images/result/s-3.png";
import check from "../../../public/icons/check.png";
import electricImg from "../../../public/images/result/electric.png";
import twoDoorImg from "../../../public/images/result/2door.png";
import fourDoorImg from "../../../public/images/result/4door.png";
import sedanImg from "../../../public/images/result/electric.png";
import min2 from "../../../public/images/result/min2.png";
import min3 from "../../../public/images/result/min3.png";

import noStorage from "../../../public/images/result/noStorage.png";
import yesStorage from "../../../public/images/result/yesStorage.png";

import leftDrive from "../../../public/images/result/leftDrive.png";
import rightDrive from "../../../public/images/result/rightDrive.png";

// Styles
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setAllCarDetails } from "../../redux/features/car/carSlice";

const Search = () => {
  const {query} = useRouter();
  const dispatch = useDispatch();
  const { isShowing: isCarFormShowed, toggle: toggleCarForm } = useModal();

  const [modalTitle, setModalTitle] = useState("Select Body Shape");
  const [selectBody, setSelectBody] = useState(false);
  const [selectSeating, setSelectSeating] = useState(false);
  const [selectStorage, setSelectStorage] = useState(false);
  const [selectDrive, setSelectDrive] = useState(false);
  // const [select]
  const handleSelectBody = (title) => {
    setSelectBody(title);
    setModalTitle("Select Seating");
  };
  const handleSeating = (title) => {
    setSelectSeating(title);
    setModalTitle("Select Rearside Storage Type");
  };
  const handleStorage = (title) => {
    setSelectStorage(title);
    setModalTitle("Select Drive Side");
  };
  const handleDrive = (title) => {
    setSelectDrive(title);
    dispatch(
      setAllCarDetails({
        carBody: selectBody,
        carSeating: selectSeating,
        carStorage: selectStorage,
        carDrive: title,
      })
    );
    setModalTitle("");
    toggleCarForm();
  };
  const openModal = (cl) => {
    toggleCarForm();
    setSelectBody(false);
    setSelectSeating(false);
    setSelectStorage(false);
    setSelectDrive(false);
    cl(true);
  };
  return (
    <div className={styles.searchWrap}>
      <div>
        <HeroImage>
          <ResultBanner
            openModal={openModal}
            chooseModal={{
              selectDrive,
              selectStorage,
              selectSeating,
              selectBody,
            }}
            pageQuery={query}
          />
        </HeroImage>

        <Modal
          isShowing={isCarFormShowed}
          hide={toggleCarForm}
          title={modalTitle}
        >
          <form action="">
            {!selectBody && (
              <div className={styles.selectBody}>
                <ImgBoxSelect
                  imgSrc={electricImg}
                  title={"Electric hatchback"}
                  handleClick={handleSelectBody}
                />
                <ImgBoxSelect
                  imgSrc={twoDoorImg}
                  title={"2 Door hatchback"}
                  handleClick={handleSelectBody}
                />
                <ImgBoxSelect
                  imgSrc={fourDoorImg}
                  title={"4 Door hatchback"}
                  handleClick={handleSelectBody}
                />
                <ImgBoxSelect
                  imgSrc={sedanImg}
                  title={"Sedan"}
                  handleClick={handleSelectBody}
                />
              </div>
            )}
            {selectBody && !selectSeating && (
              <div className={styles.selectBody}>
                <ImgBoxSelect
                  imgSrc={min2}
                  title={"2+2"}
                  handleClick={handleSeating}
                />
                <ImgBoxSelect
                  imgSrc={min3}
                  title={"2+3"}
                  handleClick={handleSeating}
                />
              </div>
            )}
            {selectBody && selectSeating && !selectStorage && (
              <div className={styles.selectBody}>
                <ImgBoxSelect
                  imgSrc={noStorage}
                  title={"Without Storage"}
                  handleClick={handleStorage}
                />
                <ImgBoxSelect
                  imgSrc={yesStorage}
                  title={"With Storage"}
                  handleClick={handleStorage}
                />
              </div>
            )}
            {selectBody && selectSeating && selectStorage && !selectDrive && (
              <div className={styles.selectBody}>
                <ImgBoxSelect
                  imgSrc={leftDrive}
                  title={"Lefthand Drive"}
                  handleClick={handleDrive}
                />
                <ImgBoxSelect
                  imgSrc={rightDrive}
                  title={"Righthand Drive"}
                  handleClick={handleDrive}
                />
              </div>
            )}
          </form>
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
          <Image src={s1} />
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
      <div className={styles.searchVideo}>
        <iframe
          width={1280}
          height={720}
          src="https://www.youtube.com/embed/ysz5S6PUM-U"
          title="Chilled Serenity #5"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ margin: "0 auto" }}
        />
      </div>
      <div className={styles.reviewsWrap}>
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

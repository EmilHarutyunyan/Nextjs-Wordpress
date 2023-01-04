import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./ResultBanner.module.scss";
// images
import bmwLogo from "../../../public/images/bmwLogo.png";
import water from "../../../public/images/water.png";
import xaliImg from "../../../public/images/xali.png";
import pen from "../../../public/images/pen.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import { carsData } from "../../data/data";

// styles

const ResultBanner = ({ openModal, chooseModal }) => {
  const { query } = useRouter();
  
  const [makeCar, setMakeCar] = useState("");

  const [modelCar, setModelCar] = useState([]);
  const [modelCarChoose, setModelCarChoose] = useState("");

  const [yearsCar, setYarsCar] = useState([]);
  const [yearsCarChoose, setYarsCarChoose] = useState("");

  const [editSetting, setEditSetting] = useState(false);

  useEffect(() => {
    setMakeCar(query.make);
  }, [query.make]);

  useEffect(() => {
    
    if (makeCar) {
      const modelCarData = [];
      Object.keys(carsData).map((item) => {
        carsData[item].map((car) => {
          if (makeCar === car["Make"]) {
            modelCarData.push(car["Model"]);
          }
        });
      });
      setModelCar(modelCarData);
    }
  }, [makeCar]);

  useEffect(() => {
    if (makeCar && modelCarChoose) {
      const yearsData = [];

      Object.keys(carsData).map((item) => {
        carsData[item].map((car) => {
          if (makeCar === car["Make"] && modelCarChoose === car["Model"]) {
            yearsData.push(car["From/Year"]);
          }
        });
      });

      setYarsCar(yearsData);
    }
  }, [makeCar, modelCarChoose]);

  const handleEdit = (isFlag) => {
    setEditSetting(isFlag);
  };
  useEffect(() => {
    if (yearsCarChoose) {
      openModal(handleEdit);
    }
  }, [yearsCarChoose]);

  const handleEditSelect = () => {
    setEditSetting(false)
  }
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className={styles.resultBannerWrap}>
      <div className={styles.resultBannerContent}>
        <div className={styles.resultBannerHeader}>
          <div>
            <Image src={bmwLogo} />
            <p>BMW</p>
          </div>
          <div className={styles.resultBannerProf}>
            <div>
              <Image src={water} />
              <p>Waterproof</p>
            </div>
            <div>
              <Image src={water} />
              <p>Waterproof</p>
            </div>
            <div>
              <Image src={water} />
              <p>Waterproof</p>
            </div>
            <div>
              <Image src={water} />
              <p>Waterproof</p>
            </div>
          </div>
        </div>
        <div className={styles.resultBannerTitle}>
          <h3>Handcrafted Premium Leather Floor Mats</h3>
        </div>

        <div className={styles.editSetting}>
          <div className={styles.editSettingSelect}>
            {editSetting ? (
              <div className={styles.editSettingCont} onClick={handleEditSelect}>
                <Image src={pen} />
                <p>{query.make} {modelCarChoose} {yearsCarChoose}</p>
              </div>
            ) : (
              <div className={styles.resultBannerSelect}>
                <h4>
                  Select Your BMW Model & Design Pattern to Customize Your Floor
                  Mat
                </h4>
                <select
                  defaultValue={"MODEL"}
                  onChange={(e) => setModelCarChoose(e.target.value)}
                  disabled={!makeCar}
                >
                  <option value="MODEL">MODEL</option>
                  {modelCar.length > 0
                    ? modelCar.map((model, idx) => (
                        <option key={idx} value={model}>
                          {model}
                        </option>
                      ))
                    : null}
                </select>
                <select
                  defaultValue={"YEAR"}
                  onChange={(e) => setYarsCarChoose(e.target.value)}
                  disabled={!modelCarChoose}
                >
                  <option value="YEAR">YEAR</option>
                  {yearsCar.length > 0
                    ? yearsCar.map((year, idx) => (
                        <option key={idx} value={year}>
                          {year}
                        </option>
                      ))
                    : null}
                </select>
              </div>
            )}
          </div>
          {editSetting ? ( <div className={styles.editSettingModal} onClick={handleEditSelect}>
            <Image src={pen} />
            <p>{chooseModal.selectBody} ,{chooseModal.selectSeating} Seating, {chooseModal.selectStorage}, {chooseModal.selectDrive} </p>
          </div>) : null}
         
        </div>

        <div className={styles.resultBannerSliderTitle}>
          <h3>Mat Design Patterns</h3>
          <p>
            20+ Premium Colors Available To Match & Upgrade Your BMW Interior
          </p>
        </div>
        <div>
          <Swiper
            slidesPerView={3}
            modules={[Navigation]}
            className={styles.swiper}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {Array(8)
              .fill(0)
              .map((_, idx) => {
                return (
                  <SwiperSlide className={styles.swiperSlide} key={idx}>
                    <Image src={xaliImg} />
                    <p>Single Layer</p>
                    <h2>Diamond Stich Pattern</h2>
                    <button>
                      <span>Customice Your Mat</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 32 17.9"
                        style={{ enableBackground: "new 0 0 32 17.9" }}
                        xmlSpace="preserve"
                      >
                        <style
                          type="text/css"
                          dangerouslySetInnerHTML={{ __html: "" }}
                        />
                        <polygon
                          className="st0"
                          points="5.2,0.5 14.1,9 5.6,17.3 8.9,17.5 17.3,9 8.6,0.5 "
                          fill="#FF0000"
                        />
                        <polygon
                          className="st1"
                          points="0.4,0.5 9.3,9 0.8,17.3 4.1,17.5 12.5,9 3.8,0.5 "
                          fill="#FFA200"
                        />
                        <polygon
                          className="st2"
                          points="10.2,0.5 19.1,9 10.6,17.3 13.9,17.5 22.4,9 13.6,0.5 "
                          fill="#1B940A"
                        />
                        <polygon
                          className="st3"
                          points="15.3,0.5 24.1,9 15.7,17.3 19,17.5 27.4,9 18.6,0.5 "
                          fill="#0366D5"
                        />
                        <polygon
                          className="st4"
                          points="19.9,0.5 28.7,9 20.3,17.3 23.6,17.5 32,9 23.2,0.5 "
                          fill="#FEFEFE"
                        />
                      </svg>
                    </button>
                  </SwiperSlide>
                );
              })}
            <div
              ref={navigationPrevRef}
              className={`${styles.customNav} swiper-button-prev`}
            />
            <div
              ref={navigationNextRef}
              className={`${styles.customNav} swiper-button-next`}
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ResultBanner;

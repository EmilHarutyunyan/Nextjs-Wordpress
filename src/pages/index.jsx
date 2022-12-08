import SliderZoom from "../components/SliderZoom/SliderZoom";
import IconBlock from "../components/IconBlock/IconBlock";
// Images
import carImg from "../../public/icons/icon-shop-car.png";
import truckImg from "../../public/icons/icon-shop-truck.png";
import vanderhallImg from "../../public/icons/icon-shop-vanderhall.png";
import slinghot from "../../public/icons/icon-shop-slingshot.png";
// Styles
import styles from "./Home.module.scss";
import BorderText from "../components/BorderText/BorderText";
import SliderHome from "../components/SliderHome/SliderHome";
import Patterns from "../components/Patterns/Patterns";
export default function Home() {
  return (
    <>
      <SliderZoom>
        <div className={styles.headText}>
          <h2>Custom Made Floor Mats</h2>
        </div>
        <div className={styles.iconBlocks}>
          <IconBlock
            icon={carImg}
            link={"/"}
            text={"car"}
            width={70}
            height={31}
          />
          <IconBlock
            icon={truckImg}
            link={"/"}
            text={"truck"}
            width={70}
            height={31}
          />
          <IconBlock
            icon={slinghot}
            link={"/"}
            text={"slinghot"}
            width={70}
            height={31}
          />
          <IconBlock
            icon={vanderhallImg}
            link={"/"}
            text={"vanderhall"}
            width={70}
            height={31}
          />
        </div>
        <BorderText text={"Popular Models"} />
        <SliderHome />
      </SliderZoom>
      <Patterns />
    </>
  );
}

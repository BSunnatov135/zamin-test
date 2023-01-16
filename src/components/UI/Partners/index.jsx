import { Container } from "@mui/material";
import styles from "./style.module.scss";
import HydroIcon from "/public/logos/HydroIcon.svg";
import FAOIcon from "/public/logos/FAOIcon.svg";
import MedIcon from "/public/logos/MedIcon.png";
import GasLogo from "/public/logos/GasLogo.png";
import Unicef from "/public/logos/Unicef.svg";
import Tree from "/public/logos/Tree.svg";
import UNDP from "/public/logos/UNDP.svg";
import EduIcon from "/public/logos/EduIcon.svg";
import UNEP from "/public/logos/UNEP.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "/src/assests/icons/slickRIght.svg";
import PrevArrow from "/src/assests/icons/slickLeft.svg";
import ResMedLogo from "/public/logos/ResMedLogo.png";
import ResEdu from "/public/logos/ResEdu.svg";
import ResGasLogo from "/public/logos/ResGasLogo.svg";
import ResTree from "/public/logos/ResTree.svg";
import ResUNDP from "/public/logos/ResUNDP.svg";
import ResUNEP from "/public/logos/ResUNEP.svg";
import ResUnicef from "/public/logos/ResUnicef.svg";
import ResFAO from "/public/logos/ResFao.svg";
import ResHydro from "/public/logos/ResHydro.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.next} onClick={onClick}>
      <NextArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.prev} onClick={onClick}>
      <PrevArrow />
    </div>
  );
}

export default function Partners() {
  let settings = {
    dots: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings} className={styles.slider}>
        <div className={styles.item}>
          <img src="/logos/MedIcon.png" className={styles.desktopIcon} />
          <img src="/logos/ResMedLogo.png" className={styles.mobileIcon} />
        </div>
        <div className={styles.item}>
          <img src="/logos/GasLogo.png" className={styles.desktopIcon} />
          <ResGasLogo className={styles.mobileIcon} />
        </div>
        <div className={styles.item}>
          <Unicef className={styles.desktopIcon} />
          <ResUnicef className={styles.mobileIcon} />
        </div>
        <div className={styles.item}>
          <HydroIcon className={styles.desktopIcon} />
          <ResHydro className={styles.mobileIcon} />
        </div>
        <div className={styles.item}>
          <FAOIcon className={styles.desktopIcon} />
          <ResFAO className={styles.mobileIcon} />
        </div>
        <div className={styles.item}>
          <Tree className={styles.desktopIcon} />
          <ResTree className={styles.mobileIcon} />
        </div>
        <div className={styles.item}>
          <UNDP className={styles.desktopIcon} />
          <ResUNDP className={styles.mobileIcon} />
        </div>
        <div className={styles.item}>
          <img src="/logos/EduIcon.svg" className={styles.desktopIcon} />
          <ResEdu className={styles.mobileIcon} />
        </div>
        <div className={styles.item}>
          <UNEP className={styles.desktopIcon} />
          <ResUNEP className={styles.mobileIcon} />
        </div>
      </Slider>
    </Container>
  );
}

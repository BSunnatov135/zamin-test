import { Container } from "@mui/material";
import styles from "./style.module.scss";
import HydroIcon from "/public/logos/HydroIcon.svg";
import FAOIcon from "/public/logos/FAOIcon.svg";
import MedIcon from "/public/logos/MedIcon.svg";
import GasLogo from "/public/logos/GasLogo.svg";
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
import ResMedLogo from "/public/logos/ResMedLogo.svg";
import ResEdu from "/public/logos/ResEdu.svg";
import ResGasLogo from "/public/logos/ResGasLogo.svg";
import ResTree from "/public/logos/ResTree.svg";
import ResUNDP from "/public/logos/ResUNDP.svg";
import ResUNEP from "/public/logos/ResUNEP.svg";
import ResUnicef from "/public/logos/ResUnicef.svg";
import ResFAO from "/public/logos/ResFAO.svg";
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
          <MedIcon />
          <ResMedLogo />
        </div>
        <div className={styles.item}>
          <GasLogo />
          <ResGasLogo />
        </div>
        <div className={styles.item}>
          <Unicef />
          <ResUnicef />
        </div>
        <div className={styles.item}>
          <HydroIcon />
          <ResHydro />
        </div>
        <div className={styles.item}>
          <FAOIcon />
          <ResFAO />
        </div>
        <div className={styles.item}>
          <Tree />
          <ResTree />
        </div>
        <div className={styles.item}>
          <UNDP />
          <ResUNDP />
        </div>
        <div className={styles.item}>
          <EduIcon />
          <ResEdu />
        </div>
        <div className={styles.item}>
          <UNEP />
          <ResUNEP />
        </div>
      </Slider>
    </Container>
  );
}

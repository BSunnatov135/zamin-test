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
        </div>
        <div className={styles.item}>
          <GasLogo />
        </div>
        <div className={styles.item}>
          <Unicef />
        </div>
        <div className={styles.item}>
          <HydroIcon />
        </div>
        <div className={styles.item}>
          <FAOIcon />
        </div>
        <div className={styles.item}>
          <Tree />
        </div>
        <div className={styles.item}>
          <UNDP />
        </div>
        <div className={styles.item}>
          <EduIcon />
        </div>
        <div className={styles.item}>
          <UNEP />
        </div>
      </Slider>
    </Container>
  );
}

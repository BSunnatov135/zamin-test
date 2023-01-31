import { Container, Tooltip } from "@mui/material";
import styles from "./style.module.scss";
import HydroIcon from "/public/logos/HydroIcon.svg";
import FAOIcon from "/public/logos/FAOIcon.svg";
import MedIcon from "/public/logos/MedIcon.svg";
import GasLogo from "/public/logos/GasLogo.svg";
import Unicef from "/public/logos/Unicef.svg";
import UNDP from "/public/logos/UNDP.svg";
import UNEP from "/public/logos/UNEP.svg";
import Slider from "react-slick";
import ResMedLogo from "/public/logos/ResMedLogo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "/src/assests/icons/slickLeft.svg";
import ResGasLogo from "/public/logos/ResGasLogo.svg";
import ResTree from "/public/logos/ResTree.svg";
import ResUNDP from "/public/logos/ResUNDP.svg";
import ResUNEP from "/public/logos/ResUNEP.svg";
import ResUnicef from "/public/logos/ResUnicef.svg";
import ResFAO from "/public/logos/ResFao.svg";
import ResHydro from "/public/logos/ResHydro.svg";
import useTranslation from "next-translate/useTranslation";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={styles.next} onClick={onClick}>
      <PrevArrow />
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
  const { t } = useTranslation("common");
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
          <MedIcon className={styles.desktopIcon} />
          <ResMedLogo className={styles.mobileIcon} />

          <span>
            {t("med")}
            <i></i>
          </span>
        </div>
        <div className={styles.item}>
          <GasLogo className={styles.desktopIcon} />
          <ResGasLogo className={styles.mobileIcon} />
          <span>
            {t("water")}
            <i></i>
          </span>
        </div>
        <div className={styles.item}>
          <Unicef className={styles.desktopIcon} />
          <ResUnicef className={styles.mobileIcon} />
          <span>
            {t("unicef")}
            <i></i>
          </span>
        </div>
        <div className={styles.item}>
          <HydroIcon className={styles.desktopIcon} />
          <ResHydro className={styles.mobileIcon} />
          <span>
            {t("hydro")}
            <i></i>
          </span>
        </div>
        <div className={styles.item}>
          <FAOIcon className={styles.desktopIcon} />
          <ResFAO className={styles.mobileIcon} />
          <span>
            {t("FAO")}
            <i></i>
          </span>
        </div>
        <div className={styles.item}>
          <img
            src="/logos/Tree.png"
            height={"72px"}
            className={styles.desktopIcon}
          />
          <img
            src="/logos/Tree.png"
            height={"56px"}
            className={styles.mobileIcon}
          />
          <span>
            {t("tree")}
            <i></i>
          </span>
          {/* <ResTree className={styles.mobileIcon} /> */}
        </div>
        <div className={styles.item}>
          <UNDP className={styles.desktopIcon} />
          <ResUNDP className={styles.mobileIcon} />
          <span>
            {t("UNDP")}
            <i></i>
          </span>
        </div>
        <div className={styles.item}>
          <img
            src="/logos/EcoSchool.png"
            height={"72px"}
            className={styles.desktopIcon}
          />
          <img
            src="/logos/EcoSchool.png"
            height={"56px"}
            className={styles.mobileIcon}
          />
          <span>
            {t("EcoSchool")}
            <i></i>
          </span>
        </div>
        <div className={styles.item}>
          <img
            src="/logos/GreenKey.png"
            height={"72px"}
            className={styles.desktopIcon}
          />
          <img
            src="/logos/GreenKey.png"
            height={"56px"}
            className={styles.mobileIcon}
          />
          <span>
            {t("greenkey")}
            <i></i>
          </span>
        </div>
        <div className={styles.item}>
          <img
            src="/logos/EduIcon.png"
            height={"72px"}
            className={styles.desktopIcon}
          />
          <img
            src="/logos/EduIcon.png"
            height={"56px"}
            className={styles.mobileIcon}
          />
          <span>
            {t("edu")}
            <i></i>
          </span>
        </div>
        <div className={styles.item}>
          <img
            src="/logos/UNEP.png"
            height={"72px"}
            className={styles.desktopIcon}
          />
          <img
            src="/logos/UNEP.png"
            height={"56px"}
            className={styles.mobileIcon}
          />
          <span>
            {t("UNEP")}
            <i></i>
          </span>
        </div>
      </Slider>
    </Container>
  );
}

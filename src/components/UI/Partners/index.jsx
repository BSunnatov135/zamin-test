import { Container } from "@mui/material";
import styles from "./style.module.scss";
import HydroIcon from "/public/logos/HydroIcon.svg";
import FAOIcon from "/public/logos/FAOIcon.svg";
import MedIcon from "/public/logos/MedIcon.svg";
import GasLogo from "/public/logos/GasLogo.svg";
import UNDP from "/public/logos/UNDP.svg";
import Slider from "react-slick";
import ResMedLogo from "/public/logos/ResMedLogo.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "/src/assests/icons/slickLeft.svg";
import ResGasLogo from "/public/logos/ResGasLogo.svg";
import ResUNDP from "/public/logos/ResUNDP.svg";
import ResFAO from "/public/logos/ResFao.svg";
import ResHydro from "/public/logos/ResHydro.svg";
import useTranslation from "next-translate/useTranslation";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import React from "react";

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
  const { lang } = useTranslation();
  const { t } = useTranslation("common");
  let settings = {
    infinite: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
          <div id="med">
            <MedIcon className={styles.desktopIcon} />
            <ResMedLogo className={styles.mobileIcon} />
          </div>
          <ReactTooltip
            anchorId="med"
            place="bottom"
            content={t("med")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="water">
            <GasLogo className={styles.desktopIcon} />
            <ResGasLogo className={styles.mobileIcon} />
          </div>
          <ReactTooltip
            anchorId="water"
            place="bottom"
            content={t("water")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="unicef">
            <img
              src="/logos/Unicef.png"
              height={"72px"}
              className={styles.desktopIcon}
            />
            <img
              src="/logos/Unicef.png"
              height={"56px"}
              className={styles.mobileIcon}
            />
          </div>
          <ReactTooltip
            anchorId="unicef"
            place="bottom"
            content={t("unicef")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="hydro">
            <HydroIcon className={styles.desktopIcon} />
            <ResHydro className={styles.mobileIcon} />
          </div>
          <ReactTooltip
            anchorId="hydro"
            place="bottom"
            content={t("hydro")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="fao">
            <FAOIcon className={styles.desktopIcon} />
            <ResFAO className={styles.mobileIcon} />
          </div>
          <ReactTooltip
            anchorId="fao"
            place="bottom"
            content={t("FAO")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="tree">
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
          </div>
          <ReactTooltip
            anchorId="tree"
            place="bottom"
            content={t("tree")}
            className={styles.popover}
          />
          {/* <ResTree className={styles.mobileIcon} /> */}
        </div>
        <div className={styles.item}>
          <div id="undp">
            <UNDP className={styles.desktopIcon} />
            <ResUNDP className={styles.mobileIcon} />
          </div>
          <ReactTooltip
            anchorId="undp"
            place="bottom"
            content={t("UNDP")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="fee">
            <img
              src="/logos/FEE.jpeg"
              height={"72px"}
              className={styles.desktopIcon}
            />
            <img
              src="/logos/Tree.png"
              height={"56px"}
              className={styles.mobileIcon}
            />
          </div>
          <ReactTooltip
            anchorId="fee"
            place="bottom"
            content={t("fee")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="ecoschool">
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
          </div>
          <ReactTooltip
            anchorId="ecoschool"
            place="bottom"
            content={t("EcoSchool")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="greenkey">
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
          </div>
          <ReactTooltip
            anchorId="greenkey"
            place="bottom"
            content={t("greenkey")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="health">
            <img
              src="/logos/Health.png"
              height={"72px"}
              className={styles.desktopIcon}
            />
            <img
              src="/logos/Health.png"
              height={"56px"}
              className={styles.mobileIcon}
            />
          </div>
          <ReactTooltip
            anchorId="health"
            place="bottom"
            content={t("health")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="yia">
            <img
              src={`/logos/Yia${lang}.png`}
              width={"100%"}
              flex={"1"}
              className={styles.desktopIcon}
            />
            <img
              src={`/logos/Yia${lang}.png`}
              height={"56px"}
              className={styles.mobileIcon}
            />
          </div>
          <ReactTooltip
            anchorId="yia"
            place="bottom"
            content={t("yia")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="school">
            <img
              src={`/logos/school${lang}.png`}
              height={"60px"}
              flex={"1"}
              className={styles.desktopIcon}
            />
            <img
              src={`/logos/resschool${lang}.png`}
              height={"56px"}
              className={styles.mobileIcon}
            />
          </div>
          <ReactTooltip
            anchorId="school"
            place="bottom"
            content={t("school")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="unece">
            <img
              src="/logos/unece.png"
              height={"60px"}
              className={styles.desktopIcon}
            />
            <img
              src="/logos/unece.png"
              height={"56px"}
              className={styles.mobileIcon}
            />
          </div>
          <ReactTooltip
            anchorId="unece"
            place="bottom"
            content={t("unece")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="edu">
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
          </div>
          <ReactTooltip
            anchorId="edu"
            place="bottom"
            content={t("edu")}
            className={styles.popover}
          />
        </div>
        <div className={styles.item}>
          <div id="unep">
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
          </div>
          <ReactTooltip
            anchorId="unep"
            place="bottom"
            content={t("UNEP")}
            className={styles.popover}
          />
        </div>
      </Slider>
    </Container>
  );
}

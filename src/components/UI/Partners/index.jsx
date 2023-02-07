import { Container } from "@mui/material";
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
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import React from "react";
import Health from "/public/logos/Health.svg";

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
            <Unicef className={styles.desktopIcon} />
            <ResUnicef className={styles.mobileIcon} />
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
            content={t("tree")}
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
            content={t("tree")}
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

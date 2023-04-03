import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import HosildorMap from "assests/icons/HosildorIcons/hosildorres.svg";
import TopTrees from "assests/icons/HosildorIcons/trees1res.svg";
import GreenHouse from "assests/icons/HosildorIcons/greenHouseres.svg";
import BottomTreess from "assests/icons/HosildorIcons/trees2res.svg";
import TopBuilding from "assests/icons/HosildorIcons/topBuildingres.svg";
import IndoorPool from "assests/icons/HosildorIcons/indoorPoolres.svg";
import OutdoorPool from "assests/icons/HosildorIcons/outdoorPoolres.svg";
import ResourceTech from "assests/icons/HosildorIcons/resourceTechres.svg";
import ResourceTechLeft from "assests/icons/HosildorIcons/resourceTech1res.svg";
import Plants from "assests/icons/HosildorIcons/plantsres.svg";
import styles from "./style.module.scss";
import Arrow from "assests/icons/HosildorIcons/arrowres.svg";

export default function HosildorZaminMobile() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const [active, setActive] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("pilotProject")} 2023-2024</h2>
      </div>
      <div className={styles.region}>
        <img src="/images/location.png" alt="" />
        <p>{t("kashkadarya")}</p>
      </div>
      <div className={styles.svgWrapper}>
        <HosildorMap />
        <Arrow className={styles.topArrow} />
        <Arrow className={styles.bottomArrow} />
        <TopTrees className={styles.topTrees} />
        <BottomTreess className={styles.bottomTrees} />
        <GreenHouse
          className={classNames(styles.greenHouse, {
            [styles.itemActive]: active === "greenhouse",
          })}
        />
        <TopBuilding
          className={classNames(styles.topBuilding, {
            [styles.itemActive]: active === "eduresource",
          })}
        />
        <IndoorPool
          className={classNames(styles.indoorPool, {
            [styles.itemActive]: active === "indoor",
          })}
        />
        <OutdoorPool
          className={classNames(styles.outdoorPool, {
            [styles.itemActive]: active === "outdoor",
          })}
        />
        <ResourceTech
          className={classNames(styles.resourceTech, {
            [styles.itemActive]: active === "resource",
          })}
        />
        <ResourceTechLeft
          className={classNames(styles.resourceTechLeft, {
            [styles.itemActive]: active === "resource",
          })}
        />
        <Plants
          className={classNames(styles.plants, {
            [styles.itemActive]: active === "plants",
          })}
        />
      </div>
      <div className={styles.statsWrapper}>
        <div className={styles.yearsWrapper}>
          <div className={styles.year}>
            <div
              className={classNames(styles.item, {
                [styles.itemActive]: active === "greenhouse",
              })}
              onClick={(e) => {
                setActive("greenhouse");
                // e.preventDefault();
              }}
            >
              <p>{t("greenHouse")}</p>
            </div>
            <div
              className={classNames(styles.item, {
                [styles.itemActive]: active === "eduresource",
              })}
              onClick={(e) => {
                setActive("eduresource");
                // e.preventDefault();
              }}
            >
              <p>{t("eduResourceCenter")}</p>
            </div>
            <div
              className={classNames(styles.item, {
                [styles.itemActive]: active === "indoor",
              })}
              onClick={(e) => {
                setActive("indoor");
                // e.preventDefault();
              }}
            >
              <p>{t("swimmingPool")}</p>
            </div>
            <div
              className={classNames(styles.item, {
                [styles.itemActive]: active === "outdoor",
              })}
              onClick={(e) => {
                setActive("outdoor");
                // e.preventDefault();
              }}
            >
              <p>{t("outdoorPool")}</p>
            </div>
            <div
              className={classNames(styles.item, {
                [styles.itemActive]: active === "resource",
              })}
              onClick={(e) => {
                setActive("resource");
                // e.preventDefault();
              }}
            >
              <p>{t("resourceSavingTech")}</p>
            </div>
            <div
              className={classNames(styles.item, {
                [styles.itemActive]: active === "plants",
              })}
              onClick={(e) => {
                setActive("plants");
                // e.preventDefault();
              }}
            >
              <p>{t("cultivation")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

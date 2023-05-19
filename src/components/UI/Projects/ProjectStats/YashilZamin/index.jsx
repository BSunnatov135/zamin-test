import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import styles from "./style.module.scss";
import MapRu from "assests/icons/yazru.svg";
import MapUz from "assests/icons/yazuz.svg";
import MapEn from "assests/icons/yazen.svg";
import Bektemir from "assests/icons/bek.svg";
import Chilanzar from "assests/icons/chil.svg";
import Mirzo from "assests/icons/mir.svg";
import Yunusabad from "assests/icons/topdark.svg";
import Yangihayat from "assests/icons/y.svg";
import SingleDark from "assests/icons/singledark.svg";
import Yashnabad from "assests/icons/yash.svg";

export default function YashilZamin() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const [active, setActive] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t("realisation")} 2022-2023</h2>
      </div>
      <div className={styles.region}>
        <img src="/images/location.png" alt="" />
        <p>{t("tashkentcity")}</p>
      </div>

      <div className={styles.svgWrapper}>
        <div>
          {lang === "ru" ? (
            <MapRu />
          ) : lang === "en" ? (
            <MapEn />
          ) : lang === "oz" ? (
            <MapUz />
          ) : (
            ""
          )}
          <Bektemir
            className={classNames(styles.bektemir, {
              [styles.active]: active,
            })}
          />
          <Chilanzar
            className={classNames(styles.chilanzar, {
              [styles.active]: active === "2023",
            })}
          />
          <Mirzo
            className={classNames(styles.mirzo, {
              [styles.active]: active,
            })}
          />
          <Yunusabad
            className={classNames(styles.yunusabad, {
              [styles.active]: active,
            })}
          />
          <Yangihayat
            className={classNames(styles.yangihayat, {
              [styles.active]: active === "2023",
            })}
          />
          <Yashnabad
            className={classNames(styles.yashnabad, {
              [styles.active]: active,
            })}
          />
          <SingleDark
            className={classNames(styles.single1, {
              [styles.active]: active,
            })}
          />
          <SingleDark
            className={classNames(styles.single2, {
              [styles.active]: active,
            })}
          />
          <SingleDark
            className={classNames(styles.single3, {
              [styles.active]: active,
            })}
          />
          <SingleDark
            className={classNames(styles.single4, {
              [styles.active]: active,
            })}
          />
          <SingleDark
            className={classNames(styles.single5, {
              [styles.active]: active,
            })}
          />
        </div>
      </div>
      <div className={styles.statsWrapper}>
        <h2>{t("plantingArea")}</h2>
        <div className={styles.yearsWrapper}>
          <div className={styles.year}>
            {/* <div
              className={classNames(styles.item, {
                [styles.itemActive]: active === "2021",
              })}
              onClick={(e) => {
                setActive("2021");
                // e.preventDefault();
              }}
            >
              <p>2021</p>
              <span className={`${styles.badge} ${styles.blue}`}>22</span>
            </div> */}
            <div
              className={classNames(styles.item, {
                [styles.itemActive]: active === "2022",
              })}
              onClick={(e) => {
                setActive("2022");
                // e.preventDefault();
              }}
            >
              <p>2022</p>
              <span className={`${styles.badge} ${styles.darkBlue}`}>14.5</span>
              <img src="/images/statsicons/singledark.png"></img>
              <div className={styles.treeCount}>
                <span className={styles.darkCount}>6800</span>
                <span className={styles.darkTree}>{t("trees")}</span>
              </div>
            </div>
            <div
              className={classNames(styles.item, {
                [styles.itemActive]: active === "2023",
              })}
              onClick={(e) => {
                setActive("2023");
                // e.preventDefault();
              }}
            >
              <p>2023</p>
              <span
                className={`${styles.badge} ${styles.starBadge} ${styles.green}`}
              >
                19
              </span>
              <img src="/images/statsicons/singlelight.png"></img>
              <div className={styles.treeCount}>
                <span className={styles.lightCount}>11500</span>
                <span className={styles.lightTree}>{t("trees")}</span>
              </div>
            </div>
            {/* <p className={styles.plan}>*{t("plan")}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

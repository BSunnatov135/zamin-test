import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";

const Board = dynamic(() => import("./Board"));

export default function About() {
  const { t } = useTranslation("about");
  return (
    <>
      <h2 className={styles.title}>{t("about")}</h2>
      <div className={styles.banner}>
        <img src="/images/aboutBanner.jpeg"></img>
      </div>
      <Container>
        <div className={styles.context}>
          <p>{t("aim")}</p>
          <p>{t("focus")}</p>
          <p>{t("monitor")}</p>
          <p>{t("development")}</p>
          <p>{t("condition")}</p>
          <p>{t("name")}</p>
        </div>
        <div id="sphere">
          <h2 className={styles.sphereTitle}>{t("spheres")}</h2>
          <div className={styles.spheresWrapper}>
            <div className={styles.sphereItem}>
              <img src="/images/sphere1.jpeg"></img>
              <p>{t("environment")}</p>
            </div>
            <div className={styles.sphereItem}>
              <img src="/images/sphere2.jpeg"></img>
              <p>{t("innovation")} </p>
            </div>
            <div className={styles.sphereItem}>
              <img src="/images/sphere3.jpeg"></img>
              <p>{t("program")} </p>
            </div>
          </div>
        </div>
        <Board id="board" />
      </Container>
    </>
  );
}

import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";

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
          <p>{t("protection")}</p>
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
        <div id="board">
          <h2 className={styles.boardTitle}>{t("board")} </h2>
          <div className={styles.boardWrapper}>
            <div className={styles.boardItem}>
              <h6>{t("chairman_name")} </h6>
              <p className={styles.position}>{t("chairman")} </p>
              {/* <p>
              Заместитель директора по лечебной работе, главный врач
              Республиканского специализированного научно-практического
              медицинского центра педиатрии, доктор медицинских наук
            </p> */}
            </div>
            <div className={styles.boardItem}>
              <h6>{t("deputy_name")} </h6>
              <p className={styles.position}>{t("deputy")} </p>
              <p>{t("deputy_job")}</p>
            </div>
            <div className={styles.boardItem}>
              <h6>{t("member_name_1")} </h6>
              <p className={styles.position}>{t("member")} </p>
              <p>{t("member_1_job")}</p>
            </div>
            <div className={styles.boardItem}>
              <h6>{t("member_name_2")} </h6>
              <p className={styles.position}>{t("member")} </p>
              <p>{t("member_2_job")}</p>
            </div>
            <div className={styles.boardItem}>
              <h6>{t("director_name")} </h6>
              <p className={styles.position}>{t("director")}</p>
              {/* <p>
              Заместитель директора по лечебной работе, главный врач
              Республиканского специализированного научно-практического
              медицинского центра педиатрии, доктор медицинских наук
            </p> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

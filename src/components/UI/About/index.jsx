import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useSpheres from "services/spheres";
import Board from "./Board";

export default function About() {
  const { t } = useTranslation("about");
  const { lang } = useTranslation();
  const router = useRouter();
  const scrollRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (router.asPath.includes("#board")) {
        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 500);
  }, []);

  const { spheres } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 3,
    },
  });

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
          <h2 className={styles.sphereTitle}>{t("helppeople_title")}</h2>
          <div className={styles.spheresWrapper}>
            <div className={styles.sphereItem}>
              <img
                src={spheres?.data?.response[0]?.photo}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              ></img>
              <p>{spheres?.data?.response[0]?.[`${lang}_name`]}</p>
            </div>
            <div className={styles.sphereItem}>
              <img
                src={spheres?.data?.response[1]?.photo}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              ></img>
              <p>{spheres?.data?.response[1]?.[`${lang}_name`]} </p>
            </div>
            <div className={styles.sphereItem}>
              <img
                src={spheres?.data?.response[2]?.photo}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              ></img>
              <p>{spheres?.data?.response[2]?.[`${lang}_name`]} </p>
            </div>
          </div>
        </div>
        <div ref={scrollRef} id="board">
          <Board />
        </div>
      </Container>
    </>
  );
}

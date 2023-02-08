import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import Board from "./Board";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useSpheres from "services/spheres";


export default function About() {
  const { t } = useTranslation("about");
  const { lang } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const boardElement =
      typeof window != "undefined" && document.getElementById("board");
    setTimeout(() => {
      if (router.asPath.includes("#board")) {
        boardElement.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }, 100);
  }, []);

  const { spheres } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 3,
    },
  });
  console.log(spheres);
  const item = spheres?.data?.response;
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
              <p>{item?.[0][`${lang}_name`]}</p>
            </div>
            <div className={styles.sphereItem}>
              <img src="/images/sphere2.jpeg"></img>
              <p>{item?.[1][`${lang}_name`]} </p>
            </div>
            <div className={styles.sphereItem}>
              <img src="/images/sphere3.jpeg"></img>
              <p>{item?.[2][`${lang}_name`]} </p>
            </div>
          </div>
        </div>
        <div id="board">
          <Board />
        </div>
      </Container>
    </>
  );
}

import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useSpheres from "services/spheres";

import dynamic from "next/dynamic";

const Board = dynamic(() => import("./Board"), {
  ssr: false,
});

export default function About() {
  const { t } = useTranslation("about");
  const { lang } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    const boardElement =
      typeof window != "undefined" &&
      router.asPath.includes("#board") &&
      document.getElementById("board");
    setTimeout(() => {
      boardElement?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }, 100);
  }, []);

  const { spheres } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 3,
    },
  });
  console.log(spheres);

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
              <p>{spheres?.data?.response[0]?.[`${lang}_name`]}</p>
            </div>
            <div className={styles.sphereItem}>
              <img src="/images/sphere2.jpeg"></img>
              <p>{spheres?.data?.response[1]?.[`${lang}_name`]} </p>
            </div>
            <div className={styles.sphereItem}>
              <img src="/images/sphere3.jpeg"></img>
              <p>{spheres?.data?.response[2]?.[`${lang}_name`]} </p>
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

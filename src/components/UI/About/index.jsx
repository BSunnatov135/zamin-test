import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useSpheres from "services/spheres";
import Board from "./Board";
import Image from "next/image";

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
  const data = spheres?.data?.response;
  return (
    <>
      <h2 className={styles.title}>{t("about")}</h2>
      <div className={styles.banner}>
        <Image layout="fill" fill={true} src="/images/aboutBanner.jpg"></Image>
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
            {data?.map((item) => (
              <div className={styles.sphereItem}>
                <img
                  src={item.photo}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "/images/default.svg";
                  }}
                ></img>
                <p>{item?.[`${lang}_name`]}</p>
              </div>
            ))}
          </div>
        </div>
        <div ref={scrollRef} id="board">
          <Board />
        </div>
      </Container>
    </>
  );
}

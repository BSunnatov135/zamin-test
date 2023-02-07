import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";
import useSpheres from "services/spheres";

const Board = dynamic(() => import("./Board"));

export default function About() {
  const { t } = useTranslation("about");
  const { lang } = useTranslation();
  const { spheres, sphere } = useSpheres({
    sphereParams: {
      offset: 0,
      limit: 3,
    },
  });
  console.log("sphres", spheres);
  return (
    <>
      <h2 className={styles.title}>{t("about")}</h2>
      <div className={styles.banner}>
        <img src="/images/aboutBanner.jpeg"></img>
      </div>
      <Container>
        <div className={styles.context}>
          <p className={styles.aim}>{t("aim")}</p>
          <p className={styles.isAbout}>{t("focus")}</p>
          <p className={styles.items}>{t("monitor")}</p>
          <p className={styles.items}>{t("development")}</p>
          <p className={styles.items}>{t("condition")}</p>
          <p className={styles.naming}>{t("name")}</p>
        </div>
        <div id="sphere">
          <h2 className={styles.sphereTitle}>{t("spheres")}</h2>
          <div className={styles.spheresWrapper}>
            <div className={styles.sphereItem}>
              <img src={spheres?.data?.response?.[0].photo}></img>
              <p
                dangerouslySetInnerHTML={{
                  __html: spheres?.data?.response?.[0][`${lang}_name`],
                }}
              />
            </div>
            <div className={styles.sphereItem}>
              <img src={spheres?.data?.response?.[1].photo}></img>
              <p
                dangerouslySetInnerHTML={{
                  __html: spheres?.data?.response?.[1][`${lang}_name`],
                }}
              />
            </div>
            <div className={styles.sphereItem}>
              <img src={spheres?.data?.response?.[2].photo}></img>
              <p
                dangerouslySetInnerHTML={{
                  __html: spheres?.data?.response?.[2][`${lang}_name`],
                }}
              />
            </div>
          </div>
        </div>
        <Board />
      </Container>
    </>
  );
}

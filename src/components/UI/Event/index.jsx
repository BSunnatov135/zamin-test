import { Container } from "@mui/material";
import { useRouter } from "next/router";
import BlogTitle from "../BlogTitle";
import styles from "./style.module.scss";
import PlayLarge from "/src/assests/icons/playLarge.svg";
import PlaySmall from "/src/assests/icons/playSmall.svg";
import useTranslation from "next-translate/useTranslation";
import useEvents from "services/events";

export default function Event() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { events } = useEvents({
    eventParams: {
      offset: 0,
      limit: 5,
    },
  });
  return (
    <Container>
      <div className={styles.main}>
        <BlogTitle
          title={t("event_title")}
          link={{
            title: t("all"),
            path: "/event",
          }}
        />
        <div className={styles.list}>
          <div className={styles.topElement}>
            <div
              className={styles.item}
              onClick={() =>
                router.push(`/info/${events?.data?.response?.[0].guid}`)
              }
            >
              <img src={events?.data?.response?.[0].poster} />
            </div>
            <div
              className={styles.item}
              onClick={() =>
                router.push(`/info/${events?.data?.response?.[1].guid}`)
              }
            >
              <img src={events?.data?.response?.[1].poster} />
            </div>
            <div
              className={`${styles.item} ${styles.event}`}
              onClick={() =>
                router.push(`/info/${events?.data?.response?.[2].guid}`)
              }
            >
              <img src={events?.data?.response?.[2].poster} />
              {/* <PlaySmall /> */}
            </div>
          </div>
          <div className={styles.bottomElement}>
            <div
              className={`${styles.item} ${styles.event}`}
              onClick={() =>
                router.push(`/info/${events?.data?.response?.[3].guid}`)
              }
            >
              <img src={events?.data?.response?.[3].poster} />
              {/* <PlayLarge className={styles.playLarge} />
              <PlaySmall className={styles.playSmall} /> */}
            </div>
            <div
              className={styles.item}
              onClick={() =>
                router.push(`/info/${events?.data?.response?.[4].guid}`)
              }
            >
              <img src={events?.data?.response?.[4].poster} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

import { Container } from "@mui/material";
import { useRouter } from "next/router";
import BlogTitle from "../BlogTitle";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import useEvents from "services/events";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setScrollRefEvents } from "store/scrollFunctionSlice/scrollFunctionSlice";

export default function Event() {
  const { lang } = useTranslation();
  const { t } = useTranslation("common");
  const router = useRouter();
  const { events } = useEvents({
    eventParams: {
      offset: 0,
      limit: 5,
    },
  });
  const eventsContainerRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (eventsContainerRef?.current?.offsetTop) {
      setTimeout(() => {
        dispatch(setScrollRefEvents(eventsContainerRef.current.offsetTop));
      }, 0);
    }
  }, [eventsContainerRef?.current?.offsetTop]);
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
        <div className={styles.list} ref={eventsContainerRef}>
          <div className={styles.topElement}>
            <div
              className={styles.item}
              onClick={() =>
                router.push(
                  `/events-info/${events?.data?.response?.[0].guid}?from=events`
                )
              }
            >
              <img src={events?.data?.response?.[0][`${lang}_poster`]} />
            </div>
            <div
              className={styles.item}
              onClick={() =>
                router.push(
                  `/events-info/${events?.data?.response?.[1].guid}?from=events`
                )
              }
            >
              <img src={events?.data?.response?.[1][`${lang}_poster`]} />
            </div>
            <div
              className={`${styles.item} ${styles.event}`}
              onClick={() =>
                router.push(
                  `/events-info/${events?.data?.response?.[2].guid}?from=events`
                )
              }
            >
              <img src={events?.data?.response?.[2][`${lang}_poster`]} />
            </div>
          </div>
          <div className={styles.bottomElement}>
            <div
              className={`${styles.item} ${styles.event}`}
              onClick={() =>
                router.push(
                  `/events-info/${events?.data?.response?.[3].guid}?from=events`
                )
              }
            >
              <img src={events?.data?.response?.[3][`${lang}_poster`]} />
            </div>
            <div
              className={styles.item}
              onClick={() =>
                router.push(
                  `/events-info/${events?.data?.response?.[4].guid}?from=events`
                )
              }
            >
              <img src={events?.data?.response?.[4][`${lang}_poster`]} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

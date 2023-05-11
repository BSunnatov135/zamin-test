import { Container } from "@mui/material";
import { useRouter } from "next/router";
import BlogTitle from "../BlogTitle";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import useEvents from "services/events";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setScrollRefEvents } from "store/scrollFunctionSlice/scrollFunctionSlice";
import { format } from "date-fns";

export default function Event() {
  const { lang } = useTranslation();
  const { t } = useTranslation("common");
  const router = useRouter();
  const { events } = useEvents({
    eventParams: {
      offset: 0,
      limit: 99,
    },
  });
  const currentDate = new Date();

  const eventsArray = events?.data?.response.filter(
    (event) => event.date <= currentDate.toISOString()
  );

  console.log("newarr", eventsArray[0]);
  const fullDate = (i) => {
    try {
      const res = format(new Date(eventsArray?.[i].date), "dd.MM.yyyy");
      return res;
    } catch (err) {}
  };
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
                router.push(`/events-info/${eventsArray?.[0].guid}?from=events`)
              }
            >
              <img
                src={eventsArray?.[0][`${lang}_poster`]}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              />
              <div className={styles.itemInfo}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: eventsArray?.[0][`${lang}_header`],
                  }}
                ></p>
                <p>{fullDate(0)}</p>
              </div>
            </div>
            <div
              className={styles.item}
              onClick={() =>
                router.push(`/events-info/${eventsArray?.[1].guid}?from=events`)
              }
            >
              <img
                src={eventsArray?.[1]?.[`${lang}_poster`]}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              />
              <div className={styles.itemInfo}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: eventsArray?.[1][`${lang}_header`],
                  }}
                ></p>
                <p>{fullDate(1)}</p>
              </div>
            </div>
          </div>
          <div className={styles.bottomElement}>
            <div
              className={`${styles.item} ${styles.event}`}
              onClick={() =>
                router.push(`/events-info/${eventsArray?.[2].guid}?from=events`)
              }
            >
              <img
                src={eventsArray?.[2][`${lang}_poster`]}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              />
              <div className={styles.itemInfo}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: eventsArray?.[2][`${lang}_header`],
                  }}
                ></p>
                <p>{fullDate(2)}</p>
              </div>
            </div>
            <div
              className={`${styles.item} ${styles.event}`}
              onClick={() =>
                router.push(`/events-info/${eventsArray?.[3].guid}?from=events`)
              }
            >
              <img
                src={eventsArray?.[3][`${lang}_poster`]}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              />
              <div className={styles.itemInfo}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: eventsArray?.[3][`${lang}_header`],
                  }}
                ></p>
                <p>{fullDate(3)}</p>
              </div>
            </div>
            <div
              className={styles.item}
              onClick={() =>
                router.push(`/events-info/${eventsArray?.[4].guid}?from=events`)
              }
            >
              <img
                src={eventsArray?.[4][`${lang}_poster`]}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              />
              <div className={styles.itemInfo}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: eventsArray?.[4][`${lang}_header`],
                  }}
                ></p>
                <p>{fullDate(4)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

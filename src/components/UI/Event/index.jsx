import { Container } from "@mui/material";
import BlogTitle from "../BlogTitle";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";
import useEvents from "services/events";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { setScrollRefEvents } from "store/scrollFunctionSlice/scrollFunctionSlice";
import EventCard from "./EventCard";

export default function Event() {
  const { t } = useTranslation("common");
  const { events } = useEvents({
    eventParams: {
      offset: 0,
      limit: 9999,
    },
  });
  const currentDate = new Date();

  const eventsArray = events?.data?.response.filter(
    (event) => event.date <= currentDate.toISOString() && event.is_active
  );

  const eventsContainerRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (eventsContainerRef?.current?.offsetTop) {
      setTimeout(() => {
        dispatch(setScrollRefEvents(eventsContainerRef.current.offsetTop));
      }, 0);
    }
  }, [eventsContainerRef?.current?.offsetTop]);

  return eventsArray?.length ? (
    <Container Container>
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
            <EventCard item={eventsArray?.[0]} />
            <EventCard item={eventsArray?.[1]} />
          </div>
          <div className={styles.bottomElement}>
            <EventCard item={eventsArray?.[2]} />
            <EventCard item={eventsArray?.[3]} />
            <EventCard item={eventsArray?.[4]} />
          </div>
        </div>
      </div>
    </Container>
  ) : (
    <></>
  );
}

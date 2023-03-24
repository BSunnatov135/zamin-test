import { Container } from "@mui/material";
import styles from "./style.module.scss";
import useAdverts from "services/advert";
import useTranslation from "next-translate/useTranslation";
import useEvents from "services/events";
import { format } from "date-fns";
import { useRouter } from "next/router";

export default function Advert() {
  const { t } = useTranslation("common");
  const { lang } = useTranslation();
  const router = useRouter();
  const { adverts } = useAdverts({
    advertParams: {
      offset: 0,
      limit: 6,
    },
  });
  const { events } = useEvents({
    eventParams: {
      offset: 0,
      limit: 1,
      is_news: true,
    },
  });

  const fullDate = () => {
    try {
      const res = format(
        new Date(events?.data?.response[0]?.date),
        "dd.MM.yyyy"
      );
      return res;
    } catch (err) {}
  };
  const { isActive } = useAdverts({
    advertIsActive: {},
  });
  return (
    <Container>
      {isActive.data == "true" && (
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.leftElement}>
              <p className={styles.title}>{t("advert_title")}</p>
            </div>
          </div>
          <div className={styles.list}>
            <div
              className={styles.item}
              onClick={() =>
                router.push(
                  `/events-info/${events?.data?.response?.[0].guid}?from=events`
                )
              }
            >
              <img
                src={events?.data?.response[0][`${lang}_poster`]}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/images/default.svg";
                }}
              />
              <div className={styles.itemInfo}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: events?.data?.response?.[0][`${lang}_header`],
                  }}
                ></p>
                <p>{fullDate()}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}

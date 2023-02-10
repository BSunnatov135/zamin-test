import { Container } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.scss";
import ArrowRight from "assests/icons/narrowRight.svg";
import useAdverts from "services/advert";
import useTranslation from "next-translate/useTranslation";
import { useEffect, useRef } from "react";
import ArrowRightIcon from "assests/icons/arrowRight.svg";
import { useDispatch, useSelector } from "react-redux";
import { setScrollRefAdverts } from "store/scrollFunctionSlice/scrollFunctionSlice";
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
        new Date(events?.data?.response?.[0].date),
        "dd.MM.yyyy"
      );
      return res;
    } catch (err) {}
  };
  console.log(events?.data?.response?.[0].date);
  console.log("event", events);
  const { isActive } = useAdverts({
    advertIsActive: {},
  });
  const adversContainerRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (adversContainerRef?.current?.offsetTop) {
      setTimeout(() => {
        dispatch(setScrollRefAdverts(adversContainerRef.current.offsetTop));
      }, 0);
    }
  }, [adversContainerRef?.current?.offsetTop]);

  return (
    <Container>
      {isActive.data == "true" && (
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.leftElement}>
              <p className={styles.title}>{t("advert_title")}</p>
            </div>

            {/* <Link href="/news">
              <a className={styles.link}>
                {t("all")} <ArrowRightIcon />
              </a>
            </Link> */}
          </div>
          <div className={styles.list} ref={adversContainerRef}>
            {/* {adverts?.data?.response?.map((item) => (
              <div key={item.guid} className={styles.item}>
                <div className={styles.header}>
                  <Link href={`/news-info/${item.guid}?from=news`}>
                    <a>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item?.[`${lang}_header`],
                        }}
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.body}>
                  <p
                    className={styles.description}
                    dangerouslySetInnerHTML={{
                      __html: item?.[`${lang}_description`],
                    }}
                  ></p>
                </div>
                <Link href={`/news-info/${item.guid}?from=news`}>
                  <a className={styles.link}>
                    {t("more")}
                    <ArrowRight />
                  </a>
                </Link>
              </div>
            ))} */}
            <div
              className={styles.item}
              onClick={() =>
                router.push(
                  `/events-info/${events?.data?.response?.[0].guid}?from=events`
                )
              }
            >
              <img src={events?.data?.response?.[0][`${lang}_poster`]} />
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

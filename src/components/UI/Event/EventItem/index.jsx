import styles from "./style.module.scss";
import Link from "next/link";
import ArrowRight from "assests/icons/narrowRight.svg";
import useTranslation from "next-translate/useTranslation";
import { format } from "date-fns";

export default function EventItem({ item }) {
  const { lang } = useTranslation();
  const { t } = useTranslation("common");
  const isVisible =
    item[`${lang}_poster`] &&
    item[`${lang}_header`] &&
    item?.[`${lang}_description`];

  const fullDate = (date) => {
    try {
      const res = format(new Date(date), "dd.MM.yyyy");
      return res;
    } catch (err) {}
  };
  return isVisible ? (
    <Link href={`/events-info/${item.guid}?from=events`}>
      <a>
        <div className={styles.item} key={item.img}>
          <div className={styles.img}>
            <img
              src={item[`${lang}_poster`]}
              alt={item[`${lang}_header`]}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = "/images/default.svg";
              }}
            />
          </div>
          <div className={styles.body}>
            <p
              className={styles.body__title}
              dangerouslySetInnerHTML={{
                __html: item?.[`${lang}_header`],
              }}
            />
            <p
              className={styles.body__text}
              dangerouslySetInnerHTML={{
                __html: item?.[`${lang}_description`],
              }}
            />
          </div>
          {item.date && <p className={styles.date}>{fullDate(item.date)}</p>}
          <span
            className={`${styles.more} ${!item.date && styles.moreNoDate} `}
          >
            <Link
              href={`/events-info/${item.guid}?from=events`}
              styles={styles.body__link}
            >
              <a>
                {t("more")} <ArrowRight />
              </a>
            </Link>
          </span>
        </div>
      </a>
    </Link>
  ) : (
    <></>
  );
}

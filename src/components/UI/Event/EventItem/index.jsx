import styles from "./style.module.scss";
import Link from "next/link";
import ArrowRight from "assests/icons/narrowRight.svg";
import useTranslation from "next-translate/useTranslation";

export default function EventItem({ item }) {
  const { lang } = useTranslation();

  const { t } = useTranslation("common");
  return (
    <Link href={`/events-info/${item.guid}?from=events`}>
      <a>
        <div className={styles.item} key={item.img}>
          <div className={styles.img}>
            <img src={item[`${lang}_poster`]} alt={item[`${lang}_header`]} />
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
            <Link
              href={`/events-info/${item.guid}?from=events`}
              styles={styles.body__link}
            >
              <a>
                {t("more")} <ArrowRight />
              </a>
            </Link>
          </div>
        </div>
      </a>
    </Link>
  );
}

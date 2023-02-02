import styles from "./style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function AdvertItem({ item }) {
  const { lang } = useTranslation();
  return (
    <div className={styles.item} key={item.id}>
      <Link href={`/news-info/${item?.guid}?from=news`}>
        <a className={styles.item__content}>
          <div className={styles.img}>
            <img src={item[`${lang}_photo`]} alt={item[`${lang}_name`]} />
          </div>
          <div className={styles.body}>
            <p
              className={styles.name}
              dangerouslySetInnerHTML={{
                __html: item?.[`${lang}_name`],
              }}
            />
            <p
              className={styles.name}
              dangerouslySetInnerHTML={{
                __html: item?.[`${lang}_header`],
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: item[`${lang}_description`],
              }}
              className={styles.description}
            ></p>
          </div>
        </a>
      </Link>
    </div>
  );
}

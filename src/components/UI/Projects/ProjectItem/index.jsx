import styles from "./style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function ProjectItem({ item }) {
  const { lang } = useTranslation();
  return (
    <div className={styles.item} key={item.id}>
      <Link href={`/project-info/${item.guid}`}>
        <a className={styles.item__content}>
          <div className={styles.img}>
            <img src={item[`${lang}_photo`]} alt={item[`${lang}_header`]} />
          </div>
          <div className={styles.body}>
            <p
              dangerouslySetInnerHTML={{
                __html: item[`${lang}_name`],
              }}
              className={styles.name}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: item[`${lang}_header`],
              }}
              className={styles.name}
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

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
            <p className={styles.name}>{item[`${lang}_name`]}</p>
            <p className={styles.name}>{item[`${lang}_header`]}</p>
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

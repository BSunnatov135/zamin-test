import styles from "./style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Projects({ item }) {
  const { lang } = useTranslation();
  return (
    <div key={item.guid}>
      <Link href={`/info/${item.guid}`}>
        <a className={styles.projectItem}>{item[`${lang}_name`]}</a>
      </Link>
    </div>
  );
}

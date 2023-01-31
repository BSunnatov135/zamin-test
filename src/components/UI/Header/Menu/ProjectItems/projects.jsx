import styles from "./style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Projects({ item, handleClose }) {
  const { lang } = useTranslation();
  return (
    <div key={item.guid}>
      <Link href={"/"}>
        <a
          className={styles.projectItem}
          onClick={(e) => {
            handleClose(e);
          }}
        >
          {item[`${lang}_name`]}
        </a>
      </Link>
    </div>
  );
}

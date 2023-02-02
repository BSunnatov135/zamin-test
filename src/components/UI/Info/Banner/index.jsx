import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function Banner({ item }) {
  const { lang } = useTranslation();
  return (
    <>
      <h2
        className={styles.sectionTitle}
        dangerouslySetInnerHTML={{
          __html: item?.[`${lang}_name`],
        }}
      />
      <h2
        className={styles.sectionTitle}
        dangerouslySetInnerHTML={{
          __html: item?.[`${lang}_header`],
        }}
      />
      <div className={styles.banner}>
        <img
          className={styles.banner__main_img}
          src={item[`${lang}_photo`] || item[`${lang}_poster`]}
          alt={item?.[`${lang}_name`]}
        />
      </div>
    </>
  );
}
